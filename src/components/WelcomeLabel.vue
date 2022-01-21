<template>
  <q-separator></q-separator>

  <q-card-section class="text-subitle2 text-white text-center">
    <q-img class="q-img"
      src="images/battleship.jpg"
    ></q-img>
  </q-card-section>

  <q-card-section>
    <div class="text-h3 q-mt-sm q-mb-xs text-orange-9 text-center" v-if="show">Welcome to the Battleship Game</div>
  </q-card-section>

  <q-separator></q-separator>
</template>

<script>
export default {
  name: "WelcomeLable",
  data() {
    return {
      show: true
    }
  }
}
</script>

<style Sass>

@media (min-width: 300px) {
  .q-img{
    max-width:90vw;
    display: inline-block;

  }
}
@media (min-width: 721px) {
  .q-img{
    max-width:75vw;
  }
}
@media (min-width: 1001px) {
  .q-img{
    max-width:60vw;
  }
}

</style>
