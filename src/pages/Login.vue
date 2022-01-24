<template>
  <main class="login row items-center d-flex justify-center bg-image" style="height: 100vh" >

    <section class="forms">
      <form class="login" @submit.prevent="login"
            style="padding-top: 30px">

        <q-img class="q-img"
               src="images/battleship.jpg"
        ></q-img>

        <h2 class="text-center">Login</h2>

        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email" />

        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password" />

        <p class="forgot-password text-right">
          <router-link to="/forgetPassword">Forgot Password?</router-link>
        </p>

        <input
          type="submit"
          value="Login" />

        <div>
          <p class="text-center">
            You don't have an account ? <br>
            You can <router-link to="/register">register</router-link>
            <br>


            <button @click="socialLogin" class="social-button">
              <img
                alt="Google Logo"
                src="icons/googleSingIn.png" style="hight:50px; width:300px"
              />
            </button>

            <button @click="githubLogin" class="social-button">
              <img
                alt="Github Logo"
                src="icons/gitHubSignIn.png" style="hight:50px; width:350px"
              />
            </button>
          </p>
        </div>

      </form>

    </section>

  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";
import {

  getAuth, getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";

export default {
  setup () {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    }
    const googleLogin = () => {
      store.dispatch('googleLogin', login_form.value);
    }

    return {
      login_form,
      login,
      googleLogin
    }
  },
  methods: {
    googleLoginX(){
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

    },
    socialLogin() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithRedirect(auth, provider)
        .then(() => {
          this.$router.replace("/");
          console.log(socialLogin)
          this.successLogin();
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
    successLogin() {
      getRedirectResult(auth).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // Accounts successfully linked.
          const user = result.user;
          this.$router.replace("/");
          console.log(user)
          // ...
        }
      }).catch((error) => {
        // Handle Errors here.
        // ...
      })
    },

  },
}
</script>

<style>

.bg-image {
  background-image: url("/images/seaBackground1Wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  hight:100%;
  max-height: 100%;
}
.q-img{
  max-width:66vw;
}

.forms {
  display: flex;
  max-width: 50vw;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
}

form.login {
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

form.login input:not([type="submit"]) {
  color: #FFF;
  border-bottom: 2px solid #FFF;
}

form.login input[type="submit"] {
  background-color: #FFF;
  color: rgb(0, 0, 0);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
