alert("connected!");

let scorep1 = document.querySelector("#scorep1");
let scorep2 = document.querySelector("#scorep2");
let playto = document.querySelector("#playto");

let btnp1 = document.querySelector("#btnp1");
let btnp2 = document.querySelector("#btnp2");
let btnreset = document.querySelector("#btnreset");

let numberSelect = document.querySelector("#numberSelect");



let scorep1Start = 0;
let scorep2Start = 0;

let inputNumber =0;

let reachedMax = false;

btnp1.addEventListener("click", incrementp1);
btnp2.addEventListener("click", incrementp2);
btnreset.addEventListener("click", reset);
numberSelect.addEventListener("change", setNumber);

function incrementp1(){
	if (!reachedMax){
scorep1Start++;

	}if(scorep1Start == inputNumber){
		scorep1.classList.add("winner");
		reachedMax = true;
	}

	scorep1.textContent = scorep1Start;
}

function incrementp2(){
	if (!reachedMax){
		scorep2Start++;

	}if(scorep2Start == inputNumber){
		scorep2.classList.add("winner");
		reachedMax = true;
	}

	scorep2.textContent = scorep2Start;
}

function reset(){
scorep1Start = 0;
scorep2Start = 0;

scorep1.textContent = scorep1Start;
scorep2.textContent = scorep2Start;
reachedMax = false;

scorep1.classList.remove("winner");
scorep2.classList.remove("winner");
}

function setNumber(){
inputNumber = numberSelect.value;
playto.textContent = inputNumber;

}



