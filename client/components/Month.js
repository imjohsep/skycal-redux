import React from 'react'
import Week from 'Week'

const Month = React.createClass({ 
    render() {
        let calendarMatrix = this.props.data.matrix
        var weeks = calendarMatrix.map((week, i) => {
            return (
                <Week key={i} week={week} {...this.props}/>
            )
        })
        return (
            <div>
                { weeks }
            </div>
        )
    }
})

export default Month