// TODO: Include packages needed for this application

const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = './Output/README.md';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How is the project installed?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is this used?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license would you like?',
      name: 'license',
      choices: ['Apache License 2.0', 'BSD 3-Clause New or Revised', 'BSD 2 Clause Simplified or FreeBSD',
    'GNU General Public License', 'GNU Library or Lesser GPL', 'MIT License', 'Mozilla Public License 2.0',
  'Common Development and Distribution License', 'Eclipse Public License version 2.0'],
    },
    {
      type: 'input',
      message: 'Who are the contributors?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What command should be used for tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'How do people ask questions?',
      name: 'questions',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        message: 'Enter github username',
        name: 'email',
    },
];



// //TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown (data);
  fs.writeFile(fileName, markdown, function (err) {
      if (err) throw err;
      console.log("success");
  });
}



// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile(fileName, data);
      });
}

// // Function call to initialize app
init();


