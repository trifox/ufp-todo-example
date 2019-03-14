import React from 'react'
import PropTypes from 'prop-types'
import HOCTodos from '../../HOCTodos'
import Typography from '@material-ui/core/Typography'

const TodosDisplayTotalCount = ({todos}) => {
    return (<Typography >
            Total Todos: {(todos && todos.length) || 0}
        </Typography >
    )
}
TodosDisplayTotalCount.propTypes = {
    todo: PropTypes.array.isRequired
}

export default HOCTodos(TodosDisplayTotalCount)
