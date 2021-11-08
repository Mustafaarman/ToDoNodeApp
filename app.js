const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const list = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get("/", function(req, res) {
	let day = date.getDate();
	 res.render('index', {kindofday: day, lists: list});
})

app.post("/", function(req1, res1) {
	let newItem = req1.body.task;
	list.push(newItem);
	res1.redirect("/")
})

app.listen(3000, function() {
	console.log("server is runnig on 3000 port");
})