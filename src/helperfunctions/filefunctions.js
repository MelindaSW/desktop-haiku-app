// import { createReadStream, statSync, readFile, writeFile } from 'fs'
const fs = require('fs')

exports.readFileSendContentsToMain = filePath => {
   return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
            reject(err)
            throw console.error(err)
         } else {
            resolve(data)
         }
      })
   })
}
