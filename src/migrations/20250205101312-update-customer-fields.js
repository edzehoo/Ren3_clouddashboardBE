const { DataTypes } = require('sequelize');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add new columns to existing table
    await queryInterface.addColumn('customers', 'contactPerson1', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('customers', 'contactPerson2', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('customers', 'createdBy', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('customers', 'updatedBy', {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the new columns
    await queryInterface.removeColumn('customers', 'contactPerson1');
    await queryInterface.removeColumn('customers', 'contactPerson2');
    await queryInterface.removeColumn('customers', 'createdBy');
    await queryInterface.removeColumn('customers', 'updatedBy');
  }
};
