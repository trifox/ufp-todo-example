import React from 'react'
import PropTypes from 'prop-types'
import HOCTodos from '../../HOCTodos'
import Typography from '@material-ui/core/Typography'

const TodosDisplayTotalCount = ({todosCount}) => {
    return (<Typography >
            Total Todos: {(todosCount) || 0}
        </Typography >
    )
}
TodosDisplayTotalCount.propTypes = {
    todosCount: PropTypes.number.isRequired
}

export default HOCTodos(TodosDisplayTotalCount)
