//configuring EXPRESS, our development webserver

//call express
let express = require('express')
//reference to path
let path = require('path')
//reference to open, used to open the site on the browser
let open = require('open')

//store port number to use
let port = 3000
//creat an instance of express
let app = express()

//set which route to handle,
// tell express any references to the root should be handled by this function below
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

//tell express to listen to port, with error handling function
app.listen(port, function(err){
	if(err){
		console.log(err)
	}else{
		open('http://localhost:' + port)
	}
})
