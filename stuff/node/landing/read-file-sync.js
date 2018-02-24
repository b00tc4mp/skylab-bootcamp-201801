const fs = require('fs')
//import fs from 'fs'

const path = process.argv[2]

// 1

// const buffer = fs.readFileSync(path)

// console.log(buffer.toString())

// 2

// const text = fs.readFileSync(path, { encoding: 'utf-8' })

// console.log(text)

// 3

const text = fs.readFileSync(path, 'utf-8')

console.log('hello world')

console.log(text)