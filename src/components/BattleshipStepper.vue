<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Player 1 (left) - Set your Ships"
        icon="settings"
        :done="step > 1"
      >
        Set your Ships
      </q-step>

      <q-step
        :name="2"
        title="Player 2 (right) - Set your Ships"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        Set your Ships
      </q-step>

      <q-step
        :name="3"
        title="Player 1 (left) - Shoot Player 2´s Ships"
        icon="assignment"
      >
        Player 1 (left) - Shoot Player 2´s Ships
      </q-step>

      <q-step
        :name="4"
        title="Player 2 (right) - Shoot Player 1´s Ships"
        icon="assignment"
      >
        Player 1 (left) - Shoot Player 2´s Ships
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "BattleshipStepper.vue",
  setup () {
    return {
      step: ref(1)
    }
  }
}
</script>

<style>

</style>
