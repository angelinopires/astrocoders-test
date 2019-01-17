import React from 'react'

export default function Header(props) {
    return (
        <header className="header">
            <figure className="header__logo">
                <img src="img/gmail.png" />
            </figure>
            <fieldset>
                <input 
                    type="text"
                    name="search"
                    className="header__input"
                    placeholder="Search tweets by text"
                    onChange={props.handleSearch} 
                />
            </fieldset>
        </header>
    )
}