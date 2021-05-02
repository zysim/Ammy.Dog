enum CatEntry {
  NG_Any = '',
  NG_Any1 = 'xk901ggk',
}

const getRunsForCat = async (cat: CatEntry) =>
  fetch(
    `https://speedrun.com/api/v1/leaderboards/w6j7546j/category/${cat}?var-68k4dyzl=4qy3r57l&top=1`,
    {
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'https://speedrun.com',
      },
    },
  )

console.log(getRunsForCat(CatEntry.NG_Any1))
