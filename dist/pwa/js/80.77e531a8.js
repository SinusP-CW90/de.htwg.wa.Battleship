"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([[80],{

/***/ 6958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Battleground)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Battleground.vue?vue&type=template&id=cba659e8



const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, null, -1);

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "current State:", -1);

const _hoisted_3 = {
  class: "text-h6 bg-black"
};
const _hoisted_4 = ["id"];
const _hoisted_5 = {
  class: "battlefieldLeft"
};

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "xNumberRow"
}, "X", -1);

const _hoisted_7 = {
  class: "abcCol"
};
const _hoisted_8 = ["id", "cellIndex", "col", "row", "innerHTML"];
const _hoisted_9 = {
  class: "battlefieldRight clear"
};

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "middleCutLine"
}, " | ", -1);

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "xNumberRow"
}, "X", -1);

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "middleCutLine"
}, " | ", -1);

const _hoisted_13 = ["id", "cellIndex", "col", "row", "innerHTML"];
const _hoisted_14 = {
  class: "abcColRight"
};

const _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "clear"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    class: "cardState"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "bg-grey-8 text-white"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($data.currentState), 1)]),
      _: 1
    })]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: "gameContainer",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)($data.scaleFont)
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
    id: 'bf-size' + $data.size,
    class: "game"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [_hoisted_6, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, n => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
      key: n,
      class: "numberRow"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(n), 1);
  }), 128)), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, row => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: row,
      class: "battlefield size{{this.size}}"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.zw)($options.intToABC(row)), 1), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, col => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        key: col
      }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
        id: 'cellLeft-R' + row + '-C' + col,
        class: (0,shared_esm_bundler/* normalizeClass */.C_)([[{
          'cellHoverGreen': $data.cellHoverGreen
        }, {
          'cellHoverRed': !$data.cellHoverGreen
        }], "cell cellLeft"]),
        "data-bs-toggle": "tooltip",
        title: "click to set your Ship",
        cellIndex: (row - 1) * $data.size + (col - 1),
        col: col - 1,
        row: row - 1,
        value: 0,
        onClick: _cache[0] || (_cache[0] = (...args) => $data.clickOnLeft && $data.clickOnLeft(...args)),
        innerHTML: $data.none
      }, null, 10, _hoisted_8)]);
    }), 128))]);
  }), 128))]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [_hoisted_10, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, (n, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
      key: index,
      class: "numberRow"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(n), 1);
  }), 128)), _hoisted_11, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, (row, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: index,
      class: "battlefield size{{this.size}}"
    }, [_hoisted_12, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, (col, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        key: index
      }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
        id: 'cellRight-R' + row + '-C' + col,
        class: (0,shared_esm_bundler/* normalizeClass */.C_)([[{
          'cellHoverGreen': !$data.cellHoverGreen
        }, {
          'cellHoverRed': $data.cellHoverGreen
        }], "cell cellRight"]),
        "data-bs-toggle": "tooltip",
        title: "wrong side ;-)",
        cellIndex: (row - 1) * $data.size + (col - 1),
        col: col - 1,
        row: row - 1,
        value: 0,
        onClick: _cache[1] || (_cache[1] = (...args) => $data.clickOnRight && $data.clickOnRight(...args)),
        innerHTML: $data.none
      }, null, 10, _hoisted_13)]);
    }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_14, (0,shared_esm_bundler/* toDisplayString */.zw)($options.intToABC(row)), 1)]);
  }), 128)), _hoisted_15])], 8, _hoisted_4)], 4)], 64);
}
;// CONCATENATED MODULE: ./src/components/Battleground.vue?vue&type=template&id=cba659e8

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Battleground.vue?vue&type=script&lang=js
//import BattlefieldLeftSide from "components/BattlefieldLeftSide";
//import BattlefieldRightSide from "components/BattlefieldRightSide";
/* harmony default export */ const Battlegroundvue_type_script_lang_js = ({
  name: "Battleground",
  components: {//BattlefieldLeftSide: BattlefieldLeftSide,
    //BattlefieldRightSide: BattlefieldRightSide
  },

  /*
  mounted:function(){
    this.method1() //method1 will execute at pageload
  },*/
  probs: {
    testData: {
      skrri: "0",
      type: 'test',
      kp: true
    }
  },

  data() {
    return {
      scaleFont: calcScale(),
      kp: String(100),
      leftSetShipsCounter: 0,
      rightSetShipsCounter: 0,
      leftShipHitCounter: 0,
      rightShipHitCounter: 0,
      randomShips: true,
      clickOnLeft: this.setLeftShips,
      clickOnRight: '',
      currentState: '',
      cellHoverGreen: true,
      battleshipCells: createEmpty1DBattlefield(),
      size: vuePlaygroundSize,
      shipLeft: "images/whiteShip.jpg",
      none: '',
      leftShipPic: "<img src='images/whiteShip.png' alt='S' class='gameContainer' value='1'>",
      rightShipPic: '<img src=\'images/pirateShip.png\' alt=\'S\' class=\'gameContainer\' value="1">',
      leftShipHitPic: 'images/whiteShipHit.png',
      rightShipHitPic: 'images/pirateShipHit.png',
      miss: '<img src=\'images/miss.png\' alt=\'S\' class=\'gameContainer\' value="0">'
    };
  },

  methods: {
    //Phase1
    setLeftShips(event) {
      this.currentState = "setLeftShips"; // `event` is the native DOM event

      if (event) {
        if (event.target.getAttribute('value') === "0") {
          setCellValue(event.target.getAttribute('cellIndex'), 1);
          event.target.setAttribute('value', "1");
          event.target.innerHTML = this.leftShipPic; //this.changeCellValueToSign(1);

          console.log(event.target.getAttribute('cellIndex'));
          this.leftSetShipsCounter++;
          console.log(this.leftSetShipsCounter);

          if (this.leftSetShipsCounter === this.size) {
            console.log("limit left");
            this.clickOnLeft = "";
            this.clickOnRight = this.setRightShips;
            this.cellHoverGreen = !this.cellHoverGreen;
            event.target.setAttribute('title', "Wrong Side!");
            this.currentState = "P2 - setRightShips";

            if (this.randomShips === true) {
              this.setRandomPlayer2Ships();
            }
          }
        }
      }
    },

    setRandomPlayer2Ships() {
      for (let i = 0; i < vuePlaygroundSize; i++) {//const xxx = JSON.stringify(this.$refs);
        // alert(xxx)

        /*
        let currentCell = "#cellRightValue-R"+i+"-C"+Math.floor(Math.random() * 4);
        //$(currentCell).addClass("shipIsSet");
         //$(currentCell).html("<img src='http://localhost:9000/assets/images/pirateShip.png' alt='S' class='gameContainer' id=this.value/>");
        */
      }
    },

    //Phase2
    setRightShips(event) {
      this.currentState = "P2 - setRightShips";
      event.target.setAttribute('title', "click to Set your Ship"); // `event` is the native DOM event

      if (event) {
        if (event.target.getAttribute('value') === "0") {
          setCellValue(event.target.getAttribute('cellIndex'), 1);
          event.target.setAttribute('value', "1");
          event.target.innerHTML = this.rightShipPic; //this.changeCellValueToSign(1);

          console.log(event.target.getAttribute('cellIndex'));
          this.rightSetShipsCounter++;
          console.log(this.rightSetShipsCounter);

          if (this.rightSetShipsCounter === this.size) {
            console.log("limit right");
            this.clickOnRight = "";
            this.clickOnRight = this.shootRightShips;
            this.cellHoverGreen = !this.cellHoverGreen;
            event.target.setAttribute('title', "Shoot!!!");
            this.currentState = "P3 - shootRightShips";
          }
        }
      }
    },

    //Phase 3
    shootRightShips(event) {
      this.currentState = "P3 - shootRightShips";

      if (event) {
        //hit
        if (event.target.getAttribute('value') === "1") {
          setCellValue(event.target.getAttribute('cellIndex'), 2);
          event.target.setAttribute('value', "2");
          event.target.setAttribute('src', this.rightShipHitPic);
          event.target.parentNode.setAttribute("value", "2");
          console.log(event.target.getAttribute('cellIndex'));
          this.rightShipHitCounter++;
          console.log("hit!");

          if (this.rightShipHitCounter === this.size) {
            setTimeout(function () {
              alert("Left Player Won!!!!!");
            }, 500);
          }
        } //miss


        if (event.target.getAttribute('value') === "0") {
          //miss pics
          //event.target.setAttribute('src',"images/miss.png");
          event.target.innerHTML = this.miss;
          setTimeout(function () {
            event.target.firstChild.setAttribute('src', "images/missAfter.png");
          }, 1000);
          setTimeout(function () {
            event.target.firstChild.setAttribute('src', "images/missAfterAfter.png");
          }, 1700);
          console.log("miss!");
        }
      } //change Player


      this.clickOnRight = "";
      this.clickOnLeft = this.shootLeftShips;
      this.cellHoverGreen = !this.cellHoverGreen;
      this.currentState = "P4 - shootLeftShips";
    },

    //Phase 4
    shootLeftShips(event) {
      this.currentState = "P4 - shootLeftShips";

      if (event) {
        //hit
        if (event.target.getAttribute('value') === "1") {
          setCellValue(event.target.getAttribute('cellIndex'), 2);
          event.target.setAttribute('value', "2");
          event.target.setAttribute('src', this.leftShipHitPic);
          event.target.parentNode.setAttribute("value", "2");
          console.log(event.target.getAttribute('cellIndex'));
          this.leftShipHitCounter++;
          console.log("hit!");

          if (this.leftShipHitCounter === this.size) {
            setTimeout(function () {
              alert("Right Player Won!!!!!");
            }, 500);
          }
        } //miss


        if (event.target.getAttribute('value') === "0") {
          //miss pics
          event.target.innerHTML = this.miss;
          setTimeout(function () {
            event.target.firstChild.setAttribute('src', "images/missAfter.png");
          }, 1000);
          setTimeout(function () {
            event.target.firstChild.setAttribute('src', "images/missAfterAfter.png");
          }, 1700);
          console.log("miss!");
        }
      } //change Player


      this.clickOnLeft = "";
      this.clickOnRight = this.shootRightShips;
      this.cellHoverGreen = !this.cellHoverGreen;
      this.currentState = "P3 - shootRightShips";
    },

    push(n) {
      return "index: " + n;
    },

    intToABC(row) {
      return String.fromCharCode(row + 64);
    },

    cellValue(col) {
      return battleshipCells[col];
    },

    changeCellValueToSign(cellIndex) {
      if (battleshipCells[cellIndex] === 0) {
        return "_";
      }

      if (battleshipCells[cellIndex] === 1) {
        return "S";
      }

      if (battleshipCells[cellIndex] === 2) {
        return "X";
      }
    }

  }
});
let vuePlaygroundSize = 4;
let battleshipCells = createEmpty1DBattlefield();
let battleshipLeftCells = createEmpty1DBattlefield();
let battleshipRightCells = createEmpty1DBattlefield();
let battleshipCellMatrix = createBattlefieldMatrix(vuePlaygroundSize, vuePlaygroundSize, 0);

