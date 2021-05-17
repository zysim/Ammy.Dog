import { Component } from '../../interfaces'

export interface IDisplay extends Component<{}> {
  timeDisplay: HTMLDivElement | null
  time: number
  message: string
}

const Display: IDisplay = {
  init(parent) {
    const r: IDisplay = Object.create(this)
    r.timeDisplay = parent.appendChild(document.createElement('div'))
    r.timeDisplay.setAttribute('class', 'display')
    return r
  },

  set time(time: number) {
    if (!this.timeDisplay) {
      throw Error
    }

    const thresh = time * 1.1
    const [hrTemp, restTemp] = [~~(thresh / 3600), thresh % 3600]
    const [minTemp, secTemp] = [~~(restTemp / 60), Math.ceil(restTemp % 60)]

    this.timeDisplay.setAttribute('class', 'display')
    this.timeDisplay.textContent = `${hrTemp}H ${minTemp} M ${secTemp.toFixed(
      1,
    )} S`
  },

  set message(message: string) {
    if (!this.timeDisplay) {
      throw Error
    }
    this.timeDisplay.setAttribute('class', 'material-icons')
    this.timeDisplay.textContent = message
  },

  timeDisplay: null,
}

export default Display
