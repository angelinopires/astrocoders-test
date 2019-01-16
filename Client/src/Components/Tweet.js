import React from 'react'

const Tweet = props => { 
    let location = props.item.user.location ? props.item.user.location : 'No location'
    let date = new Date(props.item.created_at)
        .toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'})

    return (
        <li className="tweet__text">
            <p className="tweet__user">{props.item.user.name}</p>
            <p className="tweet__message">{props.item.text}</p>
            <p className="tweet__time">{date}</p>
            <p className="tweet__location">{location}</p>
        </li>
    )
}

export default Tweet