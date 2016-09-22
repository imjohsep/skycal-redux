import React from 'react'
import Day from 'Day'

const Week = React.createClass({
    render() {
        let week = this.props.week
        var days = week.map((day, i) => {
            return (
                <Day key={i} val={day} {...this.props}/>
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
})

export default Week;