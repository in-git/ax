import { UsersModel } from "@/modules/user/bean/users"
import { IUsersModel } from "@/modules/user/bean/users.d"

export class UserService {
  static async setUser(user: Partial<IUsersModel>) {

    await UsersModel.create({
      ...user
    })
  }
}
