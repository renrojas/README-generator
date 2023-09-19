//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//questions for user input

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
    choices: ['None', 'Apache 2.0', 'Boost 1.0', 'MIT', 'BSD 3'],
    name: 'license'
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

//function to write README file
function writeToFile(fileName, data) {}

//function to initialize app
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

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
${renderLicenseSection()}
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseLink(data.license)}
${data.license}


## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
https://github.com/${data.username}
Please email me at <${data.email}> for any additional questions.
  

`;
}
  
//function that returns a license badge
function renderLicenseBadge(license) {
    const badge = license.replace(/\s/g, "");
    if (license === "None") {
        return ""
    } else {
    return `![github license](https://img.shields.io/badge/License-${badge}-yellowgreen.svg)`
}
}

//function that returns the license link
function renderLicenseLink(license) {
    if (license === "None") {
        return ""
    } else {
    return `## License`
}
}

//function that returns the license section of README
function renderLicenseSection(license) {
    if (license === "None") {
        return ""
    } else {
    return `[License](#License)`
}
}


//function call to initialize app
init();
