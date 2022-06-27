import {ue, ue5, capitalize} from './unreal'

/**
 * A plugin that abstracts communication between a Web UI browser (https://tracerinteractive.com/plugins/webui) and 
 * Unreal Engine.  This will take all items inside a Pinia state and create Pinia actions that will send data to Unreal
 * and window.ue.interface listeners that will update said Pinia state -- which will then trigger Vue updates.
 */
export default ({ store, options }) => {
    if (!options.useUnreal) {
        return false
    }

    // Get the actual name of the store by stripping off whatever suffix is appended to the store id.
    // Also, memoize it as upper-case since we'll be appending state names to it for our methods.
    const suffix = options.suffix || 'Store'
    const storeName = capitalize(store.$id.replace(suffix, ''))

    /**
     * addRequest -- creates a store action that will send data to Unreal when invoked
     * @param {String} key -- the name of the state property we'll be using to create our method
     */
    const addAction = (key) => {
        const newKey = `set${storeName}${capitalize(key)}`
        const cb = typeof store[newKey] === 'function' ? store[newKey] : () => {}

        const method = data => {
            //Let's make sure our data is up-to-date
            if (store.$state[key] !== data) {
                store.$state[key] = data
            }
            cb(data)
            ue5(newKey, data)
        }

        store[newKey] = method
    }

    /**
     * addInterface -- creates a listener for Unreal to send data to the UI
     * @param {String} key 
     */
    const addInterface = (key) => {
        const newKey = `update${storeName}${capitalize(key)}`
        ue.interface[newKey] = (data) => {
            store.$state[key] = data
        }
    }
    
    // Loop through all the state entries and create our methods that will interact with Unreal
    for (const [k] of Object.entries(store.$state)) {
        addAction(k)
        addInterface(k)
    }

    // Append the Unreal object to window so UE4/UE5 can invoke its callbacks
    if (window) {
        window.ue = ue
    }
    return {}
};