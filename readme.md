
# How to create a REST API with Node.js and Express

## prerequisites
you must have node installed on your computer. If it isn't the case, go to [the official node.js website](https://nodejs.org)

you can test your installation in a terminal:
```terminal
node -v
```
you should have something like this in return:
```terminal
v10.3.0
```
another test? okay. In your terminal, type:
```terminal
echo console.log("OMG, it works, I can't believe it! OMG!!!!")>test.js
```

then, 
```terminal
node test.js
```

and it should print:
```terminal
OMG, it works, I can't believe it! OMG!!!!
```

now, delete this file with ```rm -rf test.js``` or ```del test.js```, depending on your OS (and if you want to be able to execute unix commands on a window machine, you can install mobaXterm)


## initialize the project
create a folder for your project, with ```mkdir``` or whatever, then ```cd``` to your new folder and type:
```terminal
npm init
```
follow the wizard's instructions. You won't need a test command in this tutorial. Indeed, you'd better type:
```terminal
npm init -y
```
it will skip the wizard, and write default values in your package.json

## install express module
in the root path of your project, type:
```terminal
npm install express --save
```
you did it like a boss! 😎

## What's a REST API?

A REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET and POST. Succint enough?

## URI supported by our API

| http method | URI | Action |
|-------------|-----|--------|
| GET | /stuff| lists all the stuff |
| POST | /stuff | adds new stuff |
| GET | /stuff/stuffId | prints informations about the stuff which stuff's id is stuffId |
| PUT | /stuff/stuffId | modifies data about the stuff which stuff's id is stuffId |
| DELETE | /stuff/stuffId | deletes stuff which stuff'id is stuffId|

## implementing our API
create a file named ```index.js``` (or ```whatever.js```) at the root of your project:
```terminal
touch index.js
```

now, open your favourite code editor, and here we go!
write this in the js file you created:

```javascript
// The application requests the use of the Express module.
// The express variable will allow us to use the features of the Express module.
var express = require('express'); 
 
// Here we define the server settings.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 
 
// start the server
app.listen(port, hostname, function(){
	console.log("Server started on http://"+ hostname +":"+port+"\n"); 
});
```

Ok, let's give it a try! in the terminal, at the root of your project:
```terminal
node index.js
```
it should return
```terminal
Server started on http://localhost:3000
```
now, in your browser, go to [http://localhost:3000](http://localhost:3000)

Oh no, a wild error appears! 😠 It prints ```Cannot Get /```
Do you know why, Sherlock? Exactly, we didn't define a get method. let's implement it! 😌

## routing management

in ```index.js``` again:
```javascript
// The application requests the use of the Express module.
// The express variable will allow us to use the features of the Express module.
var express = require('express'); 
 
// Here we define the server settings.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 

// In order to facilitate the routing (the URLs we want to support in our API), we create a Router object.
// It is from this myRouter object that we will implement the methods. 
var myRouter = express.Router(); 
 
// I remind you our URI (/stuff).  
myRouter.route('/stuff')

// let's implement GET, PUT, UPDATE and DELETE methods

    // GET
    .get(function(req,res){ 
        res.json({message : "lists all the stuff", method : req.method});
    })
    //POST
    .post(function(req,res){
        res.json({message : "adds new stuff", method : req.method});
    })
    //PUT
    .put(function(req,res){ 
        res.json({message : "updates a stuff's data", method : req.method});
    })
    //DELETE
    .delete(function(req,res){ 
    res.json({message : "deletes stuff", method : req.method});  
    }); 
 
// We ask our application to use our router method
app.use(myRouter);
 
// start the server
app.listen(port, hostname, function(){
	console.log("Server started on http://"+ hostname +":"+port+"\n"); 
});
```

now, we can test our API at [http://localhost:3000/stuff](http://localhost:3000/stuff). If it doesn't work, restart your node server:
- go in the terminal running ```index.js```, 
- make **ctrl+c** 
- and again:
```terminal
node index.js
```

now it should work. You'll see a JSON like this in your browser (refresh the page): ```{"message":"lists all the stuff","method":"GET"}```
