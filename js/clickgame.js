// Include CSS and JQuery
var gameCSS = document.createElement("STYLE");
gameCSS.setAttribute('id', 'gameCSS');
gameCSS.setAttribute('type', 'text/CSS');
gameCSS.innerHTML = "#gamebutton{position: fixed; top: 300px; right: -190px; width: 200px; height: 50px; background-color: #cccccc;	transition: width .5s; text-align: center; z-index: 99999; box-shadow: 0px 8px 6px -6px #999999; color: #666666;}" +
	"#playtext{font-size: 20px; height: 100%; width: 100%; overflow: hidden; position: absolute; top: 50%; margin-top: -12px; left: 50%; margin-left: -100px; opacity: 0; z-index: 100001; cursor: pointer;}" +
	"#timer{font-size: 20px; height: 100%; width: 100%; overflow: hidden; position: absolute; top: 50%; margin-top: -12px; left: 50%; margin-left: -100px; z-index: 100000; opacity: 0; cursor: pointer;}" + 
	"#dontclickme{height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 99998; /*background-color: blue;*/}	" + 
	"#gameendnotification{position: fixed; width: 100%; height: 100px; bottom: -100px; left: 0; text-align: center; background-color: #cccccc; z-index: 99998;}	" +
	"#gameendnotification:hover{z-index:100000;}" +
	"#notificationtext{ font-size: 40px; height: 44px; width: 600px; text-align: center; position: absolute; top: 50%; margin-top: -22px; left: 50%; margin-left: -300px;}" +
	"#settings{width: 450px; position: fixed; left: 50%; margin-left: -225px; text-align: center; z-index: 99999; background-color: #cccccc; padding: 20px; box-shadow: 0px 8px 6px -6px #999999; height: 450px; top: -500px; margin-top: -225px; color: #666666;}" +
	"#settingshead{font-size: 30px; margin-bottom: 10px; text-align: center;}" +
	"#settings table{margin-left: auto; margin-right: auto;}" +
	"#settings td{text-align: left; width: 150px; padding: 5px; padding-left: 20px;}" +
	"#settings input{width: 35px;}";
