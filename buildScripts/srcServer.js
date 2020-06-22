//configuring EXPRESS, our development webserver
//call express
import express from 'express';
//reference to path
import path from 'path';
//reference to open, used to open the site on the browser
import open from 'open';
//webpack configs
import webpack from 'webpack';
import config from '../webpack.config.dev'

//store port number to use

const port = 3000
//creat an instance of express
const app = express()
//for webpack
const compiler = webpack(config)

//for webpack
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

//set which route to handle,
// tell express any references to the root should be handled by this function below
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

//tell express to listen to port, with error handling function
app.listen(port, function(err){
	if(err){
		console.log(err)//eslint-disable-line no-console
	}else{
		open('http://localhost:' + port)
	}
})
