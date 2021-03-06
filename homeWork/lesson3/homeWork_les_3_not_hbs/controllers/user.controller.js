const { fsUsers } = require('../services');

const { createNewUser, readAllUsers } = fsUsers;

module.exports = {
    getUsers: async (req, res) => {
        const users = await readAllUsers();
        res.json( users );
    },

    postCreateUser: async (req, res) => {
        const users = await readAllUsers();
        const repeatEmail = users.find((user) => user.email === req.body.email);

        if (!repeatEmail) {
            users.push(req.body);
            await createNewUser(users);
            res.redirect('/login');
        }
        res.status(401).send('This email is already registered');
    },

    getUserId: async (req, res) => {
        const users = await readAllUsers();
        const { user_id } = req.params;
        const currentUser = users[user_id];

        if (!currentUser) {
            res.status(404).end('User Not Found');
            return;
        }
        res.json({ currentUser });
    }
};
