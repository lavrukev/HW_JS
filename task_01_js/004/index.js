function on () {
	var login = document.getElementById('one').value;
	var password = document.getElementById('two').value;
	var a = 'ivan';
	var b = 'alex';
	var c = 'petr';
	var d = '334455';
	var e = '777';
	var f = 'b5678';
	var p = document.getElementById('out');


	if (login===a && password===d) {
		p.innerHTML = 'Добро пожаловать';
	}
	if (login===b && password===e) {
		p.innerHTML = 'Добро пожаловать';
	}
	if (login===c && password===f) {
		p.innerHTML = 'Добро пожаловать';
	}
	else {
		p.innerHTML = 'Ошибка входа';
	}

}
document.getElementById('btn').onclick=on;


