// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your name?',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  }];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = "README.md"
        
            // below passes your questions into the generateMarkdown function.
            fs.writeFile(filename, generateMarkdown(data), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });
}

// Function call to initialize app
init();

