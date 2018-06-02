var tickSpeed = 10;
var timing;

var partyP = [];
var partyO = [];

var party0 = [];


var gScreen = document.getElementById("gScreen");

var sideBar = document.getElementById("sideBar");
var sInfo = ""; // INFORMATION FOR SIDEBAR

var input0 = document.getElementById("inputM0");
var input1 = document.getElementById("inputM1");
var input2 = document.getElementById("inputM2");
var input3 = document.getElementById("inputM3");
var input4 = document.getElementById("inputM4");

var stage = 0; // stage is the current plot-position of the game


function critFind(n) {
	var ret = Math.ceil(Math.random() * (100));
	if(n >= ret) {
		return true;
	} else {
		return false;
	}

}

function SUMO1DEFAULT(lev) {
	this.id = 0;
	this.level = lev;
	this.bHealth = 100 + 20 * this.level;
	this.mHealth = 100 + 20 * this.level;
	this.bAttack = 40 + 5 * this.level;
	this.bDefense = 40 + 5 * this.level;
	this.bCrit = 5 + 1 * this.level;
	this.name = "Herba";


//	this.maxPP = [5,10,20,15];
//	this.movePP = this.maxPP;
	this.move0 = {
		moveName: "MOVE0DEFAULT",
		movePP: 5,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 5 * lev) * 2 * (1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 5 * lev) * 1.5 *(1- es.bDefense / 100);
				}
				this.movePP--;
			}
		},
		

	};


	this.move1 = {
		go: function() {},
		moveName: "MOVE1DEFAULT",
		movePP: 5,
	};

	this.move2 = {
		go: function() {},
		moveName: "MOVE2DEFAULT",
		movePP: 5,
	};

	this.move3 = {
		go: function() {},
		moveName: "MOVE3DEFAULT",
		movePP: 5,
	};
}

function SUMO2DEFAULT(leve) {
	this.id = 1;
	this.level = leve;
	this.bHealth = 100 + 40 * this.level;
	this.mHealth = 100 + 40 * this.level;
	this.bAttack = 40 + 1 * this.level;
	this.bDefense = 40 + 1 * this.level;
	this.bCrit = 5 + 1 * this.level;
	this.name = "Abreh";



	this.move0 = {
		moveName: "MOVE0DEFAULT",
		movePP: 5,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 5 * leve) * 2 *(1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 5 * leve) * 1.5 *(1 - es.bDefense / 100);
				}
				this.movePP--;
			}
		},
		

	};

	this.move1 = {
		go: function() {},
		moveName: "MOVE1DEFAULT",
		movePP: 5,
	};

	this.move2 = {
		go: function() {},
		moveName: "MOVE2DEFAULT",
		movePP: 5,
	};

	this.move3 = {
		go: function() {},
		moveName: "MOVE3DEFAULT",
		movePP: 5,
	};
}





var bTiming;

var turn = 0; // 0: MAIN PLAYER; 1: OPPONENT

var chosenMov;
	chosenMov = null;

function battling(a, b) {
 	if(turn == 0) {
 		if(chosenMov) {
 			doMove(chosenMov, a, b)
 			turn = 1;
 		}
 		chosenMov = null;
 		
 	} else if(turn == 1) {


 		chosenMov = Math.ceil( Math.random() * 4 );
 		console.log("AI move: " + chosenMov);



 		if(chosenMov) {
 			doMove(chosenMov, b, a)
 			turn = 0;
 		}
 		chosenMov = null;
 		
 	} else {
 		console.log("ERROR 1: turns");
 	}



 	document.getElementById("statBarC").style.width = document.getElementById("statBarF").clientWidth * (a.bHealth / a.mHealth) + "px";
 	document.getElementById("statBarCO").style.width = document.getElementById("statBarFO").clientWidth * (b.bHealth / b.mHealth) + "px";

 	if(a.bHealth < 1) {
 		goAfterlife(a);
 //	console.log("SOMETHING WRONG1")
 	console.log(a.bHealth)
 	} else if(b.bHealth < 1) {
 		battleWin(a);
 //	console.log("SOMETHING WRONG2")
 	}
}



function goAfterlife() {
	enderB(0);

}

function battleWin(a) {
	enderB(1);
	testS1 = new SUMO1DEFAULT(a.level+1);
}

function doMove(m,p1,p2) {					// IMPORTANT TO NOTE THAT IN POKE OBJECTS, MOVES START AT 0; BUT FOR NATURAL OUTSIDE USE, MOVES START AT 1
	switch(m) {
		case 1:
			p1.move0.go(p2);
			break;
		case 2:
			p1.move1.go(p2);
			break;
		case 3:
			p1.move2.go(p2);
			break;
		case 4:
			p1.move3.go(p2);
			break;
	}
}
	var inAfterlife = false; // CHECKS IF SYSTEM IS IN AFTER LIFE
	var isBattling = false; //CHECKS IF SYSTEM IS BATTLING 
function starterB(x, y) {		// X IS THE MAIN CHARACTER; Y IS OPPOSING CHARACTER
	isBattling = true;
	fadeOut();

	setTimeout(function() {document.getElementById("backGround").src = "images\\BattleScene.png";
		document.getElementById("SumoMan").removeAttribute("src");
		document.getElementById("coachS").removeAttribute("src");

		document.getElementById("hBar").style.opacity = "1";
		document.getElementById("iBar").style.opacity = "1";
		document.getElementById("sumoB1").setAttribute("src", "images\\battleMain.png");
		document.getElementById("sumoB2").setAttribute("src", "images\\SumoEx.png");

	}, 900);

	setTimeout(function() {fadeIn()}, 900);

//	setTimeout(fadeIn(), 10);

	input0.style.opacity = 1;
	input1.style.opacity = 1;
	input2.style.opacity = 1;
	input3.style.opacity = 1;

	input0.setAttribute("onclick", "i0()");
	input1.setAttribute("onclick", "i1()");
	input2.setAttribute("onclick", "i2()");
	input3.setAttribute("onclick", "i3()");

	input4.style.opacity = 0;
	input4.removeAttribute("onclick");


	bTiming = setInterval( function() { battling(x,y) }, tickSpeed);
}

