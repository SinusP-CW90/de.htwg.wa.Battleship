<template>
  <q-header class="bg-primary text-white" elevated height-hint="98" reveal>

    <q-toolbar>
      <q-btn dense flat icon="menu" round       @change='$emit("change", $event.target.value)' />

      <q-toolbar-title>

        <q-img
          src="images/battleshipTitleWhite.png"
          style="max-width: 111px; min-height: 8px;"
        >
        </q-img>
        Battleship
      </q-toolbar-title>

      <!--q-btn dense flat icon="menu" round @click="toggleRightDrawer"/-->
    </q-toolbar>

    <q-tabs align="left" class="text-center">
      <q-route-tab label="The Game" to="/"/>
      <q-route-tab label="About Battleship" to="/aboutTheGame"/>
      <q-route-tab label="Test Page" to="/index"/>
      <q-route-tab label="Error Page" to="/page4"/>
      <button v-if="$store.state.user" @click="$store.dispatch('logout')">Logout</button>
    </q-tabs>


  </q-header>
</template>

<script>

//import MainLayout from "layouts/MainLayout.vue";
//import LeftDrawer from "MainLayoutComponents"




export default {
  name: "Header.vue",
  emits: ["change"],
  methods: {
    tryThis() {
      console.log("trying in Header");
      this.$emit("enlargeText", "someValue");
    },
  },
}
</script>

<style scoped>

</style>
