var _ = require('lodash');

var chunked = _.chunk(['a', 'b', 'c', 'd'], 2);

console.log(chunked); // → [['a', 'b'], ['c', 'd']]