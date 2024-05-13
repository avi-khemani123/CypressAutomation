const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  // baseurl: "https://member.daraz.com.np/user/register?spm=a2a0e.11779170.header.d6.287d2d2bi2Baug",
});
