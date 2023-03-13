function validateForm(){
	var firstname = document.getElementsByName("firstname")[0].value;
	var lastname = document.getElementsByName("lastname")[0].value;
	var username = document.getElementsByName("username")[0].value;
	var regno = document.getElementsByName("regno")[0].value;
	var password = document.getElementsByName("password")[0].value;
	var confirm = document.getElementsByName("confirm")[0].value;
	var email = document.getElementsByName("email")[0].value;
	var phone = document.getElementsByName("phone")[0].value;
	var gender = document.getElementsByName("gender")[0].value;

	length = firstname.length;
	length = lastname.length;
	length = username.length;
	length = regno.length;
	length1 = password.length;
	length1 = confirm.length;
	length = email.length;
	length = phone.length;

	// function checkPass(password = confirm) {
	// 	alert("Password mismatch");
	// }

	if (length < 1) {
		alert("Can not be null!");
		return false;
	}
	else if (length1 <8) {
		alert("Password is too short");
		return false;
	}
	else{
		alert("Account created successfully.");
	}
}