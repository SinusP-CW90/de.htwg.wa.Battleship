<template>
  <router-view/>
</template>
<script>
import {defineComponent} from 'vue';
import component1TEST from "components/component1TEST";
import Battleground from "components/Battleground";
import BattlefieldLeftSide from "components/BattlefieldLeftSide";
import BattlefieldRightSide from "components/BattlefieldRightSide";

export default defineComponent({
  name: 'App',
  components: {
    component1TEST: component1TEST,
    Battleground:Battleground,
    BattlefieldLeftSide:BattlefieldLeftSide,
    BattlefieldRightSide:BattlefieldRightSide
  }
})
</script>
