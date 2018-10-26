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
import React from 'react'

import { 
  Motion,
  spring
} from 'react-motion'

import {
  Geographies,
  Geography,
} from 'react-simple-maps'

/** */
/*
/*  COMPONENTS AND STORES
/*
/*** */
import { fillStyles } from './store'

import geoObject from './static/chachis_110m.json'

/**
 * 
 *  Functional component 
 *  
 *  @param {PROP} Receives ZOOM, COORDS, INTERPOLATION (PROJECTION)
 *
 *  @return {RENDER} Composable GeoJSON Map
 */

function GeometryMap( props ) {
  
  return (
          <Geographies geography={ geoObject }>
            {( geographies, projection ) => geographies.map(( geography, i ) => (
              <Geography
                key={ i }
                geography={ geography }
                projection={ projection }
                style={{
                  default: { ...fillStyles },
                  hover: { ...fillStyles },
                  pressed: { ...fillStyles },
                }}
              />
            ))}
          </Geographies>
  )
}
export default GeometryMap