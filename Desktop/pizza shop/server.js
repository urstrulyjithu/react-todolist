const express = require("express")
const app = express()

const ejs = require("ejs")
const path = require("path")
const expressLayout = require("express-ejs-layouts")

const PORT = process.env.PORT || 3000 

const log = console.log

app.get("/" , (req , res) => {
	res.render("home")
})

app.use(expressLayout)
app.set("views" ,path.join(__dirname ,  "/resources/views") )
app.set("view engine" , "ejs")


app.listen(PORT , () => {
	log("server started")
})