import { UserRepository } from "./dados";

export class UserService {
  private userRepository = new UserRepository();

  getAllUsers() {
    return this.userRepository.getUsers().filter((user) => user.id > 0);
  }
}