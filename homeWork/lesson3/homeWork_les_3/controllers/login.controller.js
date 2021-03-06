const users = require('../db/users.json');

module.exports = {
    getLogin: (req, res) => {
        res.render('login.hbs', { users });
    },

    postLogin: (req, res) => {
        const { name, password } = req.body;
        const nameUser = users.find((user) => user.name === name);
        const namePassword = users.find((user) => user.password === password);

        if (nameUser.name && namePassword.password) {
            // eslint-disable-next-line array-callback-return
            const userId = users.findIndex((user) => nameUser.name === user.name && nameUser.password === user.password);
            res.redirect(`/users/${userId}`);
        }
        res.json('Register, or enter the correct password and name');
    }
};
