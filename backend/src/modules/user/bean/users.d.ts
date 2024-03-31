import { Model, BuildOptions } from 'sequelize';
export interface IUsersAttributes {
  id?: number,
  create_at?: Date,
  name?: string,
  ip?: string,
}
export interface IUsersModel extends IUsersAttributes, Model { }

