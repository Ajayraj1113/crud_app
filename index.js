const express = require("express")
const app = express()
const db = require("./models/connection")

const PORT = 3000

app.use(express.json())  // accepts json data

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
            else res.json(user)
    })
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
})