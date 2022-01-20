<template>
  <q-layout view="lhr lpr lFr">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title >

          <q-img
            src="images/battleshipTitleWhite.png"
            style="max-width: 111px; min-height: 8px;"
          >
          </q-img>
          Battleship
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left" class="text-center">
        <q-route-tab to="/" label="The Game" />
        <q-route-tab to="/aboutTheGame" label="About Battleship" />
        <q-route-tab to="/index" label="Test Page" />
        <q-route-tab to="/page4" label="Error Page" />
        <q-route-tab to="/login" label="Login" />
      </q-tabs>
    </q-header>

    <!-- drawer content -->
    <q-drawer class="bg-primary text-white"
              ref=“leftDrawer”
              v-model="leftDrawerOpen"
              side="left"
              bordered
              :width="200"
              :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"></q-icon>
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"></q-icon>
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send"></q-icon>
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts"></q-icon>
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="images/seaBackground2.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Player 1</div>
          <div>@Name</div>
        </div>
      </q-img>


    </q-drawer>
    <!-- END -->

    <q-drawer class="bg-primary text-white"
              ref=“rightDrawer”
              v-model="rightDrawerOpen"
              side="right"
              bordered
              :width="200"
              :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox"></q-icon>
            </q-item-section>
            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"></q-icon>
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send"></q-icon>
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts"></q-icon>
            </q-item-section>



            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="images/seaBackground2.jpg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Player 2</div>
          <div>@ Player 2 Name</div>
        </div>
      </q-img>
      <!-- drawer content -->
    </q-drawer>
    <!-- q drawer right END -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{info}}

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Battleground from "components/Battleground";

export default {
  name: "MainLayout",
  components: {
    //Battleground: Battleground,
    //BattlefieldRightSide: BattlefieldRightSide
  },
  data() {
    return {
      info: Battleground.probs

    };
  },
  setup () {
    const leftDrawerOpen = ref(true)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="Scss">

</style>
