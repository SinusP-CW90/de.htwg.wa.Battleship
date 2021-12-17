<template>
  <!-- Inputs -->
  <q-card-section>
    <div class="text-h6 q-mt-sm q-mb-xs text-white text-center"> Game Settings</div>
  </q-card-section>

  <div class="q-pa-md" >

    <q-form class="q-gutter-md row" @submit="onSubmit">
      <div class="bg-grey-4 q-pa-sm rounded-borders" style="max-width: 250px">
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
            v-model="shipModel"
            :options="shipOptions"
            filled
            label="Player 1"
            stack-label
          >
            <template v-slot:selected>
              Ship Type:
              <q-chip
                v-if="shipModel"
                class="q-my-none q-ml-xs q-mr-none"
                color="white"
                dense
                square
                text-color="primary"
              >

                {{ shipModel.label }}
                <q-avatar :icon="shipModel.icon" color="primary" text-color="white"></q-avatar>
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


      <div class="vertical-bottom">
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
</template>

<script>
import {ref} from 'vue'

export default {
  name: "BattleshipSettings",
  components: {},
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
          icon: 'bluetooth'
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

<style scoped>

</style>
