export interface IDisplay {
  timeDisplay: HTMLDivElement
  time: number
  message: string
  hide: () => void
  show: () => void
}

interface ITime {
  hours: number
  minutes: number
  seconds: number
}

const THRESHOLD = 1.1

const calculateThresholdTime = (wrTimeInSeconds: number) =>
  wrTimeInSeconds * THRESHOLD

const parseThresholdTime = (s: number): ITime => {
  const [hours, minsSecs] = [~~(s / 3600), s % 3600]
  const [minutes, seconds] = [~~(minsSecs / 60), Math.ceil(minsSecs % 60)]
  return {
    hours,
    minutes,
    seconds,
  }
}

const displayThresholdTime = (timeDisplay: HTMLDivElement, time: number) => {
  const { hours, minutes, seconds } = parseThresholdTime(time)
  timeDisplay.textContent = `${hours}H ${minutes}M ${seconds}S`
}

export default (parent: HTMLElement): IDisplay => {
  const timeDisplay = parent.appendChild(document.createElement('div'))
  timeDisplay.id = 'display'
  timeDisplay.classList.add('hide')

  return {
    timeDisplay,
    set time(time: number) {
      if (!this.timeDisplay) {
        throw Error
      }
      displayThresholdTime(this.timeDisplay, calculateThresholdTime(time))
    },

    set message(message: string) {
      if (!this.timeDisplay) {
        throw Error
      }
      this.timeDisplay.textContent = message
    },

    hide() {
      this.timeDisplay.classList.add('hide')
    },

    show() {
      this.timeDisplay.classList.remove('hide')
    },
  }
}
