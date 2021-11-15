let cellV00 = document.getElementById("cellValue-R0-C0")
let cellClass = document.getElementsByClassName("cell")
let cell00 = document.getElementById("cell-R0-C0")
let cell00C = document.getElementById("cell-R0-C0").firstElementChild
let pic = document.getElementById("testPic")

function change(){
    this.firstElementChild.innerHTML = "X";
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
    setUpEvents();
}
