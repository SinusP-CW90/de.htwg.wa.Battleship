<template>
  <div class="vue-tempalte">
    <h3>Welcome</h3>
    <p v-if="$store.state.user">{{$store.state.user}}</p>
    <p v-if="$store.state.user">{{$store.state.user.displayName}}</p>
    <p v-if="$store.state.user">Provider Data: {{$store.state.user.providerData}}</p>
    <p v-if="$store.state.user">{{$store.state.user.email}}</p>
    <p v-if="$store.state.user">{{$store.state.user.role}}</p>

  </div>
</template>

<script>

import {getAuth, updateProfile} from "firebase/auth";

export default {
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
    //this.name = "newName"
    this.kp1();
  },
  updated() {
    console.log('updated!')
    //this.name = "newNEWName"
  },
  methods:{
    kp1(){
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          this.name = profile.displayName,
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
};
</script>
