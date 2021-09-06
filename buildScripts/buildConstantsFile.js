const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const buildDefaultCatNameKey = () => `DEFAULT_CAT_NAME_KEY: 'defaultCatName'`

const buildDefaultCatName = () => `DEFAULT_CAT_NAME: 'NG+ Any%'`

const buildAssetPaths = () => {
  try {
    const backgroundImages = fs.readdirSync(
      path.join(__dirname, '../assets/background-images'),
    )
    const loadingGifs = fs.readdirSync(
      path.join(__dirname, '../assets/loading-gifs'),
    )

    return `BACKGROUND_IMAGES: [${backgroundImages
      .map(i => `'assets/background-images/${i}'`)
      .join(',')}],LOADING_GIFS: [${loadingGifs
      .map(i => `'assets/loading-gifs/${i}'`)
      .join(',')}]`
  } catch (e) {
    console.error(e)
  }
}

const buildFallbackCatObject = () => `
FALLBACK: {
  'NG Any%': 'zdnwp4xd',
  'NG+ Any%': 'xk901ggk',
  'NG All Brushes': 'q25owqgk',
  'NG+ All Brushes': 'z27gy6o2',
  'Top Dog': 'mkeozqxd',
  'All Major Bosses': '9d831962',
}`

const wrapObject = builtProps => `export default {${builtProps}}`

const output = wrapObject(
  [
    buildDefaultCatNameKey(),
    buildDefaultCatName(),
    buildAssetPaths(),
    buildFallbackCatObject(),
  ].join(','),
)

const postWriteFile = err => {
  if (err !== null) {
    console.error(err)
    return
  }

  exec(
    `npx prettier -w ${path.join(__dirname, '../src/constants.ts')}`,
    (error, _, stderr) => {
      error && console.error(error)
      stderr && console.error(stderr)
    },
  )
}

fs.writeFile(path.join(__dirname, '../src/constants.ts'), output, postWriteFile)
