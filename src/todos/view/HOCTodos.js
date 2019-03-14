import {connect} from 'react-redux'
import TodoSelectors from '../model/TodoSelectors'

/**
 * this higher order component is used to inject the todos result array
 * into the properties of an component
 *
 * usage:
 *
 * import HOCTodos from '...HOCTodos'
 * ... component definition ...
 * export default HOCTodos(Component)
 */

const mapStateToProps = (state) => ({

    todosCount: TodoSelectors.todosCountSelector(state),
    todos: TodoSelectors.todosSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)

