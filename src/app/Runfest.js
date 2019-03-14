/**
 * the runfest can be any module, hence our application brings in a runfest
 * defining its react environment, and providing the root component and the
 * html dom node id
 */
import {ReactRunfest} from 'ufp-core/lib/modules/ufp-react'
import AppCreatorFunction from './view/AppCreatorFunction'
import TodosRunfest from '../todos/Runfest'

const Runfest = {

    name: 'ufp-todo-example-app',
    description: 'Example Ufp Application, a in-memory todo application',

    onRegistered: ({UfpCore}) => {

        /**
         * register our own application runfest which handles all the view/actions for us
         */

        /**
         * register the ufp-react module to ufp-cre (declaring that we want to actually use it
         */
        UfpCore.registerRunfest(ReactRunfest)
        UfpCore.registerRunfest(TodosRunfest)

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
