const okMsg = function okMsg (message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

const errMsg = function errMsg (message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

module.exports = {okMsg, errMsg}