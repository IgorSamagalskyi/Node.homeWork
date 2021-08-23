// без hbs і рендерів
// Завдання 3 уроку
// 1. Встановити Postman, розыбратися як працює. Проклікати все з лекції
// 2. встановити та налаштувати Linter
// 3. Виконати попереднє дз але тепер розбити по роутах, контроллерах, сервісах.
// ! Всю роботу з файлами винести в сервіси
// Спробуйте реалізувати без рендерів та hbs, працюйте з постманом
const express = require('express');

const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = require('./config/variables');

const usersPath = path.join(__dirname, 'db', 'users.js');
module.exports = { usersPath };

const {
    loginRouter,
    userRouter,
    registerRouter
} = require('./router');

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/register', registerRouter);

// Home
app.get('/', (req, res) => res.json('Home page'));

// test page
app.get('/ping', (req, res) => res.json('Pong'));

// Port
app.listen(PORT, () => {
    console.log('app listen ', PORT);
});
