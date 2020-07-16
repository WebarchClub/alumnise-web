require("dotenv").config();

//NOTE : USE NPM RUN DEV INSTEAD OF NPM RUN START

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const keys = require("../config");
const chalk = require("chalk");
let user = {};

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

var mailId;
passport.use(
    new LinkedInStrategy(
        {
            clientID: keys.LINKEDIN.clientID,
            clientSecret: keys.LINKEDIN.clientSecret,
            callbackURL: "http://localhost:3000/auth/linkedin/callback",
            scope: ["r_emailaddress", "r_liteprofile"],
        },
        function (accessToken, refreshToken, profile, done) {
            // console.log(chalk.cyan(JSON.stringify(profile))); // all the details of the user
            // profile.emails.forEach((email) => {
            //     mailId = email.value;
            // });
            // console.log(profile);
            // console.log(chalk.green(mailId)); //mail id
            user = { ...profile };
            return done(null, profile);
        }
    )
);

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get("/auth/linkedin", passport.authenticate("linkedin"));
app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin"),
    (req, res) => {
        res.redirect("/");
    }
);

app.get("/user", (req, res) => {
    console.log("getting user data");
    res.send(user);
});

app.get("/auth/logout", (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect("/");
});

const PORT = 5000;

app.listen(PORT);
