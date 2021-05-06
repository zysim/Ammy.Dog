import { compose } from './fp.js'

interface Obj {
  id?: string
  classList?: string
  textContent?: string
  eventListener?: [string, EventListenerOrEventListenerObject]
}

const splitEmmet = (emmet: string) =>
  emmet.split('').reduce((acc: string[], l: string) => {
    if (!acc.length) {
      return acc.concat([l])
    }
    if (/\W/.test(l) || (/\W/.test(acc[acc.length - 1]) && !/\W/.test(l))) {
      return acc.concat([l])
    }
    acc[acc.length - 1] = acc[acc.length - 1].concat(l)
    return acc
  }, [])

type MineElement = {
  children: HTMLElement[]
  classList: string[]
  id: string
  tag: keyof HTMLElementTagNameMap
  textContent: string
}

enum Flags {
  Class,
  Id,
  ChildrenStart,
  ChildrenEnd,
  Count,
  Sibling,
  TextStart,
  TextEnd,
}

const createDefaultElement = (): MineElement => ({
  children: [],
  classList: [],
  id: '',
  tag: 'div',
  textContent: '',
})

/**
 * @param tokens string[]
 * @return MineElement[]
 */
export const buildElements = (tokens: string[]) => {
  // switch (token) {
  //   case '*':
  //     acc.flag = Flags.Count
  //     return acc
  //   case '+':
  //     acc.flag = Flags.Sibling
  //     return acc
  // }
  const markers = []
  tokens.forEach((token, index) => {})
}

export const buildElement = (tokens: string[]) => {
  const r = tokens.reduce(
    (acc, token, i) => {
      switch (token) {
        case '.':
          acc.flag = Flags.Class
          return acc
        case '#':
          acc.flag = Flags.Id
          return acc
        case '(':
          acc.flag = Flags.ChildrenStart
          return acc
        case ')':
          acc.flag = Flags.ChildrenEnd
          return acc
        case '{':
          acc.flag = Flags.TextStart
          return acc
        case '}':
          acc.flag = Flags.TextEnd
          return acc

        default:
          switch (acc.flag) {
            case Flags.Class:
              acc.element.classList.push(token)
              acc.flag = null
              break
            case Flags.Id:
              acc.element.id = token
              acc.flag = null
              break
            case Flags.ChildrenStart:
            case Flags.ChildrenEnd:
              // TODO: Implement
              break
            case Flags.TextStart:
              acc.element.textContent += token
              break
            case Flags.TextEnd:
              acc.flag = null
              return acc
            default:
              acc.element.tag = token as keyof HTMLElementTagNameMap
              break
          }
          return acc
      }
    },
    { element: createDefaultElement(), flag: null },
  )
  return r.element
}

export const $ = (selector: string) =>
  document.querySelector(selector) as Element

export const createElement = (
  tag: keyof HTMLElementTagNameMap,
  options?: Obj,
) => {
  const el = document.createElement(tag)
  if (options) {
    options.classList && el.classList.add(...options?.classList.split(' '))
    el.textContent = options?.textContent || null
    options.eventListener &&
      el.addEventListener(options?.eventListener[0], options?.eventListener[1])
  }
  return el
}

export default compose(splitEmmet, buildElement)
