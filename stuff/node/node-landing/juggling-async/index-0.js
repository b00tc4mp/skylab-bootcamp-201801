const logContentsFromUrlsInOrder = require('./logContentsFromUrlsInOrder-array')

const urls = [
    'http://google.co.uk',
    'http://google.es',
    'http://google.it',
    'http://google.fr',
    'http://google.ca'
]

logContentsFromUrlsInOrder(urls)

setTimeout(() => console.log(urls), 3000)