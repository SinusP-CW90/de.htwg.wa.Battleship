<template>
  <q-header class="bg-primary text-white" elevated height-hint="98" reveal>

    <q-toolbar>
      <q-btn dense flat icon="menu" round       @change='$emit("change", $event.target.value)' />

      <q-toolbar-title>

        <q-img
          src="images/battleshipTitleWhite.png"
          style="max-width: 111px; min-height: 8px;"
        >
        </q-img>
        Battleship
      </q-toolbar-title>

      <!--q-btn dense flat icon="menu" round @click="toggleRightDrawer"/-->
    </q-toolbar>

    <q-tabs align="left" class="text-center">
      <q-route-tab label="The Game" to="/"/>
      <q-route-tab label="About Battleship" to="/aboutTheGame"/>
      <q-route-tab label="Test Page" to="/index"/>
      <!--q-route-tab label="Error Page" to="/page4"/-->
      <q-route-tab v-if="!$store.state.user"   label="Login" to="/login"/>
      <q-route-tab v-if="!$store.state.user" label="Register" to="/register"/>
      <q-route-tab v-if="!$store.state.user" label="ForgotPassword" to="/forgotPassword"/>
      <q-route-tab label="user" to="/user"/>
      <q-route-tab v-if="$store.state.user" label="SecretPage" to="/secretPage"/>
      <button v-if="$store.state.user" @click="$store.dispatch('logout')">Logout</button>
      <!--button v-if="$store.state.user.displayName" >{{ $store.state.user.displayName }}</button-->

    </q-tabs>


  </q-header>
</template>

<script>

//import MainLayout from "layouts/MainLayout.vue";
//import LeftDrawer from "MainLayoutComponents"


import {getAuth, signOut, unlink } from "firebase/auth";
import $store from "express/lib/router/route";

export default {
  name: "Header.vue",
  emits: ["change"],
  setup () {
    //const auth = getAuth();
    return {
      //auth
    }
  },
  methods: {
    tryThis() {
      console.log("trying in Header");
      this.$emit("enlargeText", "someValue");
    },
    logout(){
      const auth = getAuth();

    },
    mounted() {
      console.log('mounted!')
      if($store.state.user.role === 'admin'){
        console.log("true")
      }
      console.log("false")

      //this.name = "newName"
      this.kp1();
    },
    updated() {
      console.log('updated!')
      //this.name = "newNEWName"
    },

  },
}
</script>

<style scoped>

</style>
