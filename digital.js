var a=setInterval(fun2,1000);
function fun2()
{
	 var a=new Date().getHours();
	 var b=new Date().getMinutes();
	 var c=new Date().getSeconds();
	 if(a<10){document.getElementById("hrs").innerHTML="0"+a}
	else{document.getElementById("hrs").innerHTML=a}
	if(b<10){document.getElementById("min").innerHTML="0"+b}
	else{document.getElementById("min").innerHTML=b}
	if(c<10){document.getElementById("sec").innerHTML="0"+c}
	else{document.getElementById("sec").innerHTML=c}

}