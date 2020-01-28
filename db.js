const fs = require('fs');
const path = require('path');
const DbPath = path.join(__dirname + '/src/database/database.json');
module.exports = {
    AddUser: (user) => {
        fs.readFile(DbPath, 'utf-8', (err, data) => {
            db = JSON.parse(data);
            db[user] = {
                XP: 0,
                Level: 0,
            }
            fs.writeFile(DbPath, JSON.stringify(db), (err) => {
               // console.log(err)
            });
        });
    },
    AddXP: (user, xp) => {
        fs.readFile(DbPath, 'utf-8', (err, data) => {
            db = JSON.parse(data);
            db[user] = {
                XP: xp,
                Level: 0,
            }
            fs.writeFile(DbPath, JSON.stringify(db), (err) => {
               // console.log(err)
            });
        });
    }
}
