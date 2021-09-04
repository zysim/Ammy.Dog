import constants from "../constants"

export type Cats = { [name: string]: string }

const DEFAULT_CAT_NAME = localStorage.getItem(constants.DEFAULT_CAT_NAME_KEY) || 'NG+ Any%'

export const getCats = (): Cats | null => {
  const cats = localStorage.getItem('cats')
  if (cats !== null) {
    return JSON.parse(cats)
  }
  return null
}

export const getCat = (cat: string): string | null => getCats()?.[cat] || null

export const getDefaultCat = (): string => getCat(DEFAULT_CAT_NAME) as string
