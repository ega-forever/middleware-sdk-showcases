
module.exports.id = '3.tabs';

const _ = require('lodash'),
  config = require('../config');

/**
 * @description flow tabs update
 * @param done
 */
   

module.exports.up = function (done) {
  let coll = this.db.collection(`${_.get(config, 'nodered.mongo.collectionPrefix', '')}noderedstorages`);
  coll.update({"path":"tabs","type":"flows"}, {
    $set: {"path":"tabs","body":[{"id":"d11d9839.1fca98","type":"tab","label":"notifications","disabled":false,"info":""}]}
  }, {upsert: true}, done);
};

module.exports.down = function (done) {
  let coll = this.db.collection(`${_.get(config, 'nodered.mongo.collectionPrefix', '')}noderedstorages`);
  coll.remove({"path":"tabs","type":"flows"}, done);
};
