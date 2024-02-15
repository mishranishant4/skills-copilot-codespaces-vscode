// create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// array of comments
const comments = [
    {id: 1, body: 'comment1'},
    {id: 2, body: 'comment2'},
    {id: 3, body: 'comment3'}
];

// get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// get comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

// create new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        body: req.body.body
    };
    comments.push(comment);
    res.send(comment);
});

// update comment
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    comment.body = req.body.body;
    res.send(comment);
});

// delete comment
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
```

### 2. Test the API using Postman
- Open Post