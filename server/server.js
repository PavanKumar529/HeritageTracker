const express = require("express")
const dotenv = require("dotenv")


dotenv.config()

const PORT = process.env.PORT
const HostName = process.env.HOST_NAME

const app = express()



app.get("/", (req, res)=> {
    res.send("Hello, I am Demo")
})


app.listen(PORT, HostName, () => {
    console.log(`server running at http://${HostName}:${PORT}`);
    
})
