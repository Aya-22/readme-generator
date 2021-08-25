// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apacheLicense = 'Apache 2.0 License';
  const boostLicense = 'Boost Software License 1.0';
  const mitLicense = 'MIT';
    if (license === apacheLicense) {
   return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    } if (license === boostLicense) {
   return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`;
    } if (license === mitLicense) {
   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;  
    } else {
      return 'No license was used.'
    }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const apacheLicense = 'Apache 2.0 License';
  const boostLicense = 'Boost Software License 1.0';
  const mitLicense = 'MIT';
    if (license === apacheLicense) {
   return `(https://opensource.org/licenses/Apache-2.0)`;
    } if (license === boostLicense) {
   return `(https://www.boost.org/LICENSE_1_0.txt)`;
    } if (license === mitLicense) {
   return `(https://opensource.org/licenses/MIT)`;  
    } else {
      return 'No license was used.'
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const apacheLicense = 'Apache 2.0 License';
  const boostLicense = 'Boost Software License 1.0';
  const mitLicense = 'MIT';
    if (license === apacheLicense) {
   return `Apache License
   Version 2.0, January 2004
http://www.apache.org/licenses/`;
  //   } if (license === boostLicense) {
  //  return `(https://www.boost.org/LICENSE_1_0.txt)`;
  //   } if (license === mitLicense) {
  //  return `(https://opensource.org/licenses/MIT)`;  
  //   } else {
  //     return 'No license was used.'
  //   }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}       
  
  ## Description
  ${data.description}
  
  
  ## Table of Contents (Optional)
  ${data.content}
 
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
 
  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
 
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Features
  
  ## How to Contribute
  
  ## Tests
  `;
}

module.exports = generateMarkdown;
