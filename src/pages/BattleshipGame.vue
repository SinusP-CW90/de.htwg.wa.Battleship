<template>
  <div class="q-gutter-md row items-start">
    <q-img
      :key="cover"
      src="images/seaBackground1Wide.jpg"
    >

      <!-- card -->
      <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md row items-start q-gutter-md justify-center">
          <q-card class="my-card" flat bordered
                  style="background: radial-gradient(circle, #383838 0%, #1d1d1d 100%)"
          >
            <q-img
              src="images/battleship.jpg"
            ></q-img>

            <q-card-section>
              <div class="text-overline text-orange-9">Overline</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
              <Battleground></Battleground>
            </q-card-section>

            <q-card-actions>
              <q-btn flat color="dark" label="Share"></q-btn>
              <q-btn flat color="primary" label="Book"></q-btn>

              <q-space></q-space>

              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              ></q-btn>
            </q-card-actions>

            <q-slide-transition>
              <div v-show="expanded">
                <q-separator></q-separator>
                <q-card-section class="text-subitle2">
test
                  {{ lorem }}
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </div>
      </div>
      <!-- Card end -->

    </q-img>

  </div>

</template>

<script>
import component1TEST from "components/component1TEST";
import Battleground from "components/Battleground";

export default {
  name: "BattleshipGame.vue",
  components: {
    component1TEST: component1TEST,
    Battleground: Battleground

  }

}

//battleship.JS

</script>

<style scoped>

</style>
