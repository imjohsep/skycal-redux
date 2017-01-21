import React, {Component, PropTypes} from 'react'
import Event from 'Event'

export default class Tray extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        var eventNodes = null

        if (this.props.events.length > 0) {
            eventNodes = this.props.events.map((event) => {
                return (
                    <Event
                        key={event._id}
                        date={event.occurrence_at}
                        description={event.description}
                        type={event.type}>
                    {event.occurrence_at} {event.description}
                    </Event>
                )
            })
        } else {
            eventNodes = <div className="noEvents">No Events Found</div>
        }

        return(
            <div className="calendarContainer--tray">
                {eventNodes}
            </div>
        )
    }
}