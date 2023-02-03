import { masterHash, masterPrefix } from './master.hook'
import { servicesRecord } from './passwords.hook'

const getConfigJson = () => JSON.stringify(servicesRecord.value)

export const copyConfig = () => {
  navigator.clipboard.writeText(getConfigJson()).then()
}

export const exit = () => {
  masterHash.value = ''
  masterPrefix.value = ''
  servicesRecord.value = {}
}

export const saveConfig = () => {
  localStorage.setItem(masterPrefix.value, getConfigJson())
}

export const loadConfig = () => {
  servicesRecord.value = JSON.parse(
    localStorage.getItem(masterPrefix.value) || '{}'
  )
}

export const deleteConfig = () => {
  localStorage.removeItem(masterPrefix.value)
}
