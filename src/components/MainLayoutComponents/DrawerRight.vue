<template>
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
</template>

<script>
export default {
  name: "DrawerRight.vue"
}
</script>

<style scoped>

</style>
