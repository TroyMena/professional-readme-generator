// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your name?',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'languages',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'input',
    message: 'Please provide a short description of your application.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'Which license will you be using?',
    name: 'license',
    choices: ['none', 'MIT', 'GPL', 'Apache', 'Creative Commons']
  },];

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = "README.md"
        
            // Below passes your questions into the generateMarkdown function.
            fs.writeFile(filename, generateMarkdown(data), (err) =>
              err ? console.log(err) : console.log('Success!')
            );
          });
}

// Function call to initialize app
init();

