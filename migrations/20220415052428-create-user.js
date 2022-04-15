'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },  
      name: {
        type:  Sequelize.STRING,
        allowNull: false,
      
      },
      username: {
        type:  Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type:  Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type:  Sequelize.STRING,
        allowNull: false,
      },
      profilePhotoUrl: {
        type:  Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://res.cloudinary.com/dujvrvsiw/image/upload/v1623223144/avatar/download_ubedi0.png'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};