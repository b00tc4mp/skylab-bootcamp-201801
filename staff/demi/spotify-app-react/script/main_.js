(function() {  
  "use strict";
  //spotifyApi.timeout = 5000;

  /**
   *  Enviamos datos a la api de sporify
   */
  // llamamos a la busqueda y a la api le pasaremos en los handles la query y las 2 funciones 1 de OK otra de KO
  $('form').submit(function (e) {
    e.preventDefault();
    const query = $('input').val();
    const baseUrl= "https://api.spotify.com/v1/"
    spotifyApi.searchArtists(query, baseUrl).then(artists=>showResults(artists))
  })

  // definimos la funcion showResults
  function showResults(artists){
    let boxCard="";
    const ulrImg ="";
    $(".section-track").hide()
    $(".section-tracks").hide()
    
      artists.forEach(function(item) {
        
        const imagesUrl = item.images.length !=0 ? item.images[0].url : '';

        boxCard+="<div class='col p-2 card'>";
        boxCard+="<div class='photobox photobox-artists photobox_type16' data-url='https://api.spotify.com/v1/artists/"+item.id+"/albums'>";
        boxCard+="<div class='photobox__previewbox'>";
        boxCard+="<img class='img-fluid photobox__preview card-img' src="+imagesUrl+">";
        boxCard+="<span class='photobox__label'>"+item.name+"</span>";
        boxCard+="</div>";
        boxCard+="</div>";
        boxCard+="</div>";
        
      });

    $("section.section-artists .row").html(boxCard);
    $("section.section-artists .row").show();
    $(".section-artists").show()

  }

  // llamamos al siguiente pantel donde le pasaremos 
  // los mismos datos de token time out base url... 
  // pero las funciones seran ditintas y la query

  /**
   *  Enviamos datos a la api de sporify
   */
  $("body").on("click", ".photobox-artists", (function(e) { 
    const query = $(this).attr("data-url")
    const baseUrl= "https://api.spotify.com/v1/"
    spotifyApi.retrieveAlbums(query,baseUrl).then(albums=>showAlbums(albums))
  }))
  
  //definimos la funcion showAlbums que nos servira para enseñar los albums
  function showAlbums(albums) {

    $(".section-artists").fadeIn(1000).hide();
    $(".section-album").fadeIn(1000).show();

    let boxAlbums = "";

    albums.forEach(function(item) {

        boxAlbums+="<div class='col p-2 card'>";
        boxAlbums+="<div data-url='https://api.spotify.com/v1/albums/"+item.id+"/tracks' class='photobox photobox-album photobox_type16'>";
        boxAlbums+="<div class='photobox__previewbox'>";
        boxAlbums+="<img class='img-fluid photobox__preview' src="+item.images[0].url+">";
        boxAlbums+="<span class='photobox__label'>"+item.name+"</span>";
        boxAlbums+="</div>";
        boxAlbums+="</div>";
        boxAlbums+="</div>";

      (item.images.length != 0) ? boxAlbums : "";

    });

    let boxtitles = ""
    albums.forEach(function(item) {
      boxtitles+="<span class='subsection-titles'>"+item.name+" / "+"</span>";
    });
    
    $("section.section-album .row.gallery").html(boxAlbums);
    $("section.section-album .row.titles div").html(boxtitles);

  }

  /**
   *  Enviamos datos a la api de sporify
   */
  $("body").on("click", ".photobox-album", (function(e) { 
    const query =  $(this).attr("data-url")
    const baseUrl= "https://api.spotify.com/v1/"
    spotifyApi.retrieveTracks(query,baseUrl).then(tracks=>showTracks(tracks))
  }))

  //definimos la funcion showTracks que nos servira para enseñar las canciones
  function showTracks(tracks) {

    $(".section-album").hide();
    $(".section-tracks").fadeIn(1000).show();
  
    let tracktitles = ""
  
    tracks.forEach(function(item) {
      tracktitles+="<span class='subsection-tracks' data-url='"+item.id+"'>"+item.name+" "+"</span>";
    });
  
    $(".section-tracks .row.tracks div").html(tracktitles);
  
  }







  /**
   *  Enviamos datos a la api de sporify
   */
  $("body").on("click", ".subsection-tracks", (function(e) { 
    const query = $(this).attr("data-url")  
    const baseUrl= "https://api.spotify.com/v1/albums/"
    spotifyApi.retrieveTrack(query, baseUrl).then(track=>playMusic(track))
  }))

  //definimos la funcion playMusic que mostrara un reproductor de musica
  function playMusic(track){

    $(".section-track").show()

    let trackpreview = ""
      if(track.preview_url.length!=null){
        trackpreview+="<source src='"+track.preview_url+"' type='audio/mpeg'>"
      }

    $(".section-track .row div audio").html(trackpreview);

    // controlador de la musica
    let music;

    $( ".play" ).click(function() {
      music = document.getElementById('music');
      music.play();
    });

    $( ".pause" ).click(function() {
      music = document.getElementById('music');
      music.pause();
    });

  }

  // Esta es una funcion generica que le pasamos en todos los casos
  // por igual para cuando salta el error, como cuando caduca el token 
  function showError(){
    console.log("error de la aplicacion")
  }

})();

