import constants from '../constants'

export type Cats = { [name: string]: string }

export const DEFAULT_CAT_NAME =
  localStorage.getItem(constants.DEFAULT_CAT_NAME_KEY) ||
  constants.DEFAULT_CAT_NAME

export const getCats = (): Cats | null => {
  const cats = localStorage.getItem('cats')
  if (cats !== null) {
    return JSON.parse(cats)
  }
  return null
}

export const getCat = (name: string): string | null => getCats()?.[name] || null

export const getDefaultCat = (): string | null => getCat(DEFAULT_CAT_NAME)
