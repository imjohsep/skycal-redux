import React from 'react';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Month = React.createClass({
    render() {
        const currentMonth = this.props.month;
        const monthName = {};
        const currentMonthName = monthNames[this.props.month];
        return (
            <div>
                {currentMonthName}
            </div>
        )
    }
});

export default Month;