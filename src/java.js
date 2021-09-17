var main=document.getElementById('main');
var smallimg=document.getElementsByClassName('small-img');
smallimg[0].onclick=function(){
	main.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
	main.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
	main.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
	main.src=smallimg[3].src;
}
var sel=document.getElementsByClassName('selector');
sel[0].onclick=function(){
location.assign('file:///C:/Users/bRahinE/Desktop/Lennies%20shirts/product2.html')
}
sel[1].onclick=function(){
location.assign('file:///C:/Users/bRahinE/Desktop/Lennies%20shirts/product2.html')
}
sel[2].onclick=function(){
location.assign('file:///C:/Users/bRahinE/Desktop/Lennies%20shirts/product2.html')
}
