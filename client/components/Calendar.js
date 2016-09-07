import React from 'react';
import Month from './Month';
import { MONTH_NAMES } from '../constants';

const Calendar = React.createClass({
    render() {
        let boundNextClick = this.props.nextMonth.bind();
        let boundPrevClick = this.props.prevMonth.bind();
        let divStyle = {
            display: 'flex',
            flexDirection: 'row'
        }
        let divStyle2 = {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
        let monthName = MONTH_NAMES[this.props.calendar.month]
        let year = this.props.calendar.year
        return (
            <div className="calendar-container" style={divStyle2}>
                <div>{monthName} {year}</div>
                <Month {...this.props}/>
                <div style={divStyle}>
                    <div onClick={boundPrevClick}>Prev Month</div>
                    <div onClick={boundNextClick}>Next Month</div>
                </div>
            </div>
        )
    }
});

// {months.map((month, i) => <Month month={month} key={i} {...this.props} />)}

export default Calendar;
