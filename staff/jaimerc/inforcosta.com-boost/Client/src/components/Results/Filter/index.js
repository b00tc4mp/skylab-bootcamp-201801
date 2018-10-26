import React from 'react'
import './styles.css'

function Filter(props) {
    return (
        <div className="tile is-2 is-vertical is-parent">
            <div className="tile is-child box">
                <p className="title">{props.titleFilter}</p>
                <div className="field">
                    <div className="control">
                        <div className="select is-primary navbar-section">
                            <select className="navbar-select" onChange={props.onFilterFamily}>
                                <option >{props.filterFamily}</option>
                                {props.family.map((item,index) => {
                                    return (<option value={item} key={index}>{item}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <div className="select is-primary navbar-section">
                            <select className="navbar-select" onChange={props.onFilterBrand}>
                                <option >{props.filterBrand}</option>
                                {props.brand.map((item,index)=> {
                                    return (<option value={item} key={index}>{item}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <p className="title">{props.titleOrdenation}</p>
                <div className="field">
                    <div className="control">
                        <div className="select is-primary navbar-section">
                            <select className="navbar-select" onChange={props.onFilterPrice}>
                                <option value={0} >{props.filterPrice}</option>
                                {props.price.map(range => {
                                    return (<option value={range.value} key={range.name}>{range.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter