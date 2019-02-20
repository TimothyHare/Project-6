const express = require("express");

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());

app.use('/static',express.static('public'));

app.set("view engine", "pug");

const routes = require("./routes/index.js");

app.use(routes);

app.use((req, res, next) => {
  const error = new Error ("Not Found");
  error.status = 404;
  next(error);
});

app.use((error,req, res, next) => {
  res.local.error = error;
  res.render("error")
});


app.listen(3000, () => {
  console.log("App.listen works, The application is running on localhost:3000!")
});
