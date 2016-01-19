var Q = require('q');

var promise = Q.fcall(function () {
    return 1111;
});

promise.then(function (val) {
    console.log(val);
});