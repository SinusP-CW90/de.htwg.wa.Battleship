<template>
  <div class="gameContainer">
                <span class="game" v-bind:id="'bf-size'+size">
<BattlefieldLeftSide></BattlefieldLeftSide>
                  <BattlefieldRightSide></BattlefieldRightSide>
                </span><!--game span END -->
  </div><!--gameContainer END -->
</template>

<script>
import component1TEST from "components/component1TEST";
import BattlefieldLeftSide from "components/BattlefieldLeftSide";
import BattlefieldRightSide from "components/BattlefieldRightSide";

export default {
  name: "Battleground",
  components: {
    component1TEST: component1TEST,
    BattlefieldLeftSide: BattlefieldLeftSide,
    BattlefieldRightSide: BattlefieldRightSide
  },
  data() {
    return {
      test: battleshipCells,
      size: vuePlaygroundSize,
      attrib: "Test"
    }
  },
  methods: {
    push(n) {
      return "index: " + n
    },
    intToABC(row) {
      return String.fromCharCode(row + 64)
    },
    cellValue(col) {
      return battleshipCells[col]
    },
    changeZero(col){

      if(battleshipCells[col] === 0){
        return "_"
      }
    }
  }
}
let vuePlaygroundSize = 2;
let battleshipCells = cellIndex();
let battleshipCellMatrix = cellMatrix(vuePlaygroundSize, vuePlaygroundSize, 0)
let testArray = [0,1,2,3]

function cellMatrix(rows, cols, defaultValue) {
  let arr = [];
  // Creates all lines:
  for (let i = 0; i < rows; i++) {
    // Creates an empty line
    arr.push([]);
    // Adds cols to the empty line:
    arr[i].push(new Array(cols));

    for (let j = 0; j < cols; j++) {
      // Initializes:
      arr[i][j] = defaultValue;
    }
  }
  return arr;
}

function cellIndex() {
  let battleshipCells = []
  for (let i = 0; i < vuePlaygroundSize * vuePlaygroundSize; i++) {
    battleshipCells.push(0)
  }
  return battleshipCells
}

function indexTorRow(index) {
  return (Math.floor(index / vuePlaygroundSize));
}

function indexToCol(index) {
  return (Math.floor(index % vuePlaygroundSize));
}

function cellToIndex(row, col) {
  return (Math.floor(row * vuePlaygroundSize + col));
}

console.log(cellMatrix(vuePlaygroundSize, vuePlaygroundSize, 0));
console.log("cell value: " + battleshipCells[3]);


</script>


<style>
.gameTitle {
  text-align: center;
  font-family: "Verdana",Geneva, sans-serif;
  font-weight: bold;
  color:black;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.battleshipTitle{
  width: 50%;
}

.battlefieldLeft{
  float: left;
  justify-content: left;
}

.battlefieldRight{
  float: right;
  justify-content: right;
}
.gameContainer {
  height: 100%;
  width: 100%;
  display:flex;
  font-size:calc(100% + 2.7vw);
  font-family: "Verdana",Geneva, sans-serif;
  font-weight: bold;
  color:black;
  justify-content: center;
  align-items: center;
}

.numberRow{
  color:white;
  display: inline-block;
  float:left;
  border-style: outset;
  border-width: 0.05em;
  /*background-color: black;*/
  border-color: darkgray;
  width: 1.2em;
  height: 1.2em;
  margin:0.1em;
  text-align: center;
}
.xNumberRow{
  color:black;
  display: inline-block;
  float:left;
  border-style: outset;
  border-width: 0.05em;
  border-color: darkgray;
  width: 1.2em;
  height: 1.2em;
  margin:0.1em;
  text-align: center;
}

.abcCol{
  color:white;
  display: inline-block;
  float:left;
  border-style: outset;
  border-width: 0.05em;
  border-color: darkgray;
  width: 1.2em;
  height: 1.2em;
  margin:0.1em;
  text-align: center;
}

.abcColRight{
  color:white;
  display: inline-block;
  float:right;
  border-style: outset;
  border-width: 0.05em;
  border-color: darkgray;
  width: 1.2em;
  height: 1.2em;
  margin:0.1em;
  text-align: center;
}
.middleCutLine{
  display: inline-block;
  float:left;
  border-style: outset;
  border-width: 0.05em;
  /*background-color: #E0E0FF;*/
  background-color: black;
  border-color: #f6f6FF;
  width: 0.4em;
  height: 1.2em;
  margin:0.1em;
  text-align: center;
}

.game {
  border-style: inset;
  border-width: 0.05em;
  border-spacing: 0;
  border-color: #f6f6FF;
  background-color: black;
  padding: 0.05em;
  margin:auto;
  width: auto;

  display: inline-block;
  float:left;
}

.cell {
  display: inline-block;
  float:left;
  border-style: outset;
  border-width: 0.05em;
  /*background-color: #E0E0FF;*/
  background-color: #1668b5;
  border-color: #f6f6FF;
  width: 1.2em;
  height: 1.2em;
  margin:0.1em;
  text-align: center;
}

.cellLeftTurn:hover {
  background-color: darkred;
}

.cellRightTurn:hover {
  background-color: darkgreen;
}

.cellLeft:hover {
  background-color: darkgreen;
}

.cellRight:hover {
  background-color: darkred;
}

@media only screen and (max-width: 700px) {
  .clear {
    clear:both;
  }
}

</style>
