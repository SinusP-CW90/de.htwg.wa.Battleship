<template>
  <!-- drawer content -->
  <q-drawer class="bg-primary text-white"
            side="left"
            bordered
            :width="200"
            :breakpoint="400"
  >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox"></q-icon>
          </q-item-section>

          <q-item-section>
            Inbox
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="star"></q-icon>
          </q-item-section>

          <q-item-section>
            Star
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send"></q-icon>
          </q-item-section>

          <q-item-section>
            Send
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts"></q-icon>
          </q-item-section>

          <q-item-section>
            Drafts
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img class="absolute-top" src="images/seaBackground2.jpg" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="80px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold">Player 1</div>

        <div v-if="$store.state.user" >{{ myName }}</div>
        <div v-if="!$store.state.user" >{{ myName }}</div>
        <div v-if="$store.state.user" >Role: {{ UV }}</div>
        <div v-if="!$store.state.user">Role: {{ UV }}</div>

      </div>
      <div id="app">
        My Name is {{ myName }}
        <Child @changename="myName = $event" />
      </div>
    </q-img>


  </q-drawer>
  <!-- END -->
</template>

<script>


import DrawerRight from "components/MainLayoutComponents/DrawerRight";
import {ref} from "vue";
import {defineComponent} from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import $store from "express/lib/router/route";

import MainLayout from "layouts/MainLayout";

export default {
  name: "DrawerLeft.vue",
  data() {
    return {
      counter: 0,
      name: "test(),",
      myName: "your Name",
      role: "your Role",
      show: true,
      UV: this.test(),
    }
  },
  components: {
  },
  watch: {
    $route(to, from) {
      this.show = false
    }
  },
  mounted() {
    console.log('mounted!')
    this.name = "newName"
  },
  updated() {
    console.log('updated!')
    this.name = "newNEWName"
  },
  methods:{
    test(){
      if(this.$store.state.user===null){
        return "this.$store.state.user.displayName"
      }
      else{
        return "booobb";
      }

    },

    kp1(){
      const auth = getAuth();
      const user = auth.currentUser;

      if (user !== null) {
        this.name = user.displayName;
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    },

    kp2(){
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }



  }
}
</script>

<style scoped>

</style>