function i0() {
	if(turn==0) {
		chosenMov = 1;
	}
}

function i1() {

}

function i2() {

}

function i3() {

}


input4.setAttribute("onclick", "i4()");

function i4() {

	// RESET THING: NOT NEEDED THOUGH
		testS2 = new SUMO2DEFAULT(testS2.level);

	starterB(testS1, testS2);
}



function enderB(a) {	// a represents win or loss; 1 = win; 0 = loss
	isBattling = false;

	input0.removeAttribute("onclick");
	input1.removeAttribute("onclick");
	input2.removeAttribute("onclick");
	input3.removeAttribute("onclick");
	input0.style.opacity = 0;
	input1.style.opacity = 0;
	input2.style.opacity = 0;
	input3.style.opacity = 0;

	input4.style.opacity = 1;
	input4.setAttribute("onclick", "i4()");

	if(a) {
		clearInterval(bTiming);

		fadeOut();

		setTimeout(function() {document.getElementById("backGround").src = "images\\stage0.png";
			document.getElementById("sumoB1").removeAttribute("src");
			document.getElementById("sumoB2").removeAttribute("src");
			document.getElementById("hBar").style.opacity = "0";
			document.getElementById("iBar").style.opacity = "0";

			document.getElementById("SumoMan").setAttribute("src", "images\\SumoMain.png");
			document.getElementById("coachS").setAttribute("src", "images\\coachS.png");

		}, 900);

		setTimeout(function() {fadeIn()}, 900);
	} else {
		clearInterval(bTiming);

		fadeOut();

		setTimeout(function() {document.getElementById("backGround").src = "images\\Afterlife.png";
			document.getElementById("sumoB2").removeAttribute("src");
		}, 900);

		setTimeout(function() {fadeIn()}, 900);
	}
}




var fadeTime = 0;

function fadeOut() {
	if(fadeTime < 1) {
		var front = document.getElementById("foreGround");
		front.style.backgroundColor = "black";
		front.style.opacity = fadeTime.toString();
		fadeTime+= 0.02;

		setTimeout(fadeOut, 10);

	}
}

function fadeIn() {
	if(fadeTime > 0) {
		var front = document.getElementById("foreGround");
		front.style.backgroundColor = "black";
		front.style.opacity = fadeTime.toString();
		fadeTime-= 0.02;

		setTimeout(fadeIn, 10);
	}
}

var walkStat = 0; // 0: STANDING; 1: WALK1; 2: WALK2
function walkAnim () {
	var character = document.getElementById("SumoMan");
	switch(walkStat) {
		case 0:
			walkStat = 1;
			character.src = "images\\SumoWalk1.png"
			break;
		case 1:
			walkStat = 2;
			character.src = "images\\SumoWalk2.png"
			break;
		case 2:
			walkStat = 1;
			character.src = "images\\SumoWalk1.png"
			break;
	}
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}

function animToCent() {
	var character = document.getElementById("SumoMan");
	var topPos = character.offsetTop;
	var centPos = document.getElementById("foreGround").offsetTop + ( document.getElementById('foreGround').clientHeight / 2);
	if(topPos > centPos) {
		raisePos(topPos, centPos)
	}
}

function animToEnd() {
	var character = document.getElementById("SumoMan");
	var topPos = character.offsetTop;
	var endPos = document.getElementById("foreGround").offsetTop;
	if(topPos > endPos) {
		raisePos(topPos, endPos)
	}
}

function raisePos(a, b) {
	if(a > b) {
	//	alert();
		a--;
		document.getElementById("SumoMan").style.top = a.toString() + "px";
		if(a%10 == 0) {
			walkAnim();
		}
		setTimeout( function() {raisePos(a,b)}, 10);
	} else {
		walkStat = 0;
		document.getElementById("SumoMan").src = "images\\SumoMain.png"
	}
}

function perc2color(perc) {		// for health bars (INPUT PERCENTAGE OF HEALTH)
	var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}


function Question(q, s1, s2, s3, s4, cs) {
	this.quest = q;
	this.solution0 = s1;
	this.solution1 = s2;
	this.solution2 = s3;
	this.solution3 = s4;
	this.correctSNum = cs;
}








var timerS1;

function stage1() {
	animToCent();

}

function staging1() {

}














var testS1 = new SUMO1DEFAULT(5);
var testS2 = new SUMO2DEFAULT(3);



console.log("Welcome to the BETA structuring of SUMOPOKEMON");

console.log("Important terms are: [starterB\(player1, player2\)] to start the game; chosenMov variable to choose a move, starting at value 1 ending at 4 inclusively; testS1 and testS2 the two basic players; and lastly enderB\(\) to end the battle session;    ");



function gifTesting() {
	var test1 = document.createElement("img");
	test1.src = "images\\tumblr_o4cq91N1ZO1snc5kxo2_r1_500.gif"
	var test2 = document.body;
	test2.appendChild(test1);

	setTimeout(function() {test2.removeChild(test1)}, 2240); // http://gifduration.konstochvanligasaker.se/: FINDS GIF DURATION
}