import React from 'react'

const Email = props => {
    return (
        <li className="emails__text">
            <p className="emails__user">{props.item.user.name}</p>
            <p className="emails__tweet">{props.item.text}</p>
        </li>
    )
}

export default Email