//console test
var g = G$('John', 'Doe', 'en');
console.log(g);
g.setLang('fr').greet();
g.greet().setLang('es').greet(true);

//interactive with jquery
$('#btn-login').on('click', function(){
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var language = $('#lang').val();
    var loginGtr = G$(firstName, lastName, language);
    var formal = $('#formal').is(':checked');
    $('#login-form').hide();
    loginGtr.HTMLGreeting('#greeting', formal).log();
});
