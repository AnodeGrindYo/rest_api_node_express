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
.get(function(req, res) {
        res.json({ message: "lists all the stuff", method: req.method });
    })
    //POST
    .post(function(req, res) {
        res.json({ message: "adds new stuff", method: req.method });
    })
    //PUT
    .put(function(req, res) {
        res.json({ message: "updates a stuff's data", method: req.method });
    })
    //DELETE
    .delete(function(req, res) {
        res.json({ message: "deletes stuff", method: req.method });
    });

// We ask our application to use our router method
app.use(myRouter);

// start the server
app.listen(port, hostname, function() {
    console.log("Server started on http://" + hostname + ":" + port + "\n");
});