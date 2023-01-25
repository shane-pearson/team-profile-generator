const Manager = require ('../lib/Manager')

test ('Testing that employe.name works', function(){
    let e = new Manager ('Joe')
    expect (e.name).toBe('Joe')
})