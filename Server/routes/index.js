var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'REdc6OFKmlRoGR7f1Lw9olGgr',
  consumer_secret: 'BLKcbBm43kUz8fORvDkrLeRXD2r9JyC8SKYrs4JyR0HVFfs998',
  access_token_key: '836305151019339778-pnOnv5AUqU3OH3ELDcO2j1Epc6NfYqw',
  access_token_secret: '5FjHgt6cmOQLEZHu6BPvaQGE4jLYZ03taiK9E4vfHULwR'
});

router.get('/api/search/:queryHashtag&:queryCount', function(req, res, next) {
  client.get('search/tweets', {q: `'#${req.params.queryHashtag}'`, count: `${req.params.queryCount}`}, function(error, tweets, response) {
    res.send(tweets);
 });   
});

module.exports = router;
