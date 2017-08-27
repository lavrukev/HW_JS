function find () {
	var first = document.getElementById('one').value;
	var second = document.getElementById('two').value;
	var result = Math.max(first, second);
	var p = document.getElementById('out');
	document.getElementById('out').innerHTML=result;
	p.insertAdjacentHTML('beforeEnd' , ' больше');

}
document.getElementById('btn').onclick=find;
