// console.log('hey andrzej!');
// run in node -> 'node <file name>' in terminal


// ****************************GLOBAL OBJECT
// console.log('global name');

// setTimeout(function(){
//     console.log('showing after 3000 ms')
// }, 3000);

// let time = 0;
// setInterval(function(){
//     console.log(time);
//     time++;
// }, 1000)

//stop process in terminal by ctrl+s, or by clear interval
// let time = 0;
// let timer = setInterval(function(){
//     console.log(time);
//     time++;
//     if(time===6){
//         clearInterval(timer);
//     }
// }, 1000)

//showing path to directory
// console.log(__dirname); //double underscore

//showing path directory
//console.log(__filename);

//normal function statement
// function sayHi(){
//     console.log("Hi!");
// }

// sayHi();

//function expression
// var sayBye = function(){
//     console.log('Bye!');
// }

// sayBye();

// function callFunction(fun){
//     fun();
// }

// callFunction(sayBye);


//************************************MODULES
//requires counter.js
// var stuff = require('./stuff');

// console.log(stuff.counter(['abc','ffd','dfsfs']));
// console.log(stuff.adder(2,3));
// console.log(stuff.adder(5,stuff.pi));



//**************************EVENT EMMITER
// var events = require('events');

// //EXAMPLE 1
// //constructor
// var myEmitter = new events.EventEmitter();

// //event listener
// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// })

// //emitting event
// myEmitter.emit('someEvent', 'the event was emitted');


//EXAMPLE 2
// var util = require('util');
// var Person = function(name){
//     this.name=name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var riko = new Person('riko');

// var people = [james, mary, riko];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name + ' said '+ msg);
//     });
// });

// james.emit('speak', 'hey dudes');



//************************************FILE
// var fs = require('fs');

//Sync read file
// //read file
// // var fileA = fs.readFileSync('fileA.txt', 'UTF-8');
// // console.log(fileA);

//Async readFile
// fs.readFile('fileA.txt', 'utf8', function(error, data){
//     console.log(data);
//     fs.writeFile('writeB.txt', data);
// })

// console.log('test, code above is async, and this text will be upper in console tha above function resposne')

//async write file
// //write file
// // fs.writeFileSync('writeA.txt', fileA);



//**********************************Making directories
// var fs = require('fs');

//deleting writeA.txt
// fs.unlink('writeA.txt');

//making directory sync
// fs.mkdirSync('stuff');

//removing directory
// fs.rmdirSync('stuff');

//making directory async
// fs.mkdir('stuff', function(){
//     fs.readFile('fileA.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/newFileInStuffDir.txt', data);
//     });
// });

//removing directory with file inside
// fs.unlink('./stuff/newFileInStuffDir.txt', function(){
//     fs.rmdir('stuff');
// });



//*************************CREATING SERVER**************************88
// var http = require('http');

// var server = http.createServer(function(req, res){
//     console.log('request was made: '+req.url);
//     //response headers
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end('hey ninjas');
// });

// server.listen(3000,'127.0.0.1');
// console.log('now listening to port 3000');



//*************************Strams and buffers***********************
//Readable stream - allows node.js to read data from stream
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname +'/fileA.txt', 'utf8');

// //Writable stream
// var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');

// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:');
//     myWriteStream.write(chunk);
//     console.log(chunk);
// });



//*************************************Pipes
// var http = require('http');
// var fs = require('fs');

// var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');

// var server = http.createServer(function(req, res){
//     console.log('request was made: '+req.url);
//     //response headers
//     res.writeHead(200,{'Content-type':'text/plain'});
//     var myReadStream = fs.createReadStream(__dirname +'/fileA.txt', 'utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000,'127.0.0.1');
// console.log('now listening to port 3000');



//************************************* creating HTML server
// var http = require('http');
// var fs = require('fs');


// var myWriteStream = fs.createWriteStream(__dirname +'/writeMe.txt');

// var server = http.createServer(function(req, res){
//     console.log('request was made: '+req.url);
//     //response headers
//     res.writeHead(200,{'Content-type':'text/html'});
//     var myReadStream = fs.createReadStream(__dirname +'/index.html', 'utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000,'127.0.0.1');
// console.log('now listening to port 3000');



//**********************************SERVING JSON
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('request was made: '+req.url);
//     //response headers
//     res.writeHead(200,{'Content-type':'application/json'});
    
//     var myObj = {
//         name: 'gerard',
//         job: 'witcher',
//         age: 93
//     };

//     res.end(JSON.stringify(myObj));

// });

// server.listen(3000,'127.0.0.1');
// console.log('now listening to port 3000');



//*************************************** ROUTING
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('request was made: '+req.url);
    
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         fs.createReadStream(__dirname +'/index.html', 'utf8').pipe(res);
//     }
//     else if(req.url === '/about'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         fs.createReadStream(__dirname + '/about.html').pipe(res);
//     }
//     else if(req.url ==='/api/data'){
//         res.writeHead(200,{'Content-type':'application/json'});
        
//         var myObj = {
//             name: 'gerard',
//             job: 'witcher',
//             age: 93
//         };

//         res.end(JSON.stringify(myObj));
//     }
//     else{
//         res.writeHead(404,{'Content-type':'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });

// server.listen(3000,'127.0.0.1');
// console.log('now listening to port 3000');

//starting nodemon: nodemon app.js    -  nodemon constant upradging saved files



//*************************EXPRESS
var express = require('express');
//adding body-parses module
var bodyParser = require('body-parser')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//setting express view engine as ejs
app.set('view engine', 'ejs');

//middleware for example css styles, imgs
//first assets is for routing, second is for directory
app.use('/assets', express.static('assets'));

//this is for classic version without partial template
// app.get('/', function(req,res){
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/about', function(req, res){
//     res.sendFile(__dirname + '/about.html');
// });

//this is new version with partial template
app.get('/', function(req,res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    //console log query of url like /contact?dept=marketing&name=alf
    console.log(req.query);

    res.render('contact', {qs: req.query});
});

// app.get('/profile/:name', function(req,res){
//     res.send('You requested to see a profile with the name of '+req.params.name);
// });

//handling post request
app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});


//dynamic - changing parameter in url
app.get('/profile/:name', function(req, res){

    var data = {
        age: 29,
        job: 'programist',
        favFood: ['burger','potato','chocolate'] 
    }

    //render connected with view engines
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);



//******************Template Engines
//--injecting data to pages
//installing e js -> npm install ejs -save