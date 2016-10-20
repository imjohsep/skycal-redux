import React, {Component, PropTypes} from 'react'
import Month from 'Month'
import Test from 'Test'
import { MONTH_NAMES } from 'constants'
import 'styles/calendar.sass'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {monthStr: "", year: null, events: {}}
        this.fetchNextMonth = this.props.fetchNextMonth.bind(this)
        this.fetchPrevMonth = this.props.fetchPrevMonth.bind(this)
    }

    componentWillMount() {
        this.props.fetchEvents(this.props.month)
    }

    componentWillReceiveProps(nextProps) {
        this.monthStr = nextProps.data.monthStr
        this.year = nextProps.data.year
        this.events = nextProps.events
    }

    render() {
        return (
            <div className="calendarContainer">
                <div>{this.monthStr} {this.year}</div>
                <Month {...this.props} />
                <div className="monthContainer">
                    <div onClick={this.fetchPrevMonth}>Prev Month</div>
                    <div onClick={this.fetchNextMonth}>Next Month</div>
                </div>
            </div>
        )
    }
}