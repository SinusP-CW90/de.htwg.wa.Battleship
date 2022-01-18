"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([[606],{

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

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BattleshipGame)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BattleshipGame.vue?vue&type=template&id=3c5a3b8a

const _hoisted_1 = {
  id: "q-app",
  class: "bg-image",
  style: {
    "min-height": "100vh"
  }
};
const _hoisted_2 = {
  class: "q-pa-md row items-start q-gutter-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WelcomeLabel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("WelcomeLabel");

  const _component_BattleshipSettings = (0,runtime_core_esm_bundler/* resolveComponent */.up)("BattleshipSettings");

  const _component_q_slide_transition = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-slide-transition");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_BattleshipState = (0,runtime_core_esm_bundler/* resolveComponent */.up)("BattleshipState");

  const _component_Battleground = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Battleground");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    bordered: "",
    class: "my-card",
    flat: "",
    style: {
      "background": "radial-gradient(circle, #383838 0%, #1d1d1d 100%)"
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_slide_transition, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_WelcomeLabel), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_BattleshipSettings)], 512), [[runtime_dom_esm_bundler/* vShow */.F8, $setup.expandedPic]])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      icon: $setup.expandedPic ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
      color: "grey",
      dense: "",
      flat: "",
      round: "",
      onClick: _cache[0] || (_cache[0] = $event => {
        $setup.expandedPic = !$setup.expandedPic;
        $setup.expanded = !$setup.expanded;
      })
    }, null, 8, ["icon"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        icon: $setup.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
        color: "white",
        dense: "",
        flat: "",
        round: "",
        onClick: _cache[1] || (_cache[1] = $event => {
          $setup.expanded = !$setup.expanded;
          $setup.expandedPic = !$setup.expandedPic;
        })
      }, null, 8, ["icon"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_slide_transition, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "text-subitle2 text-white"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "text-subitle2 text-white text-center"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
            class: "b-img text-center",
            src: "images/battleship.jpg"
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_BattleshipState), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Battleground)]),
        _: 1
      })], 512), [[runtime_dom_esm_bundler/* vShow */.F8, $setup.expanded]])]),
      _: 1
    })]),
    _: 1
  })])]);
}
;// CONCATENATED MODULE: ./src/pages/BattleshipGame.vue?vue&type=template&id=3c5a3b8a

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/WelcomeLabel.vue?vue&type=template&id=7f9483a9

const WelcomeLabelvue_type_template_id_7f9483a9_hoisted_1 = {
  key: 0,
  class: "text-h3 q-mt-sm q-mb-xs text-orange-9 text-center"
};
function WelcomeLabelvue_type_template_id_7f9483a9_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
    class: "text-subitle2 text-white text-center"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
      class: "q-img",
      src: "images/battleship.jpg"
    })]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [$data.show ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", WelcomeLabelvue_type_template_id_7f9483a9_hoisted_1, "Welcome to the Battleship Game")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)], 64);
}
;// CONCATENATED MODULE: ./src/components/WelcomeLabel.vue?vue&type=template&id=7f9483a9

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/WelcomeLabel.vue?vue&type=script&lang=js
/* harmony default export */ const WelcomeLabelvue_type_script_lang_js = ({
  name: "WelcomeLable",

  data() {
    return {
      show: true
    };
  }

});
;// CONCATENATED MODULE: ./src/components/WelcomeLabel.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/WelcomeLabel.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WelcomeLabelvue_type_script_lang_js, [['render',WelcomeLabelvue_type_template_id_7f9483a9_render]])

/* harmony default export */ const WelcomeLabel = (__exports__);
;



runtime_auto_import_default()(WelcomeLabelvue_type_script_lang_js, 'components', {QSeparator: QSeparator/* default */.Z,QCardSection: QCardSection/* default */.Z,QImg: QImg/* default */.Z});

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BattleshipSettings.vue?vue&type=template&id=7e510ef2


const BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6 q-mt-sm q-mb-xs text-white text-center"
}, " Game Settings", -1);

const BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_2 = {
  class: "q-pa-md"
};
const _hoisted_3 = {
  class: "bg-grey-4 q-pa-sm rounded-borders",
  style: {
    "max-width": "250px"
  }
};

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Game Modus: ");

