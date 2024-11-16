<template>
  <v-app-bar app color="darken-4" dark>
    <v-btn icon @click="toggleSidebar">
      <v-icon icon="mdi-menu"></v-icon>
    </v-btn>
    <v-toolbar-title class="text-h5 font-weight-bold">BudgetPro</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon icon="mdi-account-circle"></v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  showSidebar: Boolean
})

const emit = defineEmits(['showSidebarHandler']);

const toggleSidebar = () => {
    emit("showSidebarHandler", !props.showSidebar );
}
</script>

<style scoped></style>
