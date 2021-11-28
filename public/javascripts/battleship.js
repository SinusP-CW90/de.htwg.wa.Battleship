let cellClassLeft = document.getElementsByClassName("cellLeft");
let cellClassRight = document.getElementsByClassName("cellRight");
let cell00C = document.getElementById("cellLeft-R0-C0").firstElementChild;
let playgroundSize = 4;
let player1ShipCount = playgroundSize;
let shootPlayer2Count = 0;
let gameState = "start";
let player1Ship;
let progressBarWidth = 0;


function startGame(){
    //$("#gameContainer").style.visibility = "visible";
    $("#gameContainer").show()

    //$("#startButton").style.display = "none";
    $("#startButton").hide();
    $("#shipChoose").hide();
    //$("#infoText").classList.add("text-danger");
    $("#infoText").addClass("intro");
    $("#infoText").html("<b>Player 1 - please set "+ player1ShipCount +" ships on your left side!</b>");
    //$("#infoText").innerHTML="Player 1 - please set "+ player1ShipCount +" ships on your left side!";
    ValidateForm();
}

function ValidateForm()
{
    let radioButtons = document.getElementsByName("vbtn-radio");
    for(let i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            player1Ship = radioButtons[i].value;
            if(confirm("You have selected " + radioButtons[i].value + " as your favorite ship. Is that correct?"))

                return true;
            else
                return false;
        }
    }
}

function setOwnShips(){
    this.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/"+player1Ship+".png' alt='S' class='gameContainer' id=this.value/>";
    this.firstElementChild.setAttribute("shoot","shipIsSet")
    player1ShipCount -= 1;
    $("#infoText").innerHTML = "Player 1 - please set "+ player1ShipCount +" ships on your left side!";

    if(player1ShipCount <= 0){
        phase2();
    }
}

function setRandomPlayer2Ships(){
    for (let i = 0; i < playgroundSize; i++) {
        let currentCell = "cellRightValue-R"+i+"-C"+Math.floor(Math.random() * 4);
        document.getElementById(currentCell).classList.add("shipIsSet");
        //document.getElementById(currentCell).innerHTML="S";
        document.getElementById(currentCell).innerHTML="<img src='http://localhost:9000/assets/images/pirateShip.png' alt='S' class='gameContainer' id=this.value/>";
    }
}

function phase2(){
    setTimeout(function(){ alert("You set all your Ships");}, 1000);
    setRandomPlayer2Ships();
    //document.getElementById("cellRightTest").setAttribute("title","");
    $("#infoText").innerHTML = "Player 1 - Now shoot Player2´s ships:\n" +
        "you hit "+ shootPlayer2Count +" already";
    removeLeftCellEvents();
    //TODO change bg by player switch
    $(".cellLeft").onmouseover = function()
    {
        this.style.backgroundColor = "darkred";
    }
    for (let i = 0; i < cellClassRight.length; i++) {
        cellClassRight[i].addEventListener("click", shoot, false);
    }
}

function shoot(){
    console.log("test");
    console.log(this.firstElementChild.classList.value);
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
        setTimeout(function(){ thisCell.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/missAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 1500);
        setTimeout(function(){ thisCell.firstElementChild.innerHTML = "<img src='http://localhost:9000/assets/images/missAfterAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 3000);
    }
    winCheck();
    setTimeout(    function(){shootRandomLeftShips()}, 1500);
}



function winCheck(){
    console.log("pg Size:" +playgroundSize);

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
            document.getElementById(currentCell).setAttribute("shoot","miss");
            document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/miss2.png' alt='S' class='gameContainer' id=this.value/>";
            setTimeout(function(){ document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/missAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 1500);
            setTimeout(function(){ document.getElementById(currentCell).innerHTML = "<img src='http://localhost:9000/assets/images/missAfterAfter.png' alt='S' class='gameContainer' id=this.value/>"}, 3000);
            break;
        default:
            }
}

function addLeftCellEvents(){
    for (let i = 0; i < cellClassLeft.length; i++) {
        cellClassLeft[i].addEventListener("click", setOwnShips, false);
    }
}

function removeLeftCellEvents(){
    for (let i = 0; i < cellClassLeft.length; i++) {
        cellClassLeft[i].removeEventListener("click", setOwnShips, false);
    }
}
//------------------------ new
/*
let size = 4

function row(scalar) {
    return (Math.floor((scalar % size) /blocksize)) + (blocksize * Math.floor((scalar /(size*blocksize))));
}

function col(scalar) {
    return (scalar %blocksize) + (blocksize *Math.floor((scalar/size))) - (size*Math.floor((scalar/(size*blocksize))));
}

function cell(houseIndex, cellIndex) {
    return row(toScalar(houseIndex,cellIndex)),col(toScalar(houseIndex,cellIndex))
}

function setCell(scalar, value) {
    console.log("Setting cell " + scalar + " to " + value);
    grid.cellvalue[scalar] = value;
    $("#scalar"+scalar).html(" "+grid.cellvalue[scalar]);
    setCellOnServer(row(scalar), col(scalar), value)
    $("#scalar"+scalar).off("click");
}
*/

class Grid {
    constructor(size){
        this.size = playgroundSize;
        this.cellvalue = [];
    }

    fill(json) {
        for (let scalar=0; scalar <this.size*this.size;scalar++) {
            this.cellvalue[scalar]=(json[toScalar(row(scalar),col(scalar))].cell.value);
        }
    }
}

let grid = new Grid(9)

/*
function updateGrid(grid) {
    for (let col=0; col <grid.size*grid.size;col++) {
        if (grid.cellvalue[i] != 0) {
            $("#scalar"+scalar).html(grid.cellvalue[scalar]);
        }
    }
}*/

function updateGrid(grid) {
    for (let row=0; row <playgroundSize;row++) {
        for (let col=0; col <playgroundSize;col++) {
            if (grid.cellvalue[i] != 0) {
                $("cellRightValue-R"+row+"-C"+col).html((json[row(i),col(i)].cell.value));
            }
        }
    }
}

//cellRightValue-R@row-C

function setCellOnServer(row, col, value) {
    $.get("/set/"+row+"/"+col+"/"+value, function(data) {
        console.log("Set cell on Server");
    });
}

function loadJson() {
    $.ajax({
        method: "GET",
        url: "battleship/json",
        dataType: "json",

        success: function (result) {
            grid = new Grid(result.battlefield.leftSide.grid.size);
            alert("result:: " +result.battlefield.leftSide.grid.size
            +"\ncells:: --> " + (result.battlefield.leftSide.grid.cells[0].cell.value))
            //grid.fill(result.grid.cells);
            //updateGrid(grid);
            //registerClickListener();
        }
    });
}
//window.onload = function(){
$(document).ready(function(){
    console.log( "Document is ready, filling grid" );
    loadJson();
    //document.getElementById("gameContainer").style.visibility = "hidden";
    $(gameContainer).hide();
    addLeftCellEvents();
    document.getElementById("startButton").addEventListener("click", startGame, false);
});
