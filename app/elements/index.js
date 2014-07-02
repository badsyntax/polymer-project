var async = require('async');

module.exports = {
  render: function(req, res, elements, done) {
    async.series(elements.map(function(element) {
      var instance = new element(req, res);
      return instance.render.bind(instance);
    }), done);
  }
};
