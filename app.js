var express = require('express');
var app = express();

// 環境変数から Titter アプリケーションのキー等を取得
var options = {
  consumer_key        : "XXXXXXXXX" /* 各自記入 */,
  consumer_secret     : "XXXXXXXXX" /* 各自記入 */,
  access_token    : "XXXXXXXXX" /* 各自記入 */,
  access_token_secret : "XXXXXXXXX" /* 各自記入 */
};
app.set('options', options);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('This is Twitter-bot application.')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

module.exports = app;