let spotifyApi;

(function(){
    const token = "BQBj-UX71ONZKOYhdTlNzFQljmn_v6Iv46qnK1lR_xzKASRueMSuUrZ7mqtL3NzCrl0prjAmUmF7Z3k1Aa_aCAanjemOnWNKf2Zb_q2ehTwgGkd5Xxy9H81_DZY5YFXiO9MGTxuPK_goz4g";
    const headers = { Authorization: 'Bearer ' + token }

    function call (url,token,handleSuccess,handleError){// generic function with arguments that we invoke inside each method
        fetch(url,{headers})
        .then(res => {
            if (res.status === 200)
                return res.json()
            
            throw new Error('connection error')
        })
        .then(handleSuccess)
        .catch(handleError)
    }

// Here we define the object with 4 methods, one for each ajax call
    spotifyApi = {
        
        searchArtists: function(query,handleArtists,handleError){
            call(
                "https://api.spotify.com/v1/search?q="+query+"&type=artist",
                this.token,
                data => handleArtists(data.artists.items),
                handleError
            );
        },

        getAlbumsByArtistId: function(idArtist,handleAlbums,handleError){
            call(
                "https://api.spotify.com/v1/artists/"+idArtist+"/albums",
                this.token,
                data => handleAlbums(data.items),
                handleError
            );
        },

        getTracksByAlbumId: function(idAlbum,handleTracks,handleError){
            call(
                "https://api.spotify.com/v1/albums/"+idAlbum+"/tracks",
                this.token,
                data => handleTracks(data.items),
                handleError
            );
        },

        getTrackById: function(idTrack,handleTrack,handleError){
            call(
                "https://api.spotify.com/v1/tracks/"+idTrack,
                this.token,
                handleTrack,
                handleError
            );
        }
    }
})()