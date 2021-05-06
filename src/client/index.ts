import registerServiceWorker from './registerServiceWorker.js'

enum CatEntry {
  NG_Any = '',
  NG_Any1 = 'xk901ggk',
}

const createComponent = () => {
  const div = document.createElement('div')
  div.textContent = 'test'
  return div
}

const getRunsForCat = async (cat: CatEntry) =>
  fetch(
    `https://www.speedrun.com/api/v1/leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`,
    {
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
      },
    },
  )

const main = async () => {
  const res = await getRunsForCat(CatEntry.NG_Any1)

  document.querySelector('#loader-container')?.remove()

  document.querySelector('#root')?.append(createComponent())

  console.log(await res.json())
}

registerServiceWorker()
main()
