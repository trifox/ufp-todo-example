// Helper styles for demo
import Button from '@material-ui/core/Button'
import React from 'react'
import {Formik} from 'formik'
import TextField from '@material-ui/core/TextField'
import HOCTodoActions from '../HOCTodoActions'

const TodoForm = ({addTodo}) => (
    <div >
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
                        <label htmlFor="todo"
                               style={{display: 'block'}} >
                            Todo
                        </label >
                        <TextField id="task"
                                   placeholder="Enter a new Todo"
                                   type="text"
                                   value={values.task}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={
                                       errors.task && touched.task ? 'text-input error' : 'text-input'
                                   } />
                        {errors.task &&
                        touched.task && <div className="input-feedback" >{errors.task}</div >}

                        <Button variant="contained"
                                color="primary"
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

                    </form >
                )
            }}
        </Formik >

    </div >
)

export default HOCTodoActions(TodoForm)
