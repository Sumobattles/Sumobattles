var tickSpeed = 10;
var timing;

var partyP = [];
var partyO = [];

var party0 = [];

	var sumo = document.getElementById("SumoMan");
	var beginTop = sumo.offsetTop;
	var beginLeft = sumo.offsetLeft;


var gScreen = document.getElementById("gScreen");

var sideBar = document.getElementById("sideBar");
var sInfo = ""; // INFORMATION FOR SIDEBAR

function updateTexts() {
	sideBar.innerHTML = sInfo;
}

var tCode;
function startUT() {
	tCode = setInterval(updateTexts, 200);
}

function setText(t, ter) {
	sInfo = t;
	setTimeout( function() {sInfo = "";}, ter )
}

startUT();

function endUT() {
	clearInterval(tCode);
}

var input0 = document.getElementById("inputM0");
var input1 = document.getElementById("inputM1");
var input2 = document.getElementById("inputM2");
var input3 = document.getElementById("inputM3");
var input4 = document.getElementById("inputM4");

var stage = 0; // stage is the current plot-position of the game

var fadeTime = 0;


function critFind(n) {
	var ret = Math.ceil(Math.random() * (100));
	if(n >= ret) {
		return true;
	} else {
		return false;
	}

}






function SUMO1DEFAULT(lev, nom) {
	this.id = 0;
	this.level = lev;
	this.bHealth = 100 + 20 * this.level;
	this.mHealth = 100 + 20 * this.level;
	this.bAttack = 40 + 5 * this.level;
	this.bDefense = 40 + 5 * this.level;
	this.bCrit = 5 + 1 * this.level;
	this.name = nom;


//	this.maxPP = [5,10,20,15];
//	this.movePP = this.maxPP;
	this.move0 = {
		moveName: "Suso Harai",
		moveDesc: "A sweeping kick which knocks the oppenent down!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 10 * lev) * 2 * (1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 10 * lev) * 1.5 *(1- es.bDefense / 100);
				}
				this.movePP--;
			}
		},
		

	};


	this.move1 = {
		moveName: "Hiki Otoshi",
		moveDesc: "An attack which grabs the opponents belt and pushes them down!",
		movePP: 1000,
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

	this.move2 = {
		moveName: "Oshi Dashi",
		moveDesc: "A massive tackle against the opponent!",
		movePP: 2000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 3 * lev) * 2 * (1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 3 * lev) * 1.5 *(1- es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	};

	this.move3 = {
		moveName: "STOMP",
		moveDesc: "A massive kick-down of the opponent, scaring all those in the vicinity!",
		movePP: 5000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 15 * lev) * 2 * (1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 15* lev) * 1.5 *(1- es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	};

	this.move4 = {
		moveName: "Tsuki",
		moveDesc: "A punch at the opponent!",
		movePP: 1000,
		go: function(es) {
			console.log("ILLEGAL MOVE");
			this.bHealth -= 10;
			setTimeout( function() {sInfo = "Unfortunately, that was an illegal move...";}, 500);
		}
	};

	this.move5 = {
		moveName: "Keri",
		moveDesc:"A kick at the opponent!",
		movePP: 3000,
		go: function(es) {
			console.log("ILLEGAL MOVE");
			this.bHealth -= 20;
			setTimeout( function() {sInfo = "Unfortunately, that was an illegal move...";}, 500);
		}
	};

	this.move6 = {
		moveName: "Choku",
		moveDesc: "Choking the opponent!",
		movePP: 5000,
		go: function(es) {
			console.log("ILLEGAL MOVE");
			this.bHealth -= 50;
			setTimeout( function() {sInfo = "Unfortunately, that was an illegal move...";}, 500);
		}
	}

	this.move7 = {
		moveName: "Saborai",
		moveDesc: "A move which crushes the opponent above with your weight!",
		movePP: 1000,
		go: function(es) {
			console.log("ILLEGAL MOVE");
			this.bHealth -= 20;
			setTimeout( function() {sInfo = "Unfortunately, that was an illegal move...";}, 500);
		}
	}
}

