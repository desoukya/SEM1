/**
 * App routes:
 */
 var faker = require('faker');
module.exports = function(app,mongo) {

    var _  = require('underscore');

    // DELETE DB
    app.get('/api/db/delete', function(req, res) {
      console.log(`[delete endpoint] <<< ${mongo} >>>`);
      mongo.db().collection('aircrafts').drop();
      mongo.db().collection('airports').drop();
      mongo.db().collection('flights').drop();
    });

    // SEED DB
    app.get('/api/db/seed', function(req, res) {
      console.log(`[seed endpoint] <<< ${mongo} >>>`);
      var aircrafts     =  require('../aircrafts.json');
      var airports      =  require('../airports.json');
      var flights       =  require('../flights.json');

      mongo.db().collection('aircrafts').insertMany(aircrafts, function(err,res){
        if(err) throw error('aircrafts insertion error');
        else console.log('aircrafts insertion successfull');
      });
      mongo.db().collection('flights').insertMany(flights, function(err,res){
        if(err) throw error('flights insertion error');
        else console.log('flights insertion successfull');
      });
      mongo.db().collection('airports').insertMany(airports, function(err,res){
        if(err) throw error('airports insertion error');
        else console.log('codes insertion successfull');
      });
      res.json({"msg": "db seeded successfully!"});
    });

    // SEARCH ENDPOINT
    app.get('/api/flights/search/:origin/:destination', function(req, res) {
      var origin      = req.params.origin;
      var destination = req.params.destination;

      var criteria = {};
      if(origin && origin !== 'undefined') {
          criteria.origin = origin;
      }
      if(destination && destination !== 'undefined') {
          criteria.destination = destination;
      }
      console.log(criteria);
      mongo.db().collection('flights')
        .find(criteria)
        .toArray(function(err, data) {
            console.log(data);
          res.json( data );
      });
    });

    // AIRPORT CODES
    app.get('/api/airports/origin', function(req, res) {
      mongo.db().collection('airports')
        .find()
        .toArray(function(err, airports) {
          res.json( airports );
      });
    });

    app.get('/api/airports/destination/:originAirport', function(req, res) {
      var origin  = req.params.originAirport;
      var flights = [];

      /* Retrieve List of Possible Destiantion Airports Based on Origin */
      mongo.db().collection('flights')
        .find({'origin': origin})
        .toArray(function(err, data) {

          var size = data.length - 1;

          _.each(data, function(flight, index) {

            mongo.db().collection('airports')
              .findOne({'code': flight.destination}, function(err,airport) {
                _.isEmpty(_.where(flights, {destination: flight.destination}))
                ? flights.push( airport )
                : false;
                if (size === index) res.json( flights );
            });

          });
      });
    });

    // DEFAULT
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
    });

    app.get('/getPromoOffer/:number', function(req, res) {
        var index = req.params.number;
        var image;
        if(index == 1) {
            image = faker.image.city();
        }else if(index == 2) {
            image = faker.image.nature();
        }else {
            image = faker.image.food();
        }
        res.json({
            "url": image
        });
    });
};
