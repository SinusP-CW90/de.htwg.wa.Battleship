<template>
  <div class="q-px-lg q-pt-md q-pb-xl">
    <q-slider
      v-model="model"
      marker-labels
      :min="1"
      :max="6"
    />
{{text}}
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: "BattlefildSizeSlider.vue",
  setup () {
    const model = ref(2)
    const priceModel = ref(4)

    return {
      text: example.text,
      model,
      objMarkerLabel: { 0: example, 3: { label: '3°C' }, 5: '5°C', 6: '6°C' },

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
