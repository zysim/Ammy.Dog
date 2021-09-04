export const createCustomEvent = (name: string, detail?: Object) =>
  new CustomEvent(name, {
    bubbles: true,
    composed: true,
    detail,
  })
