import React from 'react'
import TodoModule from '../../../todos/view/components/material_ui/TodoModule'
import TodoModuleReact from '../../../todos/view/components/react_only/TodoModule'

const App = () => (<div style={{
        display: 'flex'
    }} >
        <div   style={{
            width: '50%'
        }}>

        <TodoModule />
    </div >
        <div style={{
            width: '50%'
        }} >
        <TodoModuleReact />
    </div >
    </div >
)

export default App
