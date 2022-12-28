const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache License') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU License') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT License') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache License') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GNU License') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
      `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  
  ## Description
  ${data.description}
 
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#Contributions)
  
  ## Installation
  ### Please install the following applications
  ### ${data.installationInstructions}

  ## Usage
  ### ${data.usageInformation}

  ## License
  ### ${data.license}

  ## Contributions
  ### ${data.usageInformation}

  ## Test
  ### Run these test 
  ### ${data.testInstructions}

  ## Questions:
  ### If you have any questions, you may contact me at either
  ### Github: https://github.com/${data.gitHubUsername}
  ### or
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
