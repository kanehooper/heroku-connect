const express = require('express')
const ejs = require('ejs')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
// app.use(express.bodyParser())

// Database setup
const {Client} = require('pg')

const connectionString = 'postgres://fsaegmxltrnjdl:5aa5c24fb8baf7ddf2034ba70bf7278a8c2ceaa009d26a956c66e9d465bc3379@ec2-174-129-255-7.compute-1.amazonaws.com:5432/d1dnalu9ko4dpr'

const client = new Client({
    connectionString: connectionString,
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

