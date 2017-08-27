function kvartira() {
	var a = document.getElementById('one').value;

	if (a>=1 && a<=20) {
		var p = document.getElementById('out');
		p.insertAdjacentHTML('beforeEnd' , '<b>Первый подъезд</b>');
	}
	else if (a>=21 && a<=64) {
		var p = document.getElementById('out');
		p.insertAdjacentHTML('beforeEnd' , '<b>Второй подъезд</b>');
	}
	else if (a>=65 && a<=80) {
		var p = document.getElementById('out');
		p.insertAdjacentHTML('beforeEnd' , '<b>Третий подъезд</b>');
	}
	else {
		var p = document.getElementById('out');
		p.insertAdjacentHTML('beforeEnd' , '<b>Ты вообще не с этого дома</b>');
	}
}
document.getElementById('btn').onclick = kvartira;