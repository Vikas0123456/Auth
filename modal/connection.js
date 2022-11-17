const mysql = require("mysql");

const connection= mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"amazon"
})

connection.connect((err)=>{

if(err){
    console.log(err.sqlMessage);
}
else{
    console.log("database connected")
}

})
module.exports = connection