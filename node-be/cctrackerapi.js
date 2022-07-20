const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const cors = require('cors');
const PORT = process.env.PORT || 3001
const {Client} = require('pg');
const { response } = require('express');
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
app.post('/users/signup', async (req, res)=> {
  let user = req.body;
  const hashedPwd = await bcrypt.hash(user.password, 10)

  client.query(`INSERT INTO Users (userid, username, email, password) VALUES (${user.userid}, '${user.username}', '${user.email}', '${hashedPwd}');`, (err, result)=>{
    if(!err) {
      res.send("User created")
    } else { 
      console.log(err.message) 
    }
  })
  client.end;
})

// Login user
app.get('/users/login', async (req, res) => {
  let user = req.body

  client.query(`SELECT password FROM Users WHERE email = '${user.email}';`, async (err, response) => {
    if (!err) {
      console.log(response.rows[0])
      if (response.rows[0] == undefined) {
        res.status(200).send("Incorrect email/password").json(response.rows[0])
      } else {
        var pwd = JSON.parse(JSON.stringify(response.rows[0])) 
        if(await bcrypt.compare(user.password, pwd.password)) {
          res.status(200).send("Succesfully logged in")
        } else {
          res.status(200).send("Incorrect email/password")
        }
      }
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Get userid from email
app.get('/users/getid', (req, res) => {
  let user = req.body

  client.query(`SELECT userid FROM Users WHERE email = '${user.email}';`, (err, response) => {
    if (!err) {
      res.status(200).status(200).json(response.rows[0])
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Update user email from userid
app.put('/users/updateemail', (req, res)=> {
  let user = req.body;

  client.query(`UPDATE Users SET email = '${user.email}' WHERE userid = '${user.userid}';`, (err, result) => {
    if(!err){
      res.status(200).send('Update was successful')
    } else { 
      res.send(err.message) 
    }
  })
  client.end;
})

// Update user password from userid
app.put('/users/updatepwd', async (req, res)=> {
  let user = req.body;
  const salt = await bcrypt.genSalt()
  const hashedPwd = await bcrypt.hash(user.password, salt)

  client.query(`UPDATE Users SET password = '${hashedPwd}' WHERE userid = '${user.userid}';`, (err, result) => {
    if(!err){
      res.status(200).send('Update was successful')
    } else { 
      console.log(err.message) 
    }
  })
  client.end;
})

// Add a debit card to userid
app.post('/debit/add', (req, res) => {
  let user = req.body

  // Add debit card to Debit table
  client.query(`INSERT INTO Debit(debitID, available) VALUES ('${user.debitid}', '${user.available}');`, (err, result) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add debit card to Cards table
  client.query(`INSERT INTO Cards(cardID, cardName, cardType) VALUES ('${user.cardid}', '${user.cardname}', 'debit');`, (err, result) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add relationships
  client.query(`INSERT INTO CaDe(cardID, debitID) VALUES ('${user.cardid}', '${user.debitid}');
                INSERT INTO UsCa(userID, cardID) VALUES ('${user.userid}', '${user.cardid}');`, (err, result) => {
    if (!err) {
      res.status(200).send("Card Added successfully")
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Add a credit card to userid
app.post('/credit/add', (req, res) => {
  let user = req.body

  // Add credit card to Credit table
  client.query(`INSERT INTO Credit(creditID, outstanding, lineOfCredit) VALUES ('${user.creditid}', '${user.outstanding}', '${user.lineofcredit}');`, (err, result) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add credit card to Cards table
  client.query(`INSERT INTO Cards(cardID, cardName, cardType) VALUES ('${user.cardid}', '${user.cardname}', 'credit');`, (err, result) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add relationships
  client.query(`INSERT INTO CaCr(cardID, creditID) VALUES ('${user.cardid}', '${user.debitid}');
                INSERT INTO UsCa(userID, cardID) VALUES ('${user.userid}', '${user.cardid}');`, (err, result) => {
    if (!err) {
      res.status(200).send("Card Added successfully")
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Get a users cards from userid
app.get('/cards/get', (req, res) => {
  const user = req.body
  var cards = []
  var debitCards= []
  var creditcards = []

  // Query for user's debit cards
  client.query(`SELECT * FROM (SELECT * FROM (SELECT * FROM usca JOIN Cards using(cardid) WHERE userid = '${user.userid}') uc JOIN cade using(cardid)) ucd JOIN Debit using(debitid);`, (err, response) => {
    if (!err) {
      cards.push(response.rows[0])
      debitCards.push(response.rows[0])
      res.status(200)
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
      res.status(200).json(response.rows[0])
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Delete a debit card from debitid
app.delete('/debit/delete', (req, res) => {
  let user = req.body
  client.query(`DELETE FROM Debit WHERE debitID = '${user.debitid}';`, (err, response) => {
    if (!err) {
      res.status(200).send("Card removed")
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Delete a credit card from creditid
app.delete('/credit/delete', (req, res) => {
  let user = req.body
  client.query(`DELETE FROM Credit WHERE creditID = '${user.creditid}';`, (err, response) => {
    if (!err) {
      res.status(200).send("Card removed")
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Add a budget to userid
app.post('/budget/add', (req, res) => {
  let user = req.body
  
  // Add budget to Budget table
  client.query(`INSERT INTO Budget(budgetID, amount, days) VALUES ('${user.budgetid}', '${user.amount}', '${user.days}');`, (err, response) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add relationship
  client.query(`INSERT INTO UsBu(userID, budgetID) VALUES ('${user.userid}', '${user.budgetid}');`, (err, response) => {
    if (!err) {
      res.status(200).send("Budget added successfully")
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Get budget from userid
app.get('/budget/get', (req, res) => {
  let user = req.body
  client.query(`SELECT * FROM UsBu JOIN Budget using(budgetID) WHERE usbu.userid = '${user.userid}';`, (err, response) => {
    if (!err) {
      res.status(200).json(response.rows)
    } else {
      res.send(err.message)
    }
  })
  client.end
})

// Update budget from budgetid
app.put('/budget/update', (req, res) => {
  let user = req.body 
  let bid = ''

  client.query(`SELECT budgetID FROM UsBu JOIN Budget using(budgetID) WHERE usbu.userID = '${user.userid}';`, (err, response) => {
    if (!err) {
      bid = response.rows[0]
      console.log("Budget found: "+JSON.stringify(bid.budgetid))
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  if (user.update == 'amount') {
    client.query(`UPDATE Budget SET amount = '${user.amount}' WHERE budgetID = '${user.budgetid}';`, (err, response) => {
      if (!err) {
        console.log("Budget found")
        res.status(200)
      } else {
        res.send(err.message)
      }
    })
    client.end
  } else if (user.update == 'days') {
    client.query(`UPDATE Budget SET days = '${user.days}' WHERE budgetID = '${user.budgetid}';`, (err, response) => {
      if (!err) {
        console.log("Budget found")
        res.status(200)
      } else {
        res.send(err.message)
      }
    })
    client.end
  } else {  
    client.query(`UPDATE Budget SET amount = '${user.amount}', days = '${user.days}' WHERE budgetID = '${user.budgetid}';`, (err, response) => {
      if (!err) {
        console.log("Budget found")
        res.status(200)
      } else {
        res.send(err.message)
      }
    })
    client.end
  }
})

// Delete a budget from budgetid
app.delete('/budget/delete', (req, res) => {
  let user = req.body
  client.query(`DELETE FROM Budget WHERE budgetID = '${user.budgetid}';`, (err, response) => {
    if (!err) {
      res.status(200).send("Budget Deleted")
    } else {
      res.send(err.message)
    }
  })
})

// Add cycle to userid
app.post('/cycles/add', (req, res) => {
  let user = req.body
  var bid = ''

  // Insert the cycle into the Cycles table
  client.query(`INSERT INTO Cycles(cycleID, balance, beginDate, endDate) VALUES ('${user.cycleid}', '${user.balance}', '${user.beginDate}', '${user.endDate}');`, (err, response) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Get the budgetID
  client.query(`SELECT budgetID FROM UsBu JOIN Budget using(budgetid) WHERE usbu.userid = '${user.userid}';`, (err, response) => {
    if (!err) {
      bid = response.rows[0] 
      console.log("budget found: "+JSON.stringify(bid.budgetid))
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add relationship
  client.query(`INSERT INTO BuCy(budgetID, cycleID) VALUES ('${bid}', '${user.cycleid}');`, (err, response) => {
    if (!err) {
      res.status(200).send("Cycled added successfully")
    } else {
      res.send(err.message)
    }
  })
})

// Get the current cycle from userid
app.get('/cycles/get', (req, res) => {
  let user = req.body
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
app.post('/purchases/add', (req, res) => {
  let user = req.body
  client.query(`INSERT INTO Purchases(purchaseID, title, description, amount, date) VALUES ('${user.purchaseid}', '${user.title}', '${user.description}', '${user.amount}', '${user.date}');`, (err, response) => {
    if (!err) {
      res.status(200)
    } else {
      res.send(err.message)
    }
  })
  client.end

  // Add relationships
  if (user.creditid == "") {
    client.query(`INSERT INTO CyPu(cycleID, purchaseID) VALUES ('${user.cycleid}', '${user.purchaseid}');
                  INSERT INTO DePu(debitID, purchaseID) VALUES ('${user.debitid}', '${user.purchaseid}');`, (err, response) => {
      if (!err) {
        res.status(200).send("Purchase added successfully")
      } else {
        res.send(err.message)
      }
    })
  } else {
    client.query(`INSERT INTO CyPu(cycleID, purchaseID) VALUES ('${user.cycleid}', '${user.purchaseid}');
                  INSERT INTO CrPu(creditID, purchaseID) VALUES ('${user.creditid}', '${user.purchaseid}');`, (err, response) => {
      if (!err) {
        res.status(200).send("Purchase added successfully")
      } else {
        res.send(err.message)
      }
    })
  }
  
  client.end
})

// Get purchases of current cycle from userid 
app.get('/purchases/get', (req, res) => {
  let user = req.body
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
app.delete('/purchases/delete', (req, res) => {
  let user = req.body
  client.query(`DELETE FROM Purchases WHERE purchaseID = '${user.purchaseid}';`, (err, response) => {
    if (!err) {
      res.status(200).send("Purchase deleted successfully")
    } else {
      res.send(err.message)
    }
  })
})

