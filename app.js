const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const usersRoutes = require("./routes/users");
const publicRoutes = require("./routes/public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoutes);
app.use(publicRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found!!</h1>");
});

app.listen(3000);
