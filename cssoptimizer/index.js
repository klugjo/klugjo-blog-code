var fs = require('fs');
var cssmin = require('cssmin');
var csso = require('csso');

var cssFile = fs.readFileSync("style.css", encoding='utf8');
var cssFile2 = fs.readFileSync("style2.css", encoding='utf8');

var cssMinOutput = cssmin(cssFile);
var cssMinOutput2 = cssmin(cssFile2);

var cssoOutput = csso.minify(cssFile);
var cssoOutput2 = csso.minify(cssFile2);

console.log("file 1: " + cssFile.length);
console.log("cssMinOutput: " + cssMinOutput.length);
console.log("cssoOutput: " + cssoOutput.length);

console.log("file 2: " + cssFile2.length);
console.log("cssMinOutput2: " + cssMinOutput2.length);
console.log("cssoOutput2: " + cssoOutput2.length);

