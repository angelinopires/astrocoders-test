import React, { useState, useEffect} from 'react'
import Header from './Header'
import Menu from './Menu'
import TweetList from './TweetsList'
import axios from 'axios'
const R = require('ramda')

export default function App() {
    const [tweetsList, setTweets] = useState([])
    const [filteredList, setFilter] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoader] = useState(false)

    const fetchData = async () => {
        let hashtag = 'mars'
        let count = 40

        const result = await axios(
            `http://localhost:3000/api/search/${hashtag}&${count}`
        )
        .then((response) => {
            setTweets(response.data.statuses)
            setFilter(response.data.statuses)
            console.log(response.data.statuses)
        })
        .then(() => setLoader(false))
        .catch(error => console.log(error))
    }

    const handleSearch = event => {
        const {value} = event.target
        setSearch(value)
    }

    useEffect(() => {
        setLoader(true)
        fetchData()
    }, [])

    useEffect(() => {
        const filterTweet = tweet => R.includes(search, tweet.text)
        const filteredTweets = R.filter(filterTweet, tweetsList)
        setFilter(filteredTweets)
    }, [search])

    return (
        <section id="gmail">
            <Header handleSearch={handleSearch} />
            <Menu />
            {loading 
                ? <figure className="loading"><img src="img/loading.gif"/></figure> 
                : <TweetList tweets={filteredList} />
            }
        </section>
    )
}