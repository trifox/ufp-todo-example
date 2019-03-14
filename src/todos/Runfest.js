/**
 * the runfest js defines the runfest to be used for registering against ufp-core
 * @type {{name: string}}
 */
import TodoReducer from './model/TodoReducer'
import TodoConstants from './model/TodoConstants'

const Runfest = {

    name: 'ufp-todo-example-app',
    description: 'Example Ufp Application, a in-memory todo application',

    onRegistered: ({UfpCore}) => {

        /**
         * register our own application runfest which handles all the view/actions for us
         */
        UfpCore.registerReducer({
            id: TodoConstants.REDUCER_NAME,
            reducer: TodoReducer
        })

    }

}

export default Runfest
