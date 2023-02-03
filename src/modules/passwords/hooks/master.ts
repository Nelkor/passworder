import { ref } from 'vue'

import { createHash, createPrefix } from '@/crypto'

export const masterHash = ref('')
export const masterPrefix = ref('')

export const exit = () => {
  masterHash.value = ''
  masterPrefix.value = ''
}

export const useMasterEnter = () => {
  const masterPassword = ref('')
  const hashIsBeingCalculated = ref(false)

  const onSubmit = async () => {
    hashIsBeingCalculated.value = true

    const hash = await createHash(masterPassword.value)

    // На всякий случай стираем masterPassword из памяти
    masterPassword.value = ''
    masterHash.value = String(hash)
    masterPrefix.value = createPrefix(hash)
  }

  return {
    masterPassword,
    hashIsBeingCalculated,
    onSubmit,
  }
}
