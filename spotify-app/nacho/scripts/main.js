$(document).ready(function(){
    "use strict";

    //var token = "BQBDw141Es_8dQ-tpqSC7hkPxHS03EUZ4HLI8wgzaWLS8LZGR0Qfp4TJtnH6Bp6ZpgjBAfW3NuZCA1qC7brWgD7mgpkMpsJNIgjdhcaa9RWVjdueh2D5ovnRhfD8IPQCD5jlya13FJ7eRsc";
    var token = "BQA3GrkireOVaWSYSTt3mQJqyRqye1if1AWS80m6dCIqGlSMo5Dn7i5FIN8KBhiU2l6LLVyipefjn16IFuGQoWpWNCOgF03F8s9NdRZ9tbuW51FbxPdOptRVrn_d6wx_P-1hhlLT5H_Ph08_1Ok";

    $("#artists").hide();
    $("#albums").hide();
    $("#tracks").hide();
    $("#track").hide();
/////////////////////////////////////////////////////////////SEARCH FOR AN ARTIST///////////////////////////////////////////////////////

    $("#boton").on("click",function(e){
        e.preventDefault();
    
        var query = $("#text").val();
        
        $.ajax({
            url: "https://api.spotify.com/v1/search?q="+query+"&type=artist",  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": "Bearer " + token},
            success: function(results) {
                listArtistResults(results.artists.items);
            }
        });  
    });

    function listArtistResults(artists){
        var list = "<option selected disabled>Choose artist...</option>";

        artists.forEach(function(artist){
            list+="<option id="+artist.id+" class='option'>"+artist.name+"</option>";
        });

        $("#artists").show();
        $("#artists #selectartist").html(list);
    }


/////////////////////////////////////////////////////////////SELECT ARTIST///////////////////////////////////////////////////////


    $("#selectartist").change(function(){
        var idArtist = $(this).children(":selected").attr("id");

        $.ajax({
            url: "https://api.spotify.com/v1/artists/"+idArtist+"/albums",  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": "Bearer " + token},
            success: function(results) {
                listAlbums(results.items);
            }
        });  
    });

    function listAlbums(albums){
        var list = "<option selected disabled>Choose album...</option>";

        albums.forEach(function(album){
            list+="<option id="+album.id+" class='option'>"+album.name+"</option>";
        });

        $("#albums").show();
        $("#albums #selectalbum").html(list);
    }

/////////////////////////////////////////////////////////////SELECT ALBUM//////////////////////////////////////////////////

    $("#selectalbum").change(function(){
        var idAlbum = $(this).children(":selected").attr("id");
        //alert(idAlbum);
        
        $.ajax({
            url: "https://api.spotify.com/v1/albums/"+idAlbum+"/tracks",  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": "Bearer " + token},
            success: function(results) {
                listTracks(results.items);
            }
        });  
    });

    function listTracks(tracks){
        var list = "<option selected disabled>Choose track...</option>";

        tracks.forEach(function(track){
            list+="<option id="+track.id+" class='option'>"+track.name+"</option>";
        });

        $("#tracks").show();
        $("#tracks #selecttrack").html(list);
    }


/////////////////////////////////////////////////////////////SELECT TRACK//////////////////////////////////////////////////

    $("#selecttrack").change(function(){
        var idTrack = $(this).children(":selected").attr("id");
       // alert(idTrack);
        

        $.ajax({
            url: "https://api.spotify.com/v1/tracks/"+idTrack,  
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": "Bearer " + token},
            success: showTrack
        });  
    });

    function showTrack(track){
        var soundTrack = track.preview_url;
        
        var list="<audio controls><source src='"+soundTrack+"' type='audio/mpeg'/>sjygjuggsaj</audio>";

        $("#trackplay").html(list);
        $("#track").show();
    }
});

//list+="<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+idTrack+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>";



      //fito artist id: 1tZ99AnqyjgrmPwLfGU5eo
      //fito album id: 4zSihveMwgYWHA5Bkw29Ug
      //fito track id:5sYrBCml4is9A4hOwOEx3d

// TODO make other children selects to reset when a parent select changes its value.
// TODO encapsulate spotify api.
    