// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeEvent = event => {
    // console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachDest =>
      eachDest.name.includes(searchInput),
    )
    return (
      <div className="container">
        <div className="content-container">
          <h1>Destination Search</h1>
          <div className="search">
            <input
              type="search"
              onChange={this.onChangeEvent}
              value={searchInput}
            />
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="list-container">
            {searchResult.map(eachItem => (
              <DestinationItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
