import React from 'react'
import PropTypes from 'prop-types'
import HOCTodoActions from '../../HOCTodoActions'
import Typography from '@material-ui/core/Typography'

const Todo = ({todo, markTodo, deleteTodo}) => (

    <div >
        <div >
            <Typography >{todo.task}</Typography >
        </div >
        <span >
            <button
                    color="primary"
                    type="button"

                    className="outline"
                    onClick={() => deleteTodo({todo})} >
                Delete
            </button >
        </span >
        <span >
            <button
                    color={todo.mark ? 'success' : 'primary'}
                    type="button"

                    className="outline"
                    onClick={() => markTodo({todo})} >
                {todo.mark ? 'finished' : 'finish'}
            </button >
        </span >
    </div >
)
Todo.propTypes = {
    markTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        mark: PropTypes.bool.isRequired,
        task: PropTypes.string.isRequired
    })

}
export default HOCTodoActions(Todo)
