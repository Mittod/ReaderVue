<template>
  <v-navigation-drawer app dark color="darken-4" clipped class="sidebar">
    <v-list density="compact">
      <v-list-item @click="goToDashboard">
        <v-list-item-icon>
          <v-icon icon="mdi-view-dashboard"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>

      <v-list-item @click="goToTransactions">
        <v-list-item-icon>
          <v-icon icon="mdi-cash-multiple"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Transactions</v-list-item-title>
      </v-list-item>

      <v-list-item @click="goToReports" class="flex">
        <v-list-item-icon>
          <v-icon icon="mdi-chart-line"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Reports</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="goToSettings" class="flex">
        <v-list-item-icon>
          <v-icon icon="mdi-cog"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push('/')
}

const goToTransactions = () => {
  router.push('/transactions')
}

const goToReports = () => {
  router.push('/reports')
}

const goToSettings = () => {
  router.push('/settings')
}
</script>

<style>
.sidebar v-list-item-icon{
  display: flex;
  margin-right: 16px;
}
.sidebar .v-list-item__content {
  display: flex;
  align-items: middle;
}
</style>
