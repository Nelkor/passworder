const createLettersRow = (length: number, start: number) =>
  Array.from({ length }, (_, i) => String.fromCharCode(start + i))

const specialSymbols = [
  ...createLettersRow(15, 33),
  ...createLettersRow(7, 58),
  ...createLettersRow(6, 91),
  ...createLettersRow(4, 123),
]

const digits = createLettersRow(10, 48)
const ucLetters = createLettersRow(26, 65)
const lcLetters = createLettersRow(26, 97)

const createGetter =
  (arr: string[]) =>
  (index: number): string =>
    arr[index % arr.length] as string

export const getSymbolAt = createGetter([
  ...specialSymbols,
  ...digits,
  ...ucLetters,
  ...lcLetters,
])

export const getSpecialAt = createGetter(specialSymbols)
export const getDigitAt = createGetter(digits)
export const getUcAt = createGetter(ucLetters)
export const getLcAt = createGetter(lcLetters)
