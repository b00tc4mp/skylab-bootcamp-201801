import React from 'react'

function InformationPersonal(props) {
        return (
            <div>
                <label className="title is-5">Tus datos</label>

                <ul className="menu-list">
                    <li><a>{`${props.user.name} ${props.user.surname}`}</a></li>
                    <li><a>{props.user.telf}</a></li>
                    <li><a>{props.user.email}</a></li>
                </ul>

                <p className="menu-label">Direccion de Entrega</p>
                <ul className="menu-list">
                    <li><a>{props.user.address1}</a></li>
                    <li><a>{(props.user.address2) ? props.user.address2 : ""}</a></li>
                </ul>
                <p className="menu-label">Comentarios</p>
                <div className="control">
                    <textarea className="textarea is-hovered" type="text" placeholder="Escriba tus comentarios"></textarea>
                </div>
            </div>
        )
}

export default InformationPersonal