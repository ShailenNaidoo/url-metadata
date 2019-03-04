const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 60 * 60 * 1 });

function set(key,obj) {
  return new Promise((resolve,reject) => {
    cache.set(key,obj,(err,suc) => suc && !err ? resolve() : reject(""));
  });
}

function get(key) {
  return new Promise((resolve,reject) => {
    cache.get(key,(err,val) => val && !err ? resolve(val) : reject(""));
  })
}

module.exports = {
  get,
  set
}