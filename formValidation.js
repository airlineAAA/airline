function validateForm() {
	var x = document.forms["myForm"]["username"].value;
	var valid = 1;
	if(x == null || x == "") {
		alert("Имя пользователя обязательно");
		valid = 0;
	}
	var y = document.forms["myForm"]["pwd1"].value;
	if(y == null || y == "") {
		alert("Пароль обязателен");
		valid = 0;
	}

	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z0-9])(.{6,})$/;
	if(!regex.test(y)){
			alert("Пароль должен быть действительным");
			valid = 0;
	}
	
	var z = document.forms["myForm"]["firstname"].value;
	if(z == null || z == "") {
		alert("Имя обязательно");
		valid = 0;
	}
	var w = document.forms["myForm"]["lastname"].value;
	if(w == null || w == "") {
		alert("Фамилия обязательна");
		valid = 0;
	}
	var v = document.forms["myForm"]["email"].value;
	if(v == null || v == "") {
		alert("Email обязателен");
		valid = 0;
	}
	var u = document.forms["myForm"]["tel"].value;
	if(u == null || u == "") {
		alert("Телефон обязателен");
		valid = 0;
	}
	if(valid == 0)
	return false;
	else 
	return true;
}