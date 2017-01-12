import 'babel-polyfill'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from 'actions/actionCreators'
import Main from './main'
import store from 'store'

function mapStateToProps(state) {
    const date = new Date()

    return {
        selected: state.calendar.selected,
        year: state.calendar.year,
        month: state.calendar.month,
        day: state.calendar.day,
        data: state.calendar.data,
        tray: state.calendar.tray,
        trayActive: state.calendar.trayActive,
        events: state.calendar.events
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
