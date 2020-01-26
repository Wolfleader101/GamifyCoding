const fs = require('fs');
const path = require('path');

module.exports = {
    database: (user) => {
        fs.readFile(path.join(__dirname + '/src/database/database.json'), 'utf-8', (err, data) => {
            db = JSON.parse(data);
            db[user] = {
                XP: 0,
                Level: 0,
            }
            console.log(db);
            
        });
    }
}
