import React from 'react'
import PropTypes from 'prop-types'
import HOCTodos from '../../HOCTodos'
import Todo from './Todo'

const Todos = ({todos}) => {
    return (
        (todos && todos.map && todos.map(todo =>
            <Todo key={todo.id}
                  todo={todo} />)) || null
    )
}
Todos.propTypes = {
    todo: PropTypes.array.isRequired
}

export default HOCTodos(Todos)
