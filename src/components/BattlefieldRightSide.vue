<template>
  <div class="battlefieldRight clear">
    <!--Numbers -->
    <span class="middleCutLine"> | </span>
    <span v-for="n in size" class="numberRow">{{ n }}</span>
    <span class="xNumberRow">X</span>

    <!--row Right-->
    <div v-for="row in size" class="battlefield size{{vuePlaygroundSize}}">
      <span class="middleCutLine"> | </span>

      <!--col Right-->
      <div v-for="col in size">
                                <span v-bind:id="'cellRight-R'+row+'-C'+col" class="cell cellRight"
                                      data-bs-toggle="tooltip" title="wrong side ;-)"
                                      v-bind:cellRightIndex='row*size+col'>
                                    <span v-bind:id="'cellValueRight-R'+row+'-C'+col" class="cellValueRight"
                                          shoot="" v-bind:cellRightValue='row*size+col'>
                                        {{ changeZero(col) }}
                                    </span>
                                </span>
      </div>

      <span class="abcColRight">{{ intToABC(row) }}</span>
    </div><!--battlefield END -->

    <div class="clear"></div>
  </div><!--battlefieldRight END -->
</template>

<script>
export default {
  name: "BattlefieldRightSide"
}
</script>

<style scoped>

</style>
