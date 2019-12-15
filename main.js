const express = require('express')
const ejs = require('ejs')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
// app.use(express.bodyParser())

// Database setup
const {Client} = require('pg')

const client = new Client({
    host: process.env.DATABASE_URL,
    ssl: true,
})

client.connect()
    .catch(err => {
        if (err) console.log('Error')
    })

// client.query('SELECT firstname, lastname, email FROM salesforce.user;', (err, res) => {
//     if (err) throw err
//     for (let row of res.rows) {
//         console.log(JSON.stringify(row))
//     }
//     client.end()
// })

app.get('/', (req, res) => {
  res.render('index')  
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

