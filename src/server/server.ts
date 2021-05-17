import express, { Request, Response } from 'express'
import fs from 'fs'
import https from 'https'
import path from 'path'

const port = 8443
const credentials = {
  cert: fs.readFileSync(path.join(__dirname, '../cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '../key.pem')),
}
const app = express()

// This is triggered for all paths
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

https.createServer(credentials, app).listen(port, () => {
  console.log('Listening at :' + port)
})
