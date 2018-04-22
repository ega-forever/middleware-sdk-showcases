
module.exports.id = '3.d11d9839.1fca98';

const _ = require('lodash'),
  config = require('../config');

/**
 * @description flow d11d9839.1fca98 update
 * @param done
 */
   

module.exports.up = function (done) {
  let coll = this.db.collection(`${_.get(config, 'nodered.mongo.collectionPrefix', '')}noderedstorages`);
  coll.update({"path":"d11d9839.1fca98","type":"flows"}, {
    $set: {"path":"d11d9839.1fca98","body":[{"id":"f56da2bb.a5d58","type":"amqp in","z":"d11d9839.1fca98","name":"erc20","topic":"app_eth_chrono_eth20_processor.*","iotype":"3","ioname":"events","noack":"0","durablequeue":"0","durableexchange":"0","server":"","servermode":"1","x":101.06944274902344,"y":184.64583587646484,"wires":[["43dafa70.1f2cf4"]]},{"id":"5f175c6a.a27144","type":"debug","z":"d11d9839.1fca98","name":"","active":true,"console":"false","complete":"false","x":886.0833435058594,"y":297.57294368743896,"wires":[]},{"id":"43dafa70.1f2cf4","type":"function","z":"d11d9839.1fca98","name":"","func":"const prefix = global.get('settings.mongo.accountPrefix');\n\nmsg.payload = JSON.parse(msg.payload);\n\n\nmsg.payload ={ \n    model: `${prefix}Account`, \n    request: {\n        address: msg.payload.address  \n    }\n};\n\nreturn msg;","outputs":1,"noerr":0,"x":255.07295989990234,"y":184.23612213134766,"wires":[["d40d849a.7f2b68"]]},{"id":"d40d849a.7f2b68","type":"mongo","z":"d11d9839.1fca98","model":"","request":"{}","options":"{}","name":"mongo","mode":"1","requestType":"0","dbAlias":"primary.accounts","x":425.0694770812988,"y":182.87848567962646,"wires":[["1a87f355.11195d","fea30719.adfb18"]]},{"id":"1a87f355.11195d","type":"async-function","z":"d11d9839.1fca98","name":"","func":"const TMClient = global.get('libs.TMClient');\nconst settings = global.get('settings.tmclient');\n\n\nconst user = msg.payload[0];\n\n/*if(user && user.tel){\n const c = new TMClient(settings.username, settings.authToken);\n c.Messages.send({text: 'you have recevied some tokens on your account!', phones: user.tel}, function(err, res){\n        node.warn(res);\n });   \n}*/\n\nif(msg.amqpMessage)\n    msg.amqpMessage.ackMsg();\n\n\nreturn msg;","outputs":1,"noerr":0,"x":579.298656463623,"y":183.41668510437012,"wires":[["5f175c6a.a27144"]]},{"id":"b8363814.05e9e8","type":"catch","z":"d11d9839.1fca98","name":"","scope":null,"x":527.0694694519043,"y":373.9375114440918,"wires":[["69254ac6.261974"]]},{"id":"69254ac6.261974","type":"debug","z":"d11d9839.1fca98","name":"","active":true,"console":"false","complete":"error","x":759.0729522705078,"y":384.5590591430664,"wires":[]},{"id":"fea30719.adfb18","type":"debug","z":"d11d9839.1fca98","name":"","active":true,"console":"false","complete":"false","x":577.5277862548828,"y":311.5729446411133,"wires":[]}]}
  }, {upsert: true}, done);
};

module.exports.down = function (done) {
  let coll = this.db.collection(`${_.get(config, 'nodered.mongo.collectionPrefix', '')}noderedstorages`);
  coll.remove({"path":"d11d9839.1fca98","type":"flows"}, done);
};
