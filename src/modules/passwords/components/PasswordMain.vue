<script setup lang="ts">
import { masterPrefix } from '@/passwords'

import { exit } from '../hooks/master'
import { usePassword } from '../hooks/password'

const { domain, login, version, passwordIsBeingGenerated, copyPassword } =
  usePassword()
</script>

<template>
  <header>
    <div>{{ masterPrefix }}</div>
    <button @click="exit">Exit</button>
  </header>

  <main>
    <input v-model="domain" type="text" placeholder="domain" />
    <input v-model="login" type="text" placeholder="login" />
    <input v-model="version" type="number" placeholder="version" />

    <button @click="copyPassword" :disabled="passwordIsBeingGenerated">
      Copy password
    </button>
  </main>
</template>
