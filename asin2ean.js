//var LineByLineReader = require('/usr/lib/node_modules/line-by-line/line-by-line.js'),
var lineReader = require('./node_modules/line-by-line'),
//  crypto = require("./node_modules/crypto-js"),
  amazon = require('./node_modules/amazon-product-api');
	lr = new lineReader('asin.csv', {skipEmptyLines: true }),
  client = amazon.createClient({
    awsId: "aws ID",
    awsSecret: "aws Secret",
    awsTag: "aws Tag"
  }),
	row = 0;
/*
function getSignatureKey(Crypto, key, dateStamp, regionName, serviceName) {
  var kDate = Crypto.HmacSHA256(dateStamp, "AWS4" + key);
  var kRegion = Crypto.HmacSHA256(regionName, kDate);
  var kService = Crypto.HmacSHA256(serviceName, kRegion);
  var kSigning = Crypto.HmacSHA256("aws4_request", kService);
  return kSigning;
}
*/
client.itemLookup({
  idType: 'UPC',
  itemId: '884392579524'
}).then(function(results) {
  console.log(JSON.stringify(results));
}).catch(function(err) {
  console.log(err);
});
/*
lr.on('error', function (err) {
	throw err;
});

lr.on('open', function() {
	// Do something, like initialise progress bar etc.
});

lr.on('line', function (line) {
	console.log(++row + ": " + line);
});

lr.on('end', function () {
	console.log("Ok we're done - exiting now.");
});
*/
