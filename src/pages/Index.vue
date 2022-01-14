<template>
  <q-page class="flex flex-center">
    index.vue

    <p>Use display: grid; to make a block-level grid container:</p>

    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
    </div>

    <Battleground></Battleground>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PageIndex'
})

</script>

<style>
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
