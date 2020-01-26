let User = document.getElementById("UserField").value;

$.ajax({
    type: 'POST',
    url: '/db',
    data: {
        user: User
    },
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