document.getElementsByTagName("head")[0].appendChild(gameCSS);
var scriptJQ = document.createElement("SCRIPT");
scriptJQ.setAttribute('src', 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.1.min.js');
scriptJQ.setAttribute('id', 'scriptJQ');
document.body.appendChild(scriptJQ);
     
function setup(){
	// Add all the buttons and elements needed for the game

	var code2add = "<div id=\"gamebutton\"></div>";
	$("body").append(code2add);
	code2add = "<p id=\"playtext\" onclick=\"start()\">Click to Play</p>" +
		"<div id=\"timer\" onclick=\"pause()\"></div>";
	$("#gamebutton").append(code2add);
	$("#gamebutton").animate({right: "0"},500);
	$("#playtext").animate({opacity: "1"},500);
	code2add = "<div id=\"gameendnotification\"><div id=\"notificationtext\" onclick=\"\"></div></div>";
	$("body").append(code2add);
	code2add = "<div id=\"settings\">"+
					"<div id=\"settingshead\">Settings</div>"+
					"<table>"+
						"<tr>"+
							"<td>Bubble Diameter:</td>"+
							"<td><input type=\"number\" id=\"diameter\" value=\"50\"></td>"+
						"</tr>"+
						"<tr>"+
							"<td>Bubbles Dodge:</td>"+
							"<td><input type=\"checkbox\" id=\"dodge\" checked></td>"+
						"</tr>"+
						"<tr>"+
							"<td>Dodge Speed:</td>"+
							"<td><input type=\"number\" id=\"speed\" value=\"1\"></td>"+
						"</tr>"+
						"<tr>"+
                    		"<td>Bubbles Multiply:</td>"+
               				"<td><input type=\"checkbox\" id=\"multiply\" checked></td>"+
               			"</tr>"+
                    	"<tr>"+
                    		"<td>Multipy Frequency:</td>"+
               				"<td><input type=\"number\" id=\"multiplyFreq\" value=\"5\"> Clicks</td>"+
               			"</tr>"+
                    	"<tr>"+
                    		"<td>Bubbles Fade:</td>"+
               				"<td><input type=\"checkbox\" id=\"fade\" checked></td>"+
               			"</tr>"+
                    	"<tr>"+
                    		"<td>Fade Pace:</td>"+
               				"<td><input type=\"number\" id=\"fadePace\" value=\"10\"></td>"+
               			"</tr>"+
                    	"<tr>"+
                    		"<td>Bubbles Shrink:</td>"+
               				"<td><input type=\"checkbox\" id=\"shrink\" checked></td>"+
               			"</tr>"+
                    	"<tr>"+
                    		"<td>Percent Shrink:</td>"+
               				"<td><input type=\"number\" id=\"shrinkPercent\" value=\"10\"></td>"+
               			"</tr>"+
                    	"<tr>"+
                    		"<td>Shrink Frequency:</td>"+
               				"<td><input type=\"number\" id=\"shrinkFreq\" value=\"5\"> Clicks</td>"+
               			"</tr>"+
                    "</table>"+
                "</div>"+
                "<audio id=\"popsound\" src=\"balloon.wav\" preload=\"auto\">";
    $("body").append(code2add);
    $("#settings").animate({top:"50%"},500);
}

// Global Game Variables
	var score = 0;
	var paused = true;
	var over = false;
	var enabled = false;
	var objs = 0;
	var objArray = [];
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	var fade = true;
	var fadePace = 10;
	var multiply = false;
	var multiplyFreq = 5;
	var dodge = false;
	var shrink = false;
	var shrinkClicks = 0;
	var shrinkPercent = 90;
	var bubbleSpeed = 0;
	var bubbleDiameter = 50;

function settingsInit(){
	fade = $("#fade").is(":checked");
	fadePace = $("#fadePace").val();
	multiply = $("#multiply").is(":checked");
	multiplyFreq = $("#multiplyFreq").val();
	dodge = $("#dodge").is(":checked");
	shrink = $("#shrink").is(":checked");
	shrinkClicks = $("#shrinkFreq").val();
	shrinkPercent = $("#shrinkPercent").val()/100;
	bubbleSpeed = $("#speed").val();
	bubbleDiameter = $("#diameter").val();
}

// Initial values for the object you try to click
function clickobject(objnum){
	var thisObj = this;
	this.id = objnum;
	this.diameter = null;
	this.color = null;
	this.image = null;
	this.bubble = null;
	this.x = null;
	this.y = null;
	this.clickNum = null;
	this.opacity = null;
	this.speed = null;
	this.maxX = null;
	this.maxY = null;

	this.init = function(){

		this.image = "none";
		this.bubble = 10;
		this.opacity = 1;
		this.diameter = bubbleDiameter;
		this.color = "rgb(" + r + "," + g + "," + b + ")";
		this.clickNum = 0;
		this.speed = bubbleSpeed;
		this.maxY = $(window).height() - this.diameter;
		this.maxX = $(window).width() - this.diameter;
		this.y = Math.random() * this.maxY;
		this.x = Math.random() * this.maxX;

		var div = document.createElement("DIV");
		div.id = "clickme" + this.id;
		div.style.top = this.y + "px";
		div.style.left = this.x + "px";
		div.style.height = this.diameter + "px";
		div.style.width = this.diameter + "px";
		div.style.position = "fixed";
		div.style.backgroundColor = this.color;
		div.style.zIndex = 99999;
		div.style.borderRadius = "50%";
		div.style.borderStyle = "solid";
		div.style.borderWidth = "1px";
		div.style.borderColor = "white";
		div.style.cursor = "pointer";
		div.onclick = function(){
			thisObj.clicked();
		};
		$("body").append(div);
	};

	this.update = function(){
		this.y = Math.min(Math.max(this.y,0),this.maxY);
		this.x = Math.min(Math.max(this.x,0),this.maxX);
		// console.log("x: " + this.x + " y: " + this.y);
		$("#clickme" + this.id).css({
			opacity: "" + this.opacity,
			height: this.diameter + "px",
			width: this.diameter + "px",
		});
		$("#clickme" + this.id).animate({top: this.y + "px", left: this.x + "px",},100);
	}

	this.life = function(){
		if(fade){
			$("#clickme" + this.id).animate({opacity: 0,}, (fadePace*1000), function(){
				thisObj.destroy();
				gameover()
			});
		}
	};

	this.clicked = function(){
		document.getElementById("popsound").play();
		checkObj(this);
		checkStates();
		if(paused || over){

		}else{
			score = score + 1;
			this.clickNum++;
			this.move();

			// Game intensifiers
			if(this.clickNum % shrinkClicks === 0 && this.clickNum != 0 && shrink){
				this.diameter -= shrinkPercent*this.diameter;
				this.maxY = $(window).height() - this.diameter;
				this.maxX = $(window).width() - this.diameter;
			}
		}
		updateBoard();
	};

	this.dodge = function(mouseX, mouseY){
		var difx = (this.x + this.diameter/2) - mouseX;
		var dify = (this.y + this.diameter/2) - mouseY;
		var dist = Math.sqrt(Math.pow(difx,2)+Math.pow(dify,2));
		var ux = difx/dist;
		var uy = dify/dist;
		
		this.x = this.x + this.speed*ux;
		this.y = this.y + this.speed*uy;
		
		if(this.x < this.diameter + 10){
			this.x+=this.speed/2;
		}
		if(this.y < this.diameter + 10){
			this.y+=this.speed/2;
		}
		if(this.y > this.maxY - 10){
			this.y-=this.speed/2;
		}
		if(this.x > this.maxX - 10){
			this.x-=this.speed/2;
		}

		this.y = Math.min(Math.max(this.y,0),this.maxY);
		this.x = Math.min(Math.max(this.x,0),this.maxX);
		


		$("#clickme" + this.id).css({
			top: this.y + "px",
			left: this.x + "px",
		});
	};

	this.move = function(){
		$("#clickme" + this.id).stop();
		this.opacity = 1;

		this.y = Math.random() * this.maxY;
		this.x = Math.random() * this.maxX;

		this.update();
		this.life();
	};

	this.pause = function(){
		$("#clickme" + this.id).stop(true,false);
	};

	this.resume = function(){
		this.life();
	};

	this.destroy = function(){
		$("#clickme" + this.id).remove();
	};

	this.init();
	this.life();
	objArray.push(this);
}

// The clock
var timer = {
	minutes: 0,
	seconds: 0,
	interval: 0,
	curtime: "00:00",

	start: function(){
		timer.seconds = 0;
		timer.minutes = 0;
		timer.curtime = "00:00";
		timer.resume();
	},

	pause: function(){
		if(timer.interval === 0){
			timer.resume();
		}else{
			clearInterval(timer.interval);
			timer.interval = 0;
		}
	},

	stop: function(){
		clearInterval(timer.interval);
		timer.interval = 0;
	},

	resume: function(){
		timer.interval = setInterval(
			function(){
				if(timer.seconds < 59){
					timer.seconds++;
				}else{
					timer.seconds = 0;
					timer.minutes++;
				}
				timer.display();
			},1000);
	},

	display: function(){
		var minutes = "";
		var seconds = ""
		
		if(timer.seconds < 10){
			seconds = "0" + timer.seconds;
		}else{
			seconds = timer.seconds;
		}
		if(timer.minutes < 10){
			minutes = "0" + timer.minutes;
		}else{
			minutes = timer.minutes;
		}
		
		timer.curtime = minutes + ":" + seconds;
		$("#timer").html(timer.curtime);	
	},
}

function start(){
	// Starts the timer and the game!

	score = 0;
	paused = false;
	over = false;
	$("#playtext").hide(400);
	$("#timer").html("00:00");					//Set default clock display
	$("#timer").animate({opacity: "1"}, 500);	
	timer.start();

	settingsInit();
	$("#settings").animate({top:"-500px"},500);

	// Create background that causes you to lose if you click it
	var backdiv = document.createElement("DIV");
	backdiv.id = "dontclickme";
	backdiv.onclick = function(){
		if(paused){

		}else{
			gameover();
		}
	};
	$("body").append(backdiv);
	

	var firstobj = new clickobject(objs);
}

function pause(){
	// If the game is not over, pause/play the timer and toggle pause flag

	if(!over){
		timer.pause();
		paused = !paused;
		if(paused){
			for (var i = 0; i < objArray.length; i++) {
				objArray[i].pause();
			};
		}else{
			for (var i = 0; i < objArray.length; i++) {
				objArray[i].resume();
			};
		}
	}else{
		//reset the game
		resetgame();
	}
}

function updateColors(){
	r = Math.round(Math.random() * 255);
	g = Math.round(Math.random() * 255);
	b = Math.round(Math.random() * 255);
}

function updateBoard(){
	// Establishes the difficulty updates
	
	if(score % multiplyFreq == 0 && score != 0 && multiply){
		objs++;
		updateColors();
		var anotherClickObj = new clickobject(objs);
	}
}

window.onmousemove = function(event){
	if(dodge){
		for (var i = 0; i < objArray.length; i++) {
			objArray[i].dodge(event.x,event.y);
		};
	}
}

function gameover(){
	// Responds to the click function of the dontclickme element

	timer.stop();
	paused = true;
	over = true;
	$("#dontclickme").remove();
	$("#notificationtext").html("Score: " + score + " Time: " + timer.curtime);
	$("#gameendnotification").animate({bottom: "0"},500);
	$("#settings").animate({top: "50%"});
	for (var i = 0; i < objArray.length; i++) {
		$("#clickme" + objArray[i].id).stop();	
		$("#clickme" + objArray[i].id).animate({opacity: "0"},500);	
	};
	setTimeout(function(){
		for (var i = 0; i < objArray.length; i++) {
			objArray[i].destroy();	
		};},500);
}

function resetgame(){
	// When the user clicks the timer the game will start over

	$("#gameendnotification").animate({bottom: "-100px"},500);
	start();
}

function quitgame(){ 
	// Basically the opposite of setup... it deletes all the needed elements from the body

	over = false;
	enabled = false;
	timer.stop();
	$("#gamebutton").animate({right: "-300px"},500);
	$("#playtext").animate({opacity: "0"},500);
	$("#gameendnotification").animate({bottom: "-100px"},500);
	$("#settings").animate({top: "-500px"},500);
	for (var i = 0; i < objArray.length; i++) {
		$("#clickme" + objArray[i].id).stop();
		$("#clickme" + objArray[i].id).animate({opacity: "0"},500);	
	};
	setTimeout(function(){
		$("#gamebutton").remove();
		$("#gameendnotification").remove();
		$("#dontclickme").remove();
		$("#settings").remove();
		for (var i = 0; i < objArray.length; i++) {
			objArray[i].destroy();	
		};},500);
}

function enable(event){
	// Enables/disables the game
		var event = event || window.event;
		if(event.keyCode == 71 && !enabled){ // 71 is the code for the 'G' key
			game = true;
			enabled = true;
			setup();
		}else if(event.keyCode == 71){
			game = false;
			enabled = false;
			quitgame();
		}
	}
addEventListener('keydown', enable, false);

function checkStates(){
	// For debugging

	console.log("Score: " + score);
	console.log("Paused: " + paused);
	console.log("Over: " + over);
	console.log("Game: " + enabled);
	console.log("r: " + r);
	console.log("g: " + g);
	console.log("b: " + b);
	console.log("");
}

function checkObj(obj){
	// For debugging

	console.log("x: " + obj.x);
	console.log("y: " + obj.y);
	console.log("id: " + obj.id);
	console.log("color: " + obj.color);
	console.log("diameter: " + obj.diameter);	
	console.log("bubble: " + obj.bubble);	
	console.log("clicknum: " + obj.clickNum);	
	console.log("opacity: " + obj.opacity);	
	console.log("");	
}
