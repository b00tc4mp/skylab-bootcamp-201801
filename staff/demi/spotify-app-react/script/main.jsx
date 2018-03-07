"use strict";
class Spotify extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artistsSearched: [],
            showArtists: true,
            showAlbums: false,
            albumsSearched: [],
            showSongs: false,
            songsSearched: [],
            songSelected:"",
            showSong:false,
        }
    }


    addArtist = (artist) => {

        spotifyApi.searchArtists(artist).then(artists => {

            artists = artists.map((artist) => {

                if (artist.images.length === 0) {
                    artist.images[0] = {
                        url: "http://playercdn.listenlive.co/templates/StandardPlayerV4/webroot/img/default-cover-art.png"
                    }
                }
                return artist

            })
            this.setState({ artistsSearched: artists })
        })
    }


    retrieveAlbums = (e) => {

        this.setState({ showArtists: false })
        this.setState({ showAlbums: true })

        var id = e.target.getAttribute('data')

        spotifyApi.retrieveAlbums(id).then(albums => {

            albums = albums.map((album) => {
                return album
            })

            this.setState({ albumsSearched: albums })

        })
    }


    retrieveTracks = (e) => {

        this.setState({ showAlbums: false })
        this.setState({ showSongs: true })

        var href = e.target.getAttribute('data-url') + "/tracks"

        spotifyApi.retrieveTracks(href).then(songs => {

            songs = songs.map((song) => {
                return song
            })

            this.setState({ songsSearched: songs })
        })


    }


    retrieveTrack = (e) => {

        this.setState({ showSong: true })

        var song = e.target.getAttribute('data')

        spotifyApi.retrieveTrack(song).then(song =>{

            this.setState({ songSelected: song })

        })

    }




    render() {
        return <div>

            <SpotyInput
                onAddArtist={this.addArtist}
            />

            {this.state.showArtists ? <SpotyCovers artistsSearched={this.state.artistsSearched} retrieveAlbums={this.retrieveAlbums} /> : null}

            {this.state.showAlbums ? <SpotyAlbums retrieveAlbums={this.retrieveAlbums} albumsSearched={this.state.albumsSearched} retrieveTracks={this.retrieveTracks} /> : null}

            <SpotySongs
                retrieveTracks={this.retrieveTracks}
                songsSearched={this.state.songsSearched}

                retrieveTrack={this.retrieveTrack}
            />

            {this.state.showSong ? <SpotySong retrieveTrack={this.retrieveTrack} songSelected={this.state.songSelected}/>: null}


        </div>

    }
}



class SpotyInput extends React.Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }

    }

    keepInput = e => this.setState({ query: e.target.value })

    addArtist = () => {
        this.props.onAddArtist(this.state.query)
        this.setState({ query: '' })
    }

    render() {

        return <div>
            <div className="container-fluid pb-2 pt-4 section-info">
                <p>Discover your favorite artists...</p>
            </div>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col">
                        <form onSubmit={e => {
                            e.preventDefault()
                            this.addArtist()
                        }}>
                            <input onChange={this.keepInput} value={this.state.query} className="search-field" id="search-field" type="text" name="s" aria-required="false" autoComplete="off" placeholder="Search…" />
                            <button className="search-submit"><span className="screen-reader-text">Search</span><i className="fa fa-search" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}


// Printing listFunction

function SpotyCovers(props) {

    return <section className="section-artists">
        <div className="row card-columns">
            {
                props.artistsSearched.map((artistSearched, index) =>
                    <div key={index} className="col p-2 card" onClick={props.retrieveAlbums}>
                        <div className="photobox photobox-artists photobox_type16"  >
                            <div className="photobox__previewbox" data={artistSearched.id}>
                                <img className="img-fluid photobox__preview card-img" src={artistSearched.images[0].url} />
                                <span className="photobox__label">{artistSearched.name}</span>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </section>

}


// Printing albumFunction

function SpotyAlbums(props) {

    return <section className="section-album">
        <div className="row card-columns titles">

            {props.albumsSearched.map((albumSearched, index) =>
                <div key={index} className="col p-2 card" onClick={props.retrieveTracks}>
                    <div className="photobox photobox-album photobox_type16">
                        <div className="photobox__previewbox" data-url={albumSearched.href}>
                            <img className="img-fluid photobox__preview" src={albumSearched.images[0].url} />
                            <span className="photobox__label">{albumSearched.name}</span>
                        </div>
                    </div>
                </div>
            )}

        </div>
    </section>
}

// Printing songAlbums

function SpotySongs(props) {

    return <section className="section-tracks">
        <div className="row tracks">
            <div className="col p-4">
                {props.songsSearched.map((songSearched, index) =>
                    <span key={index} onClick={props.retrieveTrack} className="subsection-tracks" data={songSearched.href} >{songSearched.name} </span>
                )}
            </div>
        </div>
    </section>
}


// Printing trackTracks

// function SpotySong(props) {

//     return <section className="section-track">
//         <div className="row">
//             <div className="col p-4 d-flex align-items-center justify-content-center">

//                 <span className="text-white play">play</span>
//                 <span className="text-white"> | </span>
//                 <span className="text-white pause">pause</span>

//                 <audio className="d-none" id="music" controls>

//                 <source src={props.songSelected.preview_url} type="audio/mpeg" />

//                 </audio>
//             </div>
//         </div>
//     </section>
// }



class SpotySong extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			duration: null
		}
      };
      
     

	handlePlay() {
		this.audio.play();
	}
	handleStop() {
		this.audio.currentTime = 0;
		this.audio.pause(); 
	}
	componentDidMount() {
		this.currentTimeInterval = null;
		// Get duration of the song and set it as max slider value
		this.audio.onloadedmetadata = function() {
			this.setState({duration: this.audio.duration});
		}.bind(this);
		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};
    }
    
	render(props) {
		
		
		return <section className="section-track">
        <div className="row">
            <div className="col p-4 d-flex align-items-center justify-content-center">

                <span onClick={ this.handlePlay.bind(this) }  className="text-white play">play</span>
                <span className="text-white"> | </span>
                <span onClick={ this.handleStop.bind(this) }  className="text-white pause">pause</span>

                <audio ref={(audio) => { this.audio = audio }} src={this.props.songSelected.preview_url}  className="d-none" id="music" controls/>

            </div>
        </div>
    </section>

	}
}



//src={props.songSelected.preview_url} 


//data-url="https://api.spotify.com/v1/artists/&quot;+item.id+&quot;/albums"
//data-url que lleva el photobox

// const imagesUrl = item.images.length !=0 ? item.images[0].url : '';



// { artistSearched.name }

// <div class='col p-2 card'>
//     <div class='photobox photobox-artists photobox_type16' data-url='https://api.spotify.com/v1/artists/"+item.id+"/albums'>
//         <div class='photobox__previewbox'>
//             <img class='img-fluid photobox__preview card-img' src="+imagesUrl+">
//                 <span class='photobox__label'>"+item.name+"</span>
// </div>
//         </div>
//     </div>












{/* 
    


 

    <section class="section-tracks" style="display:none;">
        <div class="row tracks">
            <div class="col p-4">
            </div>
        </div>
    </section>

    <section class="section-track" style="display:none;">
        <div class="row">
            <div class="col p-4 d-flex align-items-center justify-content-center">
                <span class="text-white play">play</span>
                <span class="text-white"> | </span>
                <span class="text-white pause">pause</span>
                <audio class="d-none" id='music' controls>
                </audio>
            </div>
        </div>
    </section> */}


ReactDOM.render(<Spotify />,
    document.getElementById('root'))