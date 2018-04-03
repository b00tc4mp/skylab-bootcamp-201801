/**
 *  Libraries and related resources used are Open Source or Public Domain CC
 * 
 *  react-simple-maps to composite maps
 * 
 *  {\*https://www.react-simple-maps.io/ *\}
 *
 *  d3-geo for render the spatial projection ( GIS data visualization) of map
 * 
 *  {\*https://www.react-simple-maps.io/ *\}
 * 
 *  react-motion to make world animations
 * 
 *  {\*https://github.com/chenglou/react-motion*\}
 * 
 *  shapefile maps source from Natural Earth site
 *
 * {\*http://www.naturalearthdata.com/downloads/110m-cultural-vectors/*\}
 * 
 *   {\* And also 'chachis_110m.json' ;) , Map 1:110 scale converted from shp and dbx to TopoJSON using mapshaper \*}
 *
 *  {\* http://mapshaper.org/  *\}
 * 
 *
 *  LIBRARIES
 *  
 * */
import React, { Component } from 'react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    } from 'react-simple-maps'
    
import {
    wrapperStyles,
    fillStyles,
    projectionConfigs,
    composableStyle,
    baseHeight,
    baseWidth
  } from './store'
/** */
/*
/* STORES AND MEDIA
/*
/** */
import geoObject from './static/chachis_110m.json'
import './Maps.css'



/**  */
/*
/*  Class BaseMap control the map of the background
/*
/** */

class BaseMap extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            center: [0, 20],
            zoom: 2,
        }
        
       this.HandleZoomOut = this.HandleZoomOut.bind( this )
       this.HandleZoomIn = this.HandleZoomIn.bind( this )
    
    }

    // Handles Zoom when leaves current selected country 
    HandleZoomOut() {
        this.setState({ zoom: this.state.zoom / 2, })
    }
    HandleZoomIn() {
        this.setState({ zoom: this.state.zoom * 2, })
    }
    render() {
        
        return (
            <div style={ wrapperStyles }>

                    <ComposableMap
                     projectionConfig={ projectionConfigs }
                     width ={ baseWidth }
                     height={ baseHeight }
                     style ={ composableStyle }>
                        <ZoomableGroup 
                        center={  this.props.newCoords }
                        onMoveStart = {  this.HandlezoomOut }
                        onMoveEnd   = { this.HandleZoomIn }
                        zoom = { this.state.zoom }
                        noSpanning>
                            <Geographies geography={ geoObject }>
                            {( geographies, projection ) => 
                                geographies.map(( geography,i ) => 
                                
                                ( 
                                    
                                <Geography
                                className ={ geography.properties.ADM0_A3 + ' Effects' }
                                key={i}
                                geography={ geography }
                                projection={ projection }
                                style={{
                                default: { ...fillStyles },
                                hover: { ...fillStyles },
                                pressed: { ...fillStyles } }} />
                                
                                )

                            )}
                            </Geographies>
                        </ZoomableGroup>
                        </ComposableMap>
                </div>)
            }
                        
}
export default BaseMap