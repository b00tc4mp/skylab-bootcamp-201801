import React from 'react'
import ItemMenuList from './ItemMenuList/index'
import './styles/main.css'

function Menu(props) {

    return (
        <div class="columns is-mobile is-multiline is-centered navbar-section-module">

            <ItemMenuList title={"DISPOSITIVOS"} category={["Ordenadores","Portátiles","Tablets","Cámaras"]}/>

            <ItemMenuList title={"COMPONENTES"} category={["Discos Duros","Memoria RAM","Piezas"]}/>
            
            <ItemMenuList title={"PERIFÉRICOS"} category={["Monitores","Impresoras","Accesorios","Auriculares","Altavoces","Homecinema","Teclados","Ratones","Joysticks","Sillas Gaming"]}/>
            
            <ItemMenuList title={"ACCESORIOS"} category={["Cables, conectores y adaptadores","Cargadores","Fundas","Maletines", "Mochila","Palo Selfie","Alfombrillas"]}/>

        </div>
    )
}

export default Menu

