var Twit = require('twit')
const BOT_ID = 'MY_BOT_ID';
var fs = require('fs')



var T = new Twit({
  consumer_key        : "XXXXXXXXX" /* 各自記入 */,
  consumer_secret     : "XXXXXXXXX" /* 各自記入 */,
  access_token    : "XXXXXXXXX" /* 各自記入 */,
  access_token_secret : "XXXXXXXXX" /* 各自記入 */
});
//  stream a sample of public statuses 
// 
var stream = T.stream('statuses/sample')

T.post('statuses/update', { status: 'i have headache!' }, function(err, data, response) {
	console.log(data)
  })
  
  //
  //  search twitter for all tweets containing the word 'node.js' since July 11, 2011
  //
  T.get('search/tweets', { q: 'node.js since:2011-07-11', count: 100 }, function(err, data, response) {
	console.log(data)
  })
  
  //
