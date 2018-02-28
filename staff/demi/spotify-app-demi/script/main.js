"use strict";

var token = "BQC7gVrjIfVrm0QdpZWHmAppJZ_ppamf0mgewKvPZg17QOGYkyoHz4VNewAnoydsaBaFbvEfhDs9GnU6WfT-znfTFlEUjlzgnLatBnRk9vpqN3IZVopJzOAQd42FriykyrjTLsxEEuWnibM"

$('form').submit(function (e) {

  e.preventDefault();

  var query = $('input').val();


  $.ajax({
    url: "https://api.spotify.com/v1/search?type=artist&q=" + query,
    timeout: 5000,
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": "Bearer " + token},
    success: function (artists) {
      showResults(artists);
    },
    error : function() {
      //alert('Disculpe, existió un problema');
      //alert("no entra");
    }
  });

  function showResults(artists){
    console.log(artists)
    // console.log(artists.artists.items[0].name)
    var boxCard="";
    var ulrImg ="";
    
    $(".section-tracks").hide()

      artists.artists.items.forEach(function(item) {
        //console.log(item);
        //console.log(item.images[0].url)
        if(item.images.length != 0){
          boxCard+="<div class='col p-2 card'>";
          boxCard+="<div class='photobox photobox-artists photobox_type16' data-url='https://api.spotify.com/v1/artists/"+item.id+"/albums'>";
          boxCard+="<div class='photobox__previewbox'>";
          boxCard+="<img class='img-fluid photobox__preview card-img' src="+item.images[0].url+">";
          boxCard+="<span class='photobox__label'>"+item.name+"</span>";
          boxCard+="</div>";
          boxCard+="</div>";
          boxCard+="</div>";
        }
      });
    $("section.section-artists .row").html(boxCard);
    $("section.section-artists .row").show();
  }

});

//
$("body").on("click", ".photobox-artists", (function(e) {

  var $item = $(this);
  console.log($item)
  //this.baseUrl + "artists/" + artistId + "/albums",

  // Ajax:
  $.ajax({
    url: $(this).attr("data-url"),
    timeout: 5000,
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": "Bearer " + token},
    success: function (albums) {
      showAlbums(albums);
      console.log(albums)
    },
    error : function() {
      //alert('Disculpe, existió un problema');
      //alert("no entra");
    }
  });

  function showAlbums(albums) {

    $(".section-artists").fadeIn(1000).hide();
    $(".section-album").fadeIn(1000).show();
    
    // console.log(albums.items[0].images[0].url)
    // console.log(albums)

    var boxAlbums = "";
    albums.items.forEach(function(item) {
      //data-url='https://api.spotify.com/v1/artists/"+item.id+"/albums'
      //2QjCLLlSs1k7YVEWZ0moCV

      if(item.images.length != 0){
        console.log(item)
        boxAlbums+="<div class='col p-2 card'>";
        boxAlbums+="<div data-url='https://api.spotify.com/v1/albums/"+item.id+"/tracks' class='photobox photobox-album photobox_type16'>";
        boxAlbums+="<div class='photobox__previewbox'>";
        boxAlbums+="<img class='img-fluid photobox__preview' src="+item.images[0].url+">";
        boxAlbums+="<span class='photobox__label'>"+item.name+"</span>";
        boxAlbums+="</div>";
        boxAlbums+="</div>";
        boxAlbums+="</div>";
      }
    });

    var boxtitles = ""
    albums.items.forEach(function(item) {
      boxtitles+="<span class='subsection-titles'>"+item.name+" / "+"</span>";
    });
    
    $("section.section-album .row.gallery").html(boxAlbums);
    $("section.section-album .row.titles div").html(boxtitles);

  }

}))

$("body").on("click", ".photobox-album", (function(e) { 

  var $item = $(this);

  $.ajax({
    url: $(this).attr("data-url"),
    timeout: 5000,
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": "Bearer " + token},
    success: function (tracks) {
      showTracks(tracks);
    },
    error : function() {
      //alert('Disculpe, existió un problema');
      //alert("no entra");
    }
  });

}))

function showTracks(tracks) {
  console.log(tracks)
  console.log(tracks.items[0].name);
  console.log(tracks.items);
  console.log(tracks.items)
  $(".section-album").hide();
  $(".section-tracks").fadeIn(1000).show();

  var tracktitles = ""

  tracks.items.forEach(function(item) {
    tracktitles+="<span class='subsection-tracks' data-url='"+item.id+"'>"+item.name+" "+"</span>";
  });

  $(".section-tracks .row.tracks div").html(tracktitles);

}


$("body").on("click", ".subsection-tracks", (function(e) { 

  var $item = $(this);

  $.ajax({
    url: "https://api.spotify.com/v1/tracks/"+$(this).attr("data-url"),
    timeout: 5000,
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": "Bearer " + token},
    success: function (track) {
      playMusic(track);
    },
    error : function() {
      //alert('Disculpe, existió un problema');
      //alert("no entra");
    }
  });

}))

function playMusic(track){

  console.log(track)
  console.log(track.preview_url)

  $(".section-track").show()

  var trackpreview = ""

    if(track.preview_url.length!=null){
      trackpreview+="<source src='"+track.preview_url+"' type='audio/mpeg'>"
    }

  $(".section-track .row div audio").html(trackpreview);
  

}

var music;

$( ".play" ).click(function() {
  music = document.getElementById('music');
  music.play();
});

$( ".pause" ).click(function() {
  music = document.getElementById('music');
  music.pause();
});