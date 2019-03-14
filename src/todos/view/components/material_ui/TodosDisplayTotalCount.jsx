// Helper styles for demo
import React from 'react'
import PropTypes from 'prop-types'
import HOCTodos from '../HOCTodos'

const TodosDisplayTotalCount = ({todos}) => {
    return (<div >
            Total Todos: {(todos && todos.length) || 0}
        </div >
    )
}
TodosDisplayTotalCount.propTypes = {
    todo: PropTypes.array.isRequired
}

export default HOCTodos(TodosDisplayTotalCount)
