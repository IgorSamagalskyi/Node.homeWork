const { fsUsers } = require('../services');

const { createNewUser, readAllUsers } = fsUsers;

module.exports = {
    getLogin: (req, res) => {
        res.json('enter your login and password');
    },

    getRegister: (req, res) => {
        res.json('page register');
    },

    postLogin: async (req, res) => {
        const users = await readAllUsers();
        const {
            name,
            password
        } = req.body;
        const nameUser = users.find((user) => user.name === name);
        const namePassword = users.find((user) => user.password === password);

        if (nameUser.name && namePassword.password) {
            const userId = users.findIndex((user) => nameUser.name === user.name && nameUser.password === user.password);
            res.redirect(`/users/${userId}`);
        }
        res.json('Register, or enter the correct password and name');
    }
};
