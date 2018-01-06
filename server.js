var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;
  console.log("db successfully connectied");

});
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/stylesheets'));
app.use(express.static(__dirname + '/public/blocks'));
app.post('/getStudents', function(req,res){
      MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        if (err) throw err;
        console.log("Success");
        var db = client.db('mybd');
        var course = req.body.course;
        console.log(course);
        //console.log("result "+ JSON.stringify(db.collection('JavaUsers').count()));
        db.collection(course).find().toArray(function (findErr, result) {
            if (findErr) throw findErr;
            var students=[];
            if (result.length > 0) {
                console.log("result "+ result[0].name);
                 for (var i=0; i< result.length;i++) {
                    students[i] = {
                        name: result[i].name,
                        lastname: result[i].lastname,
                        level: result[i].level,
                        email: result[i].email
                        };
                 }
             }
             res.send(students);
        });
        client.close();
      });
});
app.post('/addStudent', function(req,res){
    console.log("Your POST request:" + req.body.toString());
    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        if (err) throw err;
        console.log("Success");
        var db = client.db('mybd');
        var course = req.body.course;
        db.collection(course).insert({
            "name": req.body.name,
            "lastname": req.body.lastname,
            "phone": req.body.phone,
            "email": req.body.mail,
            "level": req.body.level
        })
        client.close();
    });
    res.send({
        name: req.body.name,
        email: req.body.mail,
        phone: req.body.phone,
        date: "19:00MSK 13.12.2017"
    });
});
app.post('/deleteStudent', function(req,res){
    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
        if (err) throw err;
        console.log("Success");
        var db = client.db('mybd');
        var course = req.body.course;
        console.log(course);
        console.log(req.body.name);
        console.log(req.body.mail);
        db.collection(course).deleteOne({
            "name": req.body.name,
            "email": req.body.mail
        })
        client.close();
    });
    res.send({
        name: req.body.name,
        date: "19:00MSK 13.12.2017"
    });
});
app.get('/', function(req,res){
    res.sendfile(__dirname + '/public/main.html');
});
app.get('/javascript/main.js', function(req,res){
    res.sendfile(__dirname + '/public/javascript/main.js');
});
app.get('/javascript/submit.js', function(req,res){
    res.sendfile(__dirname + '/public/javascript/submit.js');
});
app.get('/javascript/changeForm.js', function(req,res){
    res.sendfile(__dirname + '/javascript/changeForm.js');
});
app.get('/blocks/success.html', function(req,res){
    res.sendfile(__dirname + '/blocks/success.html');
});
app.get('/blocks/form1.html', function(req,res){
    res.sendfile(__dirname + '/public/blocks/form1.html');
});
app.get('/images/bg_white_trans.png', function(req,res){
    res.sendfile(__dirname + '/images/bg_white_trans.png');
});
app.get('/blocks/form2.html', function(req,res){
    res.sendfile(__dirname + '/public/blocks/form2.html');
});
app.get('/site/public/main.html', function(req,res){
    res.sendfile(__dirname + '/public/main.html');
});

app.get('/stylesheets/main.css', function(req,res){
    res.sendfile(__dirname + 'public/stylesheets/main.css');
});

app.listen(63342, function () {
    console.log('Listening on port 63342...');
});

module.exports = app;