import React from 'react'
import './styles/main.css'
import no_image from './images/no_image.png'

function ItemResume(props) {
    return (
        <div id="info" className="resume">
            <div className="row">
                <div className="colum1 col-md-5">
                    <img className="img-thumbnail" src={(props.item.poster_path) ? `http://image.tmdb.org/t/p/w500/${props.item.poster_path}` : no_image} alt={props.item.id} />
                </div>
                <div className="colum2 col-md-6">
                    <h1>{(props.item.tagline) ? props.item.tagline : null}</h1>
                    <br />
                    <br />
                    <p>{props.item.overview}</p>
                    <table className="table table-sm table-dark">
                        <tbody>
                            <tr>
                                <th scope="row">{props.lang === 'es' ? 'Pagina Oficial' : 'Home page'}</th>
                                <td>{props.item.homepage}</td>
                            </tr>
                            <tr>
                                <th scope="row">{props.lang === 'es' ? 'Fecha de estreno' : 'Release date'}</th>
                                <td>{(props.item.release_date) ? props.item.release_date : '- - -'}</td>
                            </tr>
                            <tr>
                                <th scope="row">{props.lang === 'es' ? 'Genero' : 'Genre'}</th>
                                <td>{(props.item.genres) ? props.item.genres.slice(0,1).map(genre => genre.name) : '- - -'}</td>
                            </tr>
                            <tr>
                                <th scope="row">{props.lang === 'es' ? 'Productora' : 'Company'}</th>
                                <td>{(props.item.production_companies) ? props.item.production_companies.slice(0,1).map(product => product.name) : '- - -'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ItemResume