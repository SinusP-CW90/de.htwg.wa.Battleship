(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([[210],{

/***/ 4101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=07a7ab1e

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Header");

  const _component_DrawerLeft = (0,runtime_core_esm_bundler/* resolveComponent */.up)("DrawerLeft");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_Footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Footer");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lhr lpr lFr"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Header), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_DrawerLeft, {
      ref: "“leftDrawer”",
      modelValue: $setup.leftDrawerOpen,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.leftDrawerOpen = $event),
      onChange: $setup.toggleLeftDrawer
    }, null, 8, ["modelValue", "onChange"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Footer)]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/Header.vue?vue&type=template&id=afb66cc0


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Battleship ");

function Headervue_type_template_id_afb66cc0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_route_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-route-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_header, {
    class: "bg-primary text-white",
    elevated: "",
    "height-hint": "98",
    reveal: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        dense: "",
        flat: "",
        icon: "menu",
        round: "",
        onChange: _cache[0] || (_cache[0] = $event => _ctx.$emit("change", $event.target.value))
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
          src: "images/battleshipTitleWhite.png",
          style: {
            "max-width": "111px",
            "min-height": "8px"
          }
        }), _hoisted_1]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
      align: "left",
      class: "text-center"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
        label: "The Game",
        to: "/"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
        label: "About Battleship",
        to: "/aboutTheGame"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
        label: "Test Page",
        to: "/index"
      }), !_ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_route_tab, {
        key: 0,
        label: "Login",
        to: "/login"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_route_tab, {
        key: 1,
        label: "Register",
        to: "/register"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !_ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_route_tab, {
        key: 2,
        label: "ForgotPassword",
        to: "/forgotPassword"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
        label: "user",
        to: "/user"
      }), _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_route_tab, {
        key: 3,
        label: "SecretPage",
        to: "/secretPage"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
        key: 4,
        onClick: _cache[1] || (_cache[1] = $event => _ctx.$store.dispatch('logout'))
      }, "Logout")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    })]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js + 3 modules
var index_esm = __webpack_require__(3589);
// EXTERNAL MODULE: ./node_modules/express/lib/router/route.js
var route = __webpack_require__(431);
var route_default = /*#__PURE__*/__webpack_require__.n(route);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/Header.vue?vue&type=script&lang=js
//import MainLayout from "layouts/MainLayout.vue";
//import LeftDrawer from "MainLayoutComponents"


/* harmony default export */ const Headervue_type_script_lang_js = ({
  name: "Header.vue",
  emits: ["change"],

  setup() {
    //const auth = getAuth();
    return {//auth
    };
  },

  methods: {
    tryThis() {
      console.log("trying in Header");
      this.$emit("enlargeText", "someValue");
    },

    logout() {
      const auth = (0,index_esm/* getAuth */.v0)();
    },

    mounted() {
      console.log('mounted!');

      if ((route_default()).state.user.role === 'admin') {
        console.log("true");
      }

      console.log("false"); //this.name = "newName"

      this.kp1();
    },

    updated() {
      console.log('updated!'); //this.name = "newNEWName"
    }

  }
});
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/Header.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
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
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/Header.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Headervue_type_script_lang_js, [['render',Headervue_type_template_id_afb66cc0_render]])

/* harmony default export */ const Header = (__exports__);
;







runtime_auto_import_default()(Headervue_type_script_lang_js, 'components', {QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QImg: QImg/* default */.Z,QTabs: QTabs/* default */.Z,QRouteTab: QRouteTab/* default */.Z});

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/DrawerLeft.vue?vue&type=template&id=b3d74abe


const DrawerLeftvue_type_template_id_b3d74abe_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Inbox ");

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Star ");

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Send ");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Drafts ");

const _hoisted_5 = {
  class: "absolute-bottom bg-transparent"
};

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1);

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-weight-bold"
}, "Player 1", -1);

const _hoisted_8 = {
  key: 0
};
const _hoisted_9 = {
  id: "app"
};
function DrawerLeftvue_type_template_id_b3d74abe_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-scroll-area");

  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_Child = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Child");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_drawer, {
    class: "bg-primary text-white",
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
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [DrawerLeftvue_type_template_id_b3d74abe_hoisted_1]),
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
              name: "send"
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
              name: "drafts"
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
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
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
        size: "80px",
        class: "q-mb-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),
        _: 1
      }), _hoisted_7, _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user.displayName), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" My Name is " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.myName) + " ", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Child, {
        onChangename: _cache[0] || (_cache[0] = $event => $data.myName = $event)
      })])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/DrawerLeft.vue?vue&type=template&id=b3d74abe

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/DrawerRight.vue?vue&type=template&id=668e95c0


const DrawerRightvue_type_template_id_668e95c0_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Inbox ");

const DrawerRightvue_type_template_id_668e95c0_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Star ");

const DrawerRightvue_type_template_id_668e95c0_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Send ");

const DrawerRightvue_type_template_id_668e95c0_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Drafts ");

const DrawerRightvue_type_template_id_668e95c0_hoisted_5 = {
  class: "absolute-bottom bg-transparent"
};

const DrawerRightvue_type_template_id_668e95c0_hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/img/avatar.png"
}, null, -1);

const DrawerRightvue_type_template_id_668e95c0_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-weight-bold"
}, "Player 2", -1);

const DrawerRightvue_type_template_id_668e95c0_hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "@ Player 2 Name", -1);

