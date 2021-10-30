var express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 routes = require('./server/routes/web'), 
 apiRoutes = require('./server/routes/api'); 
var app = express();


        
       

     
    
    

app.use(bodyParser.json({limit:'50mb'}));
 

app.use(bodyParser.urlencoded({ limit:'50mb', extended: false }));

 

app.use(express.static(path.join(__dirname, 'app')));

app.use(express.static('node_modules'));



app.use('/', routes);
app.use('/api', apiRoutes);
 

var port = process.env.port || 4100;

 
// starting express server.
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});

function response(success, message, data) {
    return { success: success, message: message, data: data }
}
