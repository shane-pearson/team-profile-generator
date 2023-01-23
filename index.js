// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const { writeFile } = require('fs').promises;

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
        name: 'office number',
        message: 'What is your office number?',
      },
      {
        type: 'list',
        name: 'github',
        message: 'Enter your GitHub Username',
        choices: ['Add an engineer', 'Add an Intern', 'Finish']
      },
    ]);
  };

const generateHTML = ({ name, id, email, github }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <header class="header">
          <h1>My Team</h1>
      </header>
   
  <div class="container">
  <div class="row">
      <div class="card col-3 py-1 px-2 border bg-light" style="width: 18rem;">
      <div class="card-header text-white" style="background-color: #302deb;">
          <h2>Jared</h2>
          <h3>Manager</h3>
        </div>
      <div class="card-body">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
      </div>
      </div>
  
      <div class="card col-3 py-1 px-2 border bg-light" style="width: 18rem;">
          <div class="card-header text-white" style="background-color: #302deb;">
              <h2>Jared</h2>
              <h3>Manager</h3>
            </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
          </div>
          </div>
  
          <div class="card col-3 py-1 px-2 border bg-light" style="width: 18rem;">
              <div class="card-header text-white" style="background-color: #302deb;">
                  <h2>Jared</h2>
                  <h3>Manager</h3>
                </div>
              <div class="card-body">
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
              </div>
              </div>
          
              <div class="card col-3 py-1 px-2 border bg-light" style="width: 18rem;">
                  <div class="card-header text-white" style="background-color: #302deb;">
                      <h2>Jared</h2>
                      <h3>Manager</h3>
                    </div>
                  <div class="card-body">
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item">Cras justo odio</li>
                          <li class="list-group-item">Dapibus ac facilisis in</li>
                          <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                  </div>
                  </div>
  
                  <div class="card col-3 py-1 px-2 border bg-light" style="width: 18rem;">
                      <div class="card-header text-white" style="background-color: #302deb;">
                          <h2>Jared</h2>
                          <h3>Manager</h3>
                        </div>
                      <div class="card-body">
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">Cras justo odio</li>
                              <li class="list-group-item">Dapibus ac facilisis in</li>
                              <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                      </div>
                      </div>
  
  </body>
  </html>`;

const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
  