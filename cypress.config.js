const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: ['cypress/support/steps/**/*.js'], // 👈 Add this line
      });

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