function createBattlefieldMatrix(rows, cols, defaultValue) {
  let arr = []; // Creates all lines:

  for (let i = 0; i < rows; i++) {
    // Creates an empty line
    arr.push([]); // Adds cols to the empty line:

    arr[i].push(new Array(cols));

    for (let j = 0; j < cols; j++) {
      // Initializes:
      arr[i][j] = defaultValue;
    }
  }

  return arr;
}

function createEmpty1DBattlefield() {
  let battleshipCells = [];

  for (let i = 0; i < vuePlaygroundSize * vuePlaygroundSize; i++) {
    battleshipCells.push(0);
  }

  return battleshipCells;
}

function setCellValue(index, cellValue) {
  battleshipCells[index] = cellValue;
}

function indexTorRow(index) {
  return Math.floor(index / vuePlaygroundSize);
}

function indexToCol(index) {
  return Math.floor(index % vuePlaygroundSize);
}

function cellToIndex(row, col) {
  return Math.floor(row * vuePlaygroundSize + col);
}

console.log(createBattlefieldMatrix(vuePlaygroundSize, vuePlaygroundSize, 0));
console.log("cell value: " + battleshipCells[3]); //form Old Skript

function calcScale() {
  return "font-size:calc(125% + " + Math.round((4.2 + vuePlaygroundSize) / vuePlaygroundSize) + "vw);";
}
;// CONCATENATED MODULE: ./src/components/Battleground.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Battleground.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Battlegroundvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Battleground = (__exports__);
;


