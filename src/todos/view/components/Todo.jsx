// Helper styles for demo
import React from 'react'
import PropTypes from 'prop-types'
import HOCTodoActions from '../HOCTodoActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Todo = ({todo, markTodo, deleteTodo}) => (
    <Grid container >
        <Typography>{todo.task}</Typography>

        <Button variant="contained"
                color="primary"
                type="button"
                className="outline"
                onClick={() => deleteTodo({todo})} >
            Delete
        </Button >
        <Button variant="contained"
                color="primary"
                type="button"
                className="outline"
                onClick={() => markTodo({todo})} >
            Mark Finished
        </Button >
    </Grid >
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
