var Element = require('./Element');

var ExampleElement = module.exports = function() {
  Element.apply(this, arguments);
  this.name = 'example-element';
}

ExampleElement.prototype = Object.create(Element.prototype);
