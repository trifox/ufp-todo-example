import React from 'react'
import TodoModule from '../../../todos/view/components/material_ui/TodoModule'
import TodoModuleReact from '../../../todos/view/components/react_only/TodoModule'
import withRoot from '../../../withRoot'

const App = () => (<div >
        <TodoModule />
        <TodoModuleReact />
    </div >
)

export default withRoot(App)
