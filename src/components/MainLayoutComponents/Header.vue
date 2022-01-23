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
      <q-route-tab label="Login" to="/login"/>
      <q-route-tab label="Register" to="/register"/>
      <q-route-tab label="ForgotPassword" to="/forgotPassword"/>
      <q-route-tab label="user" to="/user"/>
      <q-route-tab label="home" to="/home"/>
      <button v-if="$store.state.user" @click="$store.dispatch('logout')">Logout</button>
      <button v-if="$store.state.user" @click="logout">Logout</button>

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

      signOut(auth).then(() => {
        unlink(auth.currentUser, providerId).then(() => {
          console.log("unlink successful.")
          // Auth provider unlinked from account
          // ...
        }).catch((error) => {
          // An error happened
          // ...
        })
        $store.dispatch('logout')
        console.log("Sign-out successful.")
        // Sign-out successful.
      }).catch((error) => {
        console.log("An error happened.")
        // An error happened.
      })
    },


  },
}
</script>

<style scoped>

</style>
