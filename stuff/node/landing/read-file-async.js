const fs = require('fs')

const path = process.argv[2]

// 1

// fs.readFile(path, 'utf-8', (err, data) => {
//     if (err) throw err

//     console.log(data)
// })

// console.log('hello world')


// 2

// function readFile(path, encoding, callback) {
//     fs.readFile(path, 'utf-8', (err, data) => {
//         if (err) throw new Error('ERR-IO-ASYNC')

//         callback(data)
//     })
// }

// try {
//     readFile(path, 'utf-8', data => console.log(data))
// } catch(err) {
//     console.error(err.message) // $ node read-file-async.js unknown-file
// }

// console.log('hello world')


// 3

function readFile(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) return reject(err)
            // if (err) {
            //     reject(err)

            //     return
            // }
    
            resolve(data)

            //err? reject(err) : resolve(data)
        })
    })
}

readFile(path, 'utf-8')
    .then(console.log)
    .catch(console.error)

console.log('hello world')

