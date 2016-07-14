(function (global, $) {
    'use strict';
    // 'new' a Greetr object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    },
        supportedLangs = ['en', 'es'],
        greetings = {
            en: 'Hello',
            es: 'Hola'
        },
        formalGreetings = {
            en: 'Greetings',
            es: 'Saludos'
        },
        logMessages = {
            en: 'Logged in',
            es: 'Inicio sesion'
        };
    
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'John';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
        
        self.validate(language);
    };
    
    Greetr.init.prototype = Greetr.prototype = {
        
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function (lang) {
            if (supportedLangs.indexOf(lang) === -1) {
                throw 'Invalid language';
            }
        },
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function () {
            return formalGreetings[this.language] + ' ' + this.fullName() + '!';
        },
        // ------ CHAINABLE METHODS -----
        greet: function (formal) {
            var msg;
            
            //if undefined or null it wil be coerced to false 
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            //IE doesnt have console unless open
            if (console) {
                console.log(msg);
            }
            
            //'this' refers to calling the object at execution time
            //makes the emthod chainable
            return this;
        },
        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },   
        setLang: function (lang) {
            console.log(lang);
            try {
                this.validate(lang);
            } catch (err) {
                console.log('There was an error: ' + err);
                return this;
            }
            this.language = lang;
            return this;
        },
        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'Missing jQuery';
            } 
            if (!selector) {
                throw 'Missing selector';
            }
            
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } 
            else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            return this;
        }
    };
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));