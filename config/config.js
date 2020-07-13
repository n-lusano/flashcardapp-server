require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "secret",
    database: "FLASHCARDAPP_development",
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
