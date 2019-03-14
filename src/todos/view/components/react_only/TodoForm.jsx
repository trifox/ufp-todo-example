// Helper styles for demo
import React from 'react'
import {Formik} from 'formik'
import HOCTodoActions from '../../HOCTodoActions'

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
                    <div >
                        <div >
                            <input id="task"
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
                        </div >
                        <div >
                            <button variant="contained"
                                    color="secondary"

                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting} >
                                Reset
                            </button >

                            <button color="primary"
                                    type="submit"
                                    disabled={isSubmitting} >
                                Submit
                            </button >
                        </div >

                    </div >
                </form >
            )
        }}
    </Formik >

)

export default HOCTodoActions(TodoForm)
