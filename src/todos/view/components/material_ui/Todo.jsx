// Helper styles for demo
import React from 'react'
import PropTypes from 'prop-types'
import HOCTodoActions from '../../HOCTodoActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Todo = ({todo, markTodo, deleteTodo}) => (

    <Grid container
          spacing={8} >
        <Grid item
              xs={8} >
            <Typography >{todo.task}</Typography >
        </Grid >

        <Grid item
              xs={2} >
            <Button variant="contained"
                    color="primary"
                    type="button"
                    fullWidth
                    className="outline"
                    onClick={() => deleteTodo({todo})} >
                Delete
            </Button >
        </Grid >
        <Grid item
              xs={2} >
            <Button variant="contained"
                    color={todo.mark ? 'success' : 'primary'}
                    type="button"
                    fullWidth
                    className="outline"
                    onClick={() => markTodo({todo})} >
                {todo.mark ? 'finished' : 'finish'}
            </Button >
        </Grid >
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
