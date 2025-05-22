const express = require("express")
const app = express()
const db = require("./models/connection")

const PORT = 3000

app.use(express.json())  // middleware which accepts json data

app.post("/adduser", (req, res)=>{
    const user = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.mobile, 
        city: req.body.city
    }

    // console.log(user)
    const sql = "INSERT INTO `employee` SET ?"
    db.query(sql,user, (err, result)=>{
        if (err) console.log(err.sqlMessage)
            else res.json(result)
    })
})

app.get("/getuser", (req, res) => {
    let sql = `SELECT * from employee`
    db.query(sql, (err, result) =>{
        if(err) console.log(err.sqlMessage)
            else res.json(result)
    })
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
})