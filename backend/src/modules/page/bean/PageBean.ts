import { DataTypes } from "sequelize";
import { sequelize } from "@/config/mysql";

const Bean = sequelize.define('CorePageSetting', {
  settings: DataTypes.STRING,
}, {
  /* 生成下划线 */
  underscored: true
});

export default {
  Bean
}
