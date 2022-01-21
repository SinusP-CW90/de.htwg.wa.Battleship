<template>
  <main class="login row items-center d-flex justify-center">
    <div class="row items-center d-flex justify-center" style="height: 200px">
      <q-img class="q-img"
             src="images/battleship.jpg"
      ></q-img>
    </div>
    <section class="forms">

      <form class="login" @submit.prevent="login">
        <h2 class="text-center">Login</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email" />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password" />
        <input
          type="submit"
          value="Login" />
        <v-card-text>
          <p class="text-center">
            You don't have an account ? <br>
            You can <router-link to="/register">register</router-link>
            <br>or <br>Sign in with Google <br />
            <button @click="socialLogin" class="social-button">
              <img
                alt="Google Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </button>
          </p>
        </v-card-text>

      </form>

    </section>

  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default {
  setup () {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    }

    return {
      login_form,
      login,
    }
  },
  methods: {
    socialLogin() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$router.replace("");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
  },
}
</script>

<style>

.q-img{
  max-width:66vw;
}

.forms {
  display: flex;

}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
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
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
  background-color: rgb(0, 0, 0);
  color: #FFF;
  background-image: linear-gradient(
    to bottom right,
    rgb(0, 0, 0) 0%,
    rgb(80, 80, 80) 100%
  );
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