function SUMO2DEFAULT(leve, nom) {
	this.id = 1;
	this.level = leve;
	this.bHealth = 100 + 40 * this.level;
	this.mHealth = 100 + 40 * this.level;
	this.bAttack = 40 + 1 * this.level;
	this.bDefense = 40 + 1 * this.level;
	this.bCrit = 5 + 1 * this.level;
	this.name = nom;



	this.move0 = {
		moveName: "Tsuri Dashi",
		moveDesc: "Lifts up the oppoonent and pushes them down!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 3 * leve) * 2 *(1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 3 * leve) * 1.5 *(1 - es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	};

	this.move1 = {
		moveName: "Uwate Nage",
		moveDesc: "Throws down the opponent!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 20 * leve) * 2 *(1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 20 * leve) * 1.5 *(1 - es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	};

	this.move2 = {
		moveName: "Yori Kiri",
		moveDesc: "Pushes the opponenet away!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 10 * leve) * 2 *(1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 10 * leve) * 1.5 *(1 - es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	};

	this.move3 = {
		moveName: "Hiki Otoshi",
		moveDesc: "An attack which grabs the opponents belt and pushes them down!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 15 * leve) * 2 *(1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 15 * leve) * 1.5 *(1 - es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	};

	this.move4 = {
		moveName: "SALT THROW!",
		moveDesc: "Purifies the arena, giving the player extra power!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				this.bHealth += 20;
				this.bAttack += 20;
				this.bDefense += 5;
				this.movePP--;
			}
		},
	}

	this.move5 = {
		moveName: "STOMP!",
		moveDesc: "A massive kick-down of the opponent, scaring all those in the vicinity!",
		movePP: 1000,
		go: function(es) {
			if(this.movePP > 0) {
				if( critFind(this.bCrit) ) {
					es.bHealth = es.bHealth - (40 + 15 * leve) * 2 * (1- es.bDefense / 100);
					console.log("CRITICAL HIT");
				} else {
					es.bHealth = es.bHealth - (40 + 15* leve) * 1.5 *(1- es.bDefense / 100);
				}
				this.movePP--;
			}
		},
	}

}





var bTiming;

var turn = 0; // 0: MAIN PLAYER; 1: OPPONENT

var chosenMov;
	chosenMov = null;

function battling(a, b) {

		document.getElementById("nameBox").innerHTML = a.name;
		document.getElementById("statBox").innerHTML = "HP: " + Math.round(a.bHealth) + "/" + a.mHealth;
		document.getElementById("lvlBar").innerHTML = "LEVEL " + a.level;

		document.getElementById("nameBoxO").innerHTML = b.name;
		document.getElementById("statBoxO").innerHTML = "HP: " + Math.round(b.bHealth) + "/" + b.mHealth;
		document.getElementById("lvlBarO").innerHTML = "LEVEL " + b.level;


 	if(turn == 0) {
 		if(chosenMov) {
 			doMove(chosenMov, a, b)
 			setTimeout( function() {
 				turn = 1;
 			}, 3000);
 		}
 		chosenMov = null;
 		
 	} else if(turn == 1) {


 			chosenMov = Math.ceil( Math.random() * 6 );
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

 		setTimeout(function () {

 			
 			goAfterlife(a);
 		}, 1000);

 	} else if(b.bHealth < 1) {
 		setTimeout(function () {
 			setText("You have won the match!!! Now proceed to the next room.", 4000)
 			battleWin(a);
 		}, 3000);

 	}
}



function goAfterlife() {
	enderB(0);
	setTimeout( function() {
	 			setText("You feel a tingling sensation after being knocked out... You see Inari Okami, the god of agriculature, in your daze. You feel your connection with her...", 10000);
	 }, 1000);
	setTimeout(function() {
		sInfo = "Inari Okami: I have invested all my power into you for your revival. As the embodiment of me, you must push forward!";
		setTimeout( function() {
			i11();
		}, 10000)
	}, 12000);
/*		var qt = Math.floor(Math.random() * q.length);
	setTimeout( function () {


		input0.setAttribute("onclick", i12);
		input1.setAttribute("onclick", i12);
		input2.setAttribute("onclick", i12);
		input3.setAttribute("onclick", i12);



		q[qt].correctSNum.setAttribute("onclick", i11);

		sInfo = q[qt].quest;

		input0.innerHTML = q[qt].solution0;
		input1.innerHTML = q[qt].solution1;
		input2.innerHTML = q[qt].solution2;
		input3.innerHTML = q[qt].solution3;	
	}, 3000);	*/
}

function battleWin(a) {
	enderB(1);
	testS1 = new SUMO1DEFAULT(a.level+1, "Ebisu");
}

function doMove(m,p1,p2) {					// IMPORTANT TO NOTE THAT IN POKE OBJECTS, MOVES START AT 0; BUT FOR NATURAL OUTSIDE USE, MOVES START AT 1
	switch(m) {
		case 1:
			p1.move0.go(p2);
			setText( p1.name + " uses move: " + p1.move0.moveName, 3000 );
			break;
		case 2:
			p1.move1.go(p2);
			setText( p1.name + " uses move: " + p1.move1.moveName, 3000 );
			break;
		case 3:
			p1.move2.go(p2);
			setText( p1.name + " uses move: " + p1.move2.moveName, 3000 );
			break;
		case 4:
			p1.move3.go(p2);
			setText( p1.name + " uses move: " + p1.move3.moveName, 3000 );
			break;
		case 5:
			p1.move4.go(p2);
			setText( p1.name + " uses move: " + p1.move4.moveName, 3000 );
			break;
		case 6:
			p1.move5.go(p2);
			setText( p1.name + " uses move: " + p1.move5.moveName, 3000 );
			break;
		case 7:
			p1.move6.go(p2);
			setText( p1.name + " uses move: " + p1.move6.moveName, 3000 );
			break;
		case 8:
			p1.move7.go(p2);
			setText( p1.name + " uses move: " + p1.move7.moveName, 3000 );
			break;
	}
}
	var inAfterlife = false; // CHECKS IF SYSTEM IS IN AFTER LIFE
	var isBattling = false; //CHECKS IF SYSTEM IS BATTLING 
function starterB(x, y) {		// X IS THE MAIN CHARACTER; Y IS OPPOSING CHARACTER
	isBattling = true;

	setText("HAKEYOI!", 1000);
	setTimeout( function() { setText("The battle has begun between sumo wrestlers: " + x.name + " and " + y.name, 6000 ) }, 3000 );

	fadeOut();

	setTimeout(function() {document.getElementById("backGround").src = "images\\BattleScene.png";
		document.getElementById("SumoEn").removeAttribute("src");
		document.getElementById("SumoMan").removeAttribute("src");
		document.getElementById("coachS").removeAttribute("src");

		document.getElementById("hBar").style.opacity = "1";

		document.getElementById("nameBox").innerHTML = x.name;
		document.getElementById("statBox").innerHTML = "HP: " + x.bHealth + "/" + x.mHealth;
		document.getElementById("lvlBar").innerHTML = "LEVEL " + x.level;

		document.getElementById("nameBoxO").innerHTML = x.name;
		document.getElementById("statBoxO").innerHTML = "HP: " + x.bHealth + "/" + x.mHealth;
		document.getElementById("lvlBarO").innerHTML = "LEVEL " + x.level;



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

	ranMove = getMoves(8);
	input0.setAttribute("onclick", "i0()");
	input1.setAttribute("onclick", "i1()");
	input2.setAttribute("onclick", "i2()");
	input3.setAttribute("onclick", "i3()");

	input0.setAttribute("onmouseover", "r0()");
	input1.setAttribute("onmouseover", "r1()");
	input2.setAttribute("onmouseover", "r2()");
	input3.setAttribute("onmouseover", "r3()");

	input0.setAttribute("onmouseout", "rd()");
	input1.setAttribute("onmouseout", "rd()");
	input2.setAttribute("onmouseout", "rd()");
	input3.setAttribute("onmouseout", "rd()");

	input0.innerHTML = caseFind(testS1, ranMove[0]).moveName;
	input1.innerHTML = caseFind(testS1, ranMove[1]).moveName;
	input2.innerHTML = caseFind(testS1, ranMove[2]).moveName;
	input3.innerHTML = caseFind(testS1, ranMove[3]).moveName;


	input4.style.opacity = 0;
	input4.removeAttribute("onclick");


	bTiming = setInterval( function() { battling(x,y) }, tickSpeed);
}

var ranMove = [];

function getMoves(num) {
	var arr = []
	while(arr.length < num){
   	 var randomnumber = Math.floor(Math.random()*num) + 1;
  	  if(arr.indexOf(randomnumber) > -1) continue;
  	  arr[arr.length] = randomnumber;
	}
	return arr;
}

function i0() {
	if(turn==0) {
		chosenMov = ranMove[0];
	}
}

function i1() {
if(turn==0) {
		chosenMov = ranMove[1];
	}
}

function i2() {
if(turn==0) {
		chosenMov = ranMove[2];
	}
}

function i3() {
if(turn==0) {
		chosenMov = ranMove[3];
	}
}


function rd() {
	if(turn==0) {
		sInfo = "";
	}
}


function r0() {

	if(turn==0) {
		sInfo = caseFind(testS1, ranMove[0]).moveName + ": " + caseFind(testS1, ranMove[0]).moveDesc;
	}
}

function r1() {
if(turn==0) {
		sInfo = caseFind(testS1, ranMove[1]).moveName + ": " + caseFind(testS1, ranMove[1]).moveDesc;
	}
}

function r2() {
if(turn==0) {
		sInfo = caseFind(testS1, ranMove[2]).moveName + ": " + caseFind(testS1, ranMove[2]).moveDesc;
	}
}

function r3() {
if(turn==0) {
		sInfo = caseFind(testS1, ranMove[3]).moveName + ": " + caseFind(testS1, ranMove[3]).moveDesc;
	}
}





function caseFind(p, r) {
	switch(r) {
		case 1:
			return p.move0;
			break;
		case 2:
			return p.move1;
			break;
		case 3:
			return p.move2;
			break;
		case 4:
			return p.move3;
			break;
		case 5:
			return p.move4;
			break;
		case 6:
			return p.move5;
			break;
		case 7:
			return p.move6;
			break;
		case 8:
			return p.move7;
			break;
	}
}








//input4.setAttribute("onclick", "i4()");

function i4() {

	// RESET THING: NOT NEEDED THOUGH

	animToCent();

	setTimeout(function() {starterB(testS1, testS2)}, 2500);
}

function beginning() {
	document.getElementById("foreGround").style.backgroundColor = "black";
	document.getElementById("foreGround").style.opacity = 1;
	fadeTime = 1;
	document.getElementById("bText").innerHTML = "WELCOME";
	var enemy = document.getElementById("SumoEn");
	enemy.setAttribute("src", "images\\Opponent1.png")
}
beginning();



function ending() {
	document.getElementById("bText").style.opacity = 1;
	document.getElementById("bText").innerHTML = "THE END";

	fadeOut();
}

function preG() {
	fadeIn();
	input4.removeAttribute("onclick");
	input4.setAttribute("onclick", "i4()");
	setTimeout( function() {
		document.getElementById("bText").style.opacity = 0;
	}, 900 );
}

function afterG() {
	sInfo = "Congratulations! You have beat SumoBattles, and have brought good fortune to next year's crops. The kami Inari Okami would be proud!"
	ending();
}

function stage1B() {
	if(testS3.bHealth > 0) {

		input4.removeAttribute("onclick");
		fadeTime = null;

		setTimeout(function() {fadeTime = 1;}, 300);


		document.getElementById("backGround").setAttribute("src", "images\\stage1 ORIGINAL.png");
		var enemy = document.getElementById("SumoEn");
		enemy.setAttribute("src", "images\\Opponent2.png")
		fadeIn();
		setTimeout( function() {
			input4.setAttribute("onclick", "i20()");
						sumo.style.top = beginTop.toString() + "px";
	sumo.style.left = beginLeft.toString() + "px";
		}, 900);
	} else if(testS4.bHealth > 0){
		input4.removeAttribute("onclick");
		fadeTime = null;
		fadeIn();
setTimeout(function() {fadeTime = 1;}, 300);
		document.getElementById("backGround").setAttribute("src", "images\\stage2 ORIGINAL.png");
		var enemy = document.getElementById("SumoEn");
		enemy.setAttribute("src", "images\\Opponent3.png")
		fadeIn();
		setTimeout( function() {
			input4.setAttribute("onclick", "i30()");
						sumo.style.top = beginTop.toString() + "px";
	sumo.style.left = beginLeft.toString() + "px";
		}, 900);
	} else {
		fadeTime = null;
		fadeIn();
setTimeout(function() {fadeTime = 0; 

	setTimeout(function() {
		afterG();
	}, 300);

}, 300);
		
	}
}




function i20() {
	sumo.style.top = beginTop.toString() + "px";
	sumo.style.left = beginLeft.toString() + "px";

	animToCent();
	setTimeout( function() {
		starterB(testS1, testS3);
	}, 2500);
}




function i30() {
	sumo.style.top = beginTop.toString() + "px";
	sumo.style.left = beginLeft.toString() + "px";

	animToCent();
	setTimeout( function() {
		starterB(testS1, testS4);
	}, 2500);
}

input4.setAttribute("onclick", "preG()");



function enderB(a) {	// a represents win or loss; 1 = win; 0 = loss
	isBattling = false;

	input0.removeAttribute("onclick");
	input1.removeAttribute("onclick");
	input2.removeAttribute("onclick");
	input3.removeAttribute("onclick");

	input0.removeAttribute("onmouseover");
	input1.removeAttribute("onmouseover");
	input2.removeAttribute("onmouseover");
	input3.removeAttribute("onmouseover");

	input0.removeAttribute("onmouseout");
	input1.removeAttribute("onmouseout");
	input2.removeAttribute("onmouseout");
	input3.removeAttribute("onmouseout");

	input0.style.opacity = 0;
	input1.style.opacity = 0;
	input2.style.opacity = 0;
	input3.style.opacity = 0;

	input4.style.opacity = 0.5;
//	input4.setAttribute("onclick", "i4()");

	if(a) {
		clearInterval(bTiming);

		fadeOut();

		setTimeout(function() {

			if(testS4.bHealth <= 0) {
				document.getElementById("backGround").src = "images\\stage2 ORIGINAL.png";
			}else if(testS3.bHealth <= 0) {
				document.getElementById("backGround").src = "images\\stage1 ORIGINAL.png";
			} else {
				document.getElementById("backGround").src = "images\\stage0 ORIGINAL.png";
			}






			document.getElementById("sumoB1").removeAttribute("src");
			document.getElementById("sumoB2").removeAttribute("src");
			document.getElementById("hBar").style.opacity = "0";
			document.getElementById("iBar").style.opacity = "0";

			document.getElementById("cherryB").removeAttribute("src");
			document.getElementById("fertGod").removeAttribute("src");

			document.getElementById("SumoMan").setAttribute("src", "images\\SumoMain.png");
			document.getElementById("coachS").setAttribute("src", "images\\coachS.png");

		}, 900);

		setTimeout(function() {fadeIn()}, 900);

		setTimeout(function() {animToEnd()}, 2500);

		setTimeout(function() {
			input4.style.opacity = 1;
			input4.setAttribute("onclick", "stage1B()");
		}, 5000);		

	} else {
		clearInterval(bTiming);

		fadeOut();

		setTimeout(function() {document.getElementById("backGround").src = "images\\Afterlife.png";
			document.getElementById("sumoB2").removeAttribute("src");
			document.getElementById("cherryB").setAttribute("src", "images\\tumblr_o4cq91N1ZO1snc5kxo2_r1_500.gif");
			document.getElementById("fertGod").setAttribute("src", "images\\fertGod.png");
			document.getElementById("hBar").style.opacity = "0";
			document.getElementById("iBar").style.opacity = "0";



			input0.style.opacity = 1;
			input1.style.opacity = 1;
			input2.style.opacity = 1;
			input3.style.opacity = 1;

			input0.setAttribute("onclick", "i11()");
			input1.setAttribute("onclick", "i12()");
			input2.setAttribute("onclick", "i13()");
			input3.setAttribute("onclick", "i14()");

	input4.style.opacity = 0;

		}, 900);

		setTimeout(function() {fadeIn()}, 900);
	}
}


function i11() {
	testS1 = new SUMO1DEFAULT(testS1.level, "Ebisu");
	setText("CORRECT!", 1000);
	setTimeout(function() {sInfo = ""}, 1000 )
	document.getElementById("cherryB").removeAttribute("src");
	document.getElementById("fertGod").removeAttribute("src");
	if(testS2.bHealth > 0) {
		starterB(testS1, testS2);
	} else if(testS3.bHealth > 0) {
		starterB(testS1, testS3);
	} else if(testS4.bHealth > 0) {
		starterB(testS1, testS4);
	} else {
		alert("Error");
	}
}

function i12() {
	setText("WRONG!", 1000);
	setTimeout(function() {sInfo = ""}, 1000 )
}

function i13() {
	setText("WRONG!", 1000);
	setTimeout(function() {sInfo = ""}, 1000 )
}

function i14() {
	setText("WRONG!", 1000);
	setTimeout(function() {sInfo = ""}, 1000 )
}




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
var q = [];
 q[0] = new Question("Which of the following was not a reason for sumo wrestling?", "Combat training", "Scaring away other cultures", "Scaring away evil kami", "Was a beloved sport", input2);
 q[1] = new Question("Which of the following moves are illegal?", "Lifting", "Throwing", "Pushing", "Punching", input3);
 q[2] = new Question("Who was one of the first sumo wrestlers?", "Nomi no Sukune", "Hakuho", "Taiho", "Takanohana II", input0);





var timerS1;

function stage1() {
	animToCent();

}

function staging1() {

}














var testS1 = new SUMO1DEFAULT(5, "Ebisu");



var testS2 = new SUMO2DEFAULT(3, "Raijin");

var testS3 = new SUMO2DEFAULT(6, "Ryujin");
var testS4 = new SUMO2DEFAULT(8, "Shinigami");



console.log("Welcome to the BETA structuring of SUMOPOKEMON");

console.log("Important terms are: [starterB\(player1, player2\)] to start the game; chosenMov variable to choose a move, starting at value 1 ending at 4 inclusively; testS1 and testS2 the two basic players; and lastly enderB\(\) to end the battle session;    ");



function gifTesting() {
	var test1 = document.createElement("img");
	test1.src = "images\\tumblr_o4cq91N1ZO1snc5kxo2_r1_500.gif"
	var test2 = document.body;
	test2.appendChild(test1);

	setTimeout(function() {test2.removeChild(test1)}, 2240); // http://gifduration.konstochvanligasaker.se/: FINDS GIF DURATION
}