const _hoisted_5 = {
  class: "q-pa-md bg-grey-4",
  style: {
    "max-width": "300px"
  }
};
const _hoisted_6 = {
  class: "q-gutter-md q-pa-sm rounded-borders"
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Select your Ship Type ");

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Ship Type: ");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("*none*");

const _hoisted_10 = {
  class: "vertical-bottom"
};

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Submitted form contains the following formData (key = value):");

function BattleshipSettingsvue_type_template_id_7e510ef2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_option_group = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-option-group");

  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_chip = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-chip");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_1]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
    class: "q-gutter-md row",
    onSubmit: $setup.onSubmit
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_option_group, {
      modelValue: $setup.preferred,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.preferred = $event),
      options: $setup.options,
      color: "primary",
      inline: "",
      name: "gameModus"
    }, null, 8, ["modelValue", "options"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [_hoisted_7, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
      modelValue: $setup.shipModel,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.shipModel = $event),
      options: $setup.shipOptions,
      filled: "",
      label: "Player 1",
      "stack-label": ""
    }, {
      selected: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8, $setup.shipModel ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_chip, {
        key: 0,
        class: "q-my-none q-ml-xs q-mr-none",
        color: "white",
        dense: "",
        square: "",
        "text-color": "primary"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)($setup.shipModel.label) + " ", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          icon: $setup.shipModel.icon,
          color: "primary",
          "text-color": "white"
        }, null, 8, ["icon"])]),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_badge, {
        key: 1
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),
        _: 1
      }))]),
      _: 1
    }, 8, ["modelValue", "options"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
      color: "secondary",
      "multi-line": ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Model: \"" + (0,shared_esm_bundler/* toDisplayString */.zw)($setup.shipModel) + "\" ", 1)]),
      _: 1
    })])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      color: "primary",
      label: "Start the Game",
      type: "submit"
    })])]),
    _: 1
  }, 8, ["onSubmit"]), $setup.submitResult.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_card, {
    key: 0,
    bordered: "",
    class: "q-mt-md bg-grey-2",
    flat: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_11]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "row q-gutter-sm items-center"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.submitResult, (item, index) => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
          key: index,
          class: "q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
        }, (0,shared_esm_bundler/* toDisplayString */.zw)(item.name) + " = " + (0,shared_esm_bundler/* toDisplayString */.zw)(item.value), 1);
      }), 128))]),
      _: 1
    })]),
    _: 1
  })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])], 64);
}
;// CONCATENATED MODULE: ./src/components/BattleshipSettings.vue?vue&type=template&id=7e510ef2

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BattleshipSettings.vue?vue&type=script&lang=js


/* harmony default export */ const BattleshipSettingsvue_type_script_lang_js = ({
  name: "BattleshipSettings",
  components: {},

  setup() {
    const submitResult = (0,reactivity_esm_bundler/* ref */.iH)([]);
    return {
      expandedPic: (0,reactivity_esm_bundler/* ref */.iH)(true),
      expanded: (0,reactivity_esm_bundler/* ref */.iH)(false),
      preferred: (0,reactivity_esm_bundler/* ref */.iH)('p1'),
      accepted: (0,reactivity_esm_bundler/* ref */.iH)([]),
      submitResult,
      model: (0,reactivity_esm_bundler/* ref */.iH)(null),
      shipModel: (0,reactivity_esm_bundler/* ref */.iH)({
        label: 'red Ships',
        value: 'shipsRed',
        icon: 'mail'
      }),
      options: [{
        label: 'Player1 vs Computer',
        value: 'p1'
      }, {
        label: 'Player1 vs Player2',
        value: 'p2'
      }],
      shipOptions: [{
        label: 'red Ships',
        value: 'shipsRed',
        icon: 'bluetooth'
      }, {
        label: 'white Ships',
        value: 'whiteShips',
        icon: 'mail'
      }, {
        label: 'pirate Ships',
        value: 'shootShips',
        icon: 'bluetooth'
      }],

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value
          });
        }

        submitResult.value = data;
      }

    };
  }

});
;// CONCATENATED MODULE: ./src/components/BattleshipSettings.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(8689);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js + 6 modules
var QOptionGroup = __webpack_require__(4140);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 41 modules
var QSelect = __webpack_require__(3571);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/chip/QChip.js
var QChip = __webpack_require__(7030);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
;// CONCATENATED MODULE: ./src/components/BattleshipSettings.vue




;
const BattleshipSettings_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(BattleshipSettingsvue_type_script_lang_js, [['render',BattleshipSettingsvue_type_template_id_7e510ef2_render]])

/* harmony default export */ const BattleshipSettings = (BattleshipSettings_exports_);
;










runtime_auto_import_default()(BattleshipSettingsvue_type_script_lang_js, 'components', {QCardSection: QCardSection/* default */.Z,QForm: QForm/* default */.Z,QOptionGroup: QOptionGroup/* default */.Z,QSelect: QSelect/* default */.Z,QChip: QChip/* default */.Z,QAvatar: QAvatar/* default */.Z,QBadge: QBadge/* default */.Z,QBtn: QBtn/* default */.Z,QCard: QCard/* default */.Z,QSeparator: QSeparator/* default */.Z});

