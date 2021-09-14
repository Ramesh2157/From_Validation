function validate() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let number = document.getElementById("number")
    let Username = document.getElementById("Username")
    let password = document.getElementById("password")
    let conpassword = document.getElementById("conpassword")



    if (name.value == "" || email.value.trim() == "" || number.value.trim() == "" || Username.value.trim() == "" || password.value.trim() == "" || conpassword.value.trim() == "") {

        
        // ##################### FULL NAME ######################

        if (name.value == "") {

            name.style.border = "3px solid red";
            document.getElementById("namee").innerHTML = "Plz enter a full name"
            // return false;
        }

        else {
            name.style.border = "";
            document.getElementById("namee").innerHTML = ""
        }


        // ##################### EMAIL ######################

        if (email.value.trim() == "") {
            email.style.border = "3px solid red";
            document.getElementById("emaill").innerHTML = "*"

            // return false;
        }

        else {
            email.style.border = "";
            document.getElementById("emaill").innerHTML = ""
        }

        var email1 = document.getElementById("email").value
        var regxemail = /^([a-zA-Z0-9\.-]+)@([a-zA-z0-9]+).([a-z]{2,8})$/;
        if (regxemail.test(email1)) {
            email.style.border = "";
            document.getElementById("emaill").innerHTML = ""

        }

        else {
            email.style.border = "3px solid red";
            document.getElementById("emaill").innerHTML = "Invalid Email"
            // return false;
        }


        // ##################### NUMBER ######################

        if (number.value.trim() == "") {
            number.style.border = "3px solid red";
            document.getElementById("numberr").innerHTML = "*"

            // return false;
        }

        else {
            number.style.border = "";
            document.getElementById("numberr").innerHTML = ""
        }

        var number1 = document.getElementById("number").value
        var regxno = /^[7-9][0-9]{9}$/;
        if (regxno.test(number1)) {
            number.style.border = "";
            document.getElementById("numberr").innerHTML = ""


        }

        else {
            number.style.border = "3px solid red";
            document.getElementById("numberr").innerHTML = "Invalid Number"
            // return false;
        }



        // ##################### USERNAME ######################

        if (Username.value.trim() == "") {
            Username.style.border = "3px solid red";
            document.getElementById("Usernamee").innerHTML = "Plz enter a username"

            // return false;
        }

        else {
            Username.style.border = "";
            document.getElementById("Usernamee").innerHTML = ""
        }


        // ##################### PASSWORD ######################

        if (password.value == "") {
            password.style.border = "3px solid red";
            document.getElementById("passwordd").innerHTML = "*"

            // return false;
        }

        if (password.value.length < 4 || password.value.search(/[0-9]/) == -1 || password.value.search(/[a-z]/) == -1 || password.value.search(/[A-Z]/) == -1 || password.value.search(/[\@\#\$\&\%\*]/) == -1) {
            document.getElementById("passwordd").innerHTML = "password at Atleast 8 characters,one lowercase,one uppercase,one number,one special(@ # $ % & *)"
            // return false;
        }

        else {
            password.style.border = "";
            document.getElementById("passwordd").innerHTML = ""
        }


        // ##################### CONFIRMPASSWORD ######################

        if (conpassword.value.trim() == "") {
            conpassword.style.border = "3px solid red";
            document.getElementById("conpasswordd").innerHTML = "Password not match"

            // return false;
        }

        else {
            conpassword.style.border = "";
            document.getElementById("conpasswordd").innerHTML = ""
        }


















        return false;
    }

    else {
        return true;
    }
}
