// SEE https://developer.spotify.com/web-api/console/get-search-item/
const url = 'https://api.spotify.com/v1/search?q=madonna&type=artist'
const token = 'BQA0IbqTIM6Wi9uGpbHJ5XseA139I8bv1VottB2hiYGBEj0cIoBLA6UiFJ8uflJI_JuHAeFw68EqL2TQoOShHWSIHKp-YGbDllqjIYl2FL80Xu80NaDi6QDCZUBpPi-1JbjbYQwmLIUKAQQ'
const headers = { Authorization: 'Bearer ' + token }

// jquery ajax

$.ajax({
    url,
    headers
})
    .then(res => console.log(res))
    .catch(err => console.error(err))

// fetch


// fetch(url, { headers })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error('Error:', err))

fetch(url, { headers })
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error('Error:', err))

// fetch chain

fetch('https://api.spotify.com/v1/search?q=madonna&type=artist', { headers })
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(progress(25), 'SEARCH artists', data)

        return fetch(`https://api.spotify.com/v1/artists/${data.artists.items[0].id}/albums`, { headers })
    })
    .then(res => res.json())
    // .catch(err => console.error('Error:', err)) // WARN!!!
    .then(data => {
        console.log(progress(50), 'RETRIEVE albums', data)

        return fetch(`https://api.spotify.com/v1/albums/${data.items[0].id}/tracks`, { headers })
    })
    .then(res => res.json())
    // .catch(err => console.error('Error:', err)) // WARN!!!
    .then(data => {
        console.log(progress(75), 'RETRIEVE tracks', data)

        return fetch(`https://api.spotify.com/v1/tracks/${data.items[0].id}`, { headers })
    })
    .then(res => res.json())
    .then(data => {
        console.log(progress(100), 'RETRIEVE track', data)
    })
    .catch(err => console.error('Error:', err))

function progress(value) {
    return `PROGRESS ${value}%`
}