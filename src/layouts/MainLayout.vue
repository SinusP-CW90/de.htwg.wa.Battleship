<template>
  <q-layout view="lhr lpr lFr">

    <Header></Header>

    <DrawerLeft  ref=“leftDrawer” v-model="leftDrawerOpen" @change="toggleLeftDrawer"></DrawerLeft>

    <!--DrawerRight></DrawerRight-->

    <q-page-container>
      <router-view/>
    </q-page-container>

    <Footer></Footer>

  </q-layout>
</template>

<script>
import {ref, onBeforeMount} from 'vue'

import Header from "components/MainLayoutComponents/Header.vue"
import DrawerLeft from "components/MainLayoutComponents/DrawerLeft.vue"
import DrawerRight from "components/MainLayoutComponents/DrawerRight.vue"
import Footer from "components/MainLayoutComponents/Footer.vue"
import {useStore} from 'vuex'

export default {
  name: "MainLayout",
  components: {
    Header,
    DrawerLeft,
    //DrawerRight,
    Footer,
  },
  methods: {
    onEnlargeText() {
      console.log("enlarging text container");
    },
  },

  setup() {
      const leftDrawerOpen = ref(true)
      return {
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },

      }


    //for Auth
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

  }
}
</script>

<style lang="Scss">

</style>
