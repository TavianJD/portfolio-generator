const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);
// // we interpolated the text using variables passed into the function that created the output.


// fs.writeFile('index.html', pageHTML, err => {
//    if (err) throw new  (err);

//    console.log('Portfolio complete! Check out index.html to see the output!')
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));