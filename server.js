//TODO ADD HTTPS OR SSL!!!!!!

let express = require('express');
let qs = require('querystring');
let app = express();
let cors = require('cors');

const HEADER = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
const SUBDOMAIN = '/api';

const originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
  'localhost:4200/',
];
const corsOptions = {
  origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
}
app.use(cors(corsOptions));


//==============================================================================
/*
 *  Test functions
 */
app.get(SUBDOMAIN + '/test', function(req, res) {
    res.writeHead(200, HEADER);
    res.end(JSON.stringify({
        test: "succes"
    }));
});


//==============================================================================
/*
 *  Api
 */
 app.get(SUBDOMAIN + '/userdata', function(req, res) {
     res.writeHead(200, HEADER);
     res.end(JSON.stringify({
         name: 'James',
         age: 25,
         gender: 'male',
         married: true,
     }));
 });

 //==============================================================================
 /*
  * Server initialization
  */
 let server = app.listen(8080, 'localhost', function () {
     let host = server.address().address;
     let port = server.address().port;
     console.log("Api listening at http://%s:%s", host, port);

     // http://localhost:13370/api/test
 });
