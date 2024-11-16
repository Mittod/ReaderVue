<script lang="ts" setup>
import HeaderComponent from './components/HeaderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

import { ref } from 'vue'

const showSidebar = ref(true)
const handleStateUpdate = (newState: boolean) => {
  showSidebar.value = newState;
  console.log(showSidebar);
}
</script>

<template>
  <v-app>
    <HeaderComponent :showSidebar="showSidebar" @showSidebarHandler="handleStateUpdate" />
    <SidebarComponent v-if="showSidebar" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="css" scoped>
</style>
