<template>
  <div class="battlefieldLeft">
    <!--Numbers -->
    <span class="xNumberRow">X</span>
    <span v-for="n in size" class="numberRow">{{ n }}</span>

    <!--row Left -->
    <div v-for="row in size" class="battlefield size{{vuePlaygroundSize}}">
      <span class="abcCol">{{ intToABC(row) }}</span>
      <!--col Left -->
      <div v-for="col in size">
                                    <span v-bind:id="'cellLeft-R'+row+'-C'+col" class="cell cellLeft"
                                          v-bind:cellIndex='row*size+col'>
                                        <span v-bind:id="'cellValueLeft-R'+row+'-C'+col" class="cellValueLeft"
                                              shoot="" v-bind:cellValue='row*size+col'>
                                        {{ changeZero(col) }}
                                          </span>
                                    </span>
      </div>
    </div>
  </div><!--battlefieldLeft END -->
</template>

<script>
export default {
  name: "BattlefiledLeftSide"
}
</script>

<style scoped>

</style>
