let mustach  = require('mustache')
let result = mustach.render("hi ,{{first}} {{last}}",{
    first:"nicole",
    last:"kidman"
})
console.log(result)