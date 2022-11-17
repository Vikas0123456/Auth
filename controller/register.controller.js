//const { ok } = require('assert')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connection = require('.././modal/connection')
const uuid = require('uuid').v4


let postdata = async (req, res) => {
    //////destructoring//////////
    const { name, email, mobileNumber, password, id } = req.body
    const salt = await bcrypt.genSalt(8)
    console.log("salt",salt)
    const pass = await bcrypt.hash(password, salt)
    console.log("pass",pass)

    const data = {
        name, email, mobileNumber, id: uuid(), password: pass
    }


    const querry = "insert into user set ?"
    connection.query(querry, data, (err, result) => {
        if (err) {
            return res.send(
                
                
                
                err.sqlMessage)
        }
        else {
            res.send(result)
        }

    })


}

let postsign = async (req, res) => {

    const { email, password } = req.body

    const querry = "select * from user  where email=?"

    connection.query(querry, email, async (err, result) => {
        if (err) {
            res.json({ error: err.sqlMessage })
        }

        const pass = result[0].password
        const id = result[0].id
        const passcheck = await bcrypt.compare(password, pass)
        if (!passcheck) {
            res.send("password not matched")
        }
        const token = await jwt.sign({ id }, "asdf") 
    res.json({respone:200,token})

}
)
}


module.exports = { postdata, postsign }