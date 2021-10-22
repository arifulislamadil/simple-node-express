const express = require('express');
const cors = require('cors')

const app = express();


app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("you are not working")
});


const users = [
    { 'id': 0, name: 'Shabana', 'email': 'shabana@gmail.com', 'phone': '+8238278282872' },
    { 'id': 1, name: 'Shabina', 'email': 'Shabina@gmail.com', 'phone': '+822872' },
    { 'id': 2, name: 'shamima', 'email': 'shamima@gmail.com', 'phone': '+8238278282872' },
    { 'id': 4, name: 'Shahida', 'email': 'Shahida@gmail.com', 'phone': '+82344872' }
]


app.get("/users", (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    } else {
        res.send(users)
    }
    res.send(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post');
    res.send('post got hitted', req.body);
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);

});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummay tok marka fazli');
})
app.listen(port, () => {
    console.log("listing to port", port)
});