function validateForm(){
    var username = document.getElementsByName("username")[0].value;
    var pass = document.getElementsByName("pass")[0].value;
    var confirm = document.getElementsByName("confirm")[0].value;
    length = pass.length;
    length1 = username.length;

    if (length1 < 8) {
        alert("username too short");
        return false;
    }
    else if (length < 8) {
        alert("Password too short!");
        return false;
    }
    else{
        alert("Login successful");             
    }
}