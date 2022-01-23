function random(min=0,max=1){
	return Math.floor(Math.random()*(max+1-min)+min);
}
function gen_upper(){
	return String.fromCharCode(random(65,90));
}
function gen_lower(){
	return String.fromCharCode(random(97,122));
}
function gen_num(){
	return random(0,9);
}
function gen_symb(){
	const symbols="@%+!#$^?:;-_()*&~{}[]";
	return symbols[random(0,symbols.length-1)];
}/*
function gen_cust(){
	let word=document.getElementById("cust").value;
	console.log(word);
	return word[random(0,word.length-1)];
}
function toggle(){ 
	let dis=document.getElementById("check").checked;
	if(dis){
		document.getElementById("cust").disabled=false;
		document.getElementById("ctext").style="color:white;pointer-events: all;";
	}else{
		document.getElementById("cust").disabled=true;
		document.getElementById("ctext").style="color:grey";
	}
}*/
function generate() {
	let password="";
	let pass_len=document.getElementById("slider").value;
	if (pass_len>=8) {
		let lower=document.getElementById("c2").checked;
		let upper=document.getElementById("c1").checked;
		let numbers=document.getElementById("c3").checked;
		let spcl=document.getElementById("c4").checked;
		if(upper+lower+numbers+spcl<=0)
			return;
		for (let i = 0; i <pass_len; i++) {
			const flag=random(0,4);
			if (lower && flag===0) {
				password+=gen_lower();
			}else if(upper && flag===1){
				password+=gen_upper();
			}else if(numbers && flag===2){
				password+=gen_num();
			}else if(spcl && flag===3){
				password+=gen_symb();
			}else{
				i--;
			}
		}
		document.getElementById("result").value=password;
	}else{
		alert("It is good to have password length of 8 or more");
	}
}
function copy(){
	let copyText = document.getElementById("result");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	navigator.clipboard.writeText(copyText.value);
	alert("Copied the text:  " + copyText.value);
}
function sliderVal(){
	document.getElementById("sliderval").value=document.getElementById("slider").value;
}
function increment(){
	document.getElementById("slider").stepUp();
	sliderVal();
}
function decrement(){
	document.getElementById("slider").stepDown();
	sliderVal();
}