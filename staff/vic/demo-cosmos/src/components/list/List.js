import React from 'react'

function List(props) {
    return (
        <ul>
        {props.list.map(value => <li>{value}</li>)}
        </ul>
    )
}

export default List