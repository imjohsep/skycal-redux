import React, {PropTypes, Component} from 'react'
import { capitalize } from '../helpers'
export default class Event extends Component {
  render () {
    return (
      <div className={`eventItem eventImage--${this.props.type}`}>
      	<div className='eventItem-text'>
        	<p>{this.props.date}</p>
        	<p>{capitalize(this.props.description)}</p>
        </div>
      </div>
    )
  }
}

Event.propTypes = { date: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    type: PropTypes.string.isRequired }
