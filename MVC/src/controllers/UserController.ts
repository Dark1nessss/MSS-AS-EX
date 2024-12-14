import { User } from "../models/UserModel";

export class UserController {
  private users: User[] = [
    new User(1, "Dmytro"),
    new User(2, "Ana"),
  ];

  // Retrieve all users
  getAllUsers(): User[] {
    return this.users;
  }

  // Add a new user
  addUser(id: number, name: string): User {
    const newUser = new User(id, name);
    this.users.push(newUser);
    return newUser;
  }
}