export interface IDisplay {
  timeDisplay: HTMLDivElement | null
  time: number
  message: string
}

export default (parent: HTMLElement): IDisplay => {
  const timeDisplay = parent.appendChild(document.createElement('div'))
  timeDisplay.id = 'display'
  timeDisplay.textContent = '-'

  return {
    timeDisplay,
    set time(time: number) {
      if (!this.timeDisplay) {
        throw Error
      }

      const thresh = time * 1.1
      const [hrTemp, restTemp] = [~~(thresh / 3600), thresh % 3600]
      const [minTemp, secTemp] = [~~(restTemp / 60), Math.ceil(restTemp % 60)]

      this.timeDisplay.textContent = `${hrTemp}H ${minTemp} M ${secTemp.toFixed(
        1,
      )} S`
    },

    set message(message: string) {
      if (!this.timeDisplay) {
        throw Error
      }
      this.timeDisplay.textContent = message
    },
  }
}
