#!/usr/bin/env node

import handler from 'serve-handler'
import http from 'http'
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))


var port = process.env.PORT || 7789
var pub = path.join(__dirname, '..')

console.log('public directory:', pub)

const options = {
  port: port,
  public: pub
}

const server = http.createServer((request, response) => {
  return handler(request, response,
    options
  )
})

server.listen(port, () => {
  console.log('Running mih at http://localhost:' + port)
})
