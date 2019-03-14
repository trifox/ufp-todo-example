import React from 'react'
import TodoModule from '../../../todos/view/components/TodoModule'
import withRoot from '../../../withRoot'

const App = () => (
    <div >
        <h1 >Ufp Example Todo Application</h1 >
        <TodoModule />
    </div >
)

export default withRoot(App)
