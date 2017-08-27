function find () {
	var first = document.getElementById('one').value;
	var second = document.getElementById('two').value;
	
	if (first==second) {
		var p = document.getElementById('out');
		p.insertAdjacentHTML('beforeEnd' , ' они равны');
	}
	else {
		var result = Math.max(first, second);
		var p = document.getElementById('out');
		document.getElementById('out').innerHTML=result;
		p.insertAdjacentHTML('beforeEnd' , ' больше');
	}


}
document.getElementById('btn').onclick=find;


