// Helper styles for demo
import React from 'react'
import TodoForm from './TodoForm'
import TodosDisplayTotalCount from './TodosDisplayTotalCount'
import Todos from './Todos'

const TodoModule = () => (

    <div >
        <div >

            <h3 >Ufp Example Todo Application</h3 >
            <TodosDisplayTotalCount />
            <TodoForm />
        </div >
        <div >

            <Todos />
        </div >

    </div >
)
export default TodoModule
