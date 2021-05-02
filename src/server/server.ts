import express from 'express'
import fs from 'fs'
import https from 'https'
import path from 'path'

const port = 8443
const credentials = {
  cert: fs.readFileSync(path.join(__dirname, '../cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '../key.pem')),
}
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err: Error) => {
    console.error(err)
  })
})

https.createServer(credentials, app).listen(port)
