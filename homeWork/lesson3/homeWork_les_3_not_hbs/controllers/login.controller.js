const users = require('../db/users');

module.exports = {
    getLogin: (req, res) => {
        res.json('page auth');
    },

    postLogin: (req, res) => {
        const { name, password } = req.body;
        const nameUser = users.find((user) => user.name === name);
        const namePassword = users.find((user) => user.password === password);

        if (nameUser.name && namePassword.password) {
            // eslint-disable-next-line array-callback-return
            const userId = users.find((user, i) => {
                if (nameUser.name === user.name && nameUser.password === user.password) {
                    i += 1;
                    // eslint-disable-next-line no-unused-expressions
                    i === 1 ? i : i - 1;
                    return i;
                }
            });
            res.status(200).json(userId);
        }
        res.json('Register, or enter the correct password and name');
    }
};
