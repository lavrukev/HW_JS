function logon () {
	var years = document.getElementById('one').value;
	var p = document.getElementById('out');
	var a = 2017-years;

	if (a>=16) {
		p.innerHTML = 'Добро пожаловать';
	}
	else {
		p.innerHTML = 'Вам меньше 16. Вход закрыт';
	}

}
document.getElementById('btn').onclick=logon;


