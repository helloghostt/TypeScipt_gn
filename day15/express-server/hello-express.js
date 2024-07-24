const url = require('url');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log(`Server is running on port :use ${port}`);
    console.log("익스프레스로 라우터 리팩토링하기")
});

// Router Refactoring
app.get('/', (_,res) => res.end("Home"));
app.get('/user',user) 
app.get('/feed', feed)

//callback function
function user(req, res) {
    const user = url.parse(req.url,true).query;
    res.json(`[user] name :  ${user.name}, age: ${user.age}`);
}

function feed(_, res) {
    res.json(`<ul>
        <li>picture</li>
        <li>video</li>
        <li>article</li>
        </ul>`);
    }

// app.get('/', (req, res) => {
//     res.set('Content-Type', 'text/html; charset=utf-8');
//   res.end('Hello Express!');
// });

