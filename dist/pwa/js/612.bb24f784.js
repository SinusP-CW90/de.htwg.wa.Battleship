"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([[612],{

/***/ 5612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ForgotPassword)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/ForgotPassword.vue?vue&type=template&id=2f520690


const _hoisted_1 = {
  class: "reg row items-center d-flex justify-center bg-image",
  style: {
    "height": "100vh"
  }
};
const _hoisted_2 = {
  class: "forms"
};
const _hoisted_3 = {
  style: {
    "height": "200px"
  }
};

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", {
  class: "text-center"
}, "Forgot your Password", -1);

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
  type: "submit",
  value: "send password reset Email "
}, null, -1);

const _hoisted_6 = {
  class: "text-center reg row items-center d-flex justify-center"
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" or go back to ");

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Login");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(". ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_v_card_text = (0,runtime_core_esm_bundler/* resolveComponent */.up)("v-card-text");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("main", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("section", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
    class: "q-img",
    src: "images/battleship.jpg"
  })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("form", {
    class: "register",
    onSubmit: _cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)((...args) => $setup.resetPassword && $setup.resetPassword(...args), ["prevent"]))
  }, [_hoisted_4, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "email",
    placeholder: "Email address",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.resetPassword_form.email = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.resetPassword_form.email]]), _hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_v_card_text, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_6, [_hoisted_7, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      to: "/login"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8]),
      _: 1
    }), _hoisted_9])]),
    _: 1
  })], 32)])]);
}
;// CONCATENATED MODULE: ./src/pages/ForgotPassword.vue?vue&type=template&id=2f520690

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/ForgotPassword.vue?vue&type=script&lang=js


/* harmony default export */ const ForgotPasswordvue_type_script_lang_js = ({
  name: "ForgotPassword.vue",

  setup() {
    const resetPassword_form = (0,reactivity_esm_bundler/* ref */.iH)({});
    const store = (0,vuex_esm_bundler/* useStore */.oR)();

    const resetPassword = () => {
      store.dispatch('resetPassword', resetPassword_form.value);
    };

    return {
      resetPassword_form,
      resetPassword
    };
  },

  methods: {}
});
;// CONCATENATED MODULE: ./src/pages/ForgotPassword.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/ForgotPassword.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ForgotPasswordvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const ForgotPassword = (__exports__);
;

runtime_auto_import_default()(ForgotPasswordvue_type_script_lang_js, 'components', {QImg: QImg/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=612.bb24f784.js.map