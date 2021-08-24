const fs = require('fs');
const path = require('path');

const usersPath = path.join(process.cwd(), 'db', 'users.json');
module.exports = {
    readAllUsers: () => {
        fs.readFile(usersPath, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            return data.toString();
        });
    },

    createNewUser: (usersArr) => {
        fs.writeFile(usersPath, JSON.stringify(usersArr), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};
