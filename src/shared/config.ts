require('dotenv').config();

export default () => ({
  isDev: process.env.MODE === 'DEV',
  database: {
    habiDataBase: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    }
  },
});