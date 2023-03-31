// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("license " + license);
  // Create a function that returns the license link
  var licenseLink = " ";

  if (license === "Apache") {
    licenseLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Academic") {
    licenseLink = `![badge](https://img.shields.io/badge/license-Academic-brightgreen)`;
  } else if (license === "GNU") {
    licenseLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "ISC") {
    licenseLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "MIT") {
    licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    licenseLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Open") {
    licenseLink = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
  } else {
    licenseLink = `[![badge](https://img.shields.io/badge/license-None-lightgrey)`;
  }

  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  } else {
    return `This project is covered under the ${license} license. For more details, please click the license button under 'Badges' at the top of the page.`
  };
}

// TODO: Create a function to generate markdown for README
// Use Template Literals to organize structure for prompt data into their specific sections
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description} 

  ## Table of Contents:
  1. [Installation](#installation)
  2. [Usage](#usage)  
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions?
If you have any questions, please see my contact information below to reach me for inquiries:
* GitHub: ${data.username}, at ${data.github}
* Email: ${data.email}

## License
${renderLicenseSection(data.license)}
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
