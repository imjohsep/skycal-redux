import React, {Component, PropTypes} from 'react'
import Day from 'Day'

export default class Week extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let week = this.props.week

        var days = week.map((dayNode, i) => {
            let {month, year, events} = this.props
            let builtDate = year.toString().concat('-', month+1, '-', dayNode)
            let has_events = events.hasOwnProperty(builtDate)
            return (
                <Day key={i} day_value={dayNode} has_events={has_events} {...this.props}/>
            )
        })

        return (
            <div className='weekContainer'>
                { days }
            </div>
        )
    }
}