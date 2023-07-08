const express = require("express")
const app = express()

require('dotenv').config()



app.use(express.urlencoded({extend: false}))
app.use(express.json())

app.listen("5000", () => {
    console.log("Backend is running.")
})

