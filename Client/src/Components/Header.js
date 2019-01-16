import React from 'react'

const Header = props => {
    return (
        <header>
            <fieldset>
                <label>Filter your Messages:</label>
                <input 
                    type="Text"
                    name="search"
                    placeholder="Search tweets by text"
                    onChange={props.filterTweets} 
                />
            </fieldset>
        </header>
    )
}

export default Header