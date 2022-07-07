const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const cors = require('cors');
const PORT = process.env.PORT || 3001
const {Client} = require('pg')
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "cctrackerdb",
  user: "postgres",
  password: "2432"
})

client.connect()

app.listen(3001)
app.use(express.json())

// Create user 
app.post('/signup', async (req, res)=> {
  const user = req.body;
  const salt = await bcrypt.genSalt()
  const hashedPwd = await bcrypt.hash(user.password, salt)

  let insertQuery = `INSERT INTO Users (userid, username, email, password) VALUES (${user.userid}, '${user.username}', '${user.email}', '${hashedPwd}')`

  client.query(insertQuery, (err, result)=>{
      if(!err) {
        res.send('Insertion was successful')
      } else { 
        console.log(err.message) 
      }
  })
  client.end;
})

// Login user
app.post('/login', async (req, res) => {
  const user = req.body
  client.query(`SELECT password FROM Users WHERE email = '${user.email}';`, (err, response) => {
    if (!err) {
      res.status(200).json(response.rows[0])
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Get username (by userid)
app.get('/users', (req, res) => {
  const user = req.body
  client.query(`SELECT username FROM Users WHERE userid = '${user.userid}';`, (err, response) => {
    if (!err) {
      res.status(200).json(response.rows[0])
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Update user password 
app.put('/users', async (req, res)=> {
  let user = req.body;
  const salt = await bcrypt.genSalt()
  const hashedPwd = await bcrypt.hash(user.password, salt)
  let updateQuery = `UPDATE Users SET password = '${hashedPwd}', WHERE userid = ${user.userid}`

  client.query(updateQuery, (err, result)=>{
      if(!err){
          res.send('Update was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})

// Update user email 
app.put('/users/:id', (req, res)=> {
  let user = req.body;
  let updateQuery = `UPDATE Users SET email = '${user.email}', WHERE userid = ${user.userid}`

  client.query(updateQuery, (err, result)=>{
      if(!err){
          res.send('Update was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})
