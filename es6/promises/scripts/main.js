promise(function () {
    console.log('START async task...')

    // SEE what happens when uncommenting the following statement, which console.log finally runs?
    // throw Error('hey an error here!') 

    return '...END async task'
})
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log('CONTINUE doing other stuff...')