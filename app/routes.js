/**
 * App routes:
 */
module.exports = function(app,mongo) {

    app.get('/api/db/delete', function(req, res) {
      console.log(`[delete endpoint] <<< ${mongo} >>>`);
      mongo.db().collection('aircrafts').drop();
      mongo.db().collection('originCodes').drop();
      mongo.db().collection('destCodes').drop();
    });

    app.get('/api/db/seed', function(req, res) {
      console.log(`[seed endpoint] <<< ${mongo} >>>`);
      var aircrafts   =  require('../aircrafts.json');
      var originCodes =  require('../originCodes.json');
      var destCodes   =  require('../destCodes.json');

      mongo.db().collection('aircrafts').insertMany(aircrafts, function(err,res){
        if(err) throw error('aircrafts insertion error');
        else console.log('aircrafts insertion successfull');
      });
      mongo.db().collection('originCodes').insertMany(originCodes, function(err,res){
        if(err) throw error('originCodes insertion error');
        else console.log('codes insertion successfull');
      });
      mongo.db().collection('destCodes').insertMany(destCodes, function(err,res){
        if(err) throw error('destCodes insertion error');
        else console.log('codes insertion successfull');
      });

    });

    app.get('/api/flights/:origin/:destination', function(req, res) {
      var flights =  require('../flights.json');
      res.json( flights );
    });

    // app.post('/api/blogs', function (req, res) {
    //   var title = req.body.title;
    //
    //   var doc =  {
    //       "title": title,
    //       "created": "Sun Feb 29 2016 17:54:57 GMT+0300 (EEST)",
    //       "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //       "likes": 130,
    //       "img": ""
    //   };
    //
    //   var fs = require('fs')
    //   fs.readFile('blogs.json', function(err, data){
    //     data = JSON.parse( data );
    //     var count = Object.keys(data).length;;
    //     data[count] = doc;
    //     res.json( data );
    //   });
    //
    // });

    app.get('*', function (req, res) {
      // load the view file (angular will handle the page changes on the front-end)
      res.sendFile(__dirname + '/public/index.html');
    });

};
