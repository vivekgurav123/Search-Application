// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachItem} = this.props
    const {name, imgUrl} = eachItem
    // const {id} = uniqueKey

    return (
      <li className="item-container">
        <img className="dest-image" src={imgUrl} alt={name} />
        <p className="dest-name">{name}</p>
      </li>
    )
  }
}
export default DestinationItem
