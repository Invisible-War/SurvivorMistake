var house = false;
var task = document.getElementById("enemyhealth");
var tasks = document.getElementById("tasks");
var x;
var fire;
var ss;
var thirst = 0;
fire = new Image(500, 500);
fire.src = "fire.png";
fire.zIndex = "400";
fire.style.top = "500px";
fire.style.left = "1000px";
var lake = document.createElement("div");
lake.style.height = "1000px";
lake.style.width = "500px";
lake.style.position = "absolute";
lake.style.transform = "translateX(1000px) translateZ(1000px) perspective(1200px) rotateX(90deg) translateY(250px)";
lake.style.backgroundColor = "blue";
lake.style.borderRadius = "50%";
var laketrix;
var shelter;
var night = false;

var img = new Image();
img.src = "inside.jpg";
img.style.height = "100vh";
img.style.width = "100vw";
img.style.zIndex = "500";
img.style.position = "absolute";
document.getElementById("universe").appendChild(img);
img.hidden = true;
var food = 0;
var fight = false;
var username;
var users = [];
var winners = 0;
var players = [];
var main;
var link;
var a = 0;
var sheltermatrix;
var playerb = 0;
var playera = 0;
var b = 0;
var c = 0;
var y = 0;
var intro = document.getElementById("intro");
var range = 200;
var ammo = 20;
let keysPressed = {};
var you;
var matrix2;
var health = document.getElementById("health");
var matrix4;
function ended(audio) {
	if (audio.ended == true) {
		load();
	}
	else {
		setTimeout(ended, 1000);
	}
}
var ps = 0;
var hunts = 0;
var sol1 = document.getElementById("panther");
var matrix3;
var sold;
var p = 0;
var person;
var roomnumber = 0;
var otherplayer;
function foodget(){
	food++;
}
var deer = new Image(200, 200);
			deer.src = "deer.png";
			deer.style.zIndex = "2000";
			deer.style.position = "absolute";
deer.hidden = true;
			document.body.appendChild(deer);
function hunt(e) {
	if (e.key == "h") {
		if(daynumber < 3){
		alert("Click to get the deer in time.");
		
			deer.hidden = false;
			deer.addEventListener("click", foodget);
		
		setTimeout(() => {
			deer.removeEventListener("click", foodget);
			alert("You have " + food + " food. Every day, ten food will be used.");
			deer.hidden = true;
		}, 5000);
	}
		else{
			if(Math.floor(Math.random() * 15) === 2){
						alert("Edible mushroom found! Each one will count as 4 food.");
						food += 4;
					}
		}
}
}
function choose() {
	username = prompt("Choose an username!");

	ss = new SpeechSynthesisUtterance("Hello, "+ username +". Welcome to Survivor. We will pick you up in a month. OH NO WHAT IS THAT!!!!!!");
}
document.getElementById("dialog").hidden = false;
document.getElementById("universe").hidden = true;
document.getElementById("text").hidden = true;
document.body.style.background = "black";
document.getElementById("option").innerHTML = "Do You Want To Start?";



