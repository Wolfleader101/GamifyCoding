const fs = require('fs');
const path = require('path');
const DbPath = path.join(__dirname + '/src/database/database.json');
module.exports = {
    database: (user) => {
        fs.readFile(DbPath, 'utf-8', (err, data) => {
            db = JSON.parse(data);
            db[user] = {
                XP: 0,
                Level: 0,
            }
            console.log(db);
            fs.writeFile(DbPath, JSON.stringify(db), (err) => {
                console.log(err)
            });
            
            
        });
    }
}
