
var playgroundSize =4;
let player1ShipCount = playgroundSize;
let shootPlayer2Count = 0;
let player1Ship ="shipRed";
let progressBarWidth = 0;

function startGame(){
    $("#gameContainer").show()
    $("#startButton").hide();
    $("#shipChoose").hide();
    $("#infoText").addClass("intro");
    $("#infoText").html("<b>Player 1 - please set "+ player1ShipCount +" ships on your left side!</b>");
    ValidateForm();
}

function ValidateForm() {
    let radioButtons = document.getElementsByName("vbtn-radio");
    for(let i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            player1Ship = radioButtons[i].value;
            console.log("You have selected " + radioButtons[i].value + " as your favorite ship.")
        }
    }
}

function setOwnShips(){
    setCell("l", this.firstElementChild.getAttribute("cellValueIndex"),1)
    //this.firstElementChild.getAttribute("cellValueIndex")
    //console.log("TESTid: " +$(this).attr("cellValueIndex"));
    //$(this).children().first().html =("<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value/>");
    this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value/>";
    this.firstElementChild.setAttribute("shoot","shipIsSet")
    player1ShipCount -= 1;
    $("#infoText").html("Player 1 - please set "+ player1ShipCount +" ships on your left side!")
    //loadJson();
    if(player1ShipCount <= 0){
        phase2();
    }
}

function setRandomPlayer2Ships(){
    for (let i = 0; i < playgroundSize; i++) {
        let currentCell = "#cellRightValue-R"+i+"-C"+Math.floor(Math.random() * 4);
        $(currentCell).addClass("shipIsSet");
        $(currentCell).html("<img src='http://localhost:9000/assets/images/pirateShip.png' alt='S' class='gameContainer' id=this.value/>");
    }
}

function phase2(){
    setTimeout(function(){ alert("You set all your Ships");}, 1000);
    setRandomPlayer2Ships();
    //document.getElementById("cellRightTest").setAttribute("title","");
    $("#infoText").html = ("Player 1 - Now shoot Player2´s ships:\n you hit "+ shootPlayer2Count +" already");
    removeLeftCellEvents();
    //TODO change bg by player switch
    $(".cellLeft").onmouseover = function()
    {
        this.style.backgroundColor = "darkred";
    }
    for (let i = 0; i < $(".cellRight").length; i++) {
        $(".cellRight")[i].addEventListener("click", shoot, false);
    }
}

