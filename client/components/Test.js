import React, {PropTypes, Component} from 'react'

const Test = React.createClass({
    render() {
        return(
            <div className='eventItem'>
                {this.props.date} - {this.props.description}
            </div>
        )
    }
})

Test.propTypes = { date: PropTypes.string.isRequired,
                   description: PropTypes.string.isRequired }

export default Test