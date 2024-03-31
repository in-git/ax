import { Sequelize } from 'sequelize';
import { development } from "./config";



export const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000,
    },
  });
export const connect = async () => {
  await sequelize.authenticate();
}
