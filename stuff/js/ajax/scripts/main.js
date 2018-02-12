// search beers 'mahou'

if (false)
ajax('https://quiet-inlet-67115.herokuapp.com/api/search/all?q=mahou', undefined, function (err, res) {
    if (err)
        console.error(err);
    else
        console.log(res);
});

// spotify from artist to track

// SEE https://developer.spotify.com/web-api/console/get-search-item/
var token = 'BQA0IbqTIM6Wi9uGpbHJ5XseA139I8bv1VottB2hiYGBEj0cIoBLA6UiFJ8uflJI_JuHAeFw68EqL2TQoOShHWSIHKp-YGbDllqjIYl2FL80Xu80NaDi6QDCZUBpPi-1JbjbYQwmLIUKAQQ'
var config = {
    headers: {
        Authorization: 'Bearer ' + token
    }
};

if(!false)
ajax('https://api.spotify.com/v1/search?q=madonna&type=artist', config, function (err, res) {
    if (err)
        console.error(err);
    else {
        var data = JSON.parse(res);

        console.log(progress(25), 'SEARCH artists', data);

        ajax('https://api.spotify.com/v1/artists/' + data.artists.items[0].id + '/albums', config, function (err, res) {
            if (err)
                console.error(err);
            else {
                var data = JSON.parse(res);

                console.log(progress(50), 'RETRIEVE albums', data);

                ajax('https://api.spotify.com/v1/albums/' + data.items[0].id + '/tracks', config, function (err, res) {
                    if (err)
                        console.error(err);
                    else {
                        var data = JSON.parse(res);

                        console.log(progress(75), 'RETRIEVE tracks', data);

                        ajax('https://api.spotify.com/v1/tracks/' + data.items[0].id, config, function (err, res) {
                            if (err)
                                console.error(err);
                            else {
                                var data = JSON.parse(res);

                                console.log(progress(100), 'RETRIEVE track', data);
                            }
                        });
                    }
                });
            }
        });
    }
});

function progress(value) {
    return 'PROGRESS ' + value + '%';
}