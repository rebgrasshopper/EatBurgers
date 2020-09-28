//dependencies
const express = require("express");
const handlebars = require("express-handlebars");

//app settings
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
const routes = require("./controllers/controller");
app.use(routes);


//listen
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});