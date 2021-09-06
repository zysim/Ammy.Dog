export const $ = document.querySelector.bind(document)

export const c = document.createElement.bind(document)

export const e = (name: string, detail?: Object) =>
  new CustomEvent(name, {
    bubbles: true,
    composed: true,
    detail,
  })
