import React, {Component, PropTypes} from 'react'
import NavLink from 'NavLink'

export default class Day extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let {day_value, day, has_events} = this.props

        let dayClass = ''

        if (day_value == day) {
            dayClass = 'dayContainer--active'
        }

        if (has_events == true) {
            dayClass = 'dayContainer--event'
        }

        return (
            <div className={`dayContainer ${dayClass}`}>
                <NavLink to={`/${day_value}/events`}>{day_value}</NavLink>
            </div>
        )
    }
}

Day.propTypes = {
    day_value: PropTypes.number,
    has_events: PropTypes.bool
}