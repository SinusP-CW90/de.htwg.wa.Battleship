/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4891:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 6 modules
var vue_plugin = __webpack_require__(8834);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=4bbcd818

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_view);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ const Appvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'App'
}));
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
;// CONCATENATED MODULE: ./src/App.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const App = (__exports__);
// EXTERNAL MODULE: ./src/store/index.js
var src_store = __webpack_require__(4584);
// EXTERNAL MODULE: ./src/router/index.js + 16 modules
var src_router = __webpack_require__(3405);
;// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
;



/* harmony default export */ async function app(createAppFn, quasarUserOptions) {
  // create store and router instances
  const store = typeof src_store["default"] === 'function' ? await (0,src_store["default"])({}) : src_store["default"]; // obtain Vuex injection key in case we use TypeScript

  const {
    storeKey
  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4584));
  const router = typeof src_router/* default */.Z === 'function' ? await (0,src_router/* default */.Z)({
    store
  }) : src_router/* default */.Z; // make router instance available in store

  store.$router = router; // Create the app instance.
  // Here we inject into it the Quasar UI, the router & possibly the store.

  const app = createAppFn(App);
  app.config.devtools = true;
  app.use(vue_plugin/* default */.Z, quasarUserOptions); // Expose the app, the router and the store.
  // Note that we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    storeKey,
    router
  };
}
;// CONCATENATED MODULE: ./.quasar/quasar-user-options.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
/* harmony default export */ const quasar_user_options = ({
  config: {}
});
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__(1413);
;// CONCATENATED MODULE: ./src-pwa/register-service-worker.js
 // The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

(0,register_service_worker/* register */.z)("service-worker.js", {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter
  // registrationOptions: { scope: './' },
  ready() {// console.log('Service worker is active.')
  },

  registered() {// console.log('Service worker has been registered.')
  },

  cached() {// console.log('Content has been cached for offline use.')
  },

  updatefound() {// console.log('New content is downloading.')
  },

  updated() {// console.log('New content is available; please refresh.')
  },

  offline() {// console.log('No internet connection found. App is running in offline mode.')
  },

  error() {// console.error('Error during service worker registration:', err)
  }

});
;// CONCATENATED MODULE: ./.quasar/client-entry.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


 // We load Quasar stylesheet file





 // Needed only for iOS PWAs

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone) {
  __webpack_require__.e(/* import() | fastclick */ 736).then(__webpack_require__.t.bind(__webpack_require__, 9501, 23));
}

const publicPath = (/* unused pure expression or super */ null && (``));

async function start({
  app,
  router,
  store,
  storeKey
}) {
  app.use(router);
  app.use(store, storeKey);
  app.mount('#q-app');
}

app(runtime_dom_esm_bundler/* createApp */.ri, quasar_user_options).then(start);

/***/ }),

/***/ 1115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5720);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3589);

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDA2Nit-3eD3AzhKIuMaXUXD4CkB6hMupM",
  authDomain: "battleship-wa-auth.firebaseapp.com",
  projectId: "battleship-wa-auth",
  storageBucket: "battleship-wa-auth.appspot.com",
  messagingSenderId: "24443203551",
  appId: "1:24443203551:web:a9acf6ff6e519632135e6a"
}; // Initialize Firebase

const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .getAuth */ .v0)(app);


/***/ }),

/***/ 3405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ router)
});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.js
var wrappers = __webpack_require__(7083);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login.vue?vue&type=template&id=e2bdf1ce


const _hoisted_1 = {
  class: "login row items-center d-flex justify-center bg-image",
  style: {
    "height": "100vh"
  }
};
const _hoisted_2 = {
  class: "forms"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", {
  class: "text-center"
}, "Login", -1);

const _hoisted_4 = {
  class: "forgot-password text-right"
};

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Forgot Password?");

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
  type: "submit",
  value: "Login"
}, null, -1);

const _hoisted_7 = {
  class: "text-center"
};

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" You don't have an account ? ");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" You can ");

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("register");

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  alt: "Google Logo",
  src: "icons/googleSingIn.png",
  style: {
    "hight": "50px",
    "width": "300px"
  }
}, null, -1);

const _hoisted_14 = [_hoisted_13];

const _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  alt: "Github Logo",
  src: "icons/gitHubSignIn.png",
  style: {
    "hight": "50px",
    "width": "350px"
  }
}, null, -1);

const _hoisted_17 = [_hoisted_16];

