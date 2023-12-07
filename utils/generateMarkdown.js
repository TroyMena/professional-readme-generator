// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return 'https://opensource.org/license/mit-0/'
  }
  else if (license == "Apache") {
    return 'http://www.apache.org/licenses/LICENSE-2.0'
  }
  else if (license == "GPL") {
    return 'https://opensource.org/license/gpl-2-0/'
  }
  else if (license == "Creative Commons") {
    return 'https://creativecommons.org/licenses/by/2.5/legalcode.en'
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // If the user doesn't say none (they select a license), we want to render a license section which says the license the user selected.
  if (license === 'none') {
    return ''
  }
  return `## License
  
  This project is licensed under ${license}. URL: ${renderLicenseLink(license)}`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Simple overview of use/purpose.
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage] (usage)
  - [License] (#license)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ${data.languages}
  
  ## Installation
  
  ${data.installation}

  * Describe any prerequisites, libraries, OS version, etc., needed before installing program.
  * ex. Windows 10
  
  ## Usage
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing

  ## Tests

  ## Questions

  * ${data.email}
  *
`;
}

module.exports = generateMarkdown;
