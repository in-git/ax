import { sequelize } from '@/config/mysql';
import { DataTypes } from 'sequelize';
import { IUsersAttributes } from "./users.d"

export class Users implements IUsersAttributes {
  id?: number;
  created_at?: Date | undefined;
  name?: string | undefined;
  ip?: string | undefined;
}

export const UsersModel = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER("11"),
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    autoIncrement: true,
    comment: "Primary Key",
    field: "id"
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: "Create Time",
    field: "created_at"
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: "",
    field: "name"
  },
  ip: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: "用户IP地址",
    field: "ip"
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: "Create Time",
    field: "updated_at"
  }
}, {
  tableName: "users",
  comment: "",
  indexes: [],
  "underscored": true,
});
