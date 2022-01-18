<template>
  <div class="q-px-lg q-pt-md q-pb-xl">
    <q-slider
      v-model="model"
      marker-labels
      :min="0"
      :max="6"
    />

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { example } from 'vue'

export default {
  name: "BattlefildSizeSlider.vue",
  setup () {
    const model = ref(2)
    const priceModel = ref(4)

    return {
      text: example,
      model,
      fnMarkerLabel: val => `${10 * val}%`,
      objMarkerLabel: { 0: '0°C', 3: { label: '3°C' }, 5: '5°C', 6: '6°C' },

      priceModel,
      priceLabel: computed(() => `$ ${priceModel.value}`),
      arrayMarkerLabel: [
        { value: 3, label: example },
        { value: 4, label: '$4' },
        { value: 5, label: '$5' },
        { value: 6, label: '$6' }
      ]
    }
  }
}
</script>

<style>

</style>
