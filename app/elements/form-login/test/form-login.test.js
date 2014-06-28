describe('form-login', function() {
  
  var formLogin = document.querySelector('form-login');
  
  it('should set properties from tag attributes', function() {
    expect(formLogin.username).to.equal('richard');
  });
  
  it('Should set errors property when valdation fails', function() {
    formLogin.validate('Invalid username');
    expect(formLogin.errors).to.equal('Invalid username');
  });
});