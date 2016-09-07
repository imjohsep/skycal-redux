import React from 'react';

const Day = React.createClass({
    render() {
        let val = this.props.val
        var divStyle = {
            width: '20px'
        }
        return (
            <div style={divStyle}>
                {val}
            </div>
        )
    }
});

export default Day;
