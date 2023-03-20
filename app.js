let start = require("express");
let addDays = require('date-fns/addDays');

let app = start()

app.get("/",(request,response)=>{
    let dateTime = new Date()
    let result = addDays(
        new Date(dateTime.getFullYear(),dateTime.getMonth(),dateTime.getDate()),100
    );
    response.send(`${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}`);
});

module.exports = app