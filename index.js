// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about? What was your motivation? Why did you build this project? What did you learn?',
    },
    {
        type: 'input',
      name: 'content',
      message: 'Add a table of contents to make it easy for users to find what they need. (Optional)',

    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and exmaples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to your Github profiles.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Do you need a license?',
      choices: ['None', 'Apache 2.0 License', 'Boost Software License 1.0', 'MIT'],
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub account?',

    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => {
        const md = generateMarkdown(answers)
        writeToFile("README.md", md)
    })
}

// Function call to initialize app
init();
