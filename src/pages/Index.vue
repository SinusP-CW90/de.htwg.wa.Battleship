<template>
  <q-page class="flex flex-center">
    index.vue

    <p>Use display: grid; to make a block-level grid container:</p>

    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
    </div>


    <div id="basic-event" class="demo">
      <button @click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div id="basic-event1" class="demo">
      <button @click="kp1">KP</button>
      <p>The {{ name }} button above has been clicked {{ counter }} times.</p>
    </div>
    <div id="basic-event2" class="demo">
      <button @click="kp2">KP</button>
      <p>The {{ name }} button above has been clicked {{ counter }} times.</p>
    </div>

    <div>
      <p>{{val}} | edited {{ count }} times</p>
      <button @click="val = Math.random(0, 100)">Click to Change</button>
    </div>

    <button
      type="button"
      style="height:50px; width: 300px"
      class="
      px-12 py-10 text-xl rounded-lg bg-white shadow-2xl hover:shadow-lg
      hover:bg-gray-100 transition-all duration-300 ease-in-out focus:outline-none
    "
      @click="$emit('click', { duration: 2000 })"
    >
      <slot></slot>
    </button>

    <div class="hello">
      <button @click="changeName()">Change Name</button>
    </div>
  </q-page>

</template>

<script>

import {defineComponent} from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { ref, onBeforeUpdate, onUpdated } from "vue";




export default defineComponent({
  name: 'PageIndex',
  setup() {
    const count = ref(0);
    const val = ref(0);

    onBeforeUpdate(() => {
      count.value++;
      console.log("beforeUpdate");
    });

    onUpdated(() => {
      console.log("updated() val: " + val.value);
    });

    return {
      count,
      val,
    };
  },
  data() {
    return {
      counter: 0,
      name: "0",

    }
  },
  methods:{
    changeName() {
      this.$emit("changename", "John");
    },

    kp(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.name = user.displayName;
          console.log(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
      },
kp1(){
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    this.name = user.displayName;
    user.role = "Admin";
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("Role: " + profile.role);
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
        displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg", role: "Admin",
      }).then(() => {
        console.log("  profile " + profile);
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }



  }
})

</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

@media (min-width: 300px) {
  .header { grid-area: header; }
  .menu { grid-area: menu; }
  .hero { grid-area: hero; }
  .main { grid-area: main; }
  .banner { grid-area: banner; }
  .extra { grid-area: extra; }
  .image { grid-area: image; }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40px 2fr repeat(4, 1fr);
    grid-template-areas:
     "header header"
     "hero hero hero hero"
     "menu main main main"
     "menu main main main"
     "menu banner banner banner"
     "menu extra image image";
  }
}
@media (min-width: 300px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    background-color: #2196F3;
    padding: 10px;
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
}
</style>
