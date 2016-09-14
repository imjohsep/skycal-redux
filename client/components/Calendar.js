import React from 'react';
import Month from 'Month';
import { MONTH_NAMES } from 'constants';

const Calendar = React.createClass({
    render() {
        let boundNextClick = this.props.nextMonth.bind();
        let boundPrevClick = this.props.prevMonth.bind();
        const divStyle = {
            display: 'flex',
            flexDirection: 'row'
        }
        const divStyle2 = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
        let monthName = this.props.data.monthStr
        let year = this.props.data.year
        return (
            <div className="calendar-container" style={divStyle2}>
                <div>{monthName} {year}</div>
                <Month {...this.props} />
                <div style={divStyle}>
                    <div onClick={boundPrevClick}>Prev Month</div>
                    <div onClick={boundNextClick}>Next Month</div>
                </div>
            </div>
        )
    }
});

export default Calendar;
