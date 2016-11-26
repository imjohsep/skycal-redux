export function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        if (txt.length > 2) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
        else {
            return txt.substr(0).toLowerCase()
        }
    });
}