var Q = require('q');

var promise = Q.fcall(function () {
    return "Fixed value";
});

promise.then(function (val) {
    console.log(val);
});