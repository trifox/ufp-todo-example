// Helper styles for demo

import React from 'react'
import {Formik} from 'formik'

const TodoForm = () => (
    <div >

        <Formik initialValues={{todo: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
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
                } = props;
                return (
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="todo"
                               style={{display: 'block'}} >
                            Todo
                        </label >
                        <input id="todo"
                               placeholder="Enter a new Todo"
                               type="text"
                               value={values.todo}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               className={
                                   errors.todo && touched.todo ? 'text-input error' : 'text-input'
                               } />
                        {errors.todo &&
                        touched.todo && <div className="input-feedback" >{errors.todo}</div >}

                        <button type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting} >
                            Reset
                        </button >
                        <button type="submit"
                                disabled={isSubmitting} >
                            Submit
                        </button >

                    </form >
                )
            }}
        </Formik >

    </div >
)

export default TodoForm
