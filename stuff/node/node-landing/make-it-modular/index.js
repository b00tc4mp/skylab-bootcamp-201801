const filteredLs = require('./filtered-ls')
//import filteredLs from './filtered-ls'

const path = process.argv[2]
const ext = process.argv[3]

filteredLs(path, ext, (err, files) => {
    if (err) throw err

    files.forEach(file => console.log(file))
})