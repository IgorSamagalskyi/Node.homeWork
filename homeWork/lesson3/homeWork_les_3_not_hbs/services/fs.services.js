const fs = require('fs/promises');
const path = require('path');

const usersPath = path.join(process.cwd(), 'db', 'users.json');

module.exports = {
    readAllUsers: async () => {
        const data = await fs.readFile(usersPath);
        return JSON.parse(data);
    },

    createNewUser: (usersArr) => {
        return fs.writeFile(usersPath, JSON.stringify(usersArr));
    }
};
