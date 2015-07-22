function lightswitch(){
	var body = document.getElementsByTagName("body")[0];
	var light = document.getElementById("light-img");

	if(body.style.backgroundImage != "none"){
		body.style.backgroundImage = "none";
		body.style.backgroundColor = "#000000";
		light.src = "../img/lightoff-01.png";
	}else{
		body.style.backgroundImage = "url('../img/pixel_weave.png')";
		light.src = "../img/lighton-01.png";
	}
}

function textswitch(){
	var text = document.getElementById("text-img");
	var pics = document.getElementsByClassName('project-high-image');
	var shrink = document.getElementsByClassName('shrink');
	var wrap = document.getElementsByClassName('shrinkwrap');
	if(shrink[0].style.maxHeight === "1px"){
		for (var i = 0; i < pics.length; i++) {
			pics[i].firstElementChild.style.width = "800px";
			pics[i].firstElementChild.style.height = "600px";
			pics[i].firstElementChild.style.marginTop = "-300px";
			pics[i].firstElementChild.style.marginLeft = "-400px";
			shrink[i].style.maxHeight = "350px";
			shrink[i].style.marginTop = "-175px";
			text.src = "../img/texton-01.png";
		};
	}else{
		for (var i = 0; i < pics.length; i++) {
			pics[i].firstElementChild.style.width = "1000px";
			pics[i].firstElementChild.style.height = "750px";
			pics[i].firstElementChild.style.marginTop = "-375px";
			pics[i].firstElementChild.style.marginLeft = "-500px";
			shrink[i].style.maxHeight = "1px";
			shrink[i].style.marginTop = "0px";
			text.src = "../img/textoff-01.png";
		};
	}
}

function focusFeatures(event){
	console.log("focusFeatures");
	var event = event || window.event;
	if(event.keyCode == 76){
		lightswitch();
	}else if(event.keyCode == 84){
		textswitch();
	}
}

addEventListener('keydown', focusFeatures, false);