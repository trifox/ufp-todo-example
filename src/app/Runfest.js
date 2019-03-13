/**
 * the manifest.js defines the properties of the ufp-module
 * @type {{name: string}}
 */
import {ReactRunfest} from 'ufp-core/lib/modules/ufp-react'
import AppCreatorFunction from './view/AppCreatorFunction'
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

        /**
         * register the ufp-react module to ufp-cre (declaring that we want to actually use it
         */
        UfpCore.registerRunfest(ReactRunfest)

        /**
         * register our app specific react component to the ufp-react module
         */
        ReactRunfest.register({
            rootNode: document.getElementById('root'),
            appCreatorFunction: AppCreatorFunction
        })
    }

}

export default Runfest
