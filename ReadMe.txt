Playwright Test Automation Framework

Overview
This repository contains a Playwright-based test automation framework designed to automate UI testing for critical workflows such as Login, Workspace creation, and User management. The framework follows the Page Object Model (POM) design pattern for scalability and maintainability.

Features
- UI Automation: Uses Playwright for automating browser interactions across multiple browsers.
- Cross-browser Testing: Supports testing on Chrome, Edge, Firefox, and Safari.
- Parallel Execution: Tests run in parallel to reduce execution time.
- Page Object Model: Ensures modular, reusable code for test cases.
- Reporting: Generates detailed test reports with screenshots for debugging.

Pre-requisites
1. Node.js (version 14 or higher)
2. Playwright: Ensure you have installed Playwright and its required dependencies.
3. JavaScript: The framework is written in JavaScript, so JavaScript must be installed.

Setup Instructions
Follow the steps below to set up and run the framework locally:

1. Clone the Repository
    git clone git@github.com:syedali07/respond.io.git

2. Install Dependencies
    Run the following command to install all necessary dependencies:
    npm install dotenv --save

3. Playwright Installation
    To install browsers required for Playwright, run:
    npx playwright install

4. Configuration
    - playwright.config.js: This file contains all Playwright settings such as browser configuration, timeouts, retries, and parallelism.
    - Environment variables: Set up necessary environment variables for sensitive data like credentials (stored in .env).

5. Running Tests
You can execute tests with the following commands:
- Run all tests:
    npx playwright test
- Run a specific test file:
    npx playwright test tests/respond.spec.ts
- Run tests in a specific browser:
    npx playwright test --browser=chromium
- Generate a report:
    npx playwright show-report

6. Folder Structure
    ├── tests/                   # All test cases are stored here
    │   ├── respond.spec.js      # Tests related to login flow
    ├── pages/                   # Page Object files for UI elements and actions
    │   ├── Dashboard.js
    │   ├── Login.js
    │   ├── Profile.js
    │   ├── Workspaces.js
    ├── playwright.config.ts      # Playwright configuration file
    ├── data.env                  # To store sensitive data that should be used in test scripts
    ├── playwright-reports/       # Generated test reports

7. Reporting
- By default, Playwright generates HTML reports after the tests finish. You can view them by running:
    npx playwright show-report

8. Troubleshooting
- Timeouts: Adjust timeouts in playwright.config.ts if the tests are failing due to timing issues.
- Headless Mode: By default, tests run in headless mode. You can run tests with a visible browser by adding the --headed flag:
    npx playwright test --headed

10. Contact
For further assistance, please contact the repository maintainer at syedmuhammadali1337@gmail.com.