const _hoisted_18 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  alt: "Facebook Logo",
  src: "icons/facebookLogin.png",
  style: {
    "hight": "50px",
    "width": "350px"
  }
}, null, -1);

const _hoisted_20 = [_hoisted_19];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("main", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("section", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("form", {
    class: "login",
    onSubmit: _cache[5] || (_cache[5] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)((...args) => $setup.login && $setup.login(...args), ["prevent"])),
    style: {
      "padding-top": "30px"
    }
  }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
    class: "q-img",
    src: "images/battleship.jpg"
  }), _hoisted_3, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "email",
    placeholder: "Email address",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.login_form.email = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.login_form.email]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "password",
    placeholder: "Password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.login_form.password = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.login_form.password]]), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: "/forgetPassword"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
    _: 1
  })]), _hoisted_6, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_7, [_hoisted_8, _hoisted_9, _hoisted_10, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
    to: "/register"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_11]),
    _: 1
  }), _hoisted_12, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => $setup.googleLogin && $setup.googleLogin(...args)),
    class: "social-button"
  }, _hoisted_14), _hoisted_15, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[3] || (_cache[3] = (...args) => $setup.githubLogin && $setup.githubLogin(...args)),
    class: "social-button"
  }, _hoisted_17), _hoisted_18, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    onClick: _cache[4] || (_cache[4] = (...args) => $setup.facebookLogin && $setup.facebookLogin(...args)),
    class: "social-button"
  }, _hoisted_20)])])], 32)])]);
}
;// CONCATENATED MODULE: ./src/pages/Login.vue?vue&type=template&id=e2bdf1ce

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.esm.js + 3 modules
var index_esm = __webpack_require__(3589);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Login.vue?vue&type=script&lang=js




/* harmony default export */ const Loginvue_type_script_lang_js = ({
  setup() {
    const login_form = (0,reactivity_esm_bundler/* ref */.iH)({});
    const store = (0,vuex_esm_bundler/* useStore */.oR)();

    const login = () => {
      store.dispatch('login', login_form.value);
    };

    const googleLogin = () => {
      store.dispatch('providerLogin', new index_esm/* GoogleAuthProvider */.hJ());
    };

    const githubLogin = () => {
      store.dispatch('providerLogin', new index_esm/* GithubAuthProvider */.GH());
    };

    const facebookLogin = () => {
      store.dispatch('providerLogin', new index_esm/* FacebookAuthProvider */._O());
    };

    return {
      login_form,
      login,
      googleLogin,
      githubLogin,
      facebookLogin
    };
  },

  methods: {}
});
;// CONCATENATED MODULE: ./src/pages/Login.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Login.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Loginvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Login = (__exports__);
;

runtime_auto_import_default()(Loginvue_type_script_lang_js, 'components', {QImg: QImg/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Register.vue?vue&type=template&id=6b5e41b0


const Registervue_type_template_id_6b5e41b0_hoisted_1 = {
  class: "reg row items-center d-flex justify-center bg-image",
  style: {
    "height": "100vh"
  }
};
const Registervue_type_template_id_6b5e41b0_hoisted_2 = {
  class: "forms"
};
const Registervue_type_template_id_6b5e41b0_hoisted_3 = {
  style: {
    "height": "200px"
  }
};

const Registervue_type_template_id_6b5e41b0_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", {
  class: "text-center"
}, "Register", -1);

const Registervue_type_template_id_6b5e41b0_hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
  type: "submit",
  value: "Register"
}, null, -1);

const Registervue_type_template_id_6b5e41b0_hoisted_6 = {
  class: "text-center reg row items-center d-flex justify-center"
};

const Registervue_type_template_id_6b5e41b0_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" or go back to ");

const Registervue_type_template_id_6b5e41b0_hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("login");

const Registervue_type_template_id_6b5e41b0_hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(". ");

