require('@google-cloud/profiler').start();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let data = [];

// Global variable to count number of visitors.
let counter = 0;

app.get("/error", (req, res) => {
  data.push(req);
  data.push(res);
	console.log("Hit the endpoint that throws an error.");
	res.send("This threw an error");
	throw new Error("Throw an error");
});

app.get("/error1", (req, res) => {
  data.push(req);
  data.push(res);
	console.log("Hit the endpoint that throws an error.");
	res.send("This threw an error");
	throw new Error("Throw an error #1");
});

app.get("/error2", (req, res) => {
  data.push(req);
  data.push(res);
	console.log("Hit the endpoint that throws an error.");
	res.send("This threw an error");
	throw new Error("Throw an error #2");
});

app.get("/crash", (req, res) => {
  data.push(req);
  data.push(res);
	console.log("Hit the endpoint that crashes the app.");
	res.send("This crashed everything");
	setTimeout(function () {
		throw new Error("We crashed!");
	}, 5);
});

app.get("/crash1", (req, res) => {
  data.push(req);
  data.push(res);
	console.log("Hit the endpoint that crashes the app.");
	res.send("This crashed everything");
	setTimeout(function () {
		throw new Error("We crashed #1!");
	}, 5);
});

app.get("/crash2", (req, res) => {
  data.push(req);
  data.push(res);
	console.log("Hit the endpoint that crashes the app.");
	res.send("This crashed everything");
	setTimeout(function () {
		throw new Error("We crashed #2!");
	}, 5);
});

app.get("/", (req, res) => {
  for(let i = 0; i < 1000; i++) {
    data.push(req);
    data.push(res);
  }
	console.log({ message: "Hello from Express" });
	counter++;
	let random = Math.random();
	let luckyNumber = Math.floor(random*100); // Scale to 100. 
	res.send("The heap is growing: " + data.length +"! You are visitor number " + counter + " and your lucky number is " + luckyNumber + ".");
});


app.listen(port, () =>
	console.log(`Example app listening on port ${port}!`)
);
