function calculation () {
	var a = document.getElementById('one').value;
	// var b = document.getElementById('two').value;
	var p = document.getElementById('out');
	// var t1=b*0.1;
	// var t2=b*0.2;
	// var t3=b*0.3;

	// document .getElementById('tax').innerHTML = t1;
	// document .getElementById('tax').innerHTML = t2;
	// document .getElementById('tax').innerHTML = t3;

	
	if (a<3 && a>=0) {
		p.innerHTML = 'Ваша надбавка составляет 0%';
	}
	else if (a>=3 && a<10) {
		p.innerHTML = 'Ваша надбавка составляет 10%';
		// t.innerHTML = 'Итого'
	}
	else if (a>=10 && a<20) {
		p.innerHTML = 'Ваша надбавка составляет 20%';
	}
	else if (a>=20 && a<30) {
		p.innerHTML = 'Ваша надбавка составляет 30%';
	}
	else if (a>50) {
		p.innerHTML = 'Вы реально Терминатор!';
	}
	else if (a<0) {
		p.innerHTML = 'Вы ввели неправильные данные - отрицательное число';
	}
	else {
		p.innerHTML = 'Вы ввели неверно данные. Повторите ввод (только цифры)';
	}
}
document.getElementById('btn').onclick=calculation;


