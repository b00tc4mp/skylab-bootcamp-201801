import React from 'react'
import { Motion, spring } from "react-motion"
import GeometryMap from './GeometryMap'

function ZoomMap(props) {
    console.log('nuevas coordenadas :', props.newCoords , ' zoom:', props.zoom)
    return (
        <Motion
            defaultStyle={{ zoom: props.zoom , x : props.newCoords[0], y : props.newCoords[1] }}
            style={{
                    zoom: spring(props.zoom, { stiffness: 181, damping: 40 }),
                    x: spring(props.newCoords[0], { stiffness: 181, damping: 40 }),
                    y: spring(props.newCoords[1], { stiffness: 181, damping: 40 }),
                }}
        >
        {({ zoom, x, y }) => ( <GeometryMap 
                                        center={props.center}
                                        zoom={props.zoom}
                                        selectedCountry={props.selectedCountry}/> )}
        </Motion>
    )
}

export default ZoomMap