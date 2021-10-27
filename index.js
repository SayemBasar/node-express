const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3066;

app.get('/', (req, res) => {
    res.send('Hi I am excited learning node js and express with nodemon');
});

const users = [
    { id: 0, name: 'sayem', email: 'sayem@gmail.com' },

    { id: 1, name: 'sayem', email: 'sayem@gmail.com' },

    { id: 2, name: 'basar', email: 'basar@gmail.com' },

    { id: 3, name: 'abu', email: 'abu@gmail.com' },

    { id: 4, name: 'saad', email: 'saad@gmail.com' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(result);
    }
    else {
        res.send(users);
    }

});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('heating the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/food', (req, res) => {
    res.send(['chicken', 'beef', 'biriyani']);
})

app.get('/food/chicken/fry', (req, res) => {
    res.send('i love chicken fry');
})

app.listen(port, () => {
    console.log('listening to port', port);
})