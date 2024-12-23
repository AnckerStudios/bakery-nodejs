module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    PORT: process.env.DB_PORT || 5454,
    USER: process.env.DB_USER || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "111",
    DB: "donuts",
    dialect: "postgres",
  };