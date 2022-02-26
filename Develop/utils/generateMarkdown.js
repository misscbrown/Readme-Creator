

const generateMarkdown = data => {
  return `# ${data.title}
  
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  This projects github license is under ${data.license}
  ![Github licence](https://img.shields.io/badge/License-${data.license[0]}-green)
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have questions, please email me directly at ${data.email}. You can view more of my projects at https://github.com/${data.username}.
`;
}


// use for importing Markdown in index 
module.exports = generateMarkdown;
