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

(function loadJson() {
    $.ajax({
        method: "GET",
        url: "battleship/json",
        dataType: "json",

        success: function (result) {
            console.log("Vue playgroundSize: " + result.battlefield.leftSide.size);
            vuePlaygroundSize = result.battlefield.leftSide.size;
        }
    });
})();

$(document).ready(function () {

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

    /*
    const gameButton = Vue.createApp({})
    gameButton.component('startGameButton', {
        methods: {
            showTheGame() {
                return "index: " + n
            }
            },
        template: `
          <h4 class="card-title"><a class="btn btn-primary" id="startButton">START the Game</a></h4>
    `})
    gameButton.mount('#startGameButton')
*/

// Create a Vue application
    const game = Vue.createApp({})
    console.log("Vue value: " + vuePlaygroundSize);

// Define a new global component called gameboard
    game.component('gameboard', {
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
        },
        template: `
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
`})

    game.mount('#gamefield')

});