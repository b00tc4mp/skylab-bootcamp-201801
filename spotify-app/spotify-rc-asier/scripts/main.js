$(document).ready(function () {
    "use strict";

    $("#listArtists, #listAlbums, #listSongs, #backToArtists, #error").hide();


    var showError = function () {

        $("#error").append('<div class="d-block bg-light p-5"><h1 class="display-1 text-success text-center" >  No artist matching your search! </h1></div>');

    }

    // ------- submit form and get artists, pass them to the api and show them on html -------//

    $('form').submit(function (e) {
        e.preventDefault();
        var query = $('input').val();

        $('form').trigger('reset');
        $("#listArtists").show();
        $("#listAlbums, #listSongs, #backToArtists, #error").hide();

        spotifyApi.searchArtists(query, listResult, showError)
    });

    function listResult(artists) {

        $("#listArtists").empty();
        
    // if search doesn't return results, show error message  

        if (artists.length < 1) {
            showError();
            $('#error').show();
        }

        artists.forEach(function (artist) {

            if (artist.images.length < 1) {
                $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed"  data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="https://pixabay.com/get/eb32b40f20fd033ed1584d05fb0938c9bd22ffd41cb0164792f3c17ea3/singing-2750892_1280.jpg" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>');
            } else {

                $("#listArtists").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="artistListed"  data-id="' + artist.id + '"  > <img class="card-img-top img-fluid" src="' + artist.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Albums</span></div></div></a></div></div>');
            };

        });

        $("#listArtists").show();


    };

    // ----  on artist's click get the artist's id, pass it to the api and show albums on html---///////    


    $(document).on('click', '#artistListed', function (e) {
        e.preventDefault();
        var artistId = $(this).attr("data-id");
        
        $("#listArtists").hide();

        spotifyApi.retrieveAlbums(artistId, listAlbums, showError);
    });


    function listAlbums(albums) {

        $("#listAlbums").empty();

        $(document).on('click', '#backToArtists', function (e) {
            e.preventDefault();
            
            $("#listAlbums, #error, #backToArtists").hide();
            $("#listArtists").show();

        });

        
        albums.forEach(function (album) {

            if (album.images.length < 1) {

                $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-name="' + album.name + '" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="https://cdn.pixabay.com/photo/2016/02/19/11/36/microphone-1209816_640.jpg" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + artist.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>')
            } else {

                $("#listAlbums").append('<div class="card col"><div class="hovereffect"><a href="#" class="text-center font-weight-bold text-light" id="albumListed" data-img="' + album.images[0].url + '" data-name="' + album.name + '" data-id="' + album.id + '"  > <img class="card-img-top img-fluid" src="' + album.images[0].url + '" alt="artist picture"><div class="card-body overlay"><h5 class="card-title">' + album.name + '</h5><span class="info">Show Tracks</span></div></div></a></div></div>')
            };
        });

        $("#listAlbums").show();
        $('#backToArtists').show();
    }


    // ----  on albums click get album's id, pass it to the api and show songs in modal ---///////  

    $(document).on('click', '#albumListed', function (e) {
        e.preventDefault();

        // get album cover and name to decoarte modal background and tittle

        var albumId = $(this).attr("data-id");
        var albumImage = $(this).attr("data-img");
        var albumName = $(this).attr("data-name");

        $('.modal-body').css('background-image', 'url("' + albumImage + '")');
        $(".modal-title").append(albumName);

        
        spotifyApi.retrieveTracks(albumId, listSongs, showError);
    });

    function listSongs(songs) {
        $(".modal-body").empty();

        songs.forEach(function (song) {
            $(".modal-body").append('<li class="list-group-item"><span href="#" id="songListed" data-id="' + song.id + '"  >' + song.name + '</span></li>');
        });

        $("#myPlayer").modal('show');
    }

    /// ----- Click on a track will open player in modal--///

    $(document).on('click', '#songListed', function (e) {
        e.preventDefault();
        var songId = $(this).attr("data-id");

        spotifyApi.playTracks(songId, player, showError);
    });

    function player(track) {
        $('#player').empty();
        $('#player').append('<audio id="audioPlayer" controls autoplay  class="m-3" onclick="this.pause()"> <source src="' + track.preview_url + '.ogg" type="audio/ogg"> <source src="' + track.preview_url + '.mp3" type="audio/mpeg"></audio>');
        $("#myPlayer").modal('show');
    }

    //  if modal is closed or hidden, music stops   

    $('#myPlayer').on('hidden.bs.modal', function () {

        $('#audioPlayer').get(0).pause();
    });

})