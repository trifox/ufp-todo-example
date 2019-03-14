import React from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import withRoot from '../../../withRoot'

const App = () => (
    <div>
        <h1>Ufp Example Todo Application</h1>
        <TodoForm/>
        <Todos/>
    </div>
)

export default withRoot(App)