// EXTERNAL MODULE: ./src/components/Battleground.vue + 4 modules
var Battleground = __webpack_require__(6958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BattleshipState.vue?vue&type=template&id=601eb31d

const BattleshipStatevue_type_template_id_601eb31d_hoisted_1 = {
  class: "q-pa-md bg-grey-10 text-white"
};
const BattleshipStatevue_type_template_id_601eb31d_hoisted_2 = {
  class: "absolute-full flex flex-center"
};
const BattleshipStatevue_type_template_id_601eb31d_hoisted_3 = {
  class: "absolute-full flex flex-center"
};
function BattleshipStatevue_type_template_id_601eb31d_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_linear_progress = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-linear-progress");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", BattleshipStatevue_type_template_id_601eb31d_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
    dark: "",
    stripe: "",
    rounded: "",
    size: "20px",
    value: $setup.progress1,
    color: "blue-14",
    class: "q-mt-sm"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", BattleshipStatevue_type_template_id_601eb31d_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
      color: "black",
      "text-color": "white",
      label: $setup.progressLabel1
    }, null, 8, ["label"])])]),
    _: 1
  }, 8, ["value"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_linear_progress, {
    dark: "",
    stripe: "",
    rounded: "",
    size: "20px",
    value: $setup.progress2,
    color: "red-14",
    class: "q-mt-sm"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", BattleshipStatevue_type_template_id_601eb31d_hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
      color: "black",
      "text-color": "white",
      label: $setup.progressLabel2
    }, null, 8, ["label"])])]),
    _: 1
  }, 8, ["value"])]);
}
;// CONCATENATED MODULE: ./src/components/BattleshipState.vue?vue&type=template&id=601eb31d

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BattleshipState.vue?vue&type=script&lang=js

/* harmony default export */ const BattleshipStatevue_type_script_lang_js = ({
  setup() {
    const progress1 = (0,reactivity_esm_bundler/* ref */.iH)(0.3);
    const progress2 = (0,reactivity_esm_bundler/* ref */.iH)(0.9);
    const player1Name = (0,reactivity_esm_bundler/* ref */.iH)("Player 1");
    const player2Name = (0,reactivity_esm_bundler/* ref */.iH)("Player 2");
    return {
      progress1,
      progressLabel1: (0,reactivity_esm_bundler/* computed */.Fl)(() => player1Name.value + ' shoot ' + (progress1.value * 100).toFixed(2) + '% of ' + player2Name.value + '`s Ships'),
      progress2,
      progressLabel2: (0,reactivity_esm_bundler/* computed */.Fl)(() => player2Name.value + ' shoot ' + (progress1.value * 100).toFixed(2) + '% of ' + player1Name.value + '`s Ships')
    };
  }

});
;// CONCATENATED MODULE: ./src/components/BattleshipState.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/linear-progress/QLinearProgress.js
var QLinearProgress = __webpack_require__(1598);
;// CONCATENATED MODULE: ./src/components/BattleshipState.vue




;
const BattleshipState_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(BattleshipStatevue_type_script_lang_js, [['render',BattleshipStatevue_type_template_id_601eb31d_render]])

/* harmony default export */ const BattleshipState = (BattleshipState_exports_);
;


runtime_auto_import_default()(BattleshipStatevue_type_script_lang_js, 'components', {QLinearProgress: QLinearProgress/* default */.Z,QBadge: QBadge/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BattleshipGame.vue?vue&type=script&lang=js



 //import BattlefildSizeSlider from "components/BattlefildSizeSlider";
//import BattleshipStepper from "components/BattleshipStepper";


/* harmony default export */ const BattleshipGamevue_type_script_lang_js = ({
  name: "BattleshipGame.vue",
  components: {
    WelcomeLabel: WelcomeLabel,
    BattleshipSettings: BattleshipSettings,
    Battleground: Battleground/* default */.Z,
    BattleshipState: BattleshipState //BattlefildSizeSlider:BattlefildSizeSlider,
    //BattleshipStepper, BattleshipStepper,

  },

  setup() {
    return {
      expandedPic: (0,reactivity_esm_bundler/* ref */.iH)(true),
      expanded: (0,reactivity_esm_bundler/* ref */.iH)(false),
      example: 'Send this variable to the child'
    };
  }

});
;// CONCATENATED MODULE: ./src/pages/BattleshipGame.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js
var QSlideTransition = __webpack_require__(2471);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
;// CONCATENATED MODULE: ./src/pages/BattleshipGame.vue




;


const BattleshipGame_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(BattleshipGamevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BattleshipGame = (BattleshipGame_exports_);
;








runtime_auto_import_default()(BattleshipGamevue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QSlideTransition: QSlideTransition/* default */.Z,QBtn: QBtn/* default */.Z,QCardActions: QCardActions/* default */.Z,QSpace: QSpace/* default */.Z,QSeparator: QSeparator/* default */.Z,QCardSection: QCardSection/* default */.Z,QImg: QImg/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=606.84e087bb.js.map