const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, school, github) {
    super(name, id, email);
    this.github = github;
    
  }
}

module.exports = Engineer;