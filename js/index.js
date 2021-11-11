function clearTBody(tBody) {

    if (tBody == undefined) {
        // If the tBody is not provided,
        // we get the first from the the first table.

        let tables = document.body.getElementsByTagName('table'); // Gets the tables.
        let table = tables[0]; // Gets the firt table.
        let tBodies = table.tBodies; // Gets the tBodies.
        tBody = tBodies[0]; // Gets the first tBody.
    }

    tBody.innerHTML = ""; // Clear the content of tBody.
}