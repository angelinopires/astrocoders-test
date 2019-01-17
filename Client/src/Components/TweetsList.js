import React from 'react'
import Tweet from './Tweet'
const R = require('ramda')

export default function TweetsList(props) {
    const generateTweet = (tweet, key) => <Tweet key={key} item={tweet} />
    const tweetsList = R.addIndex(R.map)(generateTweet, props.tweets)
    
    return (
        <aside className="tweet">
            <ul className="tweet__list">{tweetsList}</ul>
        </aside>
    )
}