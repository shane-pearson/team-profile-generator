const Employee = require ('../lib/Employee')

test ('Testing that employe.name works', function(){
    let e = new Employee ('Joe')
    expect (e.name).toBe('Joe')
})