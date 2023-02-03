import { ref } from 'vue'

import { createHash, createPrefix, formatIndexes } from '@/crypto'

import { masterHash } from '../hooks/master'

export const usePassword = () => {
  const domain = ref('')
  const login = ref('')
  const version = ref(1)
  const passwordIsBeingGenerated = ref(false)

  const copyPassword = async () => {
    passwordIsBeingGenerated.value = true

    const hash = await createHash(
      [masterHash.value, domain.value, login.value, version.value].join('')
    )

    await navigator.clipboard.writeText(
      createPrefix(hash) + formatIndexes(hash)
    )

    passwordIsBeingGenerated.value = false
  }

  return {
    domain,
    login,
    version,
    passwordIsBeingGenerated,
    copyPassword,
  }
}
