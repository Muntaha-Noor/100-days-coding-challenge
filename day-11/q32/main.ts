let current_users : string[] = ["Salman", "Qadir", "Quddos", "Anus", "Noor"];
let new_users :string[] = ["Abdul", "Kulsoom", "Warda", "Nazia", "Musfirah"]

new_users.forEach((newUser) => {
   if(
    current_users.some(
        (currentUsers) => currentUsers.toLowerCase() === newUser.toLowerCase()
        )
   ) {
     console.log(`${newUser} will need to enter a new username.`);
   }else {
    console.log(`${newUser} is available.`);
   }
})