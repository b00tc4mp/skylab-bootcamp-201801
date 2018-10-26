import React from 'react';
import './styles/main.css';
import Carousel from '../Carousel'
import Jumbotron from '../Jumbotron'
import logo from './images/logo.png';

function Home(props) {
    return (
        <main>
            <section>
                <header>
                    <Jumbotron title={props.lang === 'es' ? 'Peliculas' : 'Movies'} />
                </header>
                <Carousel
                    items={props.films}
                    itemActive={props.itemActiveFilms}
                    title={"movie"}
                />
            </section>

            <section className="logo hidden-xs-down" >
                <img src={logo} className="img-fluid" alt="logo" width='30%' />
                <p className="mgt10">{props.lang === 'es' ? 'Más de 10.000 titulos disponibles para nuestros clientes' : 'More than 10.000 titles availables for our clients'}</p>
            </section>

            <section>
                <header>
                    <Jumbotron className={"Series"} title={"Series"} />
                </header>
                <Carousel
                    items={props.series}
                    itemActive={props.itemActiveSeries}
                    title={"tv"}
                />
            </section>
        </main>
    )
}

export default Home;