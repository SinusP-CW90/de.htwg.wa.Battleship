<template>
    <main class="reg row items-center d-flex justify-center bg-image" style="height: 100vh" >
      <section class="forms">
        <div style="height: 200px">
          <q-img class="q-img"
                 src="images/battleship.jpg"
          ></q-img>
        </div>

        <form class="register" @submit.prevent="resetPassword">
          <h2 class="text-center">Forgot your Password</h2>

          <input
            type="email"
            placeholder="Email address"
            v-model="resetPassword_form.email" />

          <input
            type="submit"
            value="send password reset Email " />

          <v-card-text>
            <p class="text-center reg row items-center d-flex justify-center">
              or go back to <router-link to="/login">Login</router-link>.
            </p>
          </v-card-text>
        </form>

      </section>

    </main>

</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "ForgotPassword.vue",
  setup () {
    const resetPassword_form = ref({});
    const store = useStore();

    const resetPassword = () => {
      store.dispatch('resetPassword', resetPassword_form.value);
    }

    return {
      resetPassword_form,
      resetPassword,
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
