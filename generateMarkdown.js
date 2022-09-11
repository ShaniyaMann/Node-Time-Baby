// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'CC0':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Attribution 4.0 International':
      return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'The Hippocratic License 2.1':
      return '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)';
    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Function merged with renderLicenseBadge really no point of having
// two switch statements that serve the same purpose.
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License\nThis project is licensed using the ${license}\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badgeMarkdown = renderLicenseBadge(data.license);

  let markdown = `# ${data.title}\n
${badgeMarkdown}\n
## Description\n${data.description}\n
## Table of Contents\n
| Section |
|-------|
| [Description](#description)| 
| [Installation](#installation)| 
| [Usage](#usage)| 
| [License](#license)| 
| [Contributing](#contributing)| 
| [Tests](#tests)| 
| [Questions](#questions)|\n
## Installation\n${data.installation}\n
## Usage\n${data.usage}\n
${renderLicenseSection(data.license)}
## Contributing\n${data.contribution}\n
## Tests\n${data.tests}\n
## Questions\n
[Github](https://github.com/${data.username})
Contact me at my email ${data.email} to ask more questions about this project.
  `;
  return markdown;
}

module.exports = generateMarkdown;
