function clearTBody(tBody) {
    if (tBody == undefined) {
        // If the tBody is not provided,
        // we get the first from the the first table.

        let tables = document.body.getElementsByTagName('table'); // Gets the tables

        if (tables.length == 0) {
            console.warn('clearTBody was called, but no table was found in the document.');
            return;
        }

        let table = tables[0]; // Gets the firt table
        let tBodies = table.tBodies; // Gets the tBodies

        if (tBodies.length == 0) {
            console.warn('clearTBody was called, but the first table found in the document has no tTbody.');
            return;
        }

        tBody = tBodies[0]; // Gets the first tBody
    }

    tBody.innerHTML = ""; // Clean the context of tBody
}