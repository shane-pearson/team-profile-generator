// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require ('./lib/Manager')
const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')

let team = [];
// const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      },
    
    ]) .then(answers => {
      const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber); 
      manager.specialProperty = answers.officeNumber;
      team.push(manager);
      promptDoNext();   
    });
};
  
  promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
   ]) .then(answers => {
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github); 
    engineer.specialProperty = answers.github;
    team.push(engineer);
    promptDoNext();   
  });
  };
    
  promptIntern = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school do you attend?',
      },
     ])  .then(answers => {
      const intern = new Intern (answers.name, answers.id, answers.email, answers.school); 
      intern.specialProperty = answers.school;
      team.push(intern);
      promptDoNext();   
    });
    };

    promptDoNext = () => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'name',
          message: 'What would you like to do next?',
          choices: ['add Engineer', 'add Intern', 'Finished']
        },
       ]) .then (answers => {
        if (answers.name == 'add Engineer') {
          promptEngineer()
        } else if (answers.name == 'add Intern') {
          promptIntern()
        } else {
          generateHTML()
        }
       }) 
      };

generateHTML = () => {
  fs.writeFileSync ('dist/index.html',`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="./style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <header class="header">
          <h1>My Team</h1>
      </header>
   
  <div class="container">
  <div class="row">
  `) 
  for (let i = 0; i < team.length; i++) {
    fs.appendFileSync('dist/index.html',`
    <div class="card col-3 py-1 px-2 border bg-light" style="width: 18rem;">
      <div class="card-header text-white" style="background-color: #302deb;">
          <h2>${team[i].name}</h2>
          <h3>${team[i].getRole()}</h3>
        </div>
      <div class="card-body">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item"> ${team[i].specialProperty}</li>
            </ul>
      </div>
      </div>
    `) 
    
  } fs.appendFileSync('dist/index.html', `
  </body>
  </html>`)
  
}


const init = () => {
    promptUser()
  };
  
  init();
  