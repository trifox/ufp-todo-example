import React from 'react'
import PropTypes from 'prop-types'
import HOCTodos from '../../HOCTodos'

const TodosDisplayTotalCount = ({todosCount}) => {
    return (<div >
            Total Todos: {todosCount}
        </div >
    )
}
TodosDisplayTotalCount.propTypes = {
    todosCount: PropTypes.number.isRequired
}

export default HOCTodos(TodosDisplayTotalCount)