function DrawerRightvue_type_template_id_668e95c0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-scroll-area");

  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_drawer, {
    class: "bg-primary text-white",
    ref: "“rightDrawer”",
    modelValue: _ctx.rightDrawerOpen,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.rightDrawerOpen = $event),
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
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [DrawerRightvue_type_template_id_668e95c0_hoisted_1]),
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
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [DrawerRightvue_type_template_id_668e95c0_hoisted_2]),
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
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [DrawerRightvue_type_template_id_668e95c0_hoisted_3]),
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
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [DrawerRightvue_type_template_id_668e95c0_hoisted_4]),
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
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", DrawerRightvue_type_template_id_668e95c0_hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
        size: "80px",
        class: "q-mb-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [DrawerRightvue_type_template_id_668e95c0_hoisted_6]),
        _: 1
      }), DrawerRightvue_type_template_id_668e95c0_hoisted_7, DrawerRightvue_type_template_id_668e95c0_hoisted_8])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/DrawerRight.vue?vue&type=template&id=668e95c0

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/DrawerRight.vue?vue&type=script&lang=js
/* harmony default export */ const DrawerRightvue_type_script_lang_js = ({
  name: "DrawerRight.vue"
});
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/DrawerRight.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(7704);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(1046);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/DrawerRight.vue




;
const DrawerRight_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DrawerRightvue_type_script_lang_js, [['render',DrawerRightvue_type_template_id_668e95c0_render]])

/* harmony default export */ const DrawerRight = ((/* unused pure expression or super */ null && (DrawerRight_exports_)));
;








runtime_auto_import_default()(DrawerRightvue_type_script_lang_js, 'components', {QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QImg: QImg/* default */.Z,QAvatar: QAvatar/* default */.Z});runtime_auto_import_default()(DrawerRightvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/DrawerLeft.vue?vue&type=script&lang=js







/* harmony default export */ const DrawerLeftvue_type_script_lang_js = ({
  name: "DrawerLeft.vue",

  data() {
    return {
      counter: 0,
      name: "test(),",
      myName: "your Name",
      role: "your Role",
      show: true,
      UV: this.test()
    };
  },

  components: {},
  watch: {
    $route(to, from) {
      this.show = false;
    }

  },

  mounted() {
    console.log('mounted!');
    this.name = "newName";
  },

  updated() {
    console.log('updated!');
    this.name = "newNEWName";
  },

  methods: {
    test() {
      if (this.$store.state.user === null) {
        return "this.$store.state.user.displayName";
      } else {
        return "booobb";
      }
    },

    kp1() {
      const auth = (0,index_esm/* getAuth */.v0)();
      const user = auth.currentUser;

      if (user !== null) {
        this.name = user.displayName;
        user.providerData.forEach(profile => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    },

    kp2() {
      const auth = (0,index_esm/* getAuth */.v0)();
      (0,index_esm/* updateProfile */.ck)(auth.currentUser, {
        displayName: "Jane Q. User",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {// Profile updated!
        // ...
      }).catch(error => {// An error occurred
        // ...
      });
    }

  }
});
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/DrawerLeft.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/DrawerLeft.vue




;
const DrawerLeft_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DrawerLeftvue_type_script_lang_js, [['render',DrawerLeftvue_type_template_id_b3d74abe_render]])

/* harmony default export */ const DrawerLeft = (DrawerLeft_exports_);
;








runtime_auto_import_default()(DrawerLeftvue_type_script_lang_js, 'components', {QDrawer: QDrawer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QImg: QImg/* default */.Z,QAvatar: QAvatar/* default */.Z});runtime_auto_import_default()(DrawerLeftvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/Footer.vue?vue&type=template&id=ce973dba


const Footervue_type_template_id_ce973dba_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
}, null, -1);

function Footervue_type_template_id_ce973dba_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_footer, {
    reveal: "",
    elevated: "",
    class: "bg-grey-8 text-white"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [Footervue_type_template_id_ce973dba_hoisted_1]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)($data.info), 1)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/Footer.vue?vue&type=template&id=ce973dba

// EXTERNAL MODULE: ./src/pages/BattleshipGame.vue + 24 modules
var BattleshipGame = __webpack_require__(8131);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/MainLayoutComponents/Footer.vue?vue&type=script&lang=js

/* harmony default export */ const Footervue_type_script_lang_js = ({
  name: "Footer",
  components: {},

  data() {
    return {
      info: BattleshipGame["default"].probs
    };
  }

});
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/Footer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(1762);
;// CONCATENATED MODULE: ./src/components/MainLayoutComponents/Footer.vue




;
const Footer_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Footervue_type_script_lang_js, [['render',Footervue_type_template_id_ce973dba_render]])

/* harmony default export */ const Footer = (Footer_exports_);
;




runtime_auto_import_default()(Footervue_type_script_lang_js, 'components', {QFooter: QFooter/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QAvatar: QAvatar/* default */.Z});

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js






/* harmony default export */ const MainLayoutvue_type_script_lang_js = ({
  name: "MainLayout",
  components: {
    Header: Header,
    DrawerLeft: DrawerLeft,
    //DrawerRight,
    Footer: Footer
  },
  methods: {
    onEnlargeText() {
      console.log("enlarging text container");
    }

  },

  setup() {
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(true);
    return {
      leftDrawerOpen,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }

    }; //for Auth

    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    (0,runtime_core_esm_bundler/* onBeforeMount */.wF)(() => {
      store.dispatch('fetchUser');
    });
  }

});
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(9214);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue




;
const MainLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const MainLayout = (MainLayout_exports_);
;


runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ }),

/***/ 3432:
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=210.1c87ed50.js.map