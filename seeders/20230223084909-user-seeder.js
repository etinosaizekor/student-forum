
  /** @type {import('sequelize-cli').Migration} */

  const userData = require('../data/user.data')
  const db = require('../models')

  // const Users = db.user;
  module.exports = {


    async up (queryInterface, Sequelize) {
      
      await queryInterface.bulkInsert('users', userData, {});
    },    

    async down (queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
    }
  };
