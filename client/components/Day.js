import React from 'react';

const Day = React.createClass({
    render() {
        const dayId = this.props.params.dayId; 
        return (
            <div className="day-container">
                Day Id: {dayId}
            </div>
        )
    }
});

export default Day;
