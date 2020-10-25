const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const { Person, HairColor } = require("./models");

//setup route middlewares
const csrfProtection = csrf({ cookie: true });

const app = express();

//View Engine
app.set("view engine", "pug");

//Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", async (req, res) => {
    const people = await Person.findAll({
        include: HairColor,
    });

    res.render("people-list", { people });
});

app.get("/new-person", csrfProtection, async (req, res) => {
    const person = Person.build();
    const hairColors = await HairColor.findAll();
    res.render("new-person", {
        person,
        hairColors,
        csrfToken: req.csrfToken(),
    });
});

//Server
const port = 8081;
app.listen(port, () => console.log(`App is listening on port ${port}...`));

/* Do not change this export. The tests depend on it. */
try {
    exports.app = app;
} catch (e) {
    exports.app = null;
}
