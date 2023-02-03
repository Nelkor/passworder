import { ref, computed } from 'vue'

import type { ServicesRecord } from '../types'

export const servicesRecord = ref<ServicesRecord>({})
export const newServiceName = ref('')
export const configString = ref('')
export const servicesNames = computed(() => Object.keys(servicesRecord.value))

export const applyConfig = () => {
  if (!configString.value) {
    return
  }

  // Need validation
  servicesRecord.value = JSON.parse(configString.value)
  configString.value = ''
}

export const getLoginsOfService = (name: string) =>
  Object.keys(servicesRecord.value[name] || {})

export const getLoginVersion = (serviceName: string, login: string) =>
  servicesRecord.value[serviceName]?.[login] || 1

export const addService = () => {
  const name = newServiceName.value

  if (!name || servicesRecord.value[name]) {
    return
  }

  servicesRecord.value[name] = {}
  newServiceName.value = ''
}

export const deleteService = (name: string) => {
  delete servicesRecord.value[name]
}

export const deleteLogin = (serviceName: string, login: string) => {
  if (!servicesRecord.value[serviceName]) {
    return
  }

  delete servicesRecord.value[serviceName][login]
}

export const setLoginVersion = (
  serviceName: string,
  login: string,
  version: number
) => {
  if (!login || !servicesRecord.value[serviceName]) {
    return
  }

  servicesRecord.value[serviceName][login] = version
}

export const addLogin = (serviceName: string, login: string) =>
  setLoginVersion(serviceName, login, 1)
