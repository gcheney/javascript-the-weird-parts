function makeGreeting(language){
	return function(firstname, lastname){
		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		} else if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		} else {
			console.log(firstname + ' ' + lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Smith');
greetSpanish('Jose', 'Cuervo');