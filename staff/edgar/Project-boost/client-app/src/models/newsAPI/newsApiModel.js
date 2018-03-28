/** */
/*
/*  Constructor MODEL FOR NewsApi
/*
/**** */

const Promise = require('bluebird'),
    request = require('request'),
    qs = require('querystring'),
    host = 'https://newsapi.org'

let API_KEY

class NewsAPI {

    constructor(apiKey) {

        if (!apiKey) throw new Error('No API key specified')

        API_KEY = apiKey

        this.v2 = {

            topHeadlines(...args) {

                const { params, options, cb } = splitArgs(args)

                const url = createUrl('/v2/top-headlines', params)

                return makeRequest(url, options, API_KEY, cb)
            },

            everything(...args) {

                const { params, options, cb } = splitArgs(args)

                const url = createUrl('/v2/everything', params)

                return makeRequest(url, options, API_KEY, cb)
            },

            sources(...args) {

                const { params, options, cb } = splitArgs(args),

                    url = createUrl('/v2/sources', params)

                return makeRequest(url, options, API_KEY, cb)
            }

        }
    }
}

class NewsAPIError extends Error {

    constructor(err) {

        super()

        this.name = `NewsAPIError: ${err.code}`

        this.message = err.message
    }
}

/**
 * Takes a variable-length array that represents arguments to a function and attempts to split it into
 * an 'options' object and a 'cb' callback function.
 * @param {Array}   args The arguments to the function
 * @return {Object}
 */

const splitArgs = (args) => {

    let params, options, cb

    if (args.length > 1) {

        const possibleCb = args[args.length - 1]

        if ('function' === typeof possibleCb) {

            cb = possibleCb

            options = args.length === 3 ? args[1] : undefined

        } else {

            options = args[1]

        }

        params = args[0]

    } else if ('object' === typeof args[0]) {

        params = args[0]

    } else if ('function' === typeof args[0]) {

        cb = args[0]

    }

    return { params, options, cb }
}

/**
 * Creates a url string from an endpoint and an options object by appending the endpoint
 * to the global "host" const and appending the options as querystring parameters.
 * @param {String} endpoint 
 * @param {Object} [options]
 * @return {String}
 */

const createUrl = (endpoint, options) => {

    const query = qs.stringify(options),
        baseURL = `${host}${endpoint}`

    return query ? `${baseURL}?${query}` : baseURL
}

/**
 * Takes a URL string and returns a Promise containing
 * a buffer with the data from the web.
 * @param  {String} url      A URL String
 * @param  {String} apiKey   (Optional) A key to be used for authentication
 * @return {Promise<Buffer>} A Promise containing a Buffer
 */
const makeRequest = (url, options, apiKey, cb) => {

    let useCallback = 'function' === typeof cb

    return new Promise((resolve, reject) => {

        const req = { url, headers: {} }

        if (apiKey) {

            req.headers['X-Api-Key'] = apiKey

        }

        if (options && options.noCache === true) {

            req.headers['X-No-Cache'] = 'true'

        }

        request.get(req, (err, res, body) => {

            if (err) {

                if (useCallback) return cb(err)

                return reject(err)

            }

            try {

                const data = JSON.parse(body)

                if (data.status === 'error') { throw new NewsAPIError(data) }

                // 'showHeaders' option can be used for clients to debug response headers
                // response will be in form of { headers, body }

                if (options && options.showHeaders) {

                    if (useCallback) return cb(null, { headers: res.headers, body: data })

                    return resolve({ headers: res.headers, body: data })
                }

                if (useCallback) return cb(null, data)

                return resolve(data)

            } catch (e) {

                if (useCallback) return cb(e)

                return reject(e)
            }
        })
    })
}

module.exports = NewsAPI;