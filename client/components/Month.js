import React from 'react';
import Week from './Week';

const Month = React.createClass({ 
    render() {
        let nodes = this.props.calendar.matrix
        var weekNodes = nodes.map(function (node, i) {
            return (
                <Week key={i} weekDays={node}/>
            )
        })
        return (
            <div>
                { weekNodes }
            </div>
        )
    }
});

export default Month;