const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios")
const rpcCreds = process.env.ZCASH_RPC_CREDS;
const creds = 'Basic ' + Buffer.from(rpcCreds).toString('base64').trim()
const {canGetTx, saveTx, addTxId} = require("./transactions/transaction-model")
const sleep = require("./helpers/sleep")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));


server.get("/", (req,res) => {
    res.json({message: "Server is up and running"})
})

module.exports = server;
