import {
  getUcAt,
  getLcAt,
  getDigitAt,
  getSpecialAt,
  getSymbolAt,
} from './letters'

export const createPrefix = (indexes: number[]) =>
  [
    getUcAt(indexes[0]),
    getLcAt(indexes[1]),
    getDigitAt(indexes[2]),
    getSpecialAt(indexes[3]),
  ].join('')

export const formatIndexes = (indexes: number[]) =>
  indexes.map(getSymbolAt).join('')
