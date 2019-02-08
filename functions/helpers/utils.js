module.exports.getURL = function(req) {
  const { query: { url = null } } = req;
  return url;
}