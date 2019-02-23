//-this is my route my route file

//-- use require method for express module
const express = require("express");
//-require Json file data
const data = require("../data/data.json")
console.log(data)
//-Set Routes, use router constructor to create a  router
const router = express.Router();
//-redirct route to index
router.get("/",(req, res) =>{
  res.render("index")
});
//-An "about" route (/about) to render the "About" page
router.get("/about",(req, res) =>{
  res.render("about");
});
//-An "index" route (/) to render the "Home" page
router.get("/index",(req, res) =>{
  res.render("index");

  res.app.locals = data.projects;
});
//-Dynamic "project" routes (/project or /projects) based on the id of the project
 //-that render a customized version of the Pug project template to show off each project.
router.get("/project/:id", (req, res) => {
  //-const reference for json file data, pass in the projects property from the data.json
  const {projects} = data;
  //this variable represents the id of the project
  const { id } = req.params;

  res.render("project", {id, projects})
});

module.exports = router;
