<template>
  <div class="gameContainer">
                <span class="game" v-bind:id="'bf-size'+size">
                    <div class="battlefieldLeft">
                            <!--Numbers -->
                            <span class="xNumberRow">X</span>
                            <span class="numberRow" v-for="n in size">{{ n }}</span>

                      <!--row Left -->
                            <div class="battlefield size{{vuePlaygroundSize}}" v-for="row in size">
                                <span class="abcCol">{{intToABC(row)}}</span>
                              <!--col Left -->
                                <div v-for="col in size">
                                    <span class="cell cellLeft" v-bind:id="'cellLeft-R'+row+'-C'+col" v-bind:cellIndex='row*size+col'>
                                        <span class="cellValueLeft" v-bind:id="'cellValueLeft-R'+row+'-C'+col" v-bind:cellValue='row*size+col' shoot="">
                                        {{changeZero(col)}}
                                          </span>
                                    </span>
                                </div>
                            </div>
                    </div><!--battlefieldLeft END -->

                    <div class="battlefieldRight clear">
                        <!--Numbers -->
                        <span class="middleCutLine"> | </span>
                        <span class="numberRow" v-for="n in size">{{ n }}</span>
                        <span class="xNumberRow">X</span>

                      <!--row Right-->
                        <div class="battlefield size{{vuePlaygroundSize}}" v-for="row in size">
                            <span class="middleCutLine"> | </span>

                          <!--col Right-->
                            <div v-for="col in size">
                                <span class="cell cellRight" v-bind:id="'cellRight-R'+row+'-C'+col" v-bind:cellRightIndex='row*size+col' data-bs-toggle="tooltip" title="wrong side ;-)">
                                    <span class="cellValueRight" v-bind:id="'cellValueRight-R'+row+'-C'+col" v-bind:cellRightValue='row*size+col' shoot="">
                                        {{changeZero(col)}}
                                    </span>
                                </span>
                            </div>

                            <span class="abcColRight">{{intToABC(row)}}</span>
                        </div><!--battlefield END -->

                        <div class="clear"></div>
                  </div><!--battlefieldRight END -->

                </span><!--game span END -->
  </div><!--gameContainer END -->
</template>

<script>
import BattlefieldLeftSide from "components/BattlefieldLeftSide";
import BattlefieldRightSide from "components/BattlefieldRightSide";


export default {
  name: "Battleground",
  components: {
    //BattlefieldLeftSide: BattlefieldLeftSide,
    //BattlefieldRightSide: BattlefieldRightSide
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
let vuePlaygroundSize = 4;
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
  min-width: 330px;
  display:flex;
  font-size:calc(100% + 2.0vw);
  font-family: "Verdana",Geneva, sans-serif;
  font-weight: bold;
  color:black;
  justify-content: center;
  align-items: center;
  line-height: 1;
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
  min-width: 375px;
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
