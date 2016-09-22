import 'babel-polyfill'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from 'actions/actionCreators'
import Main from 'Main'

function mapStateToProps(state) {
    const date = new Date();
    return {
        year: state.calendar.year,
        month: state.calendar.month,
        day: state.calendar.day,
        data: state.calendar.data,
        events: state.events.eventsByMonth[0].items
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
