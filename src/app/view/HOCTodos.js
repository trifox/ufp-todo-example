import {connect} from 'react-redux'
// import {UfpFormattedMessage} from 'core/ufp/intl'
import TodoSelectors from '../model/TodoSelectors'

/**
 * uTILITY wRAPPER CLASS, calling
 *
 * this connector resolves props.resourceId and props.resourceName to a data object
 * with method to work with the object
 *
 */

const mapStateToProps = (state) => ({

    todos: TodoSelectors.todosSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)

