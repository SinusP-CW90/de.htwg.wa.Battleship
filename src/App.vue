<template>
  <router-view/>
</template>
<script>
import {defineComponent} from 'vue';
import Battleground from "components/Battleground";
import BattlefieldLeftSide from "components/BattlefieldLeftSide";
import BattlefieldRightSide from "components/BattlefieldRightSide";
import MainLayout from "layouts/MainLayout";

export default defineComponent({
  name: 'App',
  components: {
    MainLayout: MainLayout,
    Battleground:Battleground,
    BattlefieldLeftSide:BattlefieldLeftSide,
    BattlefieldRightSide:BattlefieldRightSide
  }
})
</script>