document.getElementById("neither").onclick = () => {
	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	choose();
	
	document.getElementById("heli").play();
speechSynthesis.speak(ss);
	ss.onend = ()=> {
	document.getElementById("heli").pause();
		const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	link = "";
	for (var i = 0; i < 40; i++) {
		link += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	console.log(link);
		load();
	}

	
};


var t;
var day = document.createElement("h1");
var daynumber = 1;
var wood;
var wood1;
var wood2;
var wood3;
var wood4;
var firematrix;
var wood5;
function time(){
	if(night == false){
		document.getElementById("night").style.opacity = "40%";
		
			alert("It is night time. Go run around riskingly, or sleep safely in your shelter");
		night = true;
	}
	else if(night == true){
				document.getElementById("night").style.opacity = "0%";
		universe.hidden = true;
	 day.hidden = false;
		 day.style.top = "100px";
													 day.style.left = "100px";
								 day.style.position = "relative";
												 food -= 10;
												 if(food < 0){
													 alert("You do not have enough food. Game Over.");
													 var attempt = confirm("Try again?");
													 if(attempt == true){
														 location.reload();
													 }
													 else{
														 window.close();
													 }
												 }
												 daynumber++;
												 if(daynumber === 2){
													 day.innerHTML = "Day " + daynumber + ". Look around the area for wood. 6 wood will help you make a fire to cook your meat.";
													 task.max = 6;
													 task.value = 6;
													 tasks.innerHTML = "Make Fire";
												 }
		 if(daynumber === 3){
													 day.innerHTML = "Day " + daynumber + ". Look around the area for other food. The deer are getting skeptical.";
													 task.max = 6;
													 task.value = 6;
													 tasks.innerHTML = "Forage";
												 }
		if(daynumber === 4) {
			document.getElementById("universe").appendChild(lake);
			laketrix = new WebKitCSSMatrix(window.getComputedStyle(lake).transform);
		}
		if(daynumber >= 4){
			day.innerHTML = "Day " + daynumber + ". Keep your stats in check. Now, water is a factor. Find the lake at (0, 0), then press D to drink.";
		}
		if(daynumber > 4 && daynumber % 2 != 0){
			thirst += 10;
			if(thirst >=30){
				 alert("You did not drink enough. Game Over.");
													 var attempt = confirm("Try again?");
													 if(attempt == true){
														 location.reload();
													 }
													 else{
														 window.close();
													 }
			}
		}
		alert("Wake up sleepyhead! You must go live today!");
		
		night = false;
												 setTimeout(()=> {
													
													 day.hidden = true;
													 universe.hidden = false;
												 }, 5000)
	}
	setTimeout(time, 240000);
}
function load() {
	setTimeout(time, 240000);
	document.getElementById("heli").pause();
	document.getElementById("boom").play();
	day.innerHTML = "Day " + daynumber + ". Use arrow keys to move and  space to search for resources.";
	document.body.style.background = "black";
	day.style.color = "white";
	day.style.position = "absolute";
	day.style.zIndex = "140";
	day.style.top = "50%";
	day.style.left = "50%";
	document.body.appendChild(day);
	setTimeout(() => {
		for (var i = 0; i < 5; i++) {
			wood = document.createElement("div");
			wood.setAttribute("id", i);
			wood.style.position = "absolute";
			wood.style.transformStyle = "preserve-3d";
			wood.style.transform = "translate3d(" + (50 * Math.floor(Math.random() * 10)) + "px, 0px, " + (50 * Math.floor(Math.random() * 10)) + "px) perspective(600px)";
			document.body.appendChild(wood);
		}
		day.hidden = true;


		wood1 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("0")).transform);
		wood2 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("1")).transform);
		wood3 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("2")).transform);
		wood4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("3")).transform);
		wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform); document.addEventListener("keydown", function(e) {

			matrix4 = new WebKitCSSMatrix(
				window.getComputedStyle(document.getElementById("universe")).transform
			);
			sol1 = document.getElementById("panther");
			document.getElementById("coordinates").innerHTML = `You are at X: ${-matrix4.m41} Z: ${matrix4.m43}`;


			a = parseInt(a);
			b = parseInt(b);
			y = parseInt(y);
			var worldclone;
			if (document.getElementById("0") != null) {
				wood1 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("0")).transform);
			}
			if (document.getElementById("1") != null) {
				wood2 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("1")).transform);
			}
			if (document.getElementById("2") != null) {
				wood3 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("2")).transform);
			}
			if (document.getElementById("3") != null) {
				wood4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("3")).transform);
			}
			if (document.getElementById("4") != null) {
				wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform);
			}
			if(e.key == "d" && daynumber >= 4){
				if(matrix4.m41 === laketrix.m41 && matrix4.m43 === laketrix.m43){
					thirst-= 2;
					alert("You are now less thirsty. doing this 5 times a day will even things out.");
				}
			}
			if (e.key == "ArrowUp") {
				e.preventDefault();
				a += 50;
				playera += 50;
				document.getElementById("universe").style.transform =
					"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + (a + 5000) + "px)";
			}
			if (e.key == "ArrowDown") {
				e.preventDefault();
				a -= 50;
				playera -= 50;
				document.getElementById("universe").style.transform =
					"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + (a + 5000) + "px)";
			}
			if (e.key == "ArrowRight") {
				e.preventDefault();
				playerb += 50;
				b -= 50;
				document.getElementById("universe").style.transform =
					"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + (a + 5000) + "px)";
			}
			if (e.key == "ArrowLeft") {
				e.preventDefault();
				b += 50;
				playerb -= 50;
				document.getElementById("universe").style.transform =
					"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + (a + 5000) + "px)";
			}
			if(e.key == "x" && task.value === 0 && daynumber >= 2){
				fire.style.position = "absolute";
				fire.style.transform = "translate3d(" + b + "px, " + y + "px,"+ a +"px) perspective(" + (a + 5000) + "px)";
				
				document.getElementById("universe").appendChild(fire);
				alert("The fire will burn for half the day. Press x whenever you have enough wood and need to cook your food.");
				task.value = 5;
				firematrix = new WebKitCSSMatrix(window.getComputedStyle(fire).transform);
				task.max = 5;
				setTimeout(()=> {
					fire.remove();
					firematrix = "";
				}, 120000);
			}
			if(e.key == "x" && fire.style.position ==="absolute" && daynumber >= 2){
				if(firematrix.m41 === matrix4.m41 && firematrix.m43 === matrix4.m43 ){
				alert("Food cooked. It will now fill you twice as much.");
				food = food * 2;
				}
			}
			if (e.key == " ") {
				
				if (-matrix4.m41 === wood1.m41 && matrix4.m43 === wood1.m43) {
					alert("Wood found!");
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if (-matrix4.m41 === wood2.m41 && matrix4.m43 === wood2.m43) {
					alert("Wood found!");
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if (-matrix4.m41 === wood3.m41 && matrix4.m43 === wood3.m43) {
					alert("Wood found!");
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if (-matrix4.m41 === wood4.m41 && matrix4.m43 === wood4.m43) {
					alert("Wood found!");
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if (-matrix4.m41 === wood5.m41 && matrix4.m43 === wood5.m43) {
					alert("Wood found!");
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						alert("Huh, maybe I should press x to build my house where I am.");
						house = true;
					}
				}

			}

			if (e.key == "x" && house == true) {
				alert("House built!");
				house = false;
				shelter = document.createElement("img");
				shelter.style.position = "absolute";
				shelter.style.zIndex = "8";
				shelter.src = "shack.png";
				shelter.style.left = "200px";
				shelter.style.top = "200px";
				shelter.style.transform = "translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + (a + 5000) + "px)";
				document.getElementById("universe").appendChild(shelter);
				sheltermatrix = new WebKitCSSMatrix(window.getComputedStyle(shelter).transform);
				alert("Hint: If you ENTER your house, you have double your health.");
				tasks.innerHTML = "Find food";
				alert("Go bring some food back home. Go hunting for food in a space by pressing 'h'.");
				document.onkeydown = hunt;
			}
			if (sheltermatrix) {

				if (e.key == "Enter" && matrix4.m41 === sheltermatrix.m41 && sheltermatrix.m43 === matrix4.m43) {
					if (img.hidden == true) {
						img.hidden = false;
						health.max = 10;
						health.value = 10;
						if(night == true){
							time();
						}
					}
					else if (img.hidden == false) {
						img.hidden = true;
						health.max = 5;
						health.value = 5;
					}

				}

			}
			if (e.key == "s" && e.key == "n" && e.key == "a" && e.key == "p") {
				document.getElementsByClassName("tree").forEach(tree => {
					tree.hidden = true;
				});
			}


		});
		document.getElementById("universe").hidden = false;
		document.getElementById("text").hidden = false;
		var dirt = document.getElementById("boxDiv");
		var rows = document.getElementById("mainDiv");
		var dirtnew;
		for (var i = 0; i < 3000; i += 50) {
			dirtnew = dirt.cloneNode(true);
			dirtnew.style.transform =
				"translateY(" + -i + "px) translateX(" + (i - 1000) + "px)";
			dirtnew.style.height = "50px";
			dirtnew.style.width = "50px";
			dirtnew.style.transformStyle = "preserve-3d";
			rows.appendChild(dirtnew);
		}
		var newrow;
		var z = 0;
		while (z < 60) {
			z++;
			newrow = rows.cloneNode(true);
			newrow.style.top = "100px";
			newrow.style.height = "1000px";
			newrow.style.width = "1000px";
			newrow.style.transformStyle = "preserve-3d";
			newrow.style.perspective = "800px";
			newrow.style.position = "absolute";
			newrow.style.transform =
				"rotateX(180deg) translateY(1000px) perspective(3000px) translateZ(" +
				(z * 50 + 1000) +
				"px)";

			document.getElementById("world").appendChild(newrow);
		}

		for (let i = 0; i < document.getElementsByClassName("tree").length; i++) {
			t = Math.floor(Math.random() * 3);
			if (t === 2) {
				document.getElementsByClassName("tree")[i].hidden = false;
			}
		}
	}, 5000);


}
