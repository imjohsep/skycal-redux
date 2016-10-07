import React, {Component, PropTypes} from 'react'
import Day from 'Day'


export default class Week extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let week = this.props.week
        
        var days = week.map((day, i) => {
            let {month, year, events} = this.props
            let builtDate = year.toString().concat('-', month+1, '-', day)
            let has_events = events.hasOwnProperty(builtDate) 
            return (
                <Day key={i} day_value={day} has_events={has_events} {...this.props}/>
            )
        })

        var divStyle = {
            display: 'flex'
        }
        
        return (
            <div style={divStyle}>
                { days }
            </div>
        )
    }
}