runtime_auto_import_default()(Battlegroundvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z});


/***/ }),

/***/ 8080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=1c0d4eea


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Battleship ");

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Inbox ");

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Star ");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Send ");

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Drafts ");

const _hoisted_6 = {
  class: "absolute-bottom bg-transparent"
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1);

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-weight-bold"
}, "Player 1", -1);

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "@Name", -1);

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Inbox ");

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Star ");

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Send ");

const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Drafts ");

const _hoisted_14 = {
  class: "absolute-bottom bg-transparent"
};

const _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/img/avatar.png"
}, null, -1);

const _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-weight-bold"
}, "Player 2", -1);

const _hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "@ Player 2 Name", -1);

const _hoisted_18 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
}, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_route_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-route-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-scroll-area");

  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lhr lpr lFr"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      reveal: "",
      elevated: "",
      class: "bg-primary text-white",
      "height-hint": "98"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          dense: "",
          flat: "",
          round: "",
          icon: "menu",
          onClick: $setup.toggleLeftDrawer
        }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
            src: "images/battleshipTitleWhite.png",
            style: {
              "max-width": "111px",
              "min-height": "8px"
            }
          }), _hoisted_1]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          dense: "",
          flat: "",
          round: "",
          icon: "menu",
          onClick: $setup.toggleRightDrawer
        }, null, 8, ["onClick"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
        align: "left",
        class: "text-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/",
          label: "The Game"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/aboutTheGame",
          label: "About Battleship"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/index",
          label: "Test Page"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/page4",
          label: "Error Page"
        })]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      class: "bg-primary text-white",
      ref: "“leftDrawer”",
      modelValue: $setup.leftDrawerOpen,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.leftDrawerOpen = $event),
      side: "left",
      bordered: "",
      width: 200,
      breakpoint: 400
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
        style: {
          "height": "calc(100% - 150px)",
          "margin-top": "150px",
          "border-right": "1px solid #ddd"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          padding: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "inbox"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "star"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "send"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "drafts"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]])]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        class: "absolute-top",
        src: "images/seaBackground2.jpg",
        style: {
          "height": "150px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          size: "80px",
          class: "q-mb-sm"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_7]),
          _: 1
        }), _hoisted_8, _hoisted_9])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      class: "bg-primary text-white",
      ref: "“rightDrawer”",
      modelValue: $setup.rightDrawerOpen,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.rightDrawerOpen = $event),
      side: "right",
      bordered: "",
      width: 200,
      breakpoint: 400
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_scroll_area, {
        style: {
          "height": "calc(100% - 150px)",
          "margin-top": "150px",
          "border-right": "1px solid #ddd"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          padding: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "inbox"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_10]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "star"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_11]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "send"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_12]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "drafts"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_13]),
              _: 1
            })]),
            _: 1
          })), [[_directive_ripple]])]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        class: "absolute-top",
        src: "images/seaBackground2.jpg",
        style: {
          "height": "150px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          size: "80px",
          class: "q-mb-sm"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_15]),
          _: 1
        }), _hoisted_16, _hoisted_17])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_footer, {
      reveal: "",
      elevated: "",
      class: "bg-grey-8 text-white"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_18]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.info), 1)]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=template&id=1c0d4eea

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/components/Battleground.vue + 4 modules
var Battleground = __webpack_require__(6958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js


/* harmony default export */ const MainLayoutvue_type_script_lang_js = ({
  name: "MainLayout",
  components: {//Battleground: Battleground,
    //BattlefieldRightSide: BattlefieldRightSide
  },

  data() {
    return {
      info: Battleground/* default.probs */.Z.probs
    };
  },

  setup() {
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const rightDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(false);
    return {
      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,

      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      }

    };
  }

});
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(9214);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QRouteTab.js + 1 modules
var QRouteTab = __webpack_require__(208);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(7704);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(1762);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (__exports__);
;

















runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QImg: QImg/* default */.Z,QTabs: QTabs/* default */.Z,QRouteTab: QRouteTab/* default */.Z,QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QAvatar: QAvatar/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QFooter: QFooter/* default */.Z});runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=80.77e531a8.js.map