// Helper styles for demo
import React from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TodosDisplayTotalCount from './TodosDisplayTotalCount'

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 3
    }
});
const TodoModule = ({classes}) => (

    <Grid container
          className={classes.root}
          spacing={24} >
        <Grid item
              xs={12} >

            <Typography variant="h3" >Ufp Example Todo Application</Typography >
            <Typography   >This components use React-Material-UI for rendering</Typography >

            <TodosDisplayTotalCount />
            <TodoForm />
        </Grid >
        <Grid item
              xs={12}
              sm={12} >

            <Todos />
        </Grid >

    </Grid >
)
export default withStyles(styles)(TodoModule)
