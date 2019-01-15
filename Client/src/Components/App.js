import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import EmailList from './EmailList'

class App extends Component {
    constructor() {
        super()
        this.state = {
            EmailList: [],
            search: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const hashtag = 'mars'
        const count = 40
        const url = `http://localhost:3000/api/search/${hashtag}&${count}`
        
        axios.get(url)
            .then(response => {
                this.setState({EmailList: response.data.statuses})
                console.log(this.state.EmailList)
            })
            .catch(error => console.log(error))
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <section id="gmail">
                <Header handleChange={this.handleChange} />
                <aside className="menu">Menu</aside>
                <EmailList emails={this.state.EmailList}/>
            </section>
        )
    }
}

export default App
