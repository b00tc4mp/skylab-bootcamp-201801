/**
 * ENLACES PARA OBTENER EL TOKEN DE AUTENTIFICACIÓN CONTRA LA API DE SPOTIFY (caduca en 60 minutos):
 *
 * https://developer.spotify.com/web-api/
 * https://developer.spotify.com/web-api/console/get-search-item/ 
 * 
 */

$(document).ready(function(){

	"use strict";

	(function() {
		/* Controlaré que me introducen una palabra, ya que el jQuery está evitando que la propiedad "required" del elemento input funcione correctamente. */
		$('#input_search').keyup(function() {
			var empty = false;

			$('#input_search').each(function() {
				if ($(this).val() == '') {
					empty = true;
				}
			});

			if (empty) {
				$('#search_button').attr('disabled', 'disabled');
			} else {
				$('#search_button').removeAttr('disabled');
			}
		});
	})()


	/* Detectamos el envío del formulario y realizamos una petición de búsqueda de artista */
	$('#search_button').on('click', function(e) {
		e.preventDefault();

		var artistToFind = $('#input_search').val();

		spotifyApi.searchArtists(artistToFind, showResultsOfArtist, alert);
	})


	function showResultsOfArtist(listOfArtist){
		var toPrint = '';

		for(var prop in listOfArtist){
			toPrint += "<div class='card mb-4' data-id='" + listOfArtist[prop].id + "'>";
			toPrint += "<div class='card-body'>";
			toPrint += "<h5 class='card-title'>"+ listOfArtist[prop].name +"</h5>";
			toPrint += "<a href='#' data-id='" + listOfArtist[prop].id + "' class='btn btn-primary artist-card'>List of albums</a>";
			toPrint += "</div>";
			// Voy a comprobar si hay disponible una fotografía
			if(listOfArtist[prop].images.length > 0){
				toPrint += "<img class='card-img-bottom img-square' src='"+ listOfArtist[prop].images[0]['url'] +"' alt='Card image cap'>";
			}
			toPrint += "</div>";
		}

		$("#listOfResults").html(toPrint);
	}


	/* Detectamos si el usuario quiere ver el listado de álbumes, tracks o reproducir una canción */
	$("#listOfResults").on("click", "a", (function(e) {
		e.preventDefault();

		var $buttonOfCard = $(this);

		var theClass = $buttonOfCard.attr('class');

		// En función del botón pulsado realizo una acción u otra:
		if(theClass === 'btn btn-primary artist-card'){
			// el usuario quiere: ver álbumes
			var idOfArtist = $buttonOfCard.data("id");

			spotifyApi.retrieveAlbums(idOfArtist, showResultsOfAlbums, alert);
		}else if(theClass === 'btn btn-secondary album-card'){
			// el usuario quiere: ver tracks
			var idOfAlbum = $buttonOfCard.data("id");

			spotifyApi.retrieveTracks(idOfAlbum, showResultsOfTracks, alert);
		}else if(theClass === 'btn btn-success song-card'){
			// el usuario quiere: reproducir una canción
			var preview_url = $buttonOfCard.data("preview_url");

			showModalForReproduceSong(preview_url);
		}
	}))


	function showResultsOfAlbums(listOfAlbums){
		var toPrint = '';

		for(var prop in listOfAlbums){
			toPrint += "<div class='card mb-4' data-id='" + listOfAlbums[prop].id + "'>";
			toPrint += "<div class='card-body'>";
			toPrint += "<h5 class='card-title'>"+ listOfAlbums[prop].name +"</h5>";
			toPrint += "<a href='#' data-id='" + listOfAlbums[prop].id + "' class='btn btn-secondary album-card'>List of tracks</a>";
			toPrint += "</div>";
			// Voy a comprobar si hay disponible una fotografía
			if(listOfAlbums[prop].images.length > 0){
				toPrint += "<img class='card-img-bottom img-square' src='"+ listOfAlbums[prop].images[0]['url'] +"' alt='Card image cap'>";
			}
			toPrint += "</div>";
		}
		
		$("#listOfResults").html(toPrint);
	}

	function showResultsOfTracks(listOfTracks){
		var toPrint = '';

		for(var prop in listOfTracks){
			toPrint += "<div class='card mb-4' data-id='" + listOfTracks[prop].id + "'>";
			toPrint += "<div class='card-body'>";
			toPrint += "<h5 class='card-title'>"+ listOfTracks[prop].artists[0]['name'] +" - " + listOfTracks[prop].name +"</h5>";
			toPrint += "<p class='card-text'>Track number: "+ listOfTracks[prop].track_number +"</p>";

			if(listOfTracks[prop].preview_url !== null){
				toPrint += "<a href='#' data-preview_url='" + listOfTracks[prop].preview_url + "' class='btn btn-success song-card'>Listen the song</a>";
			}

			toPrint += "</div>";
			toPrint += "</div>";
		}

		$("#listOfResults").html(toPrint);
	}

	function showModalForReproduceSong(song){
		// Preparo la información a mostrar:
		var textForModal = '<audio controls id="audioplayer" autoplay><source src="'+ song +'" type="audio/ogg"></audio>';

		// Establezco la información a mostrar dentro de un modal
		$("#songModalLabel").html('Listening song...');
		$("#songModalBody").html(textForModal);

		// Mostramos un modal
		$('#songModal').modal();
	}

	$('#songModal').on('hidden.bs.modal', function () {
        //cuando el modal es ocultado, paro el reproductor
        $('#audioplayer').get(0).pause();
		$('#audioplayer').get(0).currentTime = 0;
    });
});
