import * as fs from 'node:fs'

const data = "We will rock you!"

fs.writeFile("file.txt", data, {encoding: 'utf8'}, function(error) {
    if (error) {
        console.log(error)
    }
})