// Helper styles for demo
import React from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

import Grid from '@material-ui/core/Grid'

const TodoModule = () => (
    <Grid container
          spacing={24} >
        <Grid item
              xs={12} >
            <TodoForm />
        </Grid >
        <Grid item
              xs={12}
              sm={6} >

            <Todos />
        </Grid >

    </Grid >
)
export default TodoModule
