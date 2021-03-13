
isTestnet = true // get conf details here

async function sendZcash(zaddr, amount) {
    let r;
    try {
        r = await axios({
            method: 'post',
            url: isTestnet ? "http://localhost:18232" : "http://localhost:8232",
            headers: {
                "Authorization": creds, 
                'content-type': "application/json"
            }, 
            data: {
                "jsonrpc": "1.0",
                "id":"curltest", 
                "method": "z_sendmany", 
                "params": [process.env.MASTER_ZADDR, [{"address": zaddr ,"amount": amount }]] 
            }
        })
        console.log(r)
        return r
    } catch (err) {
        console.log(err.response.data.error)
    }
}

async function getStatus(opid) {
    let r;
    try {
        r = await axios({
            method: 'post',
            url: isTestnet ? "http://localhost:18232" : "http://localhost:8232",
            headers: {
                "Authorization": creds, 
                'content-type': "application/json"
            }, 
            data: {
                "jsonrpc": "1.0",
                "id":"curltest", 
                "method": "z_getoperationstatus", 
                "params": [[opid]] 
            }
        })
        console.log(r.data.result.status)
        return r
    } catch (err) {
        console.log(err.response.data.error)
    }
}