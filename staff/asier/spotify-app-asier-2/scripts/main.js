$(document).ready(function () {
    "use strict"

    $("#listArtists, #listAlbums, #listSongs, #backToArtists, #error").hide()


    const showError = () => {
        $("#error").empty()
        $("#error").append('<div class="d-block bg-light p-5"><h1 class="display-1 text-success text-center" >  No artist matching your search! </h1></div>')

    }

    // ------- submit form and get artists, pass them to the api and show them on html -------//

    $('form').submit(function (e) {
        e.preventDefault();
        const query = $('input').val()

        $('form').trigger('reset')
        $("#listArtists").show()
        $("#listAlbums, #listSongs, #backToArtists, #error").hide()

        spotifyApi.searchArtists(query)
            .then( listOfArtists => {
                listResult(listOfArtists)
            })
            .catch(err => console.error("err -->", err)) 

    });

    const listResult = artists => {

        $("#listArtists").empty()

        // if search doesn't return results, show error message  

        if (artists.length < 1) {
            showError()
            $('#error').show()
        }
        console.log(artists)
        artists.forEach(artist => {

            if (artist.images.length < 1) {
                $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed"  data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="img/noImage.jpg" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>');
            
            } else {

                $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed"  data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="' + artist.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>');
            };

        });

        $("#listArtists").show()


    };

    // ----  on artist's click get the artist's id, pass it to the api and show albums on html---///////    


    $(document).on('click', '#artistListed', function (e) {
        e.preventDefault()
        const artistId = $(this).attr("data-id")

        $("#listArtists").hide()


        spotifyApi.retrieveAlbums(artistId)
            .then(listOfAlbums => {
                listAlbums(listOfAlbums)
            })
            .catch(err => console.error("err -->", err)) 

        // spotifyApi.retrieveAlbums(artistId, listAlbums, showError)
    });


    const listAlbums = albums => {

        $("#listAlbums").empty()

        $(document).on('click', '#backToArtists', function (e) {
            e.preventDefault()

            $("#listAlbums, #error, #backToArtists").hide()
            $("#listArtists").show()

        });


        albums.forEach(album => {

            if (album.images.length < 1) {

                $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-name="' + album.name + '" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="img/noImage.jpg" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>')
            } else {

                $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-img="' + album.images[0].url + '" data-name="' + album.name + '" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="' + album.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + album.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>')
            }
        })

        $("#listAlbums").show()
        $('#backToArtists').show()
    }


    // ----  on albums click get album's id, pass it to the api and show songs in modal ---///////  

    $(document).on('click', '#albumListed', function (e) {
        e.preventDefault()

        // get album cover and name to decorate modal background and tittle

        const albumId = $(this).attr("data-id")
        const albumImage = $(this).attr("data-img")
        const albumName = $(this).attr("data-name")

        $('.modal-body').css('background-image', 'url("' + albumImage + '")')
        $(".modal-title").empty()
        $(".modal-title").append(albumName)

        spotifyApi.retrieveTracks(albumId)
            .then(listOfSongs => {
                listSongs(listOfSongs)
            })
            .catch(err => console.error("err -->", err)) 


        // spotifyApi.retrieveTracks(albumId, listSongs, showError)
    });

    const listSongs = songs => {
        $(".modal-body").empty()

        songs.forEach(song => {
            $(".modal-body").append('<li class="list-group-item"><span href="#" id="songListed" data-id="' + song.id + '"  >' + song.name + '</span></li>');
        });

        $("#myPlayer").modal('show')
    }

    /// ----- Click on a track will open player in modal--///

    $(document).on('click', '#songListed', function (e) {
        e.preventDefault()
        const songId = $(this).attr("data-id")

        spotifyApi.playTracks(songId)
            .then(song => {
                player(song)
            })
            .catch(err => console.error("err -->", err)) 

        // spotifyApi.playTracks(songId, player, showError)
    });

    const player = track => {
        $('#player').empty()
        $('#player').append('<audio id="audioPlayer" controls autoplay  class="m-3" onclick="this.pause()"> <source src="' + track.preview_url + '.ogg" type="audio/ogg"> <source src="' + track.preview_url + '.mp3" type="audio/mpeg"></audio>')
        $("#myPlayer").modal('show')
    }

    //  if modal is closed or hidden, music stops   

     $('#myPlayer').on('hidden.bs.modal', function () {

        $('audio').get(0).pause()
    }) 

})