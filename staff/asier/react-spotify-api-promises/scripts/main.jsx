'use strict'


class SpotyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            artists: [],
            showArtists: true,
            albums: [],
            showAlbums: false,
            songs: [],
            showSongs: false,
            songId: []
        }
    }

    // check the results and look up for deafult pictures. 

    fixResultsWithoutPictures(sourceData) {
        for (let i = 0; i < sourceData.length; i++) {
            for (let prop in sourceData[i]) {
                if (sourceData[i].images.length === 0) {
                    // si el item no tiene imágenes, le establezco una por defecto 
                    sourceData[i].images.push({ height: 600, url: "img/noImage.jpg", width: 600 });
                }
            }
        }
        return sourceData;
    }

    // click on "back to artists" button

    goBack = () => {

        this.setState({
            showArtists: true,
            showAlbums: false,
            showSongs: false
        })
    }


    fetchArtists = (query) => {

        this.setState({
            showArtists: true,
            showAlbums: false,
            showSongs: false
        })


        spotifyApi.searchArtists(query)
            .then(listOfArtists => {
                let artistsImages = this.fixResultsWithoutPictures(listOfArtists)
                this.setState({
                    artists: artistsImages
                })
            })
            .catch(console.error)
    }

    fetchAlbums = artistId => {

        this.setState({
            showArtists: false,
            showAlbums: true,
        })



        spotifyApi.retrieveAlbums(artistId)
            .then((listOfAlbums) => {
                let albumsImages = this.fixResultsWithoutPictures(listOfAlbums)
                this.setState({
                    albums: albumsImages

                })

            })
            .catch(console.error)

    }

    fetchTracks = albumId => {


        this.setState({ showSongs: true })

        spotifyApi.retrieveTracks(albumId)
            .then((listOfSongs) => {
                this.setState({
                    songs: listOfSongs

                })

            })
            .catch(console.error)

    }

    playSong = songId => {

        spotifyApi.retrieveTrack(songId)
            .then((track) => {
                this.setState({
                    songId: track

                })

            })
            .catch(console.error)

    }




    render() {
        return (
            <div>
                <nav className="navbar py-3">
                    <a href="#"> <img src="img\Spotify_Logo_RGB_White.png" width={150} height={50} className="d-inline-block align-top ml-2" /> </a>
                    <span className="navbar-brand mx-auto">Find your favorite music</span>
                </nav>
                <main className="container-fluid">

                    <SearchInput onSubmit={this.fetchArtists} onClickGoBack={this.goBack} />

                    <section className="container-fluid col-12">

                        {this.state.showArtists ?
                            <ListArtists onFetchArtists={this.fetchArtists} artists={this.state.artists} onClickArtist={this.fetchAlbums} /> : null}

                        {this.state.showAlbums ?
                            <ListAlbums onFetchAlbums={this.fetchAlbums} albums={this.state.albums} onClickAlbum={this.fetchTracks} /> : null}

                        {this.state.showSongs ?
                            <ListSongs onFetchSongs={this.fetchTracks} songs={this.state.songs} onClickSong={this.playSong} songId={this.state.songId} /> : null}

                    </section>
                </main>
            </div>


        )
    }

}





class SearchInput extends React.Component {

    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    keepInput = query => this.setState({ query })

    submit = () => {
        this.props.onSubmit(this.state.query)

        this.setState({ query: '' })
    }

    goBack = () => {
        this.props.onClickGoBack()
    }


    render() {

        return (

            <div id="search" className=" row">
                <form className="row justify-content-center col-12" onSubmit={e => { e.preventDefault(); this.submit() }}>
                    <input className="form-control form-control-lg mt-5 col-10 text-center text-uppercase font-weight-bold" type="text" placeholder="search for an artist" required autoFocus onChange={(e) => this.keepInput(e.target.value)} value={this.state.query} />

                    <input className="btn-success btn-block rounded my-4 py-3 col-6 col align-self-center button" type="submit" defaultValue="Search" />
                </form>

                <button onClick={e => { e.preventDefault(); this.goBack() }} type="button" id="backToArtists" className="btn btn-success mx-auto rounded mb-3 button">Back to artists</button>
            </div>
        )
    }

}


class ListArtists extends React.Component {


    sendArtist = (artistId) => {
        this.props.onClickArtist(artistId)

    }

    render() {

        const artists = this.props.artists


        return (

            <div id="listArtists" className=" card-columns">

                {artists.map(artist =>

                    <div className="card col" key={artist.id} onClick={e => { e.preventDefault(); this.sendArtist(artist.id) }} >

                        <div className="hovereffect"><a href="#" className="text-center font-weight-bold text-light" id="artistListed" > <img className="card-img-top img-fluid" src={artist.images[0].url} alt="artist picture" /><div className="card-body overlay"><h5 className="card-title"> {artist.name} </h5><span className="info">Show Albums</span></div></a></div></div>)}
            </div>
        )
    }

}


class ListAlbums extends React.Component {

    sendAlbum = (albumId) => {
        this.props.onClickAlbum(albumId)
    }

    render() {

        const albums = this.props.albums


        return (

            <div id="listAlbums" className=" card-columns">

                {albums.map(album =>


                    <div className="card col" key={album.id} onClick={e => { e.preventDefault(); this.sendAlbum(album.id) }} >

                        <div className="hovereffect"><a href="#" className="text-center font-weight-bold text-light" id="albumListed" > <img className="card-img-top img-fluid" src={album.images[0].url} alt="album picture" /><div className="card-body overlay"><h5 className="card-title"> {album.name} </h5><span className="info">Show Tracks</span></div></a></div></div>)}

            </div>
        )
    }


}


class ListSongs extends React.Component {

    constructor() {
        super()

        this.state = {
            showModal: true
        }
    }


    sendSong = (songId) => {
        this.props.onClickSong(songId)
    }

    render() {

        $('#myPlayer').modal("show")
        $('#myPlayer').on('hidden.bs.modal', function () {
            $('audio').get(0).pause()
        })

        const songs = this.props.songs

        let playTrack = this.props.songId.preview_url


        return (

            <div className="modal fade" id="myPlayer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" data-dismiss="modal" id="exampleModalLongTitle" />

                            <audio id="player" className="d-flex justify-content-center" ref="audio_tag" src={playTrack} controls autoPlay>
                            </audio>
                        </div>
                        <div id="player" className="d-flex justify-content-center" />


                        <div className="modal-body">
                            {songs.map(song =>
                                <li className="list-group-item" key={song.id} onClick={e => { e.preventDefault(); this.sendSong(song.id) }}>
                                    <span href="#" id="songListed" >{song.name}</span></li>

                            )}


                        </div>
                    </div>
                </div>
            </div>


        )
    }

}



ReactDOM.render(<SpotyApp />,
    document.getElementById('root'))