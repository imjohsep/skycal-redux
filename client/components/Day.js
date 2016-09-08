import React from 'react';

const Day = React.createClass({
    render() {
        let val = this.props.val
        var divStyle = {
            
        }
        var isActive;
        if (this.props.val == this.props.day) {
            console.log(this.props)
            isActive = {
                width: '20px',
                backgroundColor: 'red'
            }
        } else {
            isActive = {
                width: '20px'
            }
        } 
        return (
            <div style={isActive}>
                {val}
            </div>
        )
    }
});

export default Day;
