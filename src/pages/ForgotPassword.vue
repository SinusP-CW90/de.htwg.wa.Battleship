<template>
  <template>
    <main class="reg row items-center d-flex justify-center bg-image" style="height: 100vh" >
      <section class="forms">
        <div style="height: 200px">
          <q-img class="q-img"
                 src="images/battleship.jpg"
          ></q-img>
        </div>

        <form class="register" @submit.prevent="forgetPassword">
          <h2 class="text-center">Forgot your Password</h2>

          <input
            type="email"
            placeholder="Email address"
            v-model="register_form.email" />

          <input
            type="submit"
            value="Register" />

          <v-card-text>
            <p class="text-center reg row items-center d-flex justify-center">
              or go back to <router-link to="/login">Reset Password</router-link>.
            </p>
          </v-card-text>
        </form>

      </section>

    </main>
  </template>
</template>

<script>
export default {
  name: "ForgotPassword.vue"
}
</script>

<style scoped>

</style>
