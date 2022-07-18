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
  const hashedPwd = await bcrypt.hash(req.body.password, 10)

  let insertQuery = `INSERT INTO Users (userid, username, email, password) VALUES (${user.userid}, '${user.username}', '${user.email}', '${hashedPwd}');`

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
  client.query(`SELECT password FROM Users WHERE email = '${user.email}';`, async (err, response) => {
    if (!err) {
      console.log(response.rows[0])
      if (response.rows[0] == undefined) {
        res.send("Incorrect email/password")
      } else {
        var pwd = JSON.parse(JSON.stringify(response.rows[0])) 
        if(await bcrypt.compare(user.password, pwd.password)) {
          res.send("Succesfully logged in")
        } else {
          res.send("Incorrect email/password")
        }
      }
    } else {
      res.send(err.message)
      return
    }
  })
  client.end
})

// Get userid (by email/password)
app.get('/userid', (req, res) => {
  const user = req.body
  client.query(`SELECT userid FROM Users WHERE email = '${user.email}';`, (err, response) => {
    if (!err) {
      res.status(200).json(response.rows[0])
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Update user email from userid
app.put('/users/emailupdate', (req, res)=> {
  let user = req.body;
  let updateQuery = `UPDATE Users SET email = '${user.email}' WHERE userid = '${user.userid}';`

  client.query(updateQuery, (err, result)=>{
      if(!err){
          res.send('Update was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})

// Update user password from userid
app.put('/users/pwdupdate', async (req, res)=> {
  let user = req.body;
  const salt = await bcrypt.genSalt()
  const hashedPwd = await bcrypt.hash(user.password, salt)

  client.query(`UPDATE Users SET password = '${hashedPwd}' WHERE userid = '${user.userid}';`, (err, result)=>{
      if(!err){
        res.send('Update was successful')
      } else { 
        console.log(err.message) 
      }
  })
  client.end;
})

// Add a debit card to userid

// Add a credit card to userid

// Get a users cards from userid
app.get('/usercards', (req, res) => {
  const user = req.body
  var cards = []
  var debitCards= []
  var creditcards = []

  // Query for user's debit cards
  client.query(`SELECT * FROM (SELECT * FROM (SELECT * FROM usca JOIN Cards using(cardid) WHERE userid = '${user.userid}') uc JOIN cade using(cardid)) ucd JOIN Debit using(debitid);`, (err, response) => {
    if (!err) {
      cards.push(response.rows[0])
      debitCards.push(response.rows[0])
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Query for user's credit cards
  client.query(`SELECT * FROM (SELECT * FROM (SELECT * FROM usca JOIN Cards using(cardid) WHERE userid = '${user.userid}') uc JOIN cacr using(cardid)) ucc JOIN Credit using(creditid);`, (err, response) => {
    if (!err) {
      cards.push(response.rows[0])
      creditcards.push(response.rows[0])
      console.log("User's cards: \n"+JSON.stringify(cards))
      res.status(200).json("Query successful")
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Delete a debit card from userid

// Delete a credit card from userid

// Add a budget to userid

// Get budget from userid

// Update budget for userid

// Add cycle to userid

// Get the current cycle from userid
app.get('/cycle', (req, res) => {
  const user = req.body
  client.query(`SELECT * FROM (SELECT * FROM (SELECT * FROM usbu JOIN Budget using(budgetid) WHERE usbu.userid = '${user.userid}') ub JOIN bucy using(budgetid)) ubc JOIN Cycles using (cycleid) WHERE '2022-03-20' BETWEEN Cycles.begindate AND Cycles.enddate;`, (err, response) => {
    if (!err) {
      res.status(200).json(response.rows)
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Add purchase to userid

// Get purchases of current cycle from userid 
app.get('/purchases', (req, res) => {
  const user = req.body
  client.query(`SELECT * FROM (SELECT * FROM (SELECT userid, budgetid, cycleid FROM (SELECT * FROM (SELECT * FROM usbu JOIN Budget using(budgetid) WHERE usbu.userid = '${user.userid}') ub JOIN bucy using(budgetid)) ubc JOIN Cycles using (cycleid) WHERE '2022-03-20' BETWEEN Cycles.begindate AND Cycles.enddate) cycle JOIN cypu using(cycleid)) cp JOIN Purchases using(purchaseid);`, (err, response) => {
    if (!err) {
      res.status(200).json(response.rows)
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Delete purchase from userid







// INSERT
app.post('/test', async (req, res)=> {
  client.query(`INSERT INTO CyPu(cycleID, purchaseID) VALUES ('51', '61'), ('51', '62'), ('52', '63'), ('52', '64'), ('54', '65'), ('53', '66');`, (err, result)=>{
      if(!err) {
        res.send('Insertion was successful')
      } else { 
        console.log(err.message) 
      }
  })
  client.end;
})