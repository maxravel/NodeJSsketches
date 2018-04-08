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
var fs = require('fs');

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
fs.unlink('./stuff/newFileInStuffDir.txt', function(){
    fs.rmdir('stuff');
});