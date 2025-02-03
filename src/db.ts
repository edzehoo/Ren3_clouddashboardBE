// src/db.ts
import { Sequelize } from 'sequelize-typescript';
import { Customer } from './models/Customer';
const dbConfig = require('./config/config');

// Initialize Sequelize with the config and models
const sequelize = new Sequelize({
  ...dbConfig,
  dialect: dbConfig.dialect,
  models: [Customer],
});

// Authenticate the connection
const setupDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
};

// Export sequelize and DB connection methods
export { sequelize, setupDatabase };
