const express = require("express")
const port = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
    //res.status(200).json({ "message": "hello world" })
    res.send("Hello world")
})

app.listen(port, () => {
    console.log("server run..." + port)
})