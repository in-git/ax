import { IUsersModel } from "../bean/users.d"
import { UsersModel } from "../bean/users"

export class UserService {
  static setUser(user: IUsersModel) {
    UsersModel.create({
      ...user
    })
  }
}