function shoot(){
    //console.log("test");
    console.log("in shoot) this.firstChild is: "+this.firstElementChild.classList.value);
    if(this.firstElementChild.classList.value === "number shipIsSet"){

        this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/shootShip1.png' alt='S' class='gameContainer' id=this.value/>";
        this.style.borderColor="red"
        shootPlayer2Count +=1;
        progressBarWidth +=25;
        document.getElementById("progressBar").style.width =  progressBarWidth+"%";
        document.getElementById("infoText").innerHTML = "Player 1 - Now shoot Player2´s ships:\n" +
            "you hit "+ shootPlayer2Count +" already";
    }
    else{
        this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/miss2.png' alt='S' class='gameContainer' id=this.value/>";
        let thisCell = this;
        //$("#div3").fadeIn(3000);
        setTimeout(function(){ thisCell.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/missAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 1500);
        setTimeout(function(){ thisCell.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/missAfterAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 3000);
    }
    winCheck();
    setTimeout(    function(){shootRandomLeftShips()}, 1500);
}



function winCheck(){
    //console.log("winCheck) pg Size:" +playgroundSize);

    if(shootPlayer2Count === playgroundSize){
        document.getElementById("infoText").innerHTML = "Player 1 WON!!!!!!!!!!!!"
        setTimeout(function(){ alert("You WON!!!");}, 1000);
    }
}

function shootRandomLeftShips(){
    let currentCell = "cellLeftValue-R"+Math.floor(Math.random() * 4)+"-C"+Math.floor(Math.random() * 4);
    switch(document.getElementById(currentCell).getAttribute("shoot")) {
        case "shipIsSet":
            document.getElementById(currentCell).setAttribute("shoot","hit")
            document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/"+player1Ship+"Hit.png' alt='S' class='gameContainer' id=this.value/>";
            document.getElementById(currentCell).parentElement.style.borderColor="red"
            break;
        case "hit":
            shootRandomLeftShips()
            break;
        case "miss":
            shootRandomLeftShips()
            break;
        case "":
            //let currentCellJQ = "#"+currentCell;
            $("#"+currentCell).parent().css('border-color', 'darkblue');
            document.getElementById(currentCell).setAttribute("shoot","miss");
            document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/miss2.png' alt='S' class='gameContainer' id=this.value/>";
            setTimeout(function(){ document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/missAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 1500);
            setTimeout(function(){ document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/missAfterAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 3000);
            break;
        default:
    }
}

function addLeftCellEvents(){
    for (let i = 0; i < $(".cellLeft").length; i++) {
        $(".cellLeft")[i].addEventListener("click", setOwnShips, false);
    }
}

function removeLeftCellEvents(){
    for (let i = 0; i < $(".cellLeft").length; i++) {
        $(".cellLeft")[i].removeEventListener("click", setOwnShips, false);
    }
}
//------------------------ new

function indexTorRow(index) {
    return (Math.floor(index / playgroundSize));
}

function indexToCol(index) {
   return (Math.floor(index % playgroundSize));
}

function cellToIndex(row,col){
    return (Math.floor(row*playgroundSize+col));
}

function setCell(side, index, value) {
    let sideString;
    if(side === "l"){
        sideString="#cellLeftValue-R";
        battlefieldSide= battlefieldLeft;
    }
    if(side === "r"){
        sideString="#cellRightValue-R";
        battlefieldSide= battlefieldRight;
    }
    console.log("Set "+side +" json-cell " + index + " to " + value);
    battlefieldSide.cellvalue[index] = value;
    $(sideString+indexTorRow(index)+"-C"+indexToCol(index)).html(" "+battlefieldSide.cellvalue[index]);
    setCellOnServer(side, indexTorRow(index), indexToCol(index), value)
    $(sideString+indexTorRow(index)+"-C"+indexToCol(index)).off("click");
}

class Battlefield {
    constructor(side, playgroundSize){
        this.side = side;
        this.size = playgroundSize;
        this.cellvalue = [];
    }

    fill(json) {
        for (let i=0; i < this.size*this.size;i++) {
            console.log(json[i].cell.value)
            this.cellvalue[i]=(json[i].cell.value);
        }
    }
}

let battlefieldLeft = new Battlefield("l", playgroundSize)
let battlefieldRight = new Battlefield("r", playgroundSize)

function updateBattlefield(side, battlefield) {
    for (let row=0; row < playgroundSize; row++) {
        for (let col=0; col <playgroundSize;col++) {
            if (battlefield.cellvalue[cellToIndex(row, col)] != 0) {
                console.log("side: "+side+" - row: " +row +" | col :"+col +" has the value: "+battlefield.cellvalue[cellToIndex(row, col)]);
                if(side === "l"){
                    //+battlefield.cellvalue[cellToIndex(row, col)])+">"
                    if (battlefield.cellvalue[cellToIndex(row, col)] === 1) {
                        console.log("<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value")
                        $("#cellLeftValue-R"+row+"-C"+col).html("S");
                        //$("#cellLeftValue-R"+row+"-C"+col).html("<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value");
                        //this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value/>";
                        $("#cellLeftValue-R"+row+"-C"+col).attr("shoot","shipIsSet")
                    }
                }
                if(side === "r"){
                    $("#cellRightValue-R"+row+"-C"+col).html(battlefield.cellvalue[cellToIndex(row, col)]);
                    if (battlefield.cellvalue[cellToIndex(row, col)] === 1) {

                    }
                }
            }
        }
    }
}

function setCellOnServer(side, row, col, value) {
    //TODO implemnet side
    //$.get("/set/"+side+"/"+row+"/"+col+"/"+value, function(data) {
    $.get("battleship/setL/"+row+"/"+col+"/"+value, function(data) {
        console.log("Set cell on side: "+side+" - row: " +row +" | col :"+col +" on Server");
    });
}

function loadJson() {
    $.ajax({
        method: "GET",
        url: "battleship/json",
        dataType: "json",

        success: function (result) {
            console.log("right: "+result.battlefield.rightSide.cells[0].cell.value);
            console.log("json - success")
            console.log("playgroundSize: "+result.battlefield.leftSide.size);
            playgroundSize = result.battlefield.leftSide.size;
            player1ShipCount = result.battlefield.leftSide.size;

            battlefieldLeft = new Battlefield("l",result.battlefield.leftSide.size);
            battlefieldRight = new Battlefield("r", result.battlefield.rightSide.size);
            //console.log("result:: " +result.battlefield.leftSide.size \n cells:: --> " + (result.battlefield.leftSide.cells[0].cell.value))
            battlefieldLeft.fill(result.battlefield.leftSide.cells);
            battlefieldRight.fill(result.battlefield.rightSide.cells);
            updateBattlefield("l", battlefieldLeft);
            updateBattlefield("r", battlefieldRight);
            //registerClickListener();

            addLeftCellEvents();
            document.getElementById("startButton").addEventListener("click", startGame, false);

        }
    });
}

//web socket
function connectWebSocket() {
    var websocket = new WebSocket("ws://localhost:9000/battleship/websocket");
    websocket.setTimeout

    websocket.onopen = function(event) {
        console.log("Connected to Websocket");
    }

    websocket.onclose = function () {
        console.log('Connection with Websocket Closed!');
    };

    websocket.onerror = function (error) {
        console.log('Error in Websocket Occurred: ' + error);
    };
//TODO json sides in one obj.
    websocket.onmessage = function (e) {
        if (typeof e.data === "string") {
            let json = JSON.parse(e.data);
            battlefieldLeft.fill(json.battlefield.leftSide.cells);
            battlefieldRight.fill(json.battlefield.rightSide.cells);
            updateBattlefield("l", battlefieldLeft);
            updateBattlefield("r", battlefieldRight);
            //registerClickListener();
        }
    };
}

$(document).ready(function(){
    console.log( "Document is ready, filling battlefield" );
    loadJson();
    connectWebSocket();
    $(gameContainer).hide()

});

