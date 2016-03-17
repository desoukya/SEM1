/**
 * App routes:
 */
module.exports = function(app,mongo) {

    // SEED DB
    app.get('/api/db/delete', function(req, res) {
      console.log(`[delete endpoint] <<< ${mongo} >>>`);
      mongo.db().collection('aircrafts').drop();
      mongo.db().collection('originCities').drop();
      mongo.db().collection('destCities').drop();
      mongo.db().collection('flights').drop();
    });

    // DELETE DB
    app.get('/api/db/seed', function(req, res) {
      console.log(`[seed endpoint] <<< ${mongo} >>>`);
      var aircrafts     =  require('../aircrafts.json');
      var originCities  =  require('../originCodes.json');
      var destCities    =  require('../destCodes.json');
      var flights       =  require('../flights.json');

      mongo.db().collection('aircrafts').insertMany(aircrafts, function(err,res){
        if(err) throw error('aircrafts insertion error');
        else console.log('aircrafts insertion successfull');
      });
      mongo.db().collection('flights').insertMany(flights, function(err,res){
        if(err) throw error('flights insertion error');
        else console.log('flights insertion successfull');
      });
      mongo.db().collection('originCities').insertMany(originCities, function(err,res){
        if(err) throw error('originCities insertion error');
        else console.log('codes insertion successfull');
      });
      mongo.db().collection('destCities').insertMany(destCities, function(err,res){
        if(err) throw error('destCities insertion error');
        else console.log('destCities insertion successfull');
      });

    });

    // SEARCH ENDPOINT
    app.get('/api/flights/search/:origin/:destination', function(req, res) {
      var origin      = req.params.origin;
      var destination = req.params.destination;

      mongo.db().collection('flights')
        .find({'origin': origin, 'destination': destination})
        .toArray(function(err, data) {
          console.log('[inside docs] => ', data);
          res.json( data );
      });

    });

    // AIRPORT CODES
    app.get('/api/cities/origin', function(req, res) {
      var codes =  require('../originCodes.json');
      res.json( codes );
    });
    app.get('/api/cities/destination', function(req, res) {
      var codes =  require('../destCodes.json');
      res.json( codes );
    });

    // DEFAULT
    app.get('/', function (req, res) {
      // load the view file (angular will handle the page changes on the front-end)
      res.sendFile(__dirname + '/public/index.html');
    });

};
