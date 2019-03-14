/**
 * the app entry point, import ufp-core and register the main runfest,
 * after that ufp-core is initialised with UfpCore.startupUfpCore() that executes
 * all the runtime dependencies defined in the runfests
 */

import UfpCore from 'ufp-core'
import UfpDemoApp from './app/Runfest'

UfpCore.registerRunfest(UfpDemoApp)
UfpCore.startupUfpCore()
