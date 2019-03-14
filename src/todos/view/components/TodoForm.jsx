// Helper styles for demo
import Button from '@material-ui/core/Button'
import React from 'react'
import {Formik} from 'formik'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import HOCTodoActions from '../HOCTodoActions'

const TodoForm = ({addTodo}) => (

    <Formik initialValues={{task: ''}}
            onSubmit={(values, {setSubmitting}) => {

                addTodo({todo: values})
                setSubmitting(false)

            }} >
        {props => {
            const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
            } = props
            return (
                <form onSubmit={handleSubmit} >
                    <Grid container > <Grid item
                                            xs={12} >
                        <TextField id="task"
                                   label="New Todo"
                                   placeholder="Enter a new Todo"
                                   type="text"
                                   fullWidth
                                   value={values.task}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={
                                       errors.task && touched.task ? 'text-input error' : 'text-input'
                                   } />
                        {errors.task &&
                        touched.task && <div className="input-feedback" >{errors.task}</div >}
                    </Grid >
                        <Grid container
                              xs={12} >
                            <Button variant="contained"
                                    color="secondary"

                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting} >
                                Reset
                            </Button >

                            <Button variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isSubmitting} >
                                Submit
                            </Button >
                        </Grid >

                    </Grid >
                </form >
            )
        }}
    </Formik >

)

export default HOCTodoActions(TodoForm)