function Registervue_type_template_id_6b5e41b0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_v_card_text = (0,runtime_core_esm_bundler/* resolveComponent */.up)("v-card-text");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("main", Registervue_type_template_id_6b5e41b0_hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("section", Registervue_type_template_id_6b5e41b0_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", Registervue_type_template_id_6b5e41b0_hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
    class: "q-img",
    src: "images/battleship.jpg"
  })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("form", {
    class: "register",
    onSubmit: _cache[4] || (_cache[4] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)((...args) => $setup.register && $setup.register(...args), ["prevent"]))
  }, [Registervue_type_template_id_6b5e41b0_hoisted_4, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "text",
    placeholder: "enter your Name",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.register_form.displayName = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.register_form.displayName]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "text",
    placeholder: "role",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.register_form.role = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.register_form.role]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "email",
    placeholder: "Email-Address",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.register_form.email = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.register_form.email]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "password",
    placeholder: "Password",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.register_form.password = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $setup.register_form.password]]), Registervue_type_template_id_6b5e41b0_hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_v_card_text, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", Registervue_type_template_id_6b5e41b0_hoisted_6, [Registervue_type_template_id_6b5e41b0_hoisted_7, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
      to: "/login"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [Registervue_type_template_id_6b5e41b0_hoisted_8]),
      _: 1
    }), Registervue_type_template_id_6b5e41b0_hoisted_9])]),
    _: 1
  })], 32)])]);
}
;// CONCATENATED MODULE: ./src/pages/Register.vue?vue&type=template&id=6b5e41b0

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Register.vue?vue&type=script&lang=js


/* harmony default export */ const Registervue_type_script_lang_js = ({
  setup() {
    const register_form = (0,reactivity_esm_bundler/* ref */.iH)({});
    const store = (0,vuex_esm_bundler/* useStore */.oR)();

    const register = () => {
      store.dispatch('register', register_form.value);
      console.log(register_form.value);
      console.log(register_form.value.email);
      console.log(register_form.value.role);
    };

    return {
      register_form,
      register
    };
  },

  methods: {}
});
;// CONCATENATED MODULE: ./src/pages/Register.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/Register.vue




;


const Register_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Registervue_type_script_lang_js, [['render',Registervue_type_template_id_6b5e41b0_render]])

/* harmony default export */ const Register = (Register_exports_);
;

runtime_auto_import_default()(Registervue_type_script_lang_js, 'components', {QImg: QImg/* default */.Z});

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/User.vue?vue&type=template&id=d6298496

const Uservue_type_template_id_d6298496_hoisted_1 = {
  class: "vue-tempalte"
};

const Uservue_type_template_id_d6298496_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h3", null, "Welcome", -1);

const Uservue_type_template_id_d6298496_hoisted_3 = {
  key: 0
};
const Uservue_type_template_id_d6298496_hoisted_4 = {
  key: 1
};
const Uservue_type_template_id_d6298496_hoisted_5 = {
  key: 2
};
const Uservue_type_template_id_d6298496_hoisted_6 = {
  key: 3
};
const Uservue_type_template_id_d6298496_hoisted_7 = {
  key: 4
};
function Uservue_type_template_id_d6298496_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", Uservue_type_template_id_d6298496_hoisted_1, [Uservue_type_template_id_d6298496_hoisted_2, _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", Uservue_type_template_id_d6298496_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", Uservue_type_template_id_d6298496_hoisted_4, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user.displayName), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", Uservue_type_template_id_d6298496_hoisted_5, "Provider Data: " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user.providerData), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", Uservue_type_template_id_d6298496_hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user.email), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", Uservue_type_template_id_d6298496_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user.role), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
}
;// CONCATENATED MODULE: ./src/pages/User.vue?vue&type=template&id=d6298496

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/User.vue?vue&type=script&lang=js

/* harmony default export */ const Uservue_type_script_lang_js = ({
  name: "User",

  data() {
    return {
      counter: 0,
      name: "NoName",
      providerId: "",
      uid: "",
      displayName: "",
      email: "",
      myName: "Alex",
      show: true
    };
  },

  components: {},
  watch: {
    $route(to, from) {
      this.show = false;
    }

  },

  mounted() {
    console.log('mounted!'); //this.name = "newName"

    this.kp1();
  },

  updated() {
    console.log('updated!'); //this.name = "newNEWName"
  },

  methods: {
    kp1() {
      const auth = (0,index_esm/* getAuth */.v0)();
      const user = auth.currentUser;

      if (user !== null) {
        user.providerData.forEach(profile => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          this.name = profile.displayName, console.log("  Name: " + profile.displayName);
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
;// CONCATENATED MODULE: ./src/pages/User.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/User.vue




;
const User_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Uservue_type_script_lang_js, [['render',Uservue_type_template_id_d6298496_render]])

/* harmony default export */ const User = (User_exports_);
// EXTERNAL MODULE: ./src/firebase/index.js
var firebase = __webpack_require__(1115);
;// CONCATENATED MODULE: ./src/router/routes.js






const routes = [{
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(210)]).then(__webpack_require__.bind(__webpack_require__, 4101)),
  children: [{
    path: 'index',
    name: 'Index',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(745)]).then(__webpack_require__.bind(__webpack_require__, 8745))
  }, {
    path: '/aboutTheGame',
    name: 'About The Game',
    component: () => __webpack_require__.e(/* import() */ 336).then(__webpack_require__.bind(__webpack_require__, 336)),
    meta: {
      requiresAuth: true
    }
  }, {
    path: '',
    name: 'BattleshipGame',
    component: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8131)),
    meta: {
      requiresAuth: true
    }
  },
  /*{ path: '/err404',
    name: 'Error404',
    component: () => import('pages/Error404.vue') },*/
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => __webpack_require__.e(/* import() */ 612).then(__webpack_require__.bind(__webpack_require__, 5612))
  }, {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/secretPage',
    name: 'SecretPage',
    component: () => __webpack_require__.e(/* import() */ 905).then(__webpack_require__.bind(__webpack_require__, 7905)),
    meta: {//authorize: [auth.currentUser.role]
    }
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => __webpack_require__.e(/* import() */ 193).then(__webpack_require__.bind(__webpack_require__, 2193))
}];
/*
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})
*/

