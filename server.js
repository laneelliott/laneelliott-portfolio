// Instantiate Variables
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
    encoded: false
}))

app.use(express.static(__dirname + '/assets'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
    console.log('homepage requested')
})

app.listen(PORT, function(){
    console.log("Server listening on PORT:", PORT )
})