require('dotenv').config();

const sequelizeConfig = {
  username: process.env.DB_USER || 'your-username',
  password: process.env.DB_PASS || 'your-password',
  database: process.env.DB_NAME || 'your-database',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'postgres',
};

module.exports = sequelizeConfig;
