function success (data) {
    const res = {status: 'OK'}

    if(data) res.data = data

    return res
}

function fail (err) {

    const res = {status: 'KO'}

    if(err) res.err = err

    return res
}

module.exports = { success, fail }