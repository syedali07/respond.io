Postman API Automation Framework

Overview
This repository contains an API automation framework for testing critical API workflows using Postman collections, collection variables, and executing tests via Newman within a Node.js project. The framework is designed to automate API testing for key functionalities such as Login, Workspace creation, and User management.

Features
- Postman Collection: Organized API test cases using Postman collections.
- Collection Variables: Dynamically manage test data and environment-specific configurations through Postman variables.
- Newman Integration: Use Newman, Postman’s command-line runner, to execute tests in a Node.js project.
- CI/CD Integration: Seamless integration with Jenkins, GitHub Actions, and other CI tools using Newman.
- Reporting: Generates detailed reports in JSON or HTML formats for easy debugging and test review.

Pre-requisites
- Node.js (version 14 or higher).
- Postman: For creating, editing, and running Postman collections.
- Newman: Installed globally to run Postman collections via command-line.

Setup Instructions
1. Clone the Repository
    git clone git@github.com:syedali07/respond.io.git
    repository-GitHub-Link https://github.com/syedali07/respond.io/tree/API_Automation_Postman
    There is a branch in it with the name of API_Automation_Postman that includes the API automation

2. Install Dependencies
    Open this Node.js project(folder) into VSCode or any IDE
    To install necessary Node.js dependencies, run: npm install dotenv --save

3. Install Newman
    If Newman is not installed globally, you can install it using:
    npm install -g newman
    Link newman in the node.js project using this command: npm link newman

4. Import Postman Collections (Optional)
    Postman Collection: Import the provided Postman collection (Respond.io.postman_collection.json) into Postman to view and edit test cases. You can find this collection in the root of the project directory

5. Configuration(Optional)
    Postman Collection: Contains all the API test cases related to Login, Workspace, and User management.

    Collection Variables: Used to store dynamic data such as authentication tokens, environment-specific URLs, and credentials. Variables are email and password.

6. Running API Tests Locally
    You can execute the Postman collection locally using "node test.js"
    
    (Optional)You can execute the Postman collection locally using Newman via the following command:
    newman run <path-to-collection> -e <path-to-environment-file>

    Example:
    newman run ./Respond.io.postman_collection.json

7. Folder Structure
    ├── newman/                                 # Folder for newman reports
    ├── Respond.io.postman_collection.json      # The Postman collection
    ├── package.json                            # Node.js project dependencies and scripts
    ├── test.js                                 # Contains a script with newman library to run the postman collection

8. Reporting
    If you are running from this project using node test.js then the reports are saved under the newman folder(can be found in the root of the project)
    
    Newman generates reports in various formats such as JSON, HTML, and JUnit. You can configure the format based on your preference.

    To generate an HTML report:
    newman run ./Respond.io.postman_collection.json -r html

    Reports will be saved in the /reports directory.

9. Troubleshooting
    - Collection Variables: Ensure that all required variables (e.g., URLs, credentials) are correctly set in the environment files.
    - Timeout Issues: If tests are failing due to timeouts, consider increasing the timeout settings in Newman using the --timeout parameter.
    - Authentication: For token-based authentication, make sure tokens are refreshed and stored in Postman variables during test execution.

10. Contact
    For any queries or issues, please contact the repository maintainer at syedmuhammadali1337@gmail.com.
