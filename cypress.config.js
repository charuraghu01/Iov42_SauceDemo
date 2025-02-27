require("dotenv").config();
const { defineConfig } = require("cypress");
const today = new Date();
const date = today.toISOString().slice(0, 10);
const time = today.toTimeString().split(" ")[0].replace(/:/g, "");
const dateTime = `${date}-${time}`;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    supportFile: "cypress/support/e2e.js",
    retries: {
      runMode: 2,    // Retries when running tests in `npx cypress run`
      openMode: 1,   // Retries when running tests in `npx cypress open`
    },

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      config.env.USERNAME = process.env.CYPRESS_USERNAME;
      config.env.PASSWORD = process.env.CYPRESS_PASSWORD;
      return config;
    },

    experimentalStudio: true,
    reporter: "cypress-mochawesome-reporter",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      reportFilename: `consolidated-report-${dateTime}`,
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true
    }



  },
});
