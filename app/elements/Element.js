var Element = module.exports = function(req, res, name) {
  this.req = req;
  this.res = res;
  this.app = req.app;
  this.name = name;
}

Element.prototype.render = function(done) {
  this.app.render('elements/'+this.name, {
    layout: false
  }, function(err, data) {
    if (err) done(err);
    else {
      this.res.locals[this.name] = data;
      done(null);
    }
  }.bind(this));
};

