<template>
  <div id="q-app" class="bg-image" style="min-height: 100vh;">
    <div class="q-pa-md row items-start q-gutter-md ">

      <q-card bordered class="my-card" flat style="background: radial-gradient(circle, #383838 0%, #1d1d1d 100%)">

        <q-slide-transition>

          <div v-show="expandedPic">

            <WelcomeLabel></WelcomeLabel>

            <BattleshipSettings></BattleshipSettings>
          </div>
        </q-slide-transition>
        <q-btn
          :icon="expandedPic ?'keyboard_arrow_up' : 'keyboard_arrow_down'"
          color="grey"
          dense
          flat
          round
          @click="expandedPic = !expandedPic;expanded = !expanded"
        ></q-btn>

        <q-card-actions>
          <q-space></q-space>
          <q-btn
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            color="white"
            dense
            flat
            round
            @click="expanded = !expanded ; expandedPic = !expandedPic"
          ></q-btn>
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator></q-separator>
            <q-card-section class="text-subitle2 text-white">
              <q-card-section class="text-subitle2 text-white text-center">
              <q-img class="b-img text-center"
                     src="images/battleship.jpg"
              ></q-img>
                </q-card-section>
              <!--BattleshipStepper></BattleshipStepper-->
                <BattleshipState></BattleshipState>
              <Battleground></Battleground>
                <BattlefildSizeSlider :propsName="example"></BattlefildSizeSlider>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>

</template>

<script>
import WelcomeLabel from "components/WelcomeLabel";
import BattleshipSettings from "components/BattleshipSettings";
import Battleground from "components/Battleground";
import BattleshipState from "components/BattleshipState";
import BattlefildSizeSlider from "components/BattlefildSizeSlider";
import BattleshipStepper from "components/BattleshipStepper";
import {ref} from 'vue'

export default {
  name: "BattleshipGame.vue",
  components: {
    WelcomeLabel: WelcomeLabel,
    BattleshipSettings: BattleshipSettings,
    Battleground: Battleground,
    BattleshipState:BattleshipState,
    BattlefildSizeSlider:BattlefildSizeSlider,
    //BattleshipStepper, BattleshipStepper,

  },
  setup() {
    return {
      expandedPic: ref(true),
      expanded: ref(false),
      example: 'Send this variable to the child',
    }
  }
}

</script>

<style>
.my-card {
  width: 90%;
  max-width: 95%;
  /*display: block;*/
}

.bg-image {
  background-image: url("/images/seaBackground1Wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 300px) {
  .b-img{
    max-width:60vw;
  }
}
@media (min-width: 721px) {
  .b-img{
    max-width:50vw;
  }
}

@media (min-width: 1001px) {
  .b-img{
    max-width:40vw;
  }
}

</style>
