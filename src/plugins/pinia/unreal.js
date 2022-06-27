export const ue = {};

const uuidv4 = function() {
    // RFC4122
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
};
export const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
export const ue5 = (function(register) {
    if (typeof ue.interface !== "object" || typeof ue.interface.broadcast !== "function") {
        // mobile
        ue.interface = {
            broadcast: () => {}
        };

        return function(name, data, callback, timeout) {
            if (typeof name !== "string")   return;

            if (typeof data == "function") {
                timeout  = callback;
                callback = data;
                data     = null;
            }

            var uuid = register(callback, timeout);
            var args = [name, "", uuid];

            if (typeof data != "undefined")     args[1] = data;

            var hash = encodeURIComponent(JSON.stringify(args));
            if (typeof history == "object" && typeof history.pushState == "function") {
                history.pushState({}, "", "#" + hash);
                history.pushState({}, "", "#" + encodeURIComponent("[]"));
            } else {
                document.location.hash = hash;
                document.location.hash = encodeURIComponent("[]");
            }
        };
    }

    return (function(intf) {
        // desktop
        // ue.interface = {};
        intf = intf || {};

        return function(name, data, callback, timeout) {
            if (typeof name !== "string") return;

            if (typeof data === "function") {
                timeout  = callback;
                callback = data;
                data     = null;
            }

            var uuid = register(callback, timeout);

            if (typeof data !== "undefined") intf.broadcast(name, JSON.stringify(data), uuid);
            else                             intf.broadcast(name, "", uuid);
        };
    })(ue.interface);
})(function(callback, timeout) {
    if (typeof callback !== "function")
        return "";

    var uuid = uuidv4();
    ue.interface[uuid] = callback;

    setTimeout(function() {
        delete ue.interface[uuid];
    },
    1000 * Math.max(1, parseInt(timeout) || 0));

    return uuid;
});