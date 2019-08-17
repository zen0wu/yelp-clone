const { setup: setupDevServer } = require("jest-dev-server");

module.exports = async function globalSetup() {
  await setupDevServer({
    command: `yarn start`,
    launchTimeout: 50000,
    port: 3000,
    verbose: true
  });
};
