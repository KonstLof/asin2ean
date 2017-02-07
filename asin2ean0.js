var fs = require("fs"),
  amazon = require("./node_modules/amazon-product-api"),
  client = amazon.createClient({
    awsId: "AWSID",
    awsSecret: "AWSSECRET",
    awsTag: "AWSTAG"
  }),
  item = {
    idType: "ASIN",
    itemId: "B000NINVAK",
//    responseGroup: "ItemAttributes"
};

client.itemLookup(item).then(function(results) {
//  let jsonEAN = JSON.stringify(results,["ItemAttributes","EAN"]);
//  let strEAN = jsonEAN.substring(29,42);
//  console.log(JSON.stringify(results));
//  console.log(jsonEAN);
  console.log(results[0].ItemAttributes[0].EAN);
//  fs.appendFileSync("asin2ean.csv", line2 + "," + strEAN + "\n");
}).catch(function(err) {
//  fs.appendFileSync("errors.txt", JSON.stringify(err) + "\n");
  console.log(err);
});
