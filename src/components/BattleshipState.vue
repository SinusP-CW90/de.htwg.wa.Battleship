<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-linear-progress dark stripe rounded size="20px" :value="progress1" color="blue-14" class="q-mt-sm">
      <div class="absolute-full flex flex-center">
        <q-badge color="black" text-color="white" :label="progressLabel1"></q-badge>
      </div>
    </q-linear-progress>
    <q-linear-progress dark stripe rounded size="20px" :value="progress2" color="red-14" class="q-mt-sm">
      <div class="absolute-full flex flex-center">
        <q-badge color="black" text-color="white" :label="progressLabel2"></q-badge>
      </div>
    </q-linear-progress>
  </div>

</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const progress1 = ref(0.3)
    const progress2 = ref(0.9)
    const player1Name = ref("Player 1")
    const player2Name = ref("Player 2")

    return {
      progress1,
      progressLabel1: computed(() => player1Name.value +' shoot '+ (progress1.value * 100).toFixed(2) + '% of '+player2Name.value +'`s Ships' ),

      progress2,
      progressLabel2: computed(() => player2Name.value +' shoot '+ (progress1.value * 100).toFixed(2) + '% of '+player1Name.value +'`s Ships' ),
    }
  }
}
</script>


<style>

</style>
