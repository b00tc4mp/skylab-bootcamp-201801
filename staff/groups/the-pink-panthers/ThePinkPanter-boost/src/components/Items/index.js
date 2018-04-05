import React from 'react'
import Card from '../Card';
import './styles/main.css'

function Items(props) {
    return (
        <div id="Container-films" className="container">
            <div className='card-deck'>
                {props.items.map(item => {
                    return (
                        <Card item={item} key={item.id} type={props.type}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Items