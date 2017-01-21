import React, {Component, PropTypes} from 'react'
import Month from 'Month'
import Tray from 'Tray'
import { MONTH_NAMES } from 'constants'
import 'styles/calendar.sass'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {monthStr: '', year: null, events: {}}
        this.fetchNextMonth = this.props.fetchNextMonth.bind(this)
        this.fetchPrevMonth = this.props.fetchPrevMonth.bind(this)
        this.toggleTray = this.props.toggleTray.bind(this)
    }

    componentWillMount() {
        this.props.fetchEvents(this.props.year, this.props.month)
        this.props.selectDay(this.props.year, this.props.month, this.props.day)
    }

    componentWillReceiveProps(nextProps) {
        this.monthStr = nextProps.data.monthStr
        this.year = nextProps.data.year
        this.events = nextProps.events
    }

    render() {
        return (
            <div className="calendarContainer">
                <Tray events={this.props.tray}/>
                <div className="calendarContainer--calendar">
                    <h1>{this.monthStr} {this.year}</h1>
                    <div className="calendarNav">
                        <div className="calendarNav-link" onClick={this.fetchPrevMonth}>Prev Month</div>
                        <div className="calendarNav-link" onClick={this.fetchNextMonth}>Next Month</div>
                    </div>
                    <Month {...this.props} />
                </div>
            </div>
        )
    }
}