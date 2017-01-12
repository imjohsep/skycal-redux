import React, {Component, PropTypes} from 'react'
import NavLink from 'NavLink'

export default class Day extends Component {

    constructor(props) {
        super(props)
        this.selectDay = this.props.selectDay.bind(this)
    }

    render() {
        let {
            year,
            month,
            day,
            day_value,
            has_events,
            selected
        } = this.props

        let dayClass = ''
        let thisDay = year.toString().concat('-', month, '-', day_value)

        if (selected == thisDay) {
            dayClass = 'dayContainer--active'
        }

        if (has_events == true && selected != thisDay) {
            dayClass = 'dayContainer--event'
        }

        return (
            <div className={`dayContainer ${dayClass} calendarNav-link`} onClick={() => this.selectDay(this.props.year, this.props.month, this.props.day_value)}>
                <div>{day_value}</div>
            </div>
        )
    }
}

Day.propTypes = {
    day_value: PropTypes.number,
    has_events: PropTypes.bool
}