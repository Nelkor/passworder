<script setup lang="ts">
import { ref, watch } from 'vue'

import { createHash, createPrefix, formatIndexes } from '@/crypto'

import {
  getLoginVersion,
  setLoginVersion,
  deleteLogin,
} from '../hooks/passwords.hook'
import { masterHash } from '../hooks/master.hook'

const props = defineProps<{
  serviceName: string
  name: string
}>()

const version = ref(getLoginVersion(props.serviceName, props.name))
const passwordIsBeingGenerated = ref(false)

const deleteThisLogin = () => {
  deleteLogin(props.serviceName, props.name)
}

const copyPassword = async () => {
  passwordIsBeingGenerated.value = true

  const hash = await createHash(
    [masterHash.value, props.serviceName, props.name, version.value].join(';')
  )

  await navigator.clipboard.writeText(createPrefix(hash) + formatIndexes(hash))

  passwordIsBeingGenerated.value = false
}

watch(version, value => setLoginVersion(props.serviceName, props.name, value))
</script>

<template>
  <li>
    <div>{{ name }}</div>
    <button @click="deleteThisLogin">Delete this login</button>
    <input type="number" v-model="version" />
    <button @click="copyPassword">Copy password</button>
  </li>
</template>
