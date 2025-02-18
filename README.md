### OrangeHRM Automation Testing Project
This project is a TestCafe-based automation testing framework for the OrangeHRM application. It is written in JavaScript and designed to verify various functionalities of the OrangeHRM system.

### Prerequisites
- **Node.js**: Make sure you have Node.js installed. You can download it from the [Node.js official website](https://nodejs.org/).
- **TestCafe**: Install TestCafe globally by running the following command:
  ```bash
  npm install -g testcafe
  ```

### Project Structure
```plaintext
├── OrangeHRM_AutomationTest.js  # Main test file for OrangeHRM automation
├── utils                              # Helper functions and selector utilities
│   ├── util_functions.js              # Reusable functions for tests
│   └── util_selector.js               # Page element selectors
├── employee-image.jpg                 # Sample image for testing file uploads
├── package.json                       # Project dependencies and scripts
└── README.md                          # Project documentation (this file)
```

### How to Run Tests

##This project is a TestCafe-based automation testing framework for the OrangeHRM application. It is written in JavaScript and designed to verify various functionalities of the OrangeHRM system.

**1. Clone the repository:**
  ```bash
  git clone https://github.com/pliao1019/Automation_QA-Engineer.git
  cd Automation_QA-Engineer
  ```
**2. Install dependencies:**
  ```bash
  npm install -g testcafe
  ```
**3. Run the test by using this command:**
  ```bash
  testcafe chrome -e OrangeHRM_AutomationTest.js
  ```
You can replace chrome with other browser options such as firefox or edge.

**4. Expected result: PASSED**
![image](https://github.com/user-attachments/assets/2f58df47-e4e1-4aea-a7d5-2921ab0a328f)

Updated: Passed with Chrome 131.0.0.0 / Firefox 132.0 / Microsoft Edge 130.0.0.0

**Features**

Automation with TestCafe: This project leverages the TestCafe framework to automate tests on the OrangeHRM application.
Modular Structure: Utility files (utils/util_functions.js and utils/util_selector.js) are used to maintain reusable functions and selectors, making the codebase more organized and scalable.

**File Descriptions**

-  **OrangeHRM_AutomationTest.js**: Contains the main test cases for the OrangeHRM.
-  **utils/util_functions.js**: Contains functions to simplify and modularize the test code.
-  **utils/util_selector.js**: Contains custom selectors for DOM elements used in the test.

