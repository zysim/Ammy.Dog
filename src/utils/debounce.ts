export default <F extends (...a: any[]) => any>(
  fn: F,
  delay = 1000,
  ...args: Parameters<F>
) => {
  let busy = false
  return () => {
    if (!busy) {
      busy = true
      fn(...args)
      setTimeout(() => {
        busy = false
      }, delay)
      return
    }
  }
}
