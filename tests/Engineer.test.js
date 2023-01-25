const Engineer = require ('../lib/Engineer')

test ('Testing that employe.name works', function(){
    let e = new Engineer ('Joe')
    expect (e.name).toBe('Joe')
})
test ('Testing that engineer.github works', function(){
    let e = new Engineer ('Joe',"id", "email", "githubname")
    expect (e.github).toBe('githubname')
})