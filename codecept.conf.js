/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: process.env.url,
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForTimeout: 30000,
      show: true,
      // windowSize: "1560x900",
      chrome: {
        args: ["--start-maximized", "--cast-initial-screen-width"],
        defaultViewport: null,
      },
      waitForAction: 500
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'skill-test-dot'
}