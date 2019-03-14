import {connect} from 'react-redux'
// import {UfpFormattedMessage} from 'core/ufp/intl'
import TodoActionCreators from '../controller/TodoActionCreators'

/**
 * uTILITY wRAPPER CLASS, calling
 *
 * this connector resolves props.resourceId and props.resourceName to a data object
 * with method to work with the object
 *
 */

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    addTodo: TodoActionCreators.addTodo,
    deleteTodo: TodoActionCreators.deleteTodo,
    markTodo: TodoActionCreators.markTodo
}

export default connect(mapStateToProps, mapDispatchToProps)

