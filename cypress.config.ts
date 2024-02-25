import { defineConfig } from "cypress";
import mochawesomeReporterPlugin from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypres demo report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // baseUrl: "http://localhost:3000/",
    // supportFile: false,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },

    setupNodeEvents(on) {
      return mochawesomeReporterPlugin(on);
    },
  },
});
