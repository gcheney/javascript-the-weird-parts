var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
};

var logName = function(lang1, lang2){
	console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------');
}//.bind(person);

var logPersonName = logName.bind(person);

logPersonName('en', 'es');

//executes function
logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

(function(lang1, lang2){
	console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------');
}).apply(person, ['es', 'en']);