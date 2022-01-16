<template>
  <div>{{currentState}}</div>
  <div class="gameContainer" style="">
                <span class="game" v-bind:id="'bf-size'+size">
                    <div class="battlefieldLeft">
                            <!--Numbers -->
                            <span class="xNumberRow">X</span>
                              <span class="numberRow" v-for="n  in size" :key="n">{{ n }}</span>

                              <!--row Left -->
                              <div class="battlefield size{{vuePlaygroundSize}}" v-for="row in size" :key="row">
                                <span class="abcCol">{{intToABC(row)}}</span>
                                  <!--col Left -->
                                  <div v-for="col in size" :key="col">
                                    <span class="cell cellLeft" v-html="none"  v-bind:id="'cellLeft-R'+row+'-C'+col"
                                          v-bind:cellIndex='(row-1)*size+(col-1)' v-bind:row='(row-1)' v-bind:col='(col-1)'
                                          v-bind:value='0' valueshoot="" @click="clickOnLeft"
                                          data-bs-toggle="tooltip" title="">
                                    </span>
                                </div>
                            </div>
                    </div><!--battlefieldLeft END -->

                    <div class="battlefieldRight clear">
                        <!--Numbers -->
                        <span class="middleCutLine"> | </span>
                      <span class="numberRow" v-for="(n, index) in size" :key="index">{{ n }}</span>
                        <span class="xNumberRow">X</span>

                      <!--row Right-->
                          <div class="battlefield size{{vuePlaygroundSize}}" v-for="(row, index) in size" :key="index">
                            <span class="middleCutLine"> | </span>

                          <!--col Right-->

                              <div v-for="(col, index) in size" :key="index">

                                <span class="cell cellRight" v-html="none"  v-bind:id="'cellRight-R'+row+'-C'+col"
                                      v-bind:cellIndex='(row-1)*size+(col-1)' v-bind:row='(row-1)' v-bind:col='(col-1)'
                                      v-bind:value='0' @click="clickOnRight"
                                      data-bs-toggle="tooltip" title="wrong side ;-)">
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
  /*
  mounted:function(){
    this.method1() //method1 will execute at pageload
  },*/
  probs:{
    testData: {
      skrri: "0",
      type:'test',
      kp: true
    }
  },
  data() {
    return {
      leftSetShipsCounter:"0",
      rightSetShipsCounter: "0",
      clickOnLeft: this.setLeftShips,
      clickOnRight: '',
      currentState:'',
      test: battleshipCells,
      size: vuePlaygroundSize,
      shipLeft: "images/whiteShip.jpg",
      none: '',
      score: 0,
      shipPic: 1,
      testX: "t",
      leftShipPic: '<img src=\'images/whiteShip.png\' alt=\'S\' class=\'gameContainer\' value="1">',
      rightShipPic: '<img src=\'images/pirateShip.png\' alt=\'S\' class=\'gameContainer\'value="1">',
      leftShipHitPic: '<img src=\'images/whiteShipHit.png\' alt=\'S\' class=\'gameContainer\'value="2">',
      rightShipHitPic: '<img src=\'images/pirateShipHit.png\' alt=\'S\' class=\'gameContainer\'value="2">',

    };
  },
  methods: {
    //Phase1
    setLeftShips(event) {
      this.currentState="setLeftShips";
      // `event` is the native DOM event

      if (event) {
        if(event.target.getAttribute('value')==="0"){
          setCellValue(event.target.getAttribute('cellIndex'),1)
          event.target.setAttribute('value',"1");
          event.target.innerHTML = this.leftShipPic;
          //this.changeCellValueToSign(1);
          console.log(event.target.getAttribute('cellIndex'))
          this.leftSetShipsCounter++;
          console.log( this.leftSetShipsCounter)

          if(this.leftSetShipsCounter===this.size){
            console.log( "limit left")
            this.clickOnLeft=""
            this.clickOnRight=this.setRightShips;
            this.skrri="1";
            event.target.addClass="XXXXXXXX"
        }
          }
      }
    },
    //Phase2
    setRightShips(event) {
      this.currentState="setRightShips";
      // `event` is the native DOM event
      if (event) {
        if(event.target.getAttribute('value')==="0"){
        setCellValue(event.target.getAttribute('cellIndex'),1)
        event.target.setAttribute('value',"1");
        event.target.innerHTML = this.rightShipPic;
        //this.changeCellValueToSign(1);
        console.log(event.target.getAttribute('cellIndex'))
        this.rightSetShipsCounter++;
        console.log( this.rightSetShipsCounter)
        if(this.rightSetShipsCounter===this.size){
          console.log( "limit right")
          this.clickOnRight=""
          this.clickOnRight=this.shootRightShips;
        }
      }
      }
    },
    //Phase 3
    shootRightShips(event) {

    },
    //Phase 4
    shootLeftShips(event) {

    },
    push(n) {
      return "index: " + n
    },
    intToABC(row) {
      return String.fromCharCode(row + 64)
    },
    cellValue(col) {
      return battleshipCells[col]
    },
    changeCellValueToSign(cellIndex){
      if(battleshipCells[cellIndex] === 0){
        return "_"
      }
      if(battleshipCells[cellIndex] === 1){
        return "S"
      }
      if(battleshipCells[cellIndex] === 2){
        return "X"
      }
    }
  }

}
let vuePlaygroundSize = 2;
let battleshipCells = createEmpty1DBattlefield();
let battleshipLeftCells = createEmpty1DBattlefield();
let battleshipRightCells = createEmpty1DBattlefield();
let battleshipCellMatrix = createBattlefieldMatrix(vuePlaygroundSize, vuePlaygroundSize, 0)

function createBattlefieldMatrix(rows, cols, defaultValue) {
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

function createEmpty1DBattlefield() {
  let battleshipCells = []
  for (let i = 0; i < vuePlaygroundSize * vuePlaygroundSize; i++) {
    battleshipCells.push(0)
  }
  return battleshipCells
}

function setCellValue(index, cellValue) {
  battleshipCells[index]=cellValue
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

console.log(createBattlefieldMatrix(vuePlaygroundSize, vuePlaygroundSize, 0));
console.log("cell value: " + battleshipCells[3]);

//form Old Skript



</script>


<style>
.battlefieldLeft,.battlefieldRight{
  float: left;
  justify-content: left;
}

@media (min-width: 400px) {
  .battlefieldRight {
    /*float: right;*/
    justify-content: right;
  }
}
.gameContainer {
  height: 100%;
  width: 100%;
  /*min-width: 330px;*/
  display:flex;
  font-size:calc(120% + 1.8vw);
  font-family: "Verdana",Geneva, sans-serif;
  font-weight: bold;
  color:black;
  justify-content: center;
  align-items: center;
  line-height: 1;
}
@media (min-width: 900px) {
  .gameContainer {

  font-size:calc(100% + 2.5vw);
  }
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
@media (min-width: 300px) {
  .game {
    display: grid;
    grid-template-columns: auto;
    background-color: #2196F3;
    padding: 10px;
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
}
.game {
  border-style: inset;
  /*border-width: 0.05em;*/
  border-spacing: 0;
  border-color: #f6f6FF;
  background-color: black;
  padding: 0.05em;

  /*min-width: 375px;*/
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

.cellHoverGreen:hover {
  background-color: darkgreen;
}

.cellHoverRed:hover {
  background-color: darkred;
}

@media only screen and (max-width: 700px) {
  .clear {
    clear:both;
  }
}

</style>
