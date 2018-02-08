(() => {
    const $artists = $("#artists")
    const $albums = $("#albums")
    const $tracks = $("#tracks")
    const $track = $("#track")

    $artists.hide()
    $albums.hide()
    $tracks.hide()
    $track.hide()

    /////////////////////////////////////////////////////////////SEARCH FOR AN ARTIST///////////////////////////////////////////////////////


    $("#boton").on("click", function (e) {
        e.preventDefault()

        $albums.hide()
        $tracks.hide()
        $track.hide()

        const query = $("#text").val()

        spotifyApi.searchArtists(query, listArtists, handleError)// here we call the method searchArtistApi from the object spotify
    })


    function listArtists(artists) {
        let list = "<option selected disabled>Choose artist...</option>"

        artists.forEach(artist => {
            list += "<option id=" + artist.id + " class='option'>" + artist.name + "</option>"
        })

        $artists.show()

        $("#artists #selectartist").html(list)
    }


    /////////////////////////////////////////////////////////////SELECT ARTIST///////////////////////////////////////////////////////


    $("#selectartist").change(function () {
        $tracks.hide()
        $track.hide()

        const idArtist = $(this).children(":selected").attr("id")

        spotifyApi.getAlbumsByArtistId(idArtist, listAlbums, handleError)// here we call the method selectArtistApi from the object spotify
    })

    function listAlbums(albums) {
        let list = "<option selected disabled>Choose an album...</option>"

        albums.forEach(album => {
            list += "<option id=" + album.id + " class='option'>" + album.name + "</option>"
        })
        $albums.show()
        $("#albums #selectalbum").html(list)
    }


    /////////////////////////////////////////////////////////////SELECT ALBUM//////////////////////////////////////////////////


    $("#selectalbum").change(function () {
        const idAlbum = $(this).children(":selected").attr("id")
        //alert(idAlbum)

        spotifyApi.getTracksByAlbumId(idAlbum, listTracks, handleError)//here we call the method selectAlbumtApi from the object spotify
    })

    function listTracks(tracks) {
        let list = "<option selected disabled>Choose a track...</option>"

        tracks.forEach(track => {
            list += "<option id=" + track.id + " class='option'>" + track.name + "</option>"
        })

        $tracks.show()
        $("#tracks #selecttrack").html(list)
    }


    /////////////////////////////////////////////////////////////SELECT TRACK//////////////////////////////////////////////////


    $("#selecttrack").change(function () {
        const idTrack = $(this).children(":selected").attr("id")
        // alert(idTrack)

        spotifyApi.getTrackById(idTrack, showTrack, handleError)//here we call the method selectTrackApi from the object spotify

    })

    function showTrack(track) {
        let list = "<iframe src='https://open.spotify.com/embed?uri=spotify:track:" + track.id + "' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>"

        $("#trackplay").html(list)
        $track.show()
    }

    function handleError(err) {
        alert(err.message)
    }
})()

//list+="<iframe src='https://open.spotifyApi.com/embed?uri=spotify:track:"+idTrack+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>"
//<audio controls><source src='"+soundTrack+"' type='audio/mpeg'/>sjygjuggsaj</audio>
//fito artist id: 1tZ99AnqyjgrmPwLfGU5eo
//fito album id: 4zSihveMwgYWHA5Bkw29Ug
//fito track id:5sYrBCml4is9A4hOwOEx3d   