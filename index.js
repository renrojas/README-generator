// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
    type: 'input',
    message: 'What is your project called?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
    name: 'description'
  },
//   {
//     type: 'input',
//     message: '',
//     name: 'tableofcontents'
//   },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What are the instructions and examples for use of your project?',
    name: 'usage'
  },
  {
    type: 'list',
    message: 'What is the License you are using?',
    choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
    name: 'license'
  },
  {
    type: 'input',
    message: '',
    name: 'badges'
  },
  {
    type: 'input',
    message: 'What are the guidelines for other developers to contribute?',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'What are examples on how to run tests?',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'username'
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        //console.log(response)
    const template = generateMarkdown(response)
    console.log(template)
    fs.writeFile('./utils/README.md', template, (err) =>
    err ? console.log(err) : console.log('Successfully created your README.md!')
  );
    })
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    return `# ${data.title}
## Description
${data.description}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation
${data.installation}

## Usage

${data.usage}
## License

${data.license}

## Badges
${data.badges}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
https://github.com/${data.username}
Please email me at <${data.email}> for any additional questions.
  `;
  }
  
// Function call to initialize app
init();
