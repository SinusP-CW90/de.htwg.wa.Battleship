<template>
  <form @submit.prevent="handleSubmit">
    <h3>Fortgot Password</h3>

    <div calss="form-group">
      <label>Email</label>
      <input v-model="email" class="form-control" placeholder="Email" type="email"/>
    </div>

    <button class="btn btn-primary btn-block">Submit</button>
  </form>
</template>

<script>

export default {
  name: "ForgotPW.vue",
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async handleSubmit() {

      console.log("response");
    }


  }
}
</script>

<style scoped>

</style>
