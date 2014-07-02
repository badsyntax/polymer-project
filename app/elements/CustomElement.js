var Element = require('./Element');

var CustomElement = module.exports = function() {
  Element.apply(this, arguments);
  this.name = 'custom-element';
}

CustomElement.prototype = Object.create(Element.prototype);
