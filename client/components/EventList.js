import React, {PropTypes, Component} from 'react'

import Event from 'Event'
import $ from 'jquery'
// import '../styles/event-list.sass'
import NavLink from 'NavLink'

export default class EventList extends Component {
  constructor () {
    super()
    this.state = {events: []}
  }
  
  componentWillMount() {
    this.loadUpcomingEvents()
  }

  loadUpcomingEvents () {
    $.ajax({
      url: '/api/events/upcoming',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({events: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error('/api/events/upcoming', status, err.toString())
      }.bind(this)
    })
  }

  render () {
    var eventNodes = this.state.events.map(function (event) {
      return (
        <Event key={event._id} date={event.occurrence_at} description={event.description}>
          {event.occurrence_at} {event.description}
        </Event>
      )
    })

    return (
      <div className='eventListComponent'>
        {eventNodes}
        <hr className='desktopOnly' />
        <NavLink to="/calendar" className="eventListComponent-link">More Events</NavLink>
      </div>
    )
  }
}
