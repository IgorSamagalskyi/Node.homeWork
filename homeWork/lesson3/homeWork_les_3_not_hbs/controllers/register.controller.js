const fs = require('fs');
const users = require('../db/users');
const { usersPath } = require('../app');

module.exports = {
    getRegister: (req, res) => {
        res.json('page register');
    },

    postRegister: (req, res) => {
        const repeatEmail = users.find((user) => user.email === req.body.email);

        if (!repeatEmail) {
            users.push(req.body);
            fs.writeFile(usersPath, `module.exports = ${JSON.stringify(users)}`, (err) => {
                if (err) {
                    console.error(err);
                }
            });
            res.redirect('/login');
        }
        res.json('such an email already exists');
    }
};
