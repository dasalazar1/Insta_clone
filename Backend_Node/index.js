var express = require('express')

var app = express()

app.get('/test', function(req, res){
    res.json({test: "This is a test message"})
})

app.listen(3000)