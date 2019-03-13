/**
 * the manifest.js defines the properties of the ufp-module
 * @type {{name: string}}
 */
import {ReactRunfest} from 'ufp-core/lib/modules/ufp-react'
import {ConfigRunfest} from 'ufp-core/lib/modules/config'
import AppCreatorFunction from './view/AppCreatorFunction'
import TodoReducer from './model/TodoReducer'

const Runfest = {
    name: '001-ufp-minimal-request-app',
    description: 'Example Ufp Application, configures middleware and loads static .json file into configuration reducer',

    onRegistered: ({UfpCore}) => {
        /**
         * register our app specific react component to the ufp-react module
         */
        ReactRunfest.register({
            rootNode: document.getElementById('root'),
            appCreatorFunction: AppCreatorFunction
        })

        UfpCore.registerReducer({
            id: config.REDUCER_NAME,
            reducer: TodoReducer

        })

        /**
         * register the ufp-react module to ufp-cre (declaring that we want to actually use it
         */
        UfpCore.registerRunfest(ReactRunfest)

        /**
         * for now we need ufpconfig to have at least one reducer in our state
         */
        UfpCore.registerRunfest(ConfigRunfest)
    }

}

export default Runfest
