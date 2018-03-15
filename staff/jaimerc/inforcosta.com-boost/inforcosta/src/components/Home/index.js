import React from 'react'
import './styles/main.css'

function Home(props) {
    console.log(props.productsPromo.data)
    return (
        <div className="container navbar-section-buttons">
            <div className="notification">
                <div className="columns image-ofert">
                <figure>
                                <img src={"https://www.dmi.es/photo/3241/26661/3593532635935326/bg/parrot-bebop-2-fpv-4rotors-14mp-1920-x-1080pixeles-2700mah-negro--color-blanco-dron-con-camara.jpg"} />
                                <img src={"https://www.dmi.es/photo/304/1461/2957719329577193/bg/brother-dcp-9015cdw-2400-x-600dpi-led-a4-18ppm-wifi-multifuncional.jpg"} />
                            </figure>
                            <figure>
                                <img src={"https://www.dmi.es/photo/151/27197/3674469436744694/bg/hp-portatil---15-bs022ns.jpg"} />
                                <img src={"https://www.dmi.es/photo/4554/27385/3700525537005255/bg/sharkoon-skiller-sgs3-silla-para-videojuegos-de-pc-asiento-acolchado.jpg"} />
                            </figure>
               
                </div>
            </div>
        </div>
    )
}

export default Home

"https://www.dmi.es/photo/3241/26661/3593532635935326/bg/parrot-bebop-2-fpv-4rotors-14mp-1920-x-1080pixeles-2700mah-negro--color-blanco-dron-con-camara.jpg"

/*
     {props.productsPromo.map(images => {
                        return (
                         
                        )
                    })}*/