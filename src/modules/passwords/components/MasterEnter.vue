<script setup lang="ts">
import { useMasterEnter } from '../hooks/master'

const { masterPassword, hashIsBeingCalculated, onSubmit } = useMasterEnter()
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <input type="password" v-model="masterPassword" />
    </div>

    <input type="submit" value="Enter" :disabled="hashIsBeingCalculated" />
  </form>
</template>
