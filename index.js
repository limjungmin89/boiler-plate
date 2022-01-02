const express = require('express')
const app = express()
const port = 5000

const { User } = require('./models/User')

// bodyParser를 이용하여 request body 사용
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// config 를 이용하여 mongodb connect
const config = require('./config/key')
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));

const { is } = require('express/lib/request')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',(req,res) => {
  const user = new User(req.body)

  user.save((err, userInfo) => {
    return res.status(200).json({
      success:true
    })
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})