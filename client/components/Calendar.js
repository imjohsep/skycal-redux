import React, {Component, PropTypes} from 'react'
import Month from 'Month'
import Test from 'Test'
import { MONTH_NAMES } from 'constants'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchEvents(this.props.month)
    }

    render() {
        let boundNextClick = this.props.fetchNextMonth.bind()
        let boundPrevClick = this.props.fetchPrevMonth.bind()
        const divStyle = {
            display: 'flex',
            flexDirection: 'row'
        }
        const divStyle2 = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }

        let monthName = this.props.data.monthStr
        let year = this.props.data.year

        // let events = this.props.events.eventsByMonth[this.props.month].items
        let events = this.props.events
        
        // Temp Stuff
        let eventNodes = Object.keys(events).map(function (dayKey) {
            return events[dayKey].map(function(event) {
                return (
                    <Test key={event.uid} date={event.occurrence_at} description={event.description}>
                        {event.occurrence_at} {event.description}
                    </Test>
                )
            })
        })

        return (
            <div className="calendar-container" style={divStyle2}>
                <div>{monthName} {year}</div>
                <Month {...this.props} />
                <div style={divStyle}>
                    <div onClick={boundPrevClick}>Prev Month</div>
                    <div onClick={boundNextClick}>Next Month</div>
                </div>
            </div>
        )
    }
}