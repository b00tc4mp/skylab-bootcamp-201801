/** */
/*
/* Store different styles needed
/*
/**************** */
import { scaleLinear } from 'd3-scale'

export const baseWidth = 980
export const baseHeight = 551
export const composableStyle = {
    width: '100%',
    height: 'auto'
}
export const wrapperStyles = {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto'
}
export const popScale = scaleLinear()
.domain([0,1])
.range(["#CFD8DC","#607D8B"])

export const fillStyles = {
    fill: '#ECEFF1',
    stroke: 'transparent',
    strokeWidth: 2,
    outline: 'rgb(0,0,0)',

}
export const projectionConfigs = {
    scale: 200,
    rotation: [-10, 0, 0]
}
