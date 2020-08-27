
let User = document.getElementById("UserField").value;

let Users = JSON.parse(localStorage.getItem("Users"));
if(Users == undefined) {
    localStorage.setItem("Users", `${JSON.stringify(new Array(User))}`)
} else if (!Users.includes(User)){
    Users.push(User);
    localStorage.setItem("Users", `${JSON.stringify(Users)}`)
}

// add all users to local storage.
if(!localStorage.getItem(User)) localStorage.setItem(User, `${JSON.stringify({"XP":"0"})}`);

Users.forEach(el => {
    let UserXP = JSON.parse(localStorage.getItem(el));
    console.log(`User: ${el} has ${UserXP.XP}xp`)

});
