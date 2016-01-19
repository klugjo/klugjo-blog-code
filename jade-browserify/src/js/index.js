
// Require our jade template as we would require a Js file
var quoteTemplate = require('../templates/quote.jade');

// Render the template
var output = quoteTemplate({
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
});

console.log(output);


