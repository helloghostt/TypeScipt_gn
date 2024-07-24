const express = require('express');

const app = express();
let posts = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json(posts);
})
// app.get("/posts", (req, res) => {
//     res.json(posts);
// })

// app.get("/posts/:id", (req, res) => {
//     res.json(posts[id]);
// })

app.post("/post", (req, res) => {
    const {title, name, text} = req.body;
    posts.push({ id:posts.length+1, title, name, text, createdDt: Date() });
    res.json({title, name, text});
});

app.delete("/posts/:id", (req, res) => {
    const id= req.params.id;
    const filterdePosts = posts.filter((post) => post.id !== +id);
    const isLengthChanged = post.length !== filterdePosts.length;
    posts = filterdePosts;
    if (isLengthChanged) {
        res.json("OK");
        return;
    }
    res.json("Nnot Changed");
});

app.listen("3000",() => {
    console.log("posts START!");
})
