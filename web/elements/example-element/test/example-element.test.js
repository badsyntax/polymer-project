describe('A thing', function() {
  var thing;

  beforeEach(function() {
    thing = document.createElement('example-element');
    document.body.appendChild(thing);
  });

  afterEach(function() {
    thing.parentNode.removeChild(thing);
  });

  it('Should do something', function() {
    expect(typeof thing.sayHi).to.equal('function');
    thing.sayHi();
    expect(thing.message).to.equal('hi');
  });
});
