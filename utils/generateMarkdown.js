// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // If the user doesn't say none (they select a license), we want to render a license section which says the license the user selected.
  console.log(license)
  if (license === 'none') {
    return ''
  }
  return `## License
  
  This project is licensed under ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Simple overview of use/purpose.
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

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
