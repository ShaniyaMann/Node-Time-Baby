// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    message: 'Enter the description for your readme?',
  },
  {
    name: 'installation',
    message: 'Enter the installation instructions for your project?',
  },
  {
    name: 'usage',
    message: 'Enter the usage for your project?',
  },
  {
    name: 'contribution',
    message: 'What are the contribution guildines?',
  },
  {
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: [
      'Apache 2.0 License',
      'Boost Software License 1.0',
      'BSD 3-Clause License',
      'CC0',
      'Attribution 4.0 International',
      'Eclipse Public License 1.0',
      'GNU GPL v3',
      'The Hippocratic License 2.1',
      'IBM Public License Version 1.0',
      'ISC License',
      'MIT',
      'Mozilla Public License 2.0',
    ],
  },
  {
    name: 'username',
    message: 'What is your github username?',
  },
  {
    name: 'email',
    message: 'What is your email?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
    console.log('Check the README.md to see your generated file.');
  });
}

// Function call to initialize app
init();
