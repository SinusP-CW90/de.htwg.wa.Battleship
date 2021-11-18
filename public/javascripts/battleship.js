let cellV00 = document.getElementById("cellValue-R0-C0")
let cellClass = document.getElementsByClassName("cell")
let cell00C = document.getElementById("cell-R0-C0").firstElementChild
let Player1ShipCount = 4;

function change(){
    this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/boat1.png' alt='S' class='gameContainer' id=this.value/>";
    Player1ShipCount -= 1;
    document.getElementById("infoText").innerHTML = "Player 1 - please set "+ Player1ShipCount +" ships on your left Side!";
}

function refreshPage(){
    window.location.reload();
}

var clicks = 0;

function onClick() {
    clicks += 1;

};

function startGame(){
    document.getElementById("gameContainer").style.visibility = "visible";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("infoText").innerHTML="Player 1 - please set "+ Player1ShipCount +" ships on your left Side!";
}

function shipSetDekrement(){

}

function setUpEvents(){
    //document.getElementById("testPic").onclick = document.getElementById("cellValue-R0-C0").innerHTML = "Y";
    //document.getElementById("TESTID").onclick = change();
    //cellClass.addEventListener('click',change,false)

    for (var i = 0; i < cellClass.length; i++) {
        cellClass[i].addEventListener('click', change, false);
    }
}

window.onload = function(){
    document.getElementById("gameContainer").style.visibility = "hidden";
    setUpEvents();
    document.getElementById("startButton").addEventListener('click', startGame, false);
    onClick();
}
