// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Whats the project title',
        type: 'text'
    },
    {
        name: 'description',
        message: 'Write a description od the project',
        type: 'text'
    },
    {
        name: 'installationInstructions',
        message: 'What are the installation instructions?',
        type: 'text'
    },
    {
        name: 'usageInformation',
        message: 'What is the usage information?',
        type: 'text'
    },
    {
        name: 'contributionGuidelines',
        message: 'What are the contribution guidelines?',
        type: 'text'
    },
    {
        name: 'testInstructions',
        message: 'What are the test instructions?',
        type: 'text'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use?',
        choices: ['MIT License', 'Apache License', 'GNU License'],
        validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
    },
    {
        name: 'gitHubUsername',
        message: 'Whats your GitHub username?',
        type: 'text'
    },
    {
        name: 'email',
        message: 'Enter email address',
        type: 'text'
    }
]

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, (err) =>
            err ? console.error(err) : console.log('Commit logged')
        )
    })
};

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.error(err) : console.log('Commit logged')
//     )
// };


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            let fileContent = generateMarkdown(data);
            writeToFile(fileContent)
        })
}

// Function call to initialize app
init();
