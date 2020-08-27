let User = document.getElementById("UserField").value;
let Users = JSON.parse(localStorage.getItem("Users"));
let currentUser = JSON.parse(localStorage.getItem(User));
const BaseUser = {
    "XP": 0,
    "Level": 0,
}

if(currentUser) {
    UpdateUI(currentUser.Level,currentUser.XP);
} else {
    
    // add new user to local storage.
    localStorage.setItem(User, `${JSON.stringify(BaseUser)}`);
}

if(Users == undefined) {
    localStorage.setItem("Users", `${JSON.stringify(new Array(User))}`)
} else if (!Users.includes(User)){
    Users.push(User);
    localStorage.setItem("Users", `${JSON.stringify(Users)}`)
}

Users.forEach(el => {
    let UserXP = JSON.parse(localStorage.getItem(el));
    console.log(`User: ${el} has ${UserXP.XP}xp`)
});
