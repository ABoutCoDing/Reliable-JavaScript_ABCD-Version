var Users = Users || {};
Users.registration = function(){
    return {
        validateAndRegisterUser: function validateAndDisplayUser(user){
            if(!user ||
                user.name === "" ||
                user.password === "" ||
                user.password.length < 6)
                {
                    throw new Error("The user is not valid");
                }

            $.post("http://yourapplication.com/user", user);
            $("#user-message").text("Thanks for registering, " + user.name);
        }
    };
};


var Users = Users || {};
Users.registration = function(){
    return {
        validateAndRegisterUser: function validateAndDisplayUser(user){
            $.post("http://yourapplication.com/user", user);
            $("#user-message").text("Thanks for registering, " + user.name);
            if(!user ||
                user.name === "" ||
                user.password === "" ||
                user.password.length < 6)
                {
                throw new Error("The user is not valid");
                }
        }
    };
};


var Users = Users || {};
Users.registration = function(userValidator, userRegistrar, userDisplay){
    return {
        validateAndRegisterUser: function validateAndDisplayUser(user){
            if(!userValidator.userIsValid(user)){
                throw new Error("The user is not valid");
            }
            userRegistrar.registerUser(user);
            userDisplay.showRegistrationThankYou(user);
        }
    };
};