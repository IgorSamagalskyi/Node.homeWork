const users = require('../db/users.json');
const { fsUsers } = require('../services');

const { createNewUser, readAllUsers } = fsUsers;

module.exports = {
    getUsers: (req, res) => {
        res.render('users', { users });
    },

    postCreateUser: (req, res) => {
        const users2 = readAllUsers();
        console.log(users2, 'users2'); // чому показує undefined,дані не передаються з сервісів що я зробив не так?
        const repeatEmail = users.find((user) => user.email === req.body.email);

        if (!repeatEmail) {
            users.push(req.body);
            createNewUser(users);
            res.redirect('/login');
        }
        res.json('such an email already exists');
        res.redirect('/register');
    },

    getUserId: (req, res) => {
        const { user_id } = req.params;
        const currentUser = users[user_id];
        if (!currentUser) {
            res.status(404)
                .end('User Not Found');
            return;
        }
        console.log(currentUser, 'currentUser');
        res.render('currentUser', { currentUser });
    }
};
