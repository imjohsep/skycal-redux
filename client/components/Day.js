import React, {Component, PropTypes} from 'react';
import NavLink from 'NavLink'

export default class Day extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let {day_value, day, has_events} = this.props
        
        var styles = {
            width: '20px'
        }

        if (day_value == day) {
            styles["backgroundColor"] = "red"
        }
        
        if (has_events == true) {
            styles["backgroundColor"] = "green"
        }

        return (
            <div style={styles}>
                <NavLink to={`/${day_value}/events`} className="eventListComponent-link">{day_value}</NavLink>
            </div>
        )
    }
}

Day.propTypes = {
    day_value: PropTypes.number,
    has_events: PropTypes.bool
}