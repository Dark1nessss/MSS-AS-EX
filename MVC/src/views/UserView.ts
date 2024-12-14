import { UserController } from "../controllers/UserController";

const userController = new UserController();

console.log("List of Users:");
userController.getAllUsers().forEach((user) => {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
});

console.log("\nAdding a new user...");
const newUser = userController.addUser(3, "João");
console.log(`Added User: ID: ${newUser.id}, Name: ${newUser.name}`);

console.log("\nUpdated List of Users:");
userController.getAllUsers().forEach((user) => {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
});