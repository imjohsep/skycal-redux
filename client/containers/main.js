import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
    render() {
        return (
            <div className="skycalBackground">
                <div className="skycalContainer">
                    <div>
                        {React.cloneElement(this.props.children, this.props)}
                    </div>
                </div>
            </div>
        )
    }
})

export default Main
