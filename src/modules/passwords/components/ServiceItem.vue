<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  deleteService,
  addLogin,
  getLoginsOfService,
} from '../hooks/passwords.hook'
import PasswordItem from './PasswordItem.vue'

const props = defineProps<{ name: string }>()
const deleteThisService = () => deleteService(props.name)
const newLoginName = ref('')
const logins = computed(() => getLoginsOfService(props.name))

const createLogin = () => {
  addLogin(props.name, newLoginName.value)

  newLoginName.value = ''
}
</script>

<template>
  <li>
    <div>{{ name }}</div>
    <button @click="deleteThisService">Delete this service</button>

    <form class="new-login" @submit.prevent="createLogin">
      <input type="text" v-model="newLoginName" />
      <input type="submit" value="Add login" :disabled="!newLoginName" />
    </form>

    <ul>
      <PasswordItem
        v-for="login in logins"
        :key="login"
        :service-name="name"
        :name="login"
      />
    </ul>
  </li>
</template>
