<template>
  <div id="q-app" class="bg-image" style="min-height: 100vh;">
    <div class="q-pa-md row items-start q-gutter-md ">

      <q-card bordered class="my-card" flat style="background: radial-gradient(circle, #383838 0%, #1d1d1d 100%)">
        <q-slide-transition>
          <div v-show="expandedPic">

            <q-separator></q-separator>

            <q-card-section class="text-subitle2 text-white">
              <q-img
                src="images/battleship.jpg"
              ></q-img>
            </q-card-section>

            <q-card-section>
              <div class="text-h3 q-mt-sm q-mb-xs text-orange-9 text-center">Welcome to the Battleship Game</div>
            </q-card-section>

            <!-- Inputs -->
            <div class="q-pa-md" style="max-width: 300px">
              <q-form class="q-gutter-md" @submit="onSubmit">
                <div class="bg-grey-4 q-pa-sm rounded-borders">
                  Game Modus:
                  <q-option-group
                    v-model="preferred"
                    :options="options"
                    color="primary"
                    inline
                    name="gameModus"
                  ></q-option-group>
                </div>

                <!-- ship Select-->
                <div class="q-pa-md bg-grey-4" style="max-width: 300px">
                  <div class="q-gutter-md q-pa-sm rounded-borders">
                    Select your Ship Type
                    <q-select
                      filled
                      v-model="shipModel"
                      :options="shipOptions"
                      stack-label
                      label="Player 1"
                    >
                      <template v-slot:selected>
                        Ship Type:
                        <q-chip
                          v-if="shipModel"
                          dense
                          square
                          color="white"
                          text-color="primary"
                          class="q-my-none q-ml-xs q-mr-none"
                        >

                          {{ shipModel.label }}
                          <q-avatar color="primary" text-color="white" :icon="shipModel.icon"></q-avatar>
                        </q-chip>
                        <q-badge v-else>*none*</q-badge>
                      </template>
                    </q-select>

                    <q-badge color="secondary" multi-line>
                      Model: "{{ shipModel }}"
                    </q-badge>
                  </div>
                </div>
                <!-- ship Select end-->


                <div>
                  <q-btn color="primary" label="Start the Game" type="submit"></q-btn>
                </div>
              </q-form>

              <q-card v-if="submitResult.length > 0" bordered class="q-mt-md bg-grey-2" flat>
                <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
                <q-separator></q-separator>
                <q-card-section class="row q-gutter-sm items-center">
                  <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
                  >{{ item.name }} = {{ item.value }}
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <!-- Inputs -->
          </div>
        </q-slide-transition>
        <q-btn
          :icon="expandedPic ?'keyboard_arrow_up' : 'keyboard_arrow_down'"
          color="grey"
          dense
          flat
          round
          @click="expandedPic = !expandedPic"
        ></q-btn>

        <q-card-actions>
          <q-space></q-space>
          <q-btn
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            color="white"
            dense
            flat
            round
            @click="expanded = !expanded ; leftDrawerOpen"
          ></q-btn>
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator></q-separator>
            <q-card-section class="text-subitle2 text-white">

              <Battleground></Battleground>

            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>

</template>

<script>
import Battleground from "components/Battleground";
import {ref} from 'vue'

export default {

  name: "BattleshipGame.vue",
  components: {
    Battleground: Battleground
  },
  setup() {
    const submitResult = ref([])
    return {
      expandedPic: ref(true),
      expanded: ref(false),
      preferred: ref('p1'),
      accepted: ref([]),
      submitResult,
      model: ref(null),
      shipModel: ref({
        label: 'red Ships',
        value: 'shipsRed',
        icon: 'mail'
      }),

      options: [
        {
          label: 'Player1 vs Computer',
          value: 'p1'
        },
        {
          label: 'Player1 vs Player2',
          value: 'p2'
        }
      ],
      shipOptions: [
        {
          label: 'red Ships',
          value: 'shipsRed',
          icon: 'mail'
        },
        {
          label: 'white Ships',
          value: 'whiteShips',
          icon: 'mail'
        },
        {
          label: 'pirate Ships',
          value: 'shootShips',
          icon: 'bluetooth'
        }
      ],
      onSubmit(evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value
          })
        }

        submitResult.value = data
      }

    }
  }
}

</script>

<style>
.my-card {
  width: 100%;
  max-width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.bg-image {
  background-image: url("/images/seaBackground1Wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
