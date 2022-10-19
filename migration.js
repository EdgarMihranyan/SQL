/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { join, dirname } from 'path';
import sequelize, { DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';

import Migration from './models/_Migration.js';
import db from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logger = console;
const migrationsPath = join(__dirname, 'migrations');

export const runMigrations = async () => {
     const queryInterface = db.getQueryInterface();
     queryInterface.createTable('_migrations', {
          filename: DataTypes.STRING,
          appliedAt: {
               type: DataTypes.DATE,
               defaultValue: sequelize.fn('current_timestamp'),
               allowNull: false,
          },
     });

     logger.debug(`Scan folder "${migrationsPath}" for migrations`, { scope: 'migrations' });

     const readDir = (dir) => new Promise((resolve, reject) => {
          fs.readdir(dir, (errDir, files) => {
               if (errDir) {
                    return reject(errDir);
               }
               return resolve(files);
          });
     });

     const [list, migrations] = await Promise.all([
          readDir(migrationsPath),
          Migration.findAll(),
     ]);

     for (const file of list) {
          if (!file.match(/\.js$/)) {
               continue;
          }
          const appliedMigration = migrations.find((migration) => migration.filename === file);
          if (appliedMigration) {
               logger.debug(`Migration "${file}" was applied at ${appliedMigration.appliedAt}`, { scope: 'migrations' });
               continue;
          }
          logger.debug(`Migration "${file}" applying...`, { scope: 'migrations' });
          const { up, down } = await import(join('file://', migrationsPath, file));

          if (!up || !down) {
               throw new Error(`Invalid migration functions in file ${file}`);
          }

          await up(queryInterface, sequelize);

          const item = new Migration({
               filename: file,
               appliedAt: Date.now(),
          });
          await item.save();
     }
};

export async function revertMigration(name) {
     const migrationFile = join(migrationsPath, name);

     logger.debug(`Reverting "${migrationFile}"...`, { scope: 'migrations' });

     const migration = await Migration.findOne({
          where: { filename: name },
     });
     if (!migration) {
          throw new Error(`Migration "${name}" not applied`);
     }

     const { up, down } = await import(join('file://', migrationFile));

     if (!up || !down) {
          throw new Error(`Invalid migration functions in file ${migrationFile}`);
     }
     await down(db.getQueryInterface(), sequelize);
     await migration.destroy();
}
