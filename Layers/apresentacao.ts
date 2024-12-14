import { UserService } from "./negocio";

const userService = new UserService();

console.log("Lista de utilizadores:");
userService.getAllUsers().forEach((user) => {
  console.log(`ID: ${user.id}, Nome: ${user.name}`);
});