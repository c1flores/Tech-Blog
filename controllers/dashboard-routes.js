//Install dependenciesS
const router = require('express').Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth.js");

//Get dashboard view of all posts
router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: {
            userId: req.session.userId
        }
    })

    .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get ({ plain: true }));
        res.render("all-posts-admin", {
            layout: "dashboard",
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect("login");
    });
});

//Get dashboard view of new post
router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
        layout: "dashboard",
        loggedIn: req.session.loggedIn
    });
});

//Get dashboard view of edit post
router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render("edit-post", {
                    layout: "dashboard",
                    post,
                    loggedIn: req.session.loggedIn
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;