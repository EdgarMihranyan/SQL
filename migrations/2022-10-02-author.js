export async function up(queryInterface, { DataTypes }) {
     await queryInterface.createTable('authors', {
          id: {
               type: DataTypes.BIGINT(20).UNSIGNED,
               primaryKey: true,
               autoIncrement: true,
          },
          username: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          lastname: {
               type: DataTypes.STRING,
               allowNull: false,
          },
     });
}

export async function down(queryInterface) {
     await queryInterface.dropTable('authors');
}
