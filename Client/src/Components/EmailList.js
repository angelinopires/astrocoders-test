import React, { Component } from 'react'
import Email from './Email'
import axios from 'axios'
import '../scss/Components/EmailList.scss'

class EmailList extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        let hashtag = 'novelajesus123'
        let count = 40

        let url = `http://localhost:3000/api/search/${hashtag}&${count}`
        axios.get(url)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Email />
        )
    }
}

export default EmailList