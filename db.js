const fs = require('fs');
const path = require('path');
const DbPath = path.join(__dirname + '/src/database/database.json');
XP = 0;

module.exports = {
    AddUser: (user, xp) => {
        fs.readFile(DbPath, 'utf-8', (err, data) => {
            db = JSON.parse(data);
            db[user] = {
                XP: xp,
            }
            fs.writeFile(DbPath, JSON.stringify(db), (err) => {
               // console.log(err)
            });
        });
    },
    AddXP: (user, xp) => {
        XP++;
        fs.readFile(DbPath, 'utf-8', (err, data) => {
            db = JSON.parse(data);
            db[user] = {
                XP: XP,
            }
            fs.writeFile(DbPath, JSON.stringify(db), (err) => {
               // console.log(err)
            });
        });
    }
}
