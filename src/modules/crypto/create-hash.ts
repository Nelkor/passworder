const encoder = new TextEncoder()

export const createHash = async (text: string) => {
  const bytes = encoder.encode(text)

  const buffer = await crypto.subtle.digest('sha-256', bytes)

  return Array.from(new Uint16Array(buffer))
}
