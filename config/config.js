var config = {
  development: {
    server: {
      host: "localhost",
      port: "6001",
    },
    database: {
      host: "localhost",
      user: "root",
      password: "",
      port: "3306",
    },
  },
  production: {
    server: {
      host: "",
      port: "",
    },
    database: {
      host: "",
      user: "",
      password: "",
      port: "",
    },
  },
};

module.exports = config;
