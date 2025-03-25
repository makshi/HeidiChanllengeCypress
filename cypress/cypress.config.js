import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import addCucumberPreprocessorPlugin from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, {
        ...config,
        stepDefinitions: 'cypress/support/steps/**/*.{js,ts}',
      });

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
  },
});
