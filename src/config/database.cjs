const config = {
  "development": {
    "dialect": "sqlite",
    "storage": "./src/database/database.sqlite",
    "define": {
      "timestamps": true,
      "underscored": true,
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = config;