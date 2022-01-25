"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([[745],{

/***/ 8745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=template&id=15b46290



const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" index.vue ");

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Use display: grid; to make a block-level grid container:", -1);

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "grid-container"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "grid-item"
}, "1"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "grid-item"
}, "2")], -1);

const _hoisted_4 = {
  id: "basic-event",
  class: "demo"
};
const _hoisted_5 = {
  id: "basic-event1",
  class: "demo"
};
const _hoisted_6 = {
  id: "basic-event2",
  class: "demo"
};
const _hoisted_7 = {
  class: "hello"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "flex flex-center"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, _hoisted_2, _hoisted_3, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      onClick: _cache[0] || (_cache[0] = $event => _ctx.counter += 1)
    }, "Add 1"), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "The button above has been clicked " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.counter) + " times.", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.kp1 && _ctx.kp1(...args))
    }, "KP"), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "The " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.name) + " button above has been clicked " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.counter) + " times.", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.kp2 && _ctx.kp2(...args))
    }, "KP"), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "The " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.name) + " button above has been clicked " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.counter) + " times.", 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.val) + " | edited " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.count) + " times", 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      onClick: _cache[3] || (_cache[3] = $event => _ctx.val = Math.random(0, 100))
    }, "Click to Change")]), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      type: "button",
      style: {
        "height": "50px",
        "width": "300px"
      },
      class: "px-12 py-10 text-xl rounded-lg bg-white shadow-2xl hover:shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out focus:outline-none",
      onClick: _cache[4] || (_cache[4] = $event => _ctx.$emit('click', {
        duration: 2000
      }))
    }, [(0,runtime_core_esm_bundler/* renderSlot */.WI)(_ctx.$slots, "default")]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
      onClick: _cache[5] || (_cache[5] = $event => _ctx.changeName())
    }, "Change Name")])]),
    _: 3
  });
}
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=15b46290

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js + 3 modules
var index_esm = __webpack_require__(3589);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=script&lang=js




/* harmony default export */ const Indexvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'PageIndex',

  setup() {
    const count = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const val = (0,reactivity_esm_bundler/* ref */.iH)(0);
    (0,runtime_core_esm_bundler/* onBeforeUpdate */.Xn)(() => {
      count.value++;
      console.log("beforeUpdate");
    });
    (0,runtime_core_esm_bundler/* onUpdated */.ic)(() => {
      console.log("updated() val: " + val.value);
    });
    return {
      count,
      val
    };
  },

  data() {
    return {
      counter: 0,
      name: "0"
    };
  },

  methods: {
    changeName() {
      this.$emit("changename", "John");
    },

    kp() {
      const auth = (0,index_esm/* getAuth */.v0)();
      (0,index_esm/* onAuthStateChanged */.Aj)(auth, user => {
        if (user) {
          this.name = user.displayName;
          console.log(user); // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          const uid = user.uid; // ...
        } else {// User is signed out
          // ...
        }
      });
    },

    kp1() {
      const auth = (0,index_esm/* getAuth */.v0)();
      const user = auth.currentUser;

      if (user !== null) {
        this.name = user.displayName;
        user.role = "Admin";
        user.providerData.forEach(profile => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("Role: " + profile.role);
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
        photoURL: "https://example.com/jane-q-user/profile.jpg",
        role: "Admin"
      }).then(() => {
        console.log("  profile " + profile); // Profile updated!
        // ...
      }).catch(error => {// An error occurred
        // ...
      });
    }

  }
}));
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Index.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Indexvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Index = (__exports__);
;

runtime_auto_import_default()(Indexvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=745.beafc56b.js.map