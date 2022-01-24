<template>
    <div class="vue-tempalte">
        <h3>Welcome</h3>
           <p>{{displayName}}</p>
           <p>{{email}}</p>

    </div>
</template>

<script>
import firebase from "firebase";
import {getAuth, updateProfile} from "firebase/auth";

export default {
  name: "Home",
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
    this.name = "newName"
  },
  updated() {
    console.log('updated!')
    this.name = "newNEWName"
  },
  methods:{

    kp1(){
      const auth = getAuth();
      const user = auth.currentUser;

      if (user !== null) {
        user.providerData.forEach((profile) => {
          this.name = profile.providerId;
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
};
</script>
