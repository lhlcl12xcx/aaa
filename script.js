let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        let dieThreeValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue,dieThreeValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
        document.querySelector("#total").innerHTML = "Tổng điểm: " + ( (dieOneValue +1) + (dieTwoValue + 1) + (dieThreeValue + 1));

var totals = (dieOneValue +1) + (dieTwoValue + 1) + (dieThreeValue + 1);
if (totals == 4 || totals == 6 || totals == 8 || totals == 10 || totals == 12 || totals == 14 || totals == 16 || totals == 18){
    document.querySelector("#xxxx").innerHTML = "CHẲN";
}
else{
    document.querySelector("#xxxx").innerHTML = "LẺ";
}

    },
    1000
    );
}
roll();

