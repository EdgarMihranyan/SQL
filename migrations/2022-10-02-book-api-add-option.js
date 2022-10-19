export async function up(queryInterface, { DataTypes }) {
     await queryInterface.createTable('books', {
          id: {
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true,
          },
          author_id: {
               type: DataTypes.BIGINT(20).UNSIGNED,
               allowNull: false,
          },
          bookName: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          releaseDate: {
               type: DataTypes.INTEGER,
               allowNull: false,
          },
          language: {
               type: DataTypes.STRING,
               defaultValue: 'ENG',
          },
     });
     await queryInterface.createTable('genres', {
          id: {
               type: DataTypes.INTEGER,
               primaryKey: true,
               autoIncrement: true,
          },
          genre: {
               type: DataTypes.STRING,
               allowNull: false,
          },
     });
     await queryInterface.createTable('authors_details', {
          author_id: {
               type: DataTypes.BIGINT(20).UNSIGNED,
               primaryKey: true,
               unique: true,
          },
          born: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          education: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          salary: {
               type: DataTypes.INTEGER,
               allowNull: false,
          },
     });
     await queryInterface.createTable('authors_ref_genres', {
          author_id: {
               type: DataTypes.BIGINT(20).UNSIGNED,
               primaryKey: true,
          },
          genre_id: {
               type: DataTypes.BIGINT(20).UNSIGNED,
               primaryKey: true,
          },
     });

     await queryInterface.addConstraint('authors_ref_genres', {
          fields: ['genre_id'],
          type: 'foreign key',
          name: 'authors_ref_genres_genres',
          references: { table: 'genres', field: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade',
     });
     await queryInterface.addConstraint('authors_details', {
          fields: ['author_id'],
          type: 'foreign key',
          name: 'author_details_ref_authors',
          references: { table: 'authors', field: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade',
     });
     await queryInterface.addConstraint('books', {
          fields: ['author_id'],
          type: 'foreign key',
          name: 'books_ref_authors',
          references: { table: 'authors', field: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade',
     });
     await queryInterface.addConstraint('authors_ref_genres', {
          fields: ['author_id'],
          type: 'foreign key',
          name: 'users_ref_genres_authors',
          references: { table: 'authors', field: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade',
     });
}

export async function down(queryInterface) {
     await queryInterface.dropTable('books');
     await queryInterface.dropTable('genres');
     await queryInterface.dropTable('authors_details');
     await queryInterface.dropTable('authors_ref_genre');
}
