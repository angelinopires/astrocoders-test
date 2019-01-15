import React from 'react'

const Header = props => {
    return (
        <header>
            <fieldset>
                <label>Filter your Messages:</label>
                <input 
                    type="Text"
                    name="search"
                    placeholder="Search tweets by hashtag"
                    onChange={props.handleChange} 
                />
            </fieldset>
        </header>
    )
}

export default Header

// class Header extends Component {
//     constructor() {
//         super()
//         this.state = {
//             search: ""
//         }

//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({ [name]: value })

//         return console.log(this.state.search)
//     }

//     render() {
//         return (
//             <header>
//                 <fieldset>
//                     <label>Filter your Messages:</label>
//                     <input 
//                         type="Text"
//                         name="search"
//                         placeholder="Search tweets by hashtag"
//                         onChange={this.handleChange} 
//                     />
//                 </fieldset>
//             </header>
//         )
//     }
// }

// export default Header
