
(function (global, $){

    var Greetr = function(firstname, lastname, lang){
        return new Greetr.init(firstname, lastname, lang);
    }

    //INSIDE variables
    var supportedLangs = ["en", "pt"]

    var greetings = {
        en: "Hi,",
        pt: "O pá,"
    }

    var formalGreetings = {
        en: "Hello There,",
        pt: "Olá,"
    }

    Greetr.prototype = {

        getFullname: function(){
            return this.firstname + " " + this.lastname;
        },

        sayHelloLang: function(){
            if(this.lang == "en"){
                return greetings.en + " " +  this.firstname;
            }else{
                return greetings['pt'] + " " + this.firstname;
            }
        },

        formalGreeting(){
            if(this.lang == "en"){
                return formalGreetings.en + " " +  this.getFullname();
            }else{
                return formalGreetings['pt'] + " " + this.getFullname();
            }
        },

        validate: function(){
            if(supportedLangs.indexOf(this.lang) === -1){
                throw new Error("invalid Language");
            }
        },

        greet: function(formal){
            var msg;

            if(formal){
                msg = this.formalGreeting();
            }else{
                console.log("passou")
                msg = this.sayHelloLang();
            }

            //Display on console if the users on...
            if(console){
               console.log(msg)
            }

            //THIS return the OBJ and makes method chainnable greet().greet()
            return this;
        },

        log: function(){
            if(console){
                console.log("Logged!!")
            }
            return this;
        },
        setLang: function(lang){
            this.lang = lang;

            this.validate();

            return this;
        },

        setOnHtml: function(element, formal){
            console.log("enter")
            var el = document.querySelector(element);
            console.log(el)

            if(formal){
                el.innerHTML  = this.formalGreeting();
            }else{
                console.log("passou")
                el.innerHTML  = this.sayHelloLang();
            }
        }
    }

    Greetr.init = function(firstname, lastname, lang){
        this.firstname = firstname || "";
        this.lastname = lastname || "";
        this.lang = lang || "en"
    }

    Greetr.init.prototype = Greetr.prototype;

    global.G$ = Greetr;

})(window)