/* harmony default export */ const router_routes = (routes);
// EXTERNAL MODULE: ./src/pages/BattleshipGame.vue + 24 modules
var BattleshipGame = __webpack_require__(8131);
;// CONCATENATED MODULE: ./src/router/index.js






/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ const router = ((0,wrappers/* route */.BC)(function
  /* { store, ssrContext } */
() {
  const createHistory =  false ? 0 :  false ? 0 : vue_router_esm_bundler/* createWebHashHistory */.r5;
  const Router = (0,vue_router_esm_bundler/* createRouter */.p7)({
    scrollBehavior: () => ({
      left: 0,
      top: 0
    }),
    routes: router_routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory( false ? 0 : "")
  });
  Router.beforeEach((to, from, next) => {
    if (to.path === '/login' && firebase/* auth.currentUser */.I.currentUser) {
      next('/');
      return;
    }

    if (to.matched.some(record => record.meta.requiresAuth) && !firebase/* auth.currentUser */.I.currentUser) {
      next('/login');
      return;
    }

    next();
  });
  return Router;
}));

/***/ }),

/***/ 4584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5363);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5250);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3405);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1115);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3589);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vuex__WEBPACK_IMPORTED_MODULE_4__/* .createStore */ .MT)({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user; //state.user.role = "nobody"

      console.log("User: " + state.user.email + " in SetUser");
      console.log("User: " + state.user.displayName + " in SetUser");
      console.log("User: " + state.user.role + " in SetUser");
    },

    SET_PROVIDER_USER(state, user) {
      state.user = user;
      state.credential = this.provider.credentialFromResult(state);
      state.token = state.credential.accessToken; //state.user.role = "nobody"

      console.log("User: " + state.user.email + " in Google SetUser");
      console.log("User: " + state.credential + " in Google SetUser");
      console.log("User: " + state.token + " in Google  SetUser");
      console.log("User: " + state.user.role + " in Google  SetUser");
    },

    CLEAR_USER(state) {
      state.user = null;
      console.log("User ist cleared!");
    }

  },
  actions: {
    async login({
      commit
    }, details) {
      const {
        email,
        password
      } = details;

      try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .signInWithEmailAndPassword */ .e5)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, email, password);
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found");
            break;

          case 'auth/wrong-password':
            alert("Wrong password");
            break;

          default:
            alert("Something went wrong");
        }

        return;
      }

      commit('SET_USER', _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser */ .I.currentUser);
      this.$router.replace("/");
    },

    async resetPassword({
      commit
    }, details) {
      const {
        email,
        password
      } = details;

      try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .sendPasswordResetEmail */ .LS)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, email);
        alert("reset-password Email is send");
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found");
            break;

          case 'auth/wrong-password':
            alert("Wrong password");
            break;

          default:
            alert("Something went wrong");
        }

        return;
      } //commit('SET_USER', auth.currentUser)


      this.$router.replace("/");
    },

    async providerLogin({
      commit
    }, provider) {
      //const provider = new GoogleAuthProvider();
      try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .signInWithPopup */ .rh)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, provider);
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("error Message:" + error.message); // The email of the user's account used.

        const email = error.email;
        alert("email error:" + email); // The AuthCredential type that was used.

        const credential = provider.credentialFromError(error);
        alert("credential err: " + credential);

        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found");
            break;

          case 'auth/wrong-password':
            alert("Wrong password");
            break;

          default:
            alert("Something went wrong");
        }

        return;
      }

      console.log("User: " + _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser */ .I.currentUser + " login");
      commit('SET_PROVIDER_USER', _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser */ .I.currentUser);
      console.log("User: " + state.user.role + " login");
      this.$router.replace("/");
    },

    async register({
      commit
    }, details) {
      const {
        displayName,
        role,
        email,
        password
      } = details;
      console.log("details: " + details.role + " von reg");

      try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .createUserWithEmailAndPassword */ .Xb)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, email, password);
        _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser.displayName */ .I.currentUser.displayName = displayName;
        _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser.role */ .I.currentUser.role = details.role;
        console.log("in reg name: " + displayName);
        console.log("in reg /auth: " + _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I);
        console.log("in reg /auth: " + _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.role */ .I.role);
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use");
            break;

          case 'auth/invalid-email':
            alert("Invalid email");
            break;

          case 'auth/operation-not-allowed':
            alert("Operation not allowed");
            break;

          case 'auth/weak-password':
            alert("Weak password");
            break;

          default:
            alert("Something went wrong");
        }

        return;
      }

      commit('SET_USER', _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser */ .I.currentUser);
      this.$router.replace("/");
      console.log(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.currentUser */ .I.currentUser);
    },

    async logout({
      commit
    }) {
      await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .signOut */ .w7)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I);
      commit('CLEAR_USER');
      this.$router.replace("/login");
    },

    fetchUser({
      commit
    }) {
      _firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.onAuthStateChanged */ .I.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER');
        } else {
          commit('SET_USER', user);

          if (_router__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isReady */ .Z.isReady() && _router__WEBPACK_IMPORTED_MODULE_1__/* ["default"].currentRoute.value.path */ .Z.currentRoute.value.path === '/login') {
            this.$router.replace("/");
          }
        }
      });
    }

  }
}));

