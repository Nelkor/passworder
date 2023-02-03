<script setup lang="ts">
import { masterPrefix } from '@/passwords'

import {
  exit,
  loadConfig,
  saveConfig,
  deleteConfig,
  copyConfig,
} from '../hooks/config.hook'
import {
  servicesNames,
  newServiceName,
  configString,
  addService,
  applyConfig,
} from '../hooks/passwords.hook'
import ServiceItem from './ServiceItem.vue'

loadConfig()
</script>

<template>
  <header>
    <div>{{ masterPrefix }}</div>
    <button @click="exit">Exit</button>

    <form class="apply-config" @submit.prevent="applyConfig">
      <input type="text" v-model="configString" />
      <input type="submit" value="Apply config" :disabled="!configString" />
    </form>

    <button @click="copyConfig">Copy Config</button>
    <button @click="saveConfig">Save Config</button>
    <button @click="deleteConfig">Delete Config</button>
  </header>

  <main>
    <form class="new-service" @submit.prevent="addService">
      <input type="text" v-model="newServiceName" />
      <input type="submit" value="Add service" :disabled="!newServiceName" />
    </form>

    <ul>
      <ServiceItem v-for="name in servicesNames" :key="name" :name="name" />
    </ul>
  </main>
</template>
