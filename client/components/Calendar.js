import React from 'react';
import Month from './Month';

const Calendar = React.createClass({
    render() {
        const months = [1,2,3,4,5,6,7,8,9,10,11,12];
        return (
            <div className="calendar-container">
                <Month month={this.props.month} />
            </div>
        )
    }
});


// {months.map((month, i) => <Month month={month} key={i} {...this.props} />)}

export default Calendar;
