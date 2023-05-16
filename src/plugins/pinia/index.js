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
    const actionPrefix = options.actionPrefix || 'set'
    const interfacePrefix = options.interfacePrefix || 'update'

    /**
     * addAction -- creates a store action that will send data to Unreal when invoked
     * @param {String} key -- the name of the state property we'll be using to create our method
     */
    const addAction = (key) => {
        // We'll be overwriting the method if it exists -- let's make a copy of it.  If it doesn't exist,
        // just create a NOP function.
        const newKey = `${actionPrefix}${storeName}${capitalize(key)}`
        const cb = typeof store[newKey] === 'function' ? store[newKey] : (() => {})

        const method = data => {
            // Invoke the method copy/NOP.
            cb(data)
            // Let's make sure our data is up-to-date.
            if (store.$state[key] !== data) {
                store.$state[key] = data
            }
            // Pass our data to Unreal.
            ue5(newKey, data)
        }

        // Assign the action to the store.
        store[newKey] = method
    }

    /**
     * addInterface -- creates a listener for Unreal to send data to the UI
     * @param {String} key 
     */
    const addInterface = (key) => {
        // Create a new callback method that Unreal can reference. If there's already a method
        // defined, use that instead.
        const newKey = `${interfacePrefix}${storeName}${capitalize(key)}`
        const cb = typeof store[newKey] === 'function' ? store[newKey] : ((data) => {
            store.$state[key] = data
        })

        // Assign our new method as a property of this store. Then, assign it to ue.interface
        // since that is the object Unreal will reference.
        ue.interface[newKey] = store[newKey] = cb
    }
    
    // Loop through all the state entries and create our methods that will interact with Unreal
    for (const [k] of Object.entries(store.$state)) {
        addAction(k)
        addInterface(k)
    }

    // Append the Unreal object to window so UE4/UE5 can invoke its callbacks
    if (window) {
        window.ue = {
            ...window.ue,
            ...ue
        }
    }
    store.ue5 = ue5
    return { }
};