<template>
  <div class="vue-tempalte">
    <h3>Welcome</h3>
    <p>{{$store.state.user.displayName}}</p>
    <p>{{$store.state.user.email}}</p>
    <p>{{$store.state.user.role}}</p>
    </div>
</template>

<script>
export default {
  name: "SecretPage.vue"
}
</script>
import $store from "express/lib/router/route";

<style scoped>

</style>
