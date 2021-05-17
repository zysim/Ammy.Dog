import { Component } from '../../interfaces'

export interface IDisplay extends Component<{}> {
  time: number
  timeDisplay: HTMLSpanElement | null
}

const Display: IDisplay = {
  init(parent) {
    const r = Object.create(this)
    const container = parent.appendChild(document.createElement('div'))
    container.setAttribute('class', 'container')
    r.timeDisplay = container.appendChild(document.createElement('span'))
    return r
  },

  set time(t: number) {
    if (!this.timeDisplay) {
      console.log('uh', { t })
      throw Error
    }

    const thresh = t * 1.1
    const [hrTemp, restTemp] = [~~(thresh / 3600), thresh % 3600]
    const [minTemp, secTemp] = [~~(restTemp / 60), restTemp % 60]

    this.timeDisplay.textContent = `${hrTemp}H ${minTemp} M ${secTemp.toFixed(
      1,
    )} S`
  },

  timeDisplay: null,
}

export default Display
