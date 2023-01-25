const Intern = require ('../lib/Intern')

test ('Testing that employe.name works', function(){
    let e = new Intern ('Joe')
    expect (e.name).toBe('Joe')
})