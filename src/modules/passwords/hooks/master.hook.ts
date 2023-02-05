import { ref } from 'vue'

import { createHash, createPrefix } from '@/crypto'

export const masterHash = ref('')
export const masterPrefix = ref('')

export const useMasterEnter = () => {
  const masterPassword = ref('')
  const hashIsBeingCalculated = ref(false)

  const onSubmit = async () => {
    if (!masterPassword.value || hashIsBeingCalculated.value) {
      return
    }

    hashIsBeingCalculated.value = true

    const hash = await createHash(masterPassword.value)

    // На всякий случай стираем masterPassword из памяти
    masterPassword.value = ''
    masterHash.value = hash.join('.')
    masterPrefix.value = createPrefix(hash)
  }

  return {
    masterPassword,
    hashIsBeingCalculated,
    onSubmit,
  }
}
