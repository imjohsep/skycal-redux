import React from 'react';
import Day from './Day';

const Week = React.createClass({
    render() {
        let weekNode = this.props.weekDays
        
        var dayNodes = weekNode.map(function (node, i) {
            return (
                <Day key={i} val={node}/>
            )
        })
        var divStyle = {
            display: 'flex'
        }
        return (
            <div style={divStyle}>
                { dayNodes }
            </div>
        )
    }
});

export default Week;