import React, { Component  from 'react'
import axios from 'axios'
import Header from './Header'
import TweetList from './TweetsList'
const R = require('ramda')

class App extends Component {
    constructor() {
        super()
        this.state = {
            tweetList: [],
            filteredTweetList: [],
            search: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.filterTweets = this.filterTweets.bind(this)
    }

    componentDidMount() {
        let hashtag = 'bolsonaro'
        let count = 40
        const url = `http://localhost:3000/api/search/${hashtag}&${count}`
        
        axios.get(url)
            .then(response => this.setState({ filteredTweetList: response.data.statuses }))
            .then(() => this.setState({ tweetList: this.state.filteredTweetList }))
            .catch(error => console.log(error))
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })

        return value
    }

    filterTweets(event) {
        const value = this.handleChange(event)
        
        const filterTweet = tweet => R.includes(value, tweet.text)
        const filteredTweets = R.filter(filterTweet, this.state.tweetList)
        this.setState({ filteredTweetList: filteredTweets })
    }

    render() {
        console.log(this.state.tweetList)

        return (
            <section id="gmail">
                <Header filterTweets={this.filterTweets} />
                <aside className="menu">Menu</aside>
                <TweetList tweets={this.state.filteredTweetList}/>
            </section>
        )
    }
}

export default App