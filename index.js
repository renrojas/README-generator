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
    message: 'What languages do you know?',
    name: 'languages'
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    choices: ['phone', 'email', 'telekinesis'],
    name: 'list'
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
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
    })
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    return `# ${data.title}
  
  `;
  }
  
// Function call to initialize app
init();
