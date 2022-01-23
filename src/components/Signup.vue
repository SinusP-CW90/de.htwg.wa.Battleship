<template>
  <main class="reg row items-center d-flex justify-center bg-image" style="height: 100vh" >
    <section class="forms">
      <div style="height: 200px">
        <q-img class="q-img"
               src="images/battleship.jpg"
        ></q-img>
      </div>

      <form class="register" @submit.prevent="register">
        <h2 class="text-center">Register</h2>
        <input
          type="name"
          placeholder="Name"
          v-model="user.name" />

        <input
          type="email"
          placeholder="Email address"
          v-model="user.email" />

        <input
          type="password"
          placeholder="Password"
          v-model="user.password" />

        <input
          type="submit"
          value="Register" />

        <p class="forgot-password text-right">
          Already registered
          <router-link :to="{name: 'login'}">sign in?</router-link>
        </p>
      </form>

    </section>

  </main>
</template>


<script>
//import firebase from "firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          userCredential.user
            .updateProfile({
              displayName: this.user.name
            })
            .then(() => {
              this.$router.push('/login')
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
          // ..
        });
    }
  }
};
</script>
<style>
.bg-image {
  background-image: url("/images/seaBackground1Wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  hight:100vh;
}

.forms {
  display: flex;
  max-width: 50vw;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
}

form.register {
  color: #FFF;
  background-color: rgb(0, 0, 0);
  background-image: linear-gradient(
    to bottom right,
    rgb(0, 0, 0) 0%,
    rgb(80, 80, 80) 100%
  );
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #FFF;
  border-bottom: 2px solid #FFF;
}

form.register input[type="submit"] {
  background-color: #FFF;
  color: rgb(0, 0, 0);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
