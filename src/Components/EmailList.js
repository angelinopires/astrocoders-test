import React, { Component } from 'react'
import Email from './Email'
import '../scss/Components/EmailList.scss'

const config = require('./config')
const Twitter = require('twitter-node-client').Twitter;


class EmailList extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {   
        
        const twitter = new Twitter(config)
        const params = {
            q: '#mars',
            count: 40,
        }

        twitter.getSearch(
            params,
            error => console.log(error),
            success => console.log(success)
        )
    }

    render() {
        return (
            <Email />
        )
    }
}

export default EmailList