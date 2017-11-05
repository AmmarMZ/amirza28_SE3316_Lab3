// call the packages we need

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var message     = require('./app/models/message');
var course1     = require('./app/models/course1');
var course2     = require('./app/models/course2');
var sanitizeHtml = require('sanitize-html');


var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017'); 

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/' , express.static('static'));
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
//router.get('/', function(req, res) {
//    res.json({ message: 'hooray! welcome to our api!' });   
//});

// more routes for our API will happen here

router.route('/course1').post(function(req, res) 
{
    var bear = new course1();      // create a new instance of the Bear model
    bear.name = sanitizeHtml(req.body.name);  // set the bears name (comes from the request // save the bear and check for errors
   
   
    bear.date = new Date();
    bear.save(function(err) 
    {
        if (err)
        {
            res.send(err);
            
        }
            res.json({ message: 'Message created!' });
        });
    }) 
    .get(function(req, res) 
    {
        course1.find(function(err, bears)
        {
            if (err)
            {
                res.send(err);
            }

            res.json(bears);
        });
    });
    
   router.route('/course1/:course1_id')
     .delete(function(req, res) {
        course1.remove({
            _id: req.params.course1_id
        },
        function(err, bear) {
            if (err)
                {
                    res.send(err);
                }

            res.json({ message: 'Successfully deleted' });
        });
    })
    
      .get(function(req, res) {
        message.findById(req.params.m_id, function(err, bear) {
            if (err)
                {    
                    res.send(err);
                }
            res.json(bear);
        });
    });
    
    
router.route('/course2').post(function(req, res) 
{
    var bear = new course2();      // create a new instance of the Bear model
    bear.name = sanitizeHtml(req.body.name);  // set the bears name (comes from the request // save the bear and check for errors
    bear.date = new Date();
    bear.save(function(err) 
    {
        if (err)
        {
            res.send(err);
            
        }
            res.json({ message: 'Message created!' });
        });

    }) 
    .get(function(req, res) 
    {
        course2.find(function(err, bears)
        {
            if (err)
            {
                res.send(err);
            }

            res.json(bears);
        });
    });
    
   router.route('/course2/:course2_id')
     .delete(function(req, res) {
        course2.remove({
            _id: req.params.course2_id
        },
        function(err, bear) {
            if (err)
                {
                    res.send(err);
                }

            res.json({ message: 'Successfully deleted' });
        });
    })
    
      .get(function(req, res) {
        message.findById(req.params.m_id, function(err, bear) {
            if (err)
                {    
                    res.send(err);
                }
            res.json(bear);
        });
    });
    
    
 
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

