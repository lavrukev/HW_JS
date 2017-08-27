function calculation () {
	var a = document.getElementById('one').value;
	var p = document.getElementById('out');

	
	if (a<3 && a>=0) {
		p.innerHTML = 'Ваша надбавка составляет 0%';
	}
	else if (a>=3 && a<10) {
		p.innerHTML = 'Ваша надбавка составляет 10%';
	}
	else if (a>=10 && a<20) {
		p.innerHTML = 'Ваша надбавка составляет 20%';
	}
	else if (a>=20 && a<30) {
		p.innerHTML = 'Ваша надбавка составляет 30%';
	}
	else if (a<0) {
		p.innerHTML = 'Вы ввели неправильные данные - отрицательное число';
	}
	else {
		p.innerHTML = 'Вы ввели неверно данные. Повторите ввод (только цифры)';
	}
}
document.getElementById('btn').onclick=calculation;


