import React from 'react'
import TodoForm from './TodoForm'
import TodosDisplayTotalCount from './TodosDisplayTotalCount'
import Todos from './Todos'

const TodoModule = () => (
    <div >
        <div >
            <h3 >Ufp Example Todo Application</h3 >
            <p >This component uses react/html only components for rendering the view</p >
            <TodosDisplayTotalCount />
            <TodoForm />
        </div >
        <div >
            <Todos />
        </div >
    </div >
)
export default TodoModule
