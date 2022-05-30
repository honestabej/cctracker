const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const {Client} = require('pg');

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

const client = new Client({
    host:"localhost",
    user: "postgres",
    port: 5432,
    password: "2432",
    database: "cctrackerdb"
})

client.connect();

// Get username of userID
app.get("/username/:userID", (req, res) => {
  client.query(`SELECT username FROM Users WHERE userID = ${req.params.userID};`, (err, response) => {
    if (!err) {
        res.status(200).json(response.rows[0]);
    } else {
        res.send(err.message);
    } 
  });
  client.end;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});