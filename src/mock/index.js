var list = require('./data/list.json');

var mockApi = {
    '/api/list': list,
}
module.exports = function(url) {
    return mockApi[url]
}