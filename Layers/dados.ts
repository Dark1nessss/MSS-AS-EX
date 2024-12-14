export class UserRepository {
  private users = [{ id: 1, name: "Dmytro" }, { id: 2, name: "Joao" }];

  getUsers() {
    return this.users;
  }
}