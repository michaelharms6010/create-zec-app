const db = require("../data/db-config")

// caching layer - received and sent tx's should be saved here

module.exports = {
    save,
}

async function save(newTx) {
    newTx.datetime = Math.floor(Date.now() / 1000) 

    try {
        tx = await db("transactions").insert(newTx)
    } catch(err) {
        `echo ${err} >> error.log`
        console.log(err)
    }
    return tx
}