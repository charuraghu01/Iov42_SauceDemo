require("dotenv").config();
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,    // Retries when running tests in `npx cypress run`
      openMode: 1,   // Retries when running tests in `npx cypress open`
    },

    setupNodeEvents(on, config) {
      config.env.USERNAME = process.env.CYPRESS_USERNAME;
      config.env.PASSWORD = process.env.CYPRESS_PASSWORD;
      return config;
    },

    experimentalStudio: true,

  },
});
