let User = document.getElementById("UserField").value;
let FetchFirstUserXP;

// fix issue where new users cant be added. Gives all new users xp of 0
$.ajax({
    type: 'POST',
    url: '/db',
    data: {
        user: User,
    },
})
// first fetch the database to 
fetch(
        '/getdb', {
            method: 'GET'
        }
    )
    .then(res => res.json())
    .then(db => {
        // console.log(db)
        // console.log(Object.keys(db).length)
        if (!Object.keys(db).length == 0) {

            /*

            get first users name and xp, 
            then
            Post the data to log the users XP
            */

        

            let user = [];
            let UserName;
            let UserXP;
            const vals = Object.entries(db);
            for (i in vals) {
                // fix issue where new users cant be added
    
                user.push(Object.values(vals)[i]);
                UserName = Object.values(user)[i][0];
                UserXP = Object.values(user)[i][1].XP;
                console.log(`User: ${UserName} has ${UserXP}xp`)
                
            $.ajax({
                type: 'POST',
                url: '/db',
                data: {
                    user: UserName,
                    xp: UserXP
                },
            })
            }
        } else {
            console.log("Database is empty")
        }

    })






// // Get the database file
// fetch( 
//     '/db',
//     { method: 'GET' }
// )
// .then(response => response.json())
// .then(db => {

//     db[User] = {
//         xp: 0,
//         level: 0,
//     }
//       console.log(db);
// })
// .catch(err => console.log("Error: ", err))