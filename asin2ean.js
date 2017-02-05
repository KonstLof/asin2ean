var fs  = require("fs"),
  amazon = require('./node_modules/amazon-product-api'),
  client = amazon.createClient({
    awsId: 'AKIAJCPZ6YOH5INNXOZA',
    awsSecret: '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',
    awsTag: 'tasteline-20'
  }),
  item = {
    idType: 'ASIN',
    itemId: 'B000NINVAK'
  };

fs.readFileSync('asin.csv').toString().split('\r\n').forEach(function (line) {
  let line2 = line.toString();
  if (line2 === 'ASIN') {
    fs.appendFileSync('asin2ean.csv', 'ASIN,EAN\n');
  }
  else if (line === '') {
  }
  else {
    item.itemId = line2;
    client.itemLookup(item).then(function(results) {
      let jsonEAN = JSON.stringify(results,['ItemAttributes','EAN']);
      let strEAN = jsonEAN.substring(29,42);
      fs.appendFileSync('asin2ean.csv', line2 + ',' + strEAN + '\n');
    }).catch(function(err) {
      fs.appendFileSync('errors.txt', JSON.stringify(err) + '\n');
    });
  }
});
