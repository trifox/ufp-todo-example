// Helper styles for demo
import React from 'react'
import PropTypes from 'prop-types'
import HOCTodos from '../HOCTodos'
import Todo from './Todo'
import Grid from '@material-ui/core/Grid'

const Todos = ({todos}) => {
    return (<Grid container >
            {(todos && todos.map && todos.map(todo => <Todo key={todo.id} todo={todo} />)) || null} </Grid >
    )
}
Todos.propTypes = {
    todo: PropTypes.array.isRequired
}

export default HOCTodos(Todos)