/***/ }),

/***/ 8131:
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BattleshipGame.vue?vue&type=template&id=217be11c

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
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_WelcomeLabel)], 512), [[runtime_dom_esm_bundler/* vShow */.F8, $setup.expandedPic]])]),
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
;// CONCATENATED MODULE: ./src/pages/BattleshipGame.vue?vue&type=template&id=217be11c

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/WelcomeLabel.vue?vue&type=template&id=139476da

const WelcomeLabelvue_type_template_id_139476da_hoisted_1 = {
  key: 0,
  class: "text-h3 q-mt-sm q-mb-xs text-orange-9 text-center"
};

const WelcomeLabelvue_type_template_id_139476da_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Welcome ");

const _hoisted_3 = {
  key: 0
};

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" to the Battleship Game");

function WelcomeLabelvue_type_template_id_139476da_render(_ctx, _cache, $props, $setup, $data, $options) {
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
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [$data.show ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", WelcomeLabelvue_type_template_id_139476da_hoisted_1, [WelcomeLabelvue_type_template_id_139476da_hoisted_2, _ctx.$store.state.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$store.state.user.displayName), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _hoisted_4])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)], 64);
}
;// CONCATENATED MODULE: ./src/components/WelcomeLabel.vue?vue&type=template&id=139476da

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


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WelcomeLabelvue_type_script_lang_js, [['render',WelcomeLabelvue_type_template_id_139476da_render]])

/* harmony default export */ const WelcomeLabel = (__exports__);
;



runtime_auto_import_default()(WelcomeLabelvue_type_script_lang_js, 'components', {QSeparator: QSeparator/* default */.Z,QCardSection: QCardSection/* default */.Z,QImg: QImg/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BattleshipSettings.vue?vue&type=template&id=7e510ef2


const BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6 q-mt-sm q-mb-xs text-white text-center"
}, " Game Settings", -1);

const BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_2 = {
  class: "q-pa-md"
};
const BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_3 = {
  class: "bg-grey-4 q-pa-sm rounded-borders",
  style: {
    "max-width": "250px"
  }
};

const BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Game Modus: ");

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
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_3, [BattleshipSettingsvue_type_template_id_7e510ef2_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_option_group, {
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
var QOptionGroup = __webpack_require__(7011);
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

/* harmony default export */ const BattleshipSettings = ((/* unused pure expression or super */ null && (BattleshipSettings_exports_)));
;










runtime_auto_import_default()(BattleshipSettingsvue_type_script_lang_js, 'components', {QCardSection: QCardSection/* default */.Z,QForm: QForm/* default */.Z,QOptionGroup: QOptionGroup/* default */.Z,QSelect: QSelect/* default */.Z,QChip: QChip/* default */.Z,QAvatar: QAvatar/* default */.Z,QBadge: QBadge/* default */.Z,QBtn: QBtn/* default */.Z,QCard: QCard/* default */.Z,QSeparator: QSeparator/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Battleground.vue?vue&type=template&id=cba659e8



const Battlegroundvue_type_template_id_cba659e8_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, null, -1);

const Battlegroundvue_type_template_id_cba659e8_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "current State:", -1);

const Battlegroundvue_type_template_id_cba659e8_hoisted_3 = {
  class: "text-h6 bg-black"
};
const Battlegroundvue_type_template_id_cba659e8_hoisted_4 = ["id"];
const Battlegroundvue_type_template_id_cba659e8_hoisted_5 = {
  class: "battlefieldLeft"
};

const Battlegroundvue_type_template_id_cba659e8_hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "xNumberRow"
}, "X", -1);

const Battlegroundvue_type_template_id_cba659e8_hoisted_7 = {
  class: "abcCol"
};
const Battlegroundvue_type_template_id_cba659e8_hoisted_8 = ["id", "cellIndex", "col", "row", "innerHTML"];
const Battlegroundvue_type_template_id_cba659e8_hoisted_9 = {
  class: "battlefieldRight clear"
};

const Battlegroundvue_type_template_id_cba659e8_hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "middleCutLine"
}, " | ", -1);

const Battlegroundvue_type_template_id_cba659e8_hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
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

function Battlegroundvue_type_template_id_cba659e8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [Battlegroundvue_type_template_id_cba659e8_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    class: "cardState"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "bg-grey-8 text-white"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [Battlegroundvue_type_template_id_cba659e8_hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", Battlegroundvue_type_template_id_cba659e8_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($data.currentState), 1)]),
      _: 1
    })]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: "gameContainer",
    style: (0,shared_esm_bundler/* normalizeStyle */.j5)($data.scaleFont)
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
    id: 'bf-size' + $data.size,
    class: "game"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", Battlegroundvue_type_template_id_cba659e8_hoisted_5, [Battlegroundvue_type_template_id_cba659e8_hoisted_6, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, n => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
      key: n,
      class: "numberRow"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(n), 1);
  }), 128)), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, row => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: row,
      class: "battlefield size{{this.size}}"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", Battlegroundvue_type_template_id_cba659e8_hoisted_7, (0,shared_esm_bundler/* toDisplayString */.zw)($options.intToABC(row)), 1), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, col => {
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
      }, null, 10, Battlegroundvue_type_template_id_cba659e8_hoisted_8)]);
    }), 128))]);
  }), 128))]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", Battlegroundvue_type_template_id_cba659e8_hoisted_9, [Battlegroundvue_type_template_id_cba659e8_hoisted_10, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, (n, index) => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", {
      key: index,
      class: "numberRow"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(n), 1);
  }), 128)), Battlegroundvue_type_template_id_cba659e8_hoisted_11, ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.size, (row, index) => {
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
  }), 128)), _hoisted_15])], 8, Battlegroundvue_type_template_id_cba659e8_hoisted_4)], 4)], 64);
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
 
;// CONCATENATED MODULE: ./src/components/Battleground.vue




;


const Battleground_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Battlegroundvue_type_script_lang_js, [['render',Battlegroundvue_type_template_id_cba659e8_render]])

/* harmony default export */ const Battleground = (Battleground_exports_);
;


runtime_auto_import_default()(Battlegroundvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z});

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
  probs: {
    testData: {
      skrri: "99",
      type: 'test',
      kp: true
    }
  },
  components: {
    WelcomeLabel: WelcomeLabel,
    //BattleshipSettings,
    Battleground: Battleground,
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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"193":"15a043ce","210":"1c87ed50","336":"aa3b1c6f","612":"bb24f784","745":"beafc56b","905":"12d9c5ee"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + ({"143":"app","736":"vendor"}[chunkId] || chunkId) + "." + {"143":"3657a855","336":"d2afc763","736":"52108c74","745":"ea8cf1eb"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "battleship:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"336":1,"745":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(4891)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.cf5ba0da.js.map