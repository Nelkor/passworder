<script setup lang="ts">
import { masterPrefix, MasterEnter, PasswordsMain } from '@/passwords'
</script>

<template>
  <PasswordsMain v-if="masterPrefix" />
  <MasterEnter v-else />
</template>
