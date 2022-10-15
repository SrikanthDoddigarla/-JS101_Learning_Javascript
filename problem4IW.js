//user name and password stored in the database while registering

let database_user="abc@gmail";
let database_password=123456;

//for login

let user="abc@gmail";
let password=123456;

if (database_user==user) {
  if (database_password==password) {
    console.log("login successfull");
  } else {
    console.log("incorrect password");
  }
} else {
  console.log("Wrong credentials")
}