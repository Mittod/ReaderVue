<script lang="ts" setup>
import HeaderComponent from './components/HeaderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

import { ref, onMounted, onBeforeMount } from 'vue'

const showSidebar = ref(true)
const handleStateUpdate = (newState: boolean) => {
  showSidebar.value = newState;
}

onBeforeMount(() => {
  console.log('App start mounting')
})

onMounted(() => {
  console.log('App mounted')
})
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

<style lang="css" scoped></style>
