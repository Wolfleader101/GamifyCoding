
let User = document.getElementById("UserField").value;
let Users = JSON.parse(localStorage.getItem("Users"));
const BaseUser = {
    "XP": 0,
    "Level": 0,
}

if(Users == undefined) {
    localStorage.setItem("Users", `${JSON.stringify(new Array(User))}`)
} else if (!Users.includes(User)){
    Users.push(User);
    localStorage.setItem("Users", `${JSON.stringify(Users)}`)
}

// add all users to local storage.
if(!localStorage.getItem(User)) localStorage.setItem(User, `${JSON.stringify(BaseUser)}`);

Users.forEach(el => {
    let UserXP = JSON.parse(localStorage.getItem(el));
    console.log(`User: ${el} has ${UserXP.XP}xp`)

});
