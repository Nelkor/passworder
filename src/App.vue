<script setup lang="ts">
import { masterPrefix, MasterEnter, PasswordMain } from '@/passwords'
</script>

<template>
  <PasswordMain v-if="masterPrefix" />
  <MasterEnter v-else />
</template>
