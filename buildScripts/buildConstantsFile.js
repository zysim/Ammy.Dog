const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const buildDefaultCatNameKey = () => `DEFAULT_CAT_NAME_KEY: 'defaultCatName'`

const buildAssets = () => {
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

const wrapObject = builtProps => `export default {${builtProps}}`

const output = wrapObject([buildDefaultCatNameKey(), buildAssets()].join(','))

fs.writeFile(path.join(__dirname, '../src/constants.ts'), output, postWriteFile)

const postWriteFile = err => {
  if (err !== null) {
    console.error(err)
    return
  }

  exec('npx prettier -w ../src/constants.ts', (error, _, stderr) => {
    error && console.error(error)
    stderr && console.error(stderr)
  })
}
