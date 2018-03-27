import React from 'react'
import './styles.css'

function Footer(props) {
    return (
        <div className="container is-fullhd">
            <div className="notification">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div id="about" className="content">
                                {"¿Conocenos?"}
                                <div className="twitter-container">
                                    {"Contacto"}
                                </div>
                                <p id="alternative">
                                    {"Devoluciones"} </p>
                            </div>
                        </div>
                        <div className="column is-4">
                        </div>
                        <div className="column is-4">
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.863516392212!2d-4.437266384553108!3d36.72583897996396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7a13782f1d9%3A0x59876ef12be6b0cd!2sSoluciones+Informaticas+Costa+Del+Sol%2C+S.L.!5e0!3m2!1ses!2ses!4v1520584362137" width={325} height={200} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer