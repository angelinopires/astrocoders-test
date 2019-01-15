import React, { Component } from 'react'
import Email from './Email'
// import axios from 'axios'

const EmailList = props => {
    const newArray = props.emails.map((email, index) => <Email key={index} item={email} />)

    return (
        <aside className="emails">
            <ul className="emails__list">{newArray}</ul>
        </aside>
    )
}

export default EmailList

// class EmailList extends Component {
//     constructor() {
//         super()
//         this.state = {
//             EmailList: []
//         }
//     }

//     componentDidMount() {
//         let hashtag = 'mars'
//         let count = 40

//         let url = `http://localhost:3000/api/search/${hashtag}&${count}`
        
//         axios.get(url)
//             .then(response => {
//                 this.setState({
//                     EmailList: response.data.statuses
//                 })
//                 console.log(this.state.EmailList)
//             })
//             .catch(error => console.log(error))
//     }

//     render() {
//         const newArray = this.state.EmailList.map((email, index) => <Email key={index} item={email} />)

//         return (
//             <aside className="emails">
//                 <ul className="emails__list">{newArray}</ul>
//             </aside>
//         )
//     }
// }

// export default EmailList