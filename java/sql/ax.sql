/*
 Navicat Premium Data Transfer

 Source Server         : ax_test
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : 150.158.14.110:3306
 Source Schema         : ax_test

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 17/05/2024 14:59:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gen_table
-- ----------------------------
DROP TABLE IF EXISTS `gen_table`;
CREATE TABLE `gen_table`  (
  `table_id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '表名称',
  `table_comment` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '表描述',
  `sub_table_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关联子表的表名',
  `sub_table_fk_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '子表关联的外键名',
  `class_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '实体类名称',
  `tpl_category` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'crud' COMMENT '使用的模板（crud单表操作 tree树表操作）',
  `tpl_web_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '前端模板类型（element-ui模版 element-plus模版）',
  `package_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生成包路径',
  `module_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生成模块名',
  `business_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生成业务名',
  `function_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生成功能名',
  `function_author` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生成功能作者',
  `gen_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '生成代码方式（0zip压缩包 1自定义路径）',
  `gen_path` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '/' COMMENT '生成路径（不填默认项目路径）',
  `options` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它生成选项',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`table_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成业务表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gen_table
-- ----------------------------
INSERT INTO `gen_table` VALUES (2, 'sys_config', '参数配置表', NULL, NULL, 'SysConfig', 'crud', '', 'com.ruoyi.system', 'system', 'config', '参数配置', 'AX', '0', '/', '{}', 'admin', '2024-04-13 13:54:13', '', '2024-04-14 19:19:02', NULL);
INSERT INTO `gen_table` VALUES (3, 'sys_notice', '通知公告表', NULL, NULL, 'SysNotice', 'crud', '', 'com.ruoyi.system', 'system', 'notice', '通知公告', 'AX', '0', '/', '{}', 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26', '系统通知公告');
INSERT INTO `gen_table` VALUES (4, 'sys_dept', '部门表', NULL, NULL, 'SysDept', 'crud', '', 'com.ruoyi.system', 'system', 'dept', '部门', 'AX', '0', '/', '{}', 'admin', '2024-04-13 16:45:02', '', '2024-04-15 09:34:07', '部门管理');
INSERT INTO `gen_table` VALUES (12, 'sys_oper_log', '操作日志记录', NULL, NULL, 'SysOperLog', 'crud', '', 'com.ruoyi.system', 'system', 'log', '操作日志记录', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:11', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (13, 'sys_dict_data', '字典数据表', NULL, NULL, 'SysDictData', 'crud', '', 'com.ruoyi.system', 'system', 'data', '字典数据', 'Win', '0', '/', '{}', 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45', NULL);
INSERT INTO `gen_table` VALUES (14, 'sys_post', '岗位信息表', NULL, NULL, 'SysPost', 'crud', '', 'com.ruoyi.system', 'system', 'post', '岗位信息', 'Ax', '0', '/', '{}', 'admin', '2024-04-13 16:45:12', '', '2024-04-15 09:05:50', NULL);
INSERT INTO `gen_table` VALUES (15, 'sys_dict_type', '字典类型表', NULL, NULL, 'SysDictType', 'crud', '', 'com.ruoyi.system', 'system', 'type', '字典类型', 'AX', '0', '/', '{}', 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57', NULL);
INSERT INTO `gen_table` VALUES (17, 'sys_job', '定时任务调度表', NULL, NULL, 'SysJob', 'crud', '', 'com.ruoyi.system', 'system', 'job', '定时任务调度', 'Win', '0', '/', '{}', 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:44', NULL);
INSERT INTO `gen_table` VALUES (18, 'sys_job_log', '定时任务调度日志表', NULL, NULL, 'SysJobLog', 'crud', '', 'com.ruoyi.system', 'system', 'log', '定时任务调度日志', 'Win', '0', '/', '{}', 'admin', '2024-04-13 16:45:15', '', '2024-05-13 13:59:33', NULL);
INSERT INTO `gen_table` VALUES (19, 'sys_logininfor', '系统访问记录', NULL, NULL, 'SysLogininfor', 'crud', '', 'com.ruoyi.system', 'system', 'logininfor', '系统访问记录', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:16', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (20, 'sys_menu', '菜单权限表', NULL, NULL, 'SysMenu', 'crud', '', 'com.ruoyi.system', 'system', 'menu', '菜单权限', 'AX', '0', '/', '{}', 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44', NULL);
INSERT INTO `gen_table` VALUES (24, 'sys_role', '角色信息表', NULL, NULL, 'SysRole', 'crud', '', 'com.ruoyi.system', 'system', 'role', '角色信息', 'AX', '0', '/', '{}', 'admin', '2024-04-14 21:24:26', '', '2024-04-28 15:15:01', '角色分配');
INSERT INTO `gen_table` VALUES (25, 'sys_role_dept', '角色和部门关联表', NULL, NULL, 'SysRoleDept', 'crud', '', 'com.ruoyi.system', 'system', 'dept', '角色和部门关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:27', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (26, 'sys_role_menu', '角色和菜单关联表', NULL, NULL, 'SysRoleMenu', 'crud', '', 'com.ruoyi.system', 'system', 'menu', '角色和菜单关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:28', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (27, 'sys_user', '用户信息表', NULL, NULL, 'SysUser', 'crud', '', 'com.ruoyi.system', 'system', 'user', '用户信息', 'AX', '0', '/', '{}', 'admin', '2024-04-14 21:24:28', '', '2024-05-16 12:27:16', NULL);
INSERT INTO `gen_table` VALUES (28, 'sys_user_role', '用户和角色关联表', NULL, NULL, 'SysUserRole', 'crud', '', 'com.ruoyi.system', 'system', 'role', '用户和角色关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:30', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (30, 'sys_user_post', '用户与岗位关联表', NULL, NULL, 'SysUserPost', 'crud', '', 'com.ruoyi.system', 'system', 'post', '用户与岗位关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:47:14', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (32, 'sys_memo', '备忘录', NULL, NULL, 'SysMemo', 'crud', '', 'com.ruoyi.system', 'system', 'memo', '备忘录', 'AX', '0', '/', '{}', 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44', '系统备忘录');
INSERT INTO `gen_table` VALUES (34, 'sys_test', '系统测试专用表', NULL, NULL, 'SysTest', 'crud', '', 'com.ruoyi.system', 'system', 'test', '系统测试表', 'AX', '0', '/', '{}', 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:07', '系统测试专用表');
INSERT INTO `gen_table` VALUES (40, 'sys_feedback', '', NULL, NULL, 'SysFeedback', 'crud', '', 'com.ruoyi.system', 'system', 'feedback', NULL, 'AX', '0', '/', NULL, 'admin', '2024-05-15 18:24:09', '', NULL, NULL);

-- ----------------------------
-- Table structure for gen_table_column
-- ----------------------------
DROP TABLE IF EXISTS `gen_table_column`;
CREATE TABLE `gen_table_column`  (
  `column_id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_id` bigint NULL DEFAULT NULL COMMENT '归属表编号',
  `column_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '列名称',
  `column_comment` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '列描述',
  `column_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '列类型',
  `java_type` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'JAVA类型',
  `java_field` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'JAVA字段名',
  `is_pk` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否主键（1是）',
  `is_increment` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否自增（1是）',
  `is_required` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否必填（1是）',
  `is_insert` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否为插入字段（1是）',
  `is_edit` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否编辑字段（1是）',
  `is_list` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否列表字段（1是）',
  `is_query` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否查询字段（1是）',
  `query_type` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'EQ' COMMENT '查询方式（等于、不等于、大于、小于、范围）',
  `html_type` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）',
  `dict_type` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `sort` int NULL DEFAULT NULL COMMENT '排序',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`column_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 401 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成业务表字段' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gen_table_column
-- ----------------------------
INSERT INTO `gen_table_column` VALUES (9, 2, 'config_id', '参数主键', 'int', 'Long', 'configId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:02');
INSERT INTO `gen_table_column` VALUES (10, 2, 'config_name', '参数名称', 'varchar(100)', 'String', 'configName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:02');
INSERT INTO `gen_table_column` VALUES (11, 2, 'config_key', '参数键名', 'varchar(100)', 'String', 'configKey', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:02');
INSERT INTO `gen_table_column` VALUES (12, 2, 'config_value', '参数键值', 'varchar(500)', 'String', 'configValue', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'textarea', '', 4, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:02');
INSERT INTO `gen_table_column` VALUES (13, 2, 'config_type', '系统内置（Y是 N否）', 'char(1)', 'String', 'configType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', 'sys_yes_no', 5, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:02');
INSERT INTO `gen_table_column` VALUES (14, 2, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:02');
INSERT INTO `gen_table_column` VALUES (15, 2, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 7, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:03');
INSERT INTO `gen_table_column` VALUES (16, 2, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:03');
INSERT INTO `gen_table_column` VALUES (17, 2, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:03');
INSERT INTO `gen_table_column` VALUES (18, 2, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 10, 'admin', '2024-04-13 13:54:14', '', '2024-04-14 19:19:03');
INSERT INTO `gen_table_column` VALUES (19, 3, 'notice_id', '公告ID', 'int', 'Long', 'noticeId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (20, 3, 'notice_title', '公告标题', 'varchar(50)', 'String', 'noticeTitle', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (21, 3, 'notice_type', '公告类型', 'char(1)', 'String', 'noticeType', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', 'sys_notice_type', 3, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (22, 3, 'notice_content', '公告内容', 'longblob', 'String', 'noticeContent', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'editor', '', 4, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (23, 3, 'status', '公告状态', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', 'sys_notice_status', 5, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (24, 3, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (25, 3, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 7, 'admin', '2024-04-13 14:17:04', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (26, 3, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-04-13 14:17:05', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (27, 3, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 14:17:05', '', '2024-05-15 22:33:26');
INSERT INTO `gen_table_column` VALUES (28, 3, 'remark', '备注', 'varchar(255)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-13 14:17:05', '', '2024-05-15 22:33:27');
INSERT INTO `gen_table_column` VALUES (29, 4, 'dept_id', '部门id', 'bigint', 'Long', 'deptId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (30, 4, 'parent_id', '父部门id', 'bigint', 'Long', 'parentId', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 2, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (31, 4, 'ancestors', '祖级列表', 'varchar(50)', 'String', 'ancestors', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (32, 4, 'dept_name', '部门名称', 'varchar(30)', 'String', 'deptName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (33, 4, 'order_num', '显示顺序', 'int', 'Long', 'orderNum', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (34, 4, 'leader', '负责人', 'varchar(20)', 'String', 'leader', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (35, 4, 'phone', '联系电话', 'varchar(11)', 'String', 'phone', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (36, 4, 'email', '邮箱', 'varchar(50)', 'String', 'email', '0', '0', '0', '0', '1', '1', '0', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (37, 4, 'status', '部门状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', 'sys_job_status', 9, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (38, 4, 'del_flag', '删除标志（0代表存在 2代表删除）', 'char(1)', 'String', 'delFlag', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (39, 4, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 11, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (40, 4, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 12, 'admin', '2024-04-13 16:45:03', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (41, 4, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 13, 'admin', '2024-04-13 16:45:04', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (42, 4, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 14, 'admin', '2024-04-13 16:45:04', '', '2024-04-15 09:34:07');
INSERT INTO `gen_table_column` VALUES (119, 12, 'oper_id', '日志主键', 'bigint', 'Long', 'operId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (121, 12, 'title', '模块标题', 'varchar(50)', 'String', 'title', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (123, 12, 'business_type', '业务类型（0其它 1新增 2修改 3删除）', 'int', 'Long', 'businessType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (125, 12, 'method', '方法名称', 'varchar(100)', 'String', 'method', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (127, 12, 'request_method', '请求方式', 'varchar(10)', 'String', 'requestMethod', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (129, 12, 'operator_type', '操作类别（0其它 1后台用户 2手机端用户）', 'int', 'Long', 'operatorType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 6, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (131, 12, 'oper_name', '操作人员', 'varchar(50)', 'String', 'operName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 7, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (133, 12, 'dept_name', '部门名称', 'varchar(50)', 'String', 'deptName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 8, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (135, 12, 'oper_url', '请求URL', 'varchar(255)', 'String', 'operUrl', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 9, 'admin', '2024-04-13 16:45:11', '', NULL);
INSERT INTO `gen_table_column` VALUES (137, 12, 'oper_ip', '主机地址', 'varchar(128)', 'String', 'operIp', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 10, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (139, 12, 'oper_location', '操作地点', 'varchar(255)', 'String', 'operLocation', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 11, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (140, 12, 'oper_param', '请求参数', 'varchar(2000)', 'String', 'operParam', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 12, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (141, 13, 'dict_code', '字典编码', 'bigint', 'Long', 'dictCode', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (142, 12, 'json_result', '返回参数', 'varchar(2000)', 'String', 'jsonResult', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 13, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (143, 13, 'dict_sort', '字典排序', 'int', 'Long', 'dictSort', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (144, 12, 'status', '操作状态（0正常 1异常）', 'int', 'Long', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 14, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (145, 13, 'dict_label', '字典标签', 'varchar(100)', 'String', 'dictLabel', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (146, 12, 'error_msg', '错误消息', 'varchar(2000)', 'String', 'errorMsg', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 15, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (147, 13, 'dict_value', '字典键值', 'varchar(100)', 'String', 'dictValue', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (148, 12, 'oper_time', '操作时间', 'datetime', 'Date', 'operTime', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'datetime', '', 16, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (149, 13, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (150, 12, 'cost_time', '消耗时间', 'bigint', 'Long', 'costTime', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 17, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (151, 13, 'css_class', '样式属性（其他样式扩展）', 'varchar(100)', 'String', 'cssClass', '0', '0', '0', '0', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (152, 13, 'list_class', '表格回显样式', 'varchar(100)', 'String', 'listClass', '0', '0', '0', '1', '1', '0', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (153, 13, 'is_default', '是否默认（Y是 N否）', 'char(1)', 'String', 'isDefault', '0', '0', '0', '1', '1', '0', '1', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:45');
INSERT INTO `gen_table_column` VALUES (154, 14, 'post_id', '岗位ID', 'bigint', 'Long', 'postId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:12', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (155, 13, 'status', '状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 9, 'admin', '2024-04-13 16:45:12', '', '2024-05-13 11:52:46');
INSERT INTO `gen_table_column` VALUES (156, 14, 'post_code', '岗位编码', 'varchar(64)', 'String', 'postCode', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 16:45:12', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (157, 13, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 11:52:46');
INSERT INTO `gen_table_column` VALUES (158, 14, 'post_name', '岗位名称', 'varchar(50)', 'String', 'postName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 3, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (159, 13, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 11, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 11:52:46');
INSERT INTO `gen_table_column` VALUES (160, 14, 'post_sort', '显示顺序', 'int', 'Long', 'postSort', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (161, 13, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 11:52:46');
INSERT INTO `gen_table_column` VALUES (162, 14, 'status', '状态', 'char(1)', 'String', 'status', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', 'sys_common_status', 5, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (163, 13, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 13, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 11:52:46');
INSERT INTO `gen_table_column` VALUES (164, 14, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (165, 13, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 14, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 11:52:46');
INSERT INTO `gen_table_column` VALUES (166, 14, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 7, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (167, 14, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:51');
INSERT INTO `gen_table_column` VALUES (168, 14, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:51');
INSERT INTO `gen_table_column` VALUES (169, 15, 'dict_id', '字典主键', 'bigint', 'Long', 'dictId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (170, 14, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 10, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:51');
INSERT INTO `gen_table_column` VALUES (171, 15, 'dict_name', '字典名称', 'varchar(100)', 'String', 'dictName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (172, 15, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (173, 15, 'status', '状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 4, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (175, 15, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (177, 15, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 6, 'admin', '2024-04-13 16:45:13', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (178, 15, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (179, 15, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 8, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (180, 15, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 9, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 12:04:57');
INSERT INTO `gen_table_column` VALUES (181, 17, 'job_id', '任务ID', 'bigint', 'Long', 'jobId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (182, 17, 'job_name', '任务名称', 'varchar(64)', 'String', 'jobName', '1', '0', '1', '1', NULL, '1', NULL, 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (183, 17, 'job_group', '任务组名', 'varchar(64)', 'String', 'jobGroup', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (184, 17, 'invoke_target', '调用目标字符串', 'varchar(500)', 'String', 'invokeTarget', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'textarea', '', 4, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (185, 17, 'cron_expression', 'cron执行表达式', 'varchar(255)', 'String', 'cronExpression', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (186, 17, 'misfire_policy', '计划执行错误策略（1立即执行 2执行一次 3放弃执行）', 'varchar(20)', 'String', 'misfirePolicy', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (187, 17, 'concurrent', '是否并发执行（0允许 1禁止）', 'char(1)', 'String', 'concurrent', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:14', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (188, 17, 'status', '状态（0正常 1暂停）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 8, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (189, 17, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 9, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (190, 17, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 10, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (191, 17, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 11, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 14:02:45');
INSERT INTO `gen_table_column` VALUES (192, 17, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 12, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 14:02:46');
INSERT INTO `gen_table_column` VALUES (193, 17, 'remark', '备注信息', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 13, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 14:02:46');
INSERT INTO `gen_table_column` VALUES (194, 18, 'job_log_id', '任务日志ID', 'bigint', 'Long', 'jobLogId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (195, 18, 'job_name', '任务名称', 'varchar(64)', 'String', 'jobName', '0', '0', '1', '1', '1', '1', '0', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (196, 18, 'job_group', '任务组名', 'varchar(64)', 'String', 'jobGroup', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (197, 18, 'invoke_target', '调用目标字符串', 'varchar(500)', 'String', 'invokeTarget', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'textarea', '', 4, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (198, 18, 'job_message', '日志信息', 'varchar(500)', 'String', 'jobMessage', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'textarea', '', 5, 'admin', '2024-04-13 16:45:15', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (199, 18, 'status', '执行状态（0正常 1失败）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'radio', '', 6, 'admin', '2024-04-13 16:45:16', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (200, 18, 'exception_info', '异常信息', 'varchar(2000)', 'String', 'exceptionInfo', '0', '0', '0', '0', '1', '1', '0', 'EQ', 'textarea', '', 7, 'admin', '2024-04-13 16:45:16', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (201, 18, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 8, 'admin', '2024-04-13 16:45:16', '', '2024-05-13 13:59:33');
INSERT INTO `gen_table_column` VALUES (202, 19, 'info_id', '访问ID', 'bigint', 'Long', 'infoId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (203, 19, 'user_name', '用户账号', 'varchar(50)', 'String', 'userName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (204, 19, 'ipaddr', '登录IP地址', 'varchar(128)', 'String', 'ipaddr', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (205, 19, 'login_location', '登录地点', 'varchar(255)', 'String', 'loginLocation', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (206, 19, 'browser', '浏览器类型', 'varchar(50)', 'String', 'browser', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (207, 19, 'os', '操作系统', 'varchar(50)', 'String', 'os', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (208, 19, 'status', '登录状态（0成功 1失败）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 7, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (209, 19, 'msg', '提示消息', 'varchar(255)', 'String', 'msg', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (210, 19, 'login_time', '访问时间', 'datetime', 'Date', 'loginTime', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (211, 20, 'menu_id', '菜单ID', 'bigint', 'Long', 'menuId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (212, 20, 'menu_name', '菜单名称', 'varchar(50)', 'String', 'menuName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (213, 20, 'parent_id', '父菜单ID', 'bigint', 'Long', 'parentId', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (214, 20, 'order_num', '显示顺序', 'int', 'Long', 'orderNum', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (215, 20, 'path', '路由地址', 'varchar(200)', 'String', 'path', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (216, 20, 'component', '组件路径', 'varchar(255)', 'String', 'component', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (217, 20, 'query', '路由参数', 'varchar(255)', 'String', 'query', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (218, 20, 'is_frame', '是否为外链（0是 1否）', 'int', 'Long', 'isFrame', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (219, 20, 'is_cache', '是否缓存（0缓存 1不缓存）', 'int', 'Long', 'isCache', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 9, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (220, 20, 'menu_type', '菜单类型（M目录 C菜单 F按钮）', 'char(1)', 'String', 'menuType', '0', '0', '0', '0', '1', '1', '0', 'EQ', 'select', '', 10, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (221, 20, 'visible', '菜单状态（0显示 1隐藏）', 'char(1)', 'String', 'visible', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 11, 'admin', '2024-04-13 16:45:17', '', '2024-05-16 11:58:44');
INSERT INTO `gen_table_column` VALUES (222, 20, 'status', '菜单状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'radio', '', 12, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (223, 20, 'perms', '权限标识', 'varchar(100)', 'String', 'perms', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 13, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (224, 20, 'icon', '菜单图标', 'varchar(100)', 'String', 'icon', '0', '0', '0', '0', '1', '1', '0', 'EQ', 'input', '', 14, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (225, 20, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 15, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (226, 20, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 16, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (227, 20, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 17, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (228, 20, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 18, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (229, 20, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '0', '1', '1', NULL, 'EQ', 'textarea', '', 19, 'admin', '2024-04-13 16:45:18', '', '2024-05-16 11:58:45');
INSERT INTO `gen_table_column` VALUES (259, 24, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:26', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (260, 24, 'role_name', '角色名称', 'varchar(30)', 'String', 'roleName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-14 21:24:26', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (261, 24, 'role_key', '角色权限字符串', 'varchar(100)', 'String', 'roleKey', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'input', '', 3, 'admin', '2024-04-14 21:24:26', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (262, 24, 'role_sort', '显示顺序', 'int', 'Long', 'roleSort', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'input', '', 4, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (263, 24, 'data_scope', '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）', 'char(1)', 'String', 'dataScope', '0', '0', '0', '0', '1', '1', '0', 'EQ', 'input', '', 5, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (264, 24, 'menu_check_strictly', '菜单树选择项是否关联显示', 'tinyint(1)', 'Integer', 'menuCheckStrictly', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 6, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (265, 24, 'dept_check_strictly', '部门树选择项是否关联显示', 'tinyint(1)', 'Integer', 'deptCheckStrictly', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 7, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (266, 24, 'status', '角色状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'radio', '', 8, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (267, 24, 'del_flag', '删除标志（0代表存在 2代表删除）', 'char(1)', 'String', 'delFlag', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 9, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (268, 24, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (269, 24, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 11, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (270, 24, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (271, 24, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 13, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:01');
INSERT INTO `gen_table_column` VALUES (272, 24, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '0', NULL, 'EQ', 'textarea', '', 14, 'admin', '2024-04-14 21:24:27', '', '2024-04-28 15:15:02');
INSERT INTO `gen_table_column` VALUES (273, 25, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (274, 25, 'dept_id', '部门ID', 'bigint', 'Long', 'deptId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (275, 26, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (276, 26, 'menu_id', '菜单ID', 'bigint', 'Long', 'menuId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (277, 27, 'user_id', '用户ID', 'bigint', 'Long', 'userId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:28', '', '2024-05-16 12:27:16');
INSERT INTO `gen_table_column` VALUES (278, 27, 'dept_id', '部门ID', 'bigint', 'Long', 'deptId', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:28', '', '2024-05-16 12:27:16');
INSERT INTO `gen_table_column` VALUES (279, 27, 'user_name', '用户账号', 'varchar(30)', 'String', 'userName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 3, 'admin', '2024-04-14 21:24:28', '', '2024-05-16 12:27:16');
INSERT INTO `gen_table_column` VALUES (280, 27, 'nick_name', '用户昵称', 'varchar(30)', 'String', 'nickName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-04-14 21:24:28', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (281, 27, 'user_type', '用户类型（00系统用户）', 'varchar(2)', 'String', 'userType', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'select', '', 5, 'admin', '2024-04-14 21:24:28', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (282, 27, 'email', '用户邮箱', 'varchar(50)', 'String', 'email', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (283, 27, 'phonenumber', '手机号码', 'varchar(11)', 'String', 'phonenumber', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (284, 27, 'sex', '用户性别（0男 1女 2未知）', 'char(1)', 'String', 'sex', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 8, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (285, 27, 'avatar', '头像地址', 'varchar(100)', 'String', 'avatar', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'input', '', 9, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (286, 27, 'password', '密码', 'varchar(100)', 'String', 'password', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'input', '', 10, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (287, 27, 'status', '帐号状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 11, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (288, 27, 'del_flag', '删除标志（0代表存在 2代表删除）', 'char(1)', 'String', 'delFlag', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (289, 27, 'login_ip', '最后登录IP', 'varchar(128)', 'String', 'loginIp', '0', '0', '0', '1', '1', '0', '0', 'EQ', 'input', '', 13, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (290, 27, 'login_date', '最后登录时间', 'datetime', 'Date', 'loginDate', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'datetime', '', 14, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (291, 27, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 15, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (292, 27, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 16, 'admin', '2024-04-14 21:24:29', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (293, 27, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 17, 'admin', '2024-04-14 21:24:30', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (294, 27, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 18, 'admin', '2024-04-14 21:24:30', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (295, 27, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 19, 'admin', '2024-04-14 21:24:30', '', '2024-05-16 12:27:17');
INSERT INTO `gen_table_column` VALUES (296, 28, 'user_id', '用户ID', 'bigint', 'Long', 'userId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (297, 28, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (305, 30, 'user_id', '用户ID', 'bigint', 'Long', 'userId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:47:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (306, 30, 'post_id', '岗位ID', 'bigint', 'Long', 'postId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:47:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (307, 31, 'gallery_id', '图库ID', 'int', 'Long', 'galleryId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (308, 31, 'image_name', '图片名', 'varchar(255)', 'String', 'imageName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (309, 31, 'type', '图片类型', 'varchar(255)', 'String', 'type', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (310, 31, 'image_url', '图片URL', 'varchar(255)', 'String', 'imageUrl', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (311, 31, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 5, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (312, 31, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 6, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (313, 31, 'storage', '来源', 'varchar(255)', 'String', 'storage', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, '', '2024-04-15 19:44:39', '', NULL);
INSERT INTO `gen_table_column` VALUES (316, 32, 'memo_id', '主键', 'int', 'Long', 'memoId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (317, 32, 'title', '备忘录标题', 'varchar(255)', 'String', 'title', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (318, 32, 'value', '备忘录的值', 'varchar(255)', 'String', 'value', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'input', '', 3, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (319, 32, 'description', '备忘录描述', 'varchar(255)', 'String', 'description', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 4, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (320, 32, 'extra', '附加值', 'varchar(255)', 'String', 'extra', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 5, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (321, 32, 'user_id', '用户ID', 'int', 'Long', 'userId', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 6, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (322, 32, 'dept_id', '部门ID', 'int', 'Long', 'deptId', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'input', '', 8, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:45');
INSERT INTO `gen_table_column` VALUES (323, 32, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:45');
INSERT INTO `gen_table_column` VALUES (324, 32, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 10, 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:45');
INSERT INTO `gen_table_column` VALUES (325, 32, 'type', '1：备忘录，2：记事本', 'varchar(1)', 'String', 'type', '0', '0', '0', '0', '1', '0', '0', 'EQ', 'select', '', 7, '', '2024-04-16 19:32:46', '', '2024-04-16 19:33:44');
INSERT INTO `gen_table_column` VALUES (333, 34, 'test_id', '测试ID', 'int', 'Long', 'testId', '1', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:07');
INSERT INTO `gen_table_column` VALUES (334, 34, 'text_field', '文本字段', 'varchar(255)', 'String', 'textField', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 2, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:07');
INSERT INTO `gen_table_column` VALUES (335, 34, 'number_field', '数字字段', 'int', 'Long', 'numberField', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 3, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:07');
INSERT INTO `gen_table_column` VALUES (336, 34, 'date_field', '日期字段', 'datetime', 'Date', 'dateField', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'datetime', '', 4, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (337, 34, 'rich_text_field', '富文本字段', 'varchar(255)', 'String', 'richTextField', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'editor', '', 5, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (338, 34, 'select_field', '下拉框字段', 'varchar(255)', 'String', 'selectField', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'select', '', 6, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (339, 34, 'boolean_field', '布尔字段', 'char(1)', 'String', 'booleanField', '0', '0', '0', '1', '1', '1', '0', 'EQ', 'input', '', 7, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (340, 34, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 8, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (341, 34, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (342, 34, 'textarea_field', '文本域', 'varchar(255)', 'String', 'textareaField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 10, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (343, 34, 'tree_field', '树形选择器', 'varchar(255)', 'String', 'treeField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 11, 'admin', '2024-04-28 10:29:55', '', '2024-05-16 11:01:08');
INSERT INTO `gen_table_column` VALUES (393, 40, 'feedback_id', '主键', 'int', 'Long', 'feedbackId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (394, 40, 'feedback_content', '反馈内容', 'varchar(255)', 'String', 'feedbackContent', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'editor', '', 2, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (395, 40, 'type', '类型', 'varchar(255)', 'String', 'type', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (396, 40, 'nickname', '用户昵称', 'varchar(255)', 'String', 'nickname', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (397, 40, 'create_time', NULL, 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 5, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (398, 40, 'update_time', NULL, 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 6, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (399, 40, 'dept_id', '部门名称', 'int', 'Long', 'deptId', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-05-15 18:24:10', '', NULL);
INSERT INTO `gen_table_column` VALUES (400, 40, 'avatar', '头像', 'varchar(255)', 'String', 'avatar', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-05-15 18:24:10', '', NULL);

-- ----------------------------
-- Table structure for qrtz_calendars
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_calendars`;
CREATE TABLE `qrtz_calendars`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `calendar_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '日历名称',
  `calendar` blob NOT NULL COMMENT '存放持久化calendar对象',
  PRIMARY KEY (`sched_name`, `calendar_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '日历信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_calendars
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_cron_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_cron_triggers`;
CREATE TABLE `qrtz_cron_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `cron_expression` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'cron表达式',
  `time_zone_id` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '时区',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_cron_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'Cron类型的触发器表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_cron_triggers
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_fired_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_fired_triggers`;
CREATE TABLE `qrtz_fired_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `entry_id` varchar(95) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度器实例id',
  `trigger_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `instance_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度器实例名',
  `fired_time` bigint NOT NULL COMMENT '触发的时间',
  `sched_time` bigint NOT NULL COMMENT '定时器制定的时间',
  `priority` int NOT NULL COMMENT '优先级',
  `state` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '状态',
  `job_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '任务名称',
  `job_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '任务组名',
  `is_nonconcurrent` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否并发',
  `requests_recovery` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否接受恢复执行',
  PRIMARY KEY (`sched_name`, `entry_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '已触发的触发器表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_fired_triggers
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_job_details
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_job_details`;
CREATE TABLE `qrtz_job_details`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `job_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务名称',
  `job_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务组名',
  `description` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '相关介绍',
  `job_class_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '执行任务类名称',
  `is_durable` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '是否持久化',
  `is_nonconcurrent` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '是否并发',
  `is_update_data` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '是否更新数据',
  `requests_recovery` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '是否接受恢复执行',
  `job_data` blob NULL COMMENT '存放持久化job对象',
  PRIMARY KEY (`sched_name`, `job_name`, `job_group`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '任务详细信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_job_details
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_locks
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_locks`;
CREATE TABLE `qrtz_locks`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `lock_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '悲观锁名称',
  PRIMARY KEY (`sched_name`, `lock_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '存储的悲观锁信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_locks
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_paused_trigger_grps
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_paused_trigger_grps`;
CREATE TABLE `qrtz_paused_trigger_grps`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `trigger_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  PRIMARY KEY (`sched_name`, `trigger_group`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '暂停的触发器表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_paused_trigger_grps
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_scheduler_state
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_scheduler_state`;
CREATE TABLE `qrtz_scheduler_state`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `instance_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '实例名称',
  `last_checkin_time` bigint NOT NULL COMMENT '上次检查时间',
  `checkin_interval` bigint NOT NULL COMMENT '检查间隔时间',
  PRIMARY KEY (`sched_name`, `instance_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '调度器状态表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_scheduler_state
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_simple_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_simple_triggers`;
CREATE TABLE `qrtz_simple_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `repeat_count` bigint NOT NULL COMMENT '重复的次数统计',
  `repeat_interval` bigint NOT NULL COMMENT '重复的间隔时间',
  `times_triggered` bigint NOT NULL COMMENT '已经触发的次数',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_simple_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '简单触发器的信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_simple_triggers
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_simprop_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_simprop_triggers`;
CREATE TABLE `qrtz_simprop_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `str_prop_1` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'String类型的trigger的第一个参数',
  `str_prop_2` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'String类型的trigger的第二个参数',
  `str_prop_3` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'String类型的trigger的第三个参数',
  `int_prop_1` int NULL DEFAULT NULL COMMENT 'int类型的trigger的第一个参数',
  `int_prop_2` int NULL DEFAULT NULL COMMENT 'int类型的trigger的第二个参数',
  `long_prop_1` bigint NULL DEFAULT NULL COMMENT 'long类型的trigger的第一个参数',
  `long_prop_2` bigint NULL DEFAULT NULL COMMENT 'long类型的trigger的第二个参数',
  `dec_prop_1` decimal(13, 4) NULL DEFAULT NULL COMMENT 'decimal类型的trigger的第一个参数',
  `dec_prop_2` decimal(13, 4) NULL DEFAULT NULL COMMENT 'decimal类型的trigger的第二个参数',
  `bool_prop_1` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'Boolean类型的trigger的第一个参数',
  `bool_prop_2` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'Boolean类型的trigger的第二个参数',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_simprop_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '同步机制的行锁表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_simprop_triggers
-- ----------------------------

-- ----------------------------
-- Table structure for qrtz_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_triggers`;
CREATE TABLE `qrtz_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '触发器的名字',
  `trigger_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '触发器所属组的名字',
  `job_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_job_details表job_name的外键',
  `job_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'qrtz_job_details表job_group的外键',
  `description` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '相关介绍',
  `next_fire_time` bigint NULL DEFAULT NULL COMMENT '上一次触发时间（毫秒）',
  `prev_fire_time` bigint NULL DEFAULT NULL COMMENT '下一次触发时间（默认为-1表示不触发）',
  `priority` int NULL DEFAULT NULL COMMENT '优先级',
  `trigger_state` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '触发器状态',
  `trigger_type` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '触发器的类型',
  `start_time` bigint NOT NULL COMMENT '开始时间',
  `end_time` bigint NULL DEFAULT NULL COMMENT '结束时间',
  `calendar_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日程表名称',
  `misfire_instr` smallint NULL DEFAULT NULL COMMENT '补偿执行的策略',
  `job_data` blob NULL COMMENT '存放持久化job对象',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  INDEX `sched_name`(`sched_name` ASC, `job_name` ASC, `job_group` ASC) USING BTREE,
  CONSTRAINT `qrtz_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `job_name`, `job_group`) REFERENCES `qrtz_job_details` (`sched_name`, `job_name`, `job_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '触发器详细信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of qrtz_triggers
-- ----------------------------

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int NOT NULL AUTO_INCREMENT COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '参数键名',
  `config_value` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'N' COMMENT '系统内置（Y是 N否）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 118 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '参数配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (3, '主框架页-侧边栏主题', 'sys.index.sideTheme', 'theme-dark', 'N', 'admin', '2024-04-10 15:08:50', 'admin', '2024-04-10 23:52:30', '深色主题theme-dark，浅色主题theme-light');
INSERT INTO `sys_config` VALUES (4, '账号自助-验证码开关', 'sys.account.captchaEnabled', 'true', 'Y', 'admin', '2024-04-10 15:08:50', '', NULL, '是否开启验证码功能（true开启，false关闭）');
INSERT INTO `sys_config` VALUES (5, '账号自助-是否开启用户注册功能', 'sys.account.registerUser', 'true', 'Y', 'admin', '2024-04-10 15:08:50', 'admin', '2024-05-17 11:19:02', '是否开启注册用户功能（true开启，false关闭）');
INSERT INTO `sys_config` VALUES (6, '用户登录-黑名单列表', 'sys.login.blackIPList', '', 'Y', 'admin', '2024-04-10 15:08:50', '', NULL, '设置登录IP黑名单限制，多个匹配项以;分隔，支持匹配（*通配、网段）');

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `dept_id` bigint NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `parent_id` bigint NULL DEFAULT 0 COMMENT '父部门id',
  `ancestors` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '祖级列表',
  `dept_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '部门名称',
  `order_num` int NULL DEFAULT 0 COMMENT '显示顺序',
  `leader` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '负责人',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '部门状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`dept_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 205 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '部门表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (100, 0, '0', 'AX', 0, 'ax', '176666666', 'ax@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-14 21:09:36');
INSERT INTO `sys_dept` VALUES (101, 100, '0,100', '测试', 1, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-16 22:50:08');
INSERT INTO `sys_dept` VALUES (102, 100, '0,100', '公司名称', 2, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (103, 101, '0,100,101', '子公司测试', 1, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-16 22:50:21');
INSERT INTO `sys_dept` VALUES (104, 101, '0,100,101', '市场部门', 2, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (105, 101, '0,100,101', '测试部门', 3, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (106, 101, '0,100,101', '财务部门', 4, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (107, 101, '0,100,101', '运维部门', 5, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (108, 102, '0,100,102', '市场部门', 1, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (109, 102, '0,100,102', '财务部门', 2, 'AX', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (200, 100, '0,100', '访客', 0, 'AX', '1333333333', NULL, '0', '0', 'admin', '2024-04-10 20:32:22', 'admin', '2024-05-16 22:50:28');

-- ----------------------------
-- Table structure for sys_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_data`;
CREATE TABLE `sys_dict_data`  (
  `dict_code` bigint NOT NULL AUTO_INCREMENT COMMENT '字典编码',
  `dict_sort` int NULL DEFAULT 0 COMMENT '字典排序',
  `dict_label` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '字典标签',
  `dict_value` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '字典键值',
  `dict_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `css_class` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '样式属性（其他样式扩展）',
  `list_class` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '表格回显样式',
  `is_default` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'N' COMMENT '是否默认（Y是 N否）',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 110 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字典数据表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dict_data
-- ----------------------------
INSERT INTO `sys_dict_data` VALUES (1, 1, '男', '0', 'sys_user_sex', '', '', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '性别男');
INSERT INTO `sys_dict_data` VALUES (2, 2, '女', '1', 'sys_user_sex', '', '', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '性别女');
INSERT INTO `sys_dict_data` VALUES (3, 3, '未知', '2', 'sys_user_sex', '', '', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '性别未知');
INSERT INTO `sys_dict_data` VALUES (4, 1, '显示', '0', 'sys_show_hide', '', 'primary', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '显示菜单');
INSERT INTO `sys_dict_data` VALUES (5, 2, '隐藏', '1', 'sys_show_hide', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '隐藏菜单');
INSERT INTO `sys_dict_data` VALUES (6, 1, '正常', '0', 'sys_normal_disable', '', 'primary', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (7, 2, '停用', '1', 'sys_normal_disable', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (8, 1, '正常', '0', 'sys_job_status', '', 'primary', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (9, 2, '暂停', '1', 'sys_job_status', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (10, 1, '默认', 'DEFAULT', 'sys_job_group', '', '', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '默认分组');
INSERT INTO `sys_dict_data` VALUES (11, 2, '系统', 'SYSTEM', 'sys_job_group', '', '', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '系统分组');
INSERT INTO `sys_dict_data` VALUES (12, 1, '是', 'Y', 'sys_yes_no', '', 'primary', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '系统默认是');
INSERT INTO `sys_dict_data` VALUES (13, 2, '否', 'N', 'sys_yes_no', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '系统默认否');
INSERT INTO `sys_dict_data` VALUES (14, 1, '通知', '1', 'sys_notice_type', '', 'warning', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '通知');
INSERT INTO `sys_dict_data` VALUES (15, 2, '公告', '2', 'sys_notice_type', '', 'success', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '公告');
INSERT INTO `sys_dict_data` VALUES (16, 1, '正常', '0', 'sys_notice_status', '', 'primary', 'Y', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (17, 2, '关闭', '1', 'sys_notice_status', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '关闭状态');
INSERT INTO `sys_dict_data` VALUES (18, 99, '其他', '0', 'sys_oper_type', '', 'info', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '其他操作');
INSERT INTO `sys_dict_data` VALUES (19, 1, '新增', '1', 'sys_oper_type', '', 'info', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '新增操作');
INSERT INTO `sys_dict_data` VALUES (20, 2, '修改', '2', 'sys_oper_type', '', 'info', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '修改操作');
INSERT INTO `sys_dict_data` VALUES (21, 3, '删除', '3', 'sys_oper_type', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '删除操作');
INSERT INTO `sys_dict_data` VALUES (22, 4, '授权', '4', 'sys_oper_type', '', 'primary', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '授权操作');
INSERT INTO `sys_dict_data` VALUES (23, 5, '导出', '5', 'sys_oper_type', '', 'warning', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '导出操作');
INSERT INTO `sys_dict_data` VALUES (24, 6, '导入', '6', 'sys_oper_type', '', 'warning', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '导入操作');
INSERT INTO `sys_dict_data` VALUES (25, 7, '强退', '7', 'sys_oper_type', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '强退操作');
INSERT INTO `sys_dict_data` VALUES (26, 8, '生成代码', '8', 'sys_oper_type', '', 'warning', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '生成操作');
INSERT INTO `sys_dict_data` VALUES (27, 9, '清空数据', '9', 'sys_oper_type', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '清空操作');
INSERT INTO `sys_dict_data` VALUES (28, 1, '成功', '0', 'sys_common_status', '', 'primary', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (29, 2, '失败', '1', 'sys_common_status', '', 'danger', 'N', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '停用状态');

-- ----------------------------
-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type`  (
  `dict_id` bigint NOT NULL AUTO_INCREMENT COMMENT '字典主键',
  `dict_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '字典名称',
  `dict_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_id`) USING BTREE,
  UNIQUE INDEX `dict_type`(`dict_type` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 103 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字典类型表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dict_type
-- ----------------------------
INSERT INTO `sys_dict_type` VALUES (1, '用户性别', 'sys_user_sex', '0', 'admin', '2024-04-10 15:08:50', 'admin', '2024-05-13 12:22:49', '用户性别列表');
INSERT INTO `sys_dict_type` VALUES (2, '菜单状态', 'sys_show_hide', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '菜单状态列表');
INSERT INTO `sys_dict_type` VALUES (3, '系统开关', 'sys_normal_disable', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '系统开关列表');
INSERT INTO `sys_dict_type` VALUES (4, '任务状态', 'sys_job_status', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '任务状态列表');
INSERT INTO `sys_dict_type` VALUES (5, '任务分组', 'sys_job_group', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '任务分组列表');
INSERT INTO `sys_dict_type` VALUES (6, '系统是否', 'sys_yes_no', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '系统是否列表');
INSERT INTO `sys_dict_type` VALUES (7, '通知类型', 'sys_notice_type', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '通知类型列表');
INSERT INTO `sys_dict_type` VALUES (8, '通知状态', 'sys_notice_status', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '通知状态列表');
INSERT INTO `sys_dict_type` VALUES (9, '操作类型', 'sys_oper_type', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '操作类型列表');
INSERT INTO `sys_dict_type` VALUES (10, '系统状态', 'sys_common_status', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '登录状态列表');
INSERT INTO `sys_dict_type` VALUES (100, '网址分类', 'website_type', '0', 'admin', '2024-04-10 22:57:53', '', NULL, '网页分类列表');
INSERT INTO `sys_dict_type` VALUES (102, '图片分类', 'sys_gallery', '0', 'admin', '2024-04-15 12:23:56', '', NULL, '图片分类,系统用');

-- ----------------------------
-- Table structure for sys_feedback
-- ----------------------------
DROP TABLE IF EXISTS `sys_feedback`;
CREATE TABLE `sys_feedback`  (
  `feedback_id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `feedback_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '反馈内容',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类型',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `create_time` datetime NULL DEFAULT NULL,
  `update_time` datetime NULL DEFAULT NULL,
  `dept_id` int NULL DEFAULT NULL COMMENT '部门名称',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`feedback_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_feedback
-- ----------------------------
INSERT INTO `sys_feedback` VALUES (22, '111111111', '', 'AX超管', '2024-05-17 11:26:17', '2024-05-17 11:43:07', 103, 'avatar/3DDD-1.png');
INSERT INTO `sys_feedback` VALUES (23, '333', '', 'AX超管', '2024-05-17 11:26:19', NULL, 103, 'avatar/3DDD-1.png');
INSERT INTO `sys_feedback` VALUES (24, '123', '', 'AX超管', '2024-05-17 11:26:20', NULL, 103, 'avatar/3DDD-1.png');
INSERT INTO `sys_feedback` VALUES (25, '123', '', 'AX超管', '2024-05-17 11:26:21', NULL, 103, 'avatar/3DDD-1.png');
INSERT INTO `sys_feedback` VALUES (26, '123', '', 'AX超管', '2024-05-17 11:26:22', NULL, 103, 'avatar/3DDD-1.png');

-- ----------------------------
-- Table structure for sys_job
-- ----------------------------
DROP TABLE IF EXISTS `sys_job`;
CREATE TABLE `sys_job`  (
  `job_id` bigint NOT NULL AUTO_INCREMENT COMMENT '任务ID',
  `job_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '任务名称',
  `job_group` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'DEFAULT' COMMENT '任务组名',
  `invoke_target` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调用目标字符串',
  `cron_expression` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT 'cron执行表达式',
  `misfire_policy` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '3' COMMENT '计划执行错误策略（1立即执行 2执行一次 3放弃执行）',
  `concurrent` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '是否并发执行（0允许 1禁止）',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '状态（0正常 1暂停）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注信息',
  PRIMARY KEY (`job_id`, `job_name`, `job_group`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '定时任务调度表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_job
-- ----------------------------
INSERT INTO `sys_job` VALUES (1, '系统默认（无参）', 'DEFAULT', 'ryTask.ryNoParams', '0/10 * * * * ?', '3', '1', '1', 'admin', '2024-04-10 15:08:50', '', NULL, '');
INSERT INTO `sys_job` VALUES (2, '系统默认（有参）', 'DEFAULT', 'ryTask.ryParams(\'ry\')', '0/15 * * * * ?', '3', '1', '1', 'admin', '2024-04-10 15:08:50', '', NULL, '');
INSERT INTO `sys_job` VALUES (3, '系统默认（多参）', 'DEFAULT', 'ryTask.ryMultipleParams(\'ry\', true, 2000L, 316.50D, 100)', '0/20 * * * * ?', '3', '1', '1', 'admin', '2024-04-10 15:08:50', '', NULL, '');

-- ----------------------------
-- Table structure for sys_job_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_job_log`;
CREATE TABLE `sys_job_log`  (
  `job_log_id` bigint NOT NULL AUTO_INCREMENT COMMENT '任务日志ID',
  `job_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务名称',
  `job_group` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务组名',
  `invoke_target` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '调用目标字符串',
  `job_message` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日志信息',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '执行状态（0正常 1失败）',
  `exception_info` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '异常信息',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`job_log_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '定时任务调度日志表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_job_log
-- ----------------------------

-- ----------------------------
-- Table structure for sys_logininfor
-- ----------------------------
DROP TABLE IF EXISTS `sys_logininfor`;
CREATE TABLE `sys_logininfor`  (
  `info_id` bigint NOT NULL AUTO_INCREMENT COMMENT '访问ID',
  `user_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '用户账号',
  `ipaddr` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '登录IP地址',
  `login_location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '登录地点',
  `browser` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '浏览器类型',
  `os` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '操作系统',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '登录状态（0成功 1失败）',
  `msg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '提示消息',
  `login_time` datetime NULL DEFAULT NULL COMMENT '访问时间',
  PRIMARY KEY (`info_id`) USING BTREE,
  INDEX `idx_sys_logininfor_s`(`status` ASC) USING BTREE,
  INDEX `idx_sys_logininfor_lt`(`login_time` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 986 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统访问记录' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_logininfor
-- ----------------------------

-- ----------------------------
-- Table structure for sys_memo
-- ----------------------------
DROP TABLE IF EXISTS `sys_memo`;
CREATE TABLE `sys_memo`  (
  `memo_id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备忘录标题',
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备忘录的值',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备忘录描述',
  `extra` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '附加值',
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID',
  `type` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '1：备忘录，2：记事本',
  `dept_id` int NULL DEFAULT NULL COMMENT '部门ID',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`memo_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_memo
-- ----------------------------
INSERT INTO `sys_memo` VALUES (26, '111', '11', '11', '11', 1, '1', 103, '2024-05-17 13:39:58', NULL);
INSERT INTO `sys_memo` VALUES (27, 'asdad', 'asdasda', 'dasdas', '', 1, '1', 103, '2024-05-17 13:40:12', NULL);
INSERT INTO `sys_memo` VALUES (28, '1323123', '21321312', '33', '333', 1, '1', 103, '2024-05-17 13:40:56', '2024-05-17 13:41:04');

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` bigint NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `menu_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单名称',
  `parent_id` bigint NULL DEFAULT 0 COMMENT '父菜单ID',
  `order_num` int NULL DEFAULT 0 COMMENT '显示顺序',
  `path` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '路由地址',
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组件路径',
  `query` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '路由参数',
  `is_frame` int NULL DEFAULT 1 COMMENT '是否为外链（0是 1否）',
  `is_cache` int NULL DEFAULT 0 COMMENT '是否缓存（0缓存 1不缓存）',
  `menu_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '菜单状态（0显示 1隐藏）',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '菜单状态（0正常 1停用）',
  `perms` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `icon` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '#' COMMENT '菜单图标',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2111 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单权限表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '系统管理', 0, 1, 'system', NULL, '', 1, 0, 'M', '0', '0', '', 'system', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-16 18:32:05', '系统管理目录');
INSERT INTO `sys_menu` VALUES (2, '系统监控', 0, 2, 'monitor', NULL, '', 1, 0, 'M', '0', '0', '', 'monitor', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-18 20:18:35', '系统监控目录');
INSERT INTO `sys_menu` VALUES (100, '用户管理', 1, 1, 'user', 'system/user/index', '', 1, 0, 'C', '0', '0', 'system:user:list', 'user', 'admin', '2024-04-10 15:08:49', '', NULL, '用户管理菜单');
INSERT INTO `sys_menu` VALUES (101, '身份管理', 1, 0, 'role', 'system/role/index', '', 1, 0, 'C', '0', '0', 'system:role:list', 'peoples', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-11 15:32:47', '角色管理菜单');
INSERT INTO `sys_menu` VALUES (102, '菜单管理', 1, 3, 'menu', 'system/menu/index', '', 1, 0, 'C', '0', '0', 'system:menu:list', 'tree-table', 'admin', '2024-04-10 15:08:49', '', NULL, '菜单管理菜单');
INSERT INTO `sys_menu` VALUES (103, '部门管理', 1, 4, 'dept', 'system/dept/index', '', 1, 0, 'C', '0', '0', 'system:dept:list', 'tree', 'admin', '2024-04-10 15:08:49', '', NULL, '部门管理菜单');
INSERT INTO `sys_menu` VALUES (104, '岗位管理', 1, 5, 'post', 'system/post/index', '', 1, 0, 'C', '0', '0', 'system:post:list', 'post', 'admin', '2024-04-10 15:08:49', '', NULL, '岗位管理菜单');
INSERT INTO `sys_menu` VALUES (105, '字典管理', 1, 6, 'dict', 'system/dict/index', '', 1, 0, 'C', '0', '0', 'system:dict:list', 'dict', 'admin', '2024-04-10 15:08:49', '', NULL, '字典管理菜单');
INSERT INTO `sys_menu` VALUES (106, '参数设置', 1, 7, 'config', 'system/config/index', '', 1, 0, 'C', '0', '0', 'system:config:list', 'edit', 'admin', '2024-04-10 15:08:49', '', NULL, '参数设置菜单');
INSERT INTO `sys_menu` VALUES (107, '通知公告', 1, 8, 'notice', 'system/notice/index', '', 1, 0, 'C', '0', '0', 'system:notice:list', 'message', 'admin', '2024-04-10 15:08:49', '', NULL, '通知公告菜单');
INSERT INTO `sys_menu` VALUES (108, '日志管理', 1, 9, 'log', '', '', 1, 0, 'M', '0', '0', '', 'log', 'admin', '2024-04-10 15:08:49', '', NULL, '日志管理菜单');
INSERT INTO `sys_menu` VALUES (109, '在线用户', 2, 1, 'online', 'monitor/online/index', '', 1, 0, 'C', '0', '0', 'monitor:online:list', 'online', 'admin', '2024-04-10 15:08:49', '', NULL, '在线用户菜单');
INSERT INTO `sys_menu` VALUES (110, '定时任务', 2, 2, 'job', 'monitor/job/index', '', 1, 0, 'C', '0', '0', 'monitor:job:list', 'job', 'admin', '2024-04-10 15:08:49', '', NULL, '定时任务菜单');
INSERT INTO `sys_menu` VALUES (111, '数据监控', 2, 3, 'druid', 'monitor/druid/index', '', 1, 0, 'C', '0', '0', 'monitor:druid:list', 'druid', 'admin', '2024-04-10 15:08:49', '', NULL, '数据监控菜单');
INSERT INTO `sys_menu` VALUES (112, '服务监控', 2, 4, 'server', 'monitor/server/index', '', 1, 0, 'C', '0', '0', 'monitor:server:list', 'server', 'admin', '2024-04-10 15:08:49', '', NULL, '服务监控菜单');
INSERT INTO `sys_menu` VALUES (114, '缓存列表', 2, 6, 'cache', 'monitor/cache/index', '', 1, 0, 'C', '0', '0', 'monitor:cache:list', 'redis-list', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-19 19:29:50', '缓存列表菜单');
INSERT INTO `sys_menu` VALUES (116, '代码生成', 2100, 2, 'gen', 'tool/gen/index', '', 1, 0, 'C', '0', '0', 'tool:gen:list', 'code', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-12 11:18:40', '代码生成菜单');
INSERT INTO `sys_menu` VALUES (500, '操作日志', 108, 1, 'operlog', 'monitor/operlog/index', '', 1, 0, 'C', '0', '0', 'monitor:operlog:list', 'form', 'admin', '2024-04-10 15:08:49', '', NULL, '操作日志菜单');
INSERT INTO `sys_menu` VALUES (501, '登录日志', 108, 2, 'logininfor', 'monitor/logininfor/index', '', 1, 0, 'C', '0', '0', 'monitor:logininfor:list', 'logininfor', 'admin', '2024-04-10 15:08:49', '', NULL, '登录日志菜单');
INSERT INTO `sys_menu` VALUES (1000, '用户查询', 100, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:user:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1001, '用户新增', 100, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:user:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1002, '用户修改', 100, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:user:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1003, '用户删除', 100, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:user:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1004, '用户导出', 100, 5, '', '', '', 1, 0, 'F', '0', '0', 'system:user:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1005, '用户导入', 100, 6, '', '', '', 1, 0, 'F', '0', '0', 'system:user:import', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1006, '重置密码', 100, 7, '', '', '', 1, 0, 'F', '0', '0', 'system:user:resetPwd', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1007, '身份查询', 101, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:role:query', '#', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-10 20:29:52', '');
INSERT INTO `sys_menu` VALUES (1008, '身份新增', 101, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:role:add', '#', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-10 20:30:01', '');
INSERT INTO `sys_menu` VALUES (1009, '身份修改', 101, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:role:edit', '#', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-10 20:30:05', '');
INSERT INTO `sys_menu` VALUES (1010, '身份删除', 101, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:role:remove', '#', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-10 20:30:09', '');
INSERT INTO `sys_menu` VALUES (1011, '身份导出', 101, 5, '', '', '', 1, 0, 'F', '0', '0', 'system:role:export', '#', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-10 20:30:14', '');
INSERT INTO `sys_menu` VALUES (1012, '菜单查询', 102, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1013, '菜单新增', 102, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1014, '菜单修改', 102, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1015, '菜单删除', 102, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1016, '部门查询', 103, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1017, '部门新增', 103, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1018, '部门修改', 103, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1019, '部门删除', 103, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1020, '岗位查询', 104, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:post:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1021, '岗位新增', 104, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:post:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1022, '岗位修改', 104, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:post:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1023, '岗位删除', 104, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:post:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1024, '岗位导出', 104, 5, '', '', '', 1, 0, 'F', '0', '0', 'system:post:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1025, '字典查询', 105, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1026, '字典新增', 105, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1027, '字典修改', 105, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1028, '字典删除', 105, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1029, '字典导出', 105, 5, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1030, '参数查询', 106, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1031, '参数新增', 106, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1032, '参数修改', 106, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1033, '参数删除', 106, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1034, '参数导出', 106, 5, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1035, '公告查询', 107, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1036, '公告新增', 107, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1037, '公告修改', 107, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1038, '公告删除', 107, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1039, '操作查询', 500, 1, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:operlog:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1040, '操作删除', 500, 2, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:operlog:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1041, '日志导出', 500, 3, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:operlog:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1042, '登录查询', 501, 1, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:logininfor:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1043, '登录删除', 501, 2, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:logininfor:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1044, '日志导出', 501, 3, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:logininfor:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1045, '账户解锁', 501, 4, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:logininfor:unlock', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1046, '在线查询', 109, 1, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:online:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1047, '批量强退', 109, 2, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:online:batchLogout', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1048, '单条强退', 109, 3, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:online:forceLogout', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1049, '任务查询', 110, 1, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1050, '任务新增', 110, 2, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:add', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1051, '任务修改', 110, 3, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1052, '任务删除', 110, 4, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1053, '状态修改', 110, 5, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:changeStatus', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1054, '任务导出', 110, 6, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:export', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1055, '生成查询', 116, 1, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:query', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1056, '生成修改', 116, 2, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:edit', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1057, '生成删除', 116, 3, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:remove', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1058, '导入代码', 116, 4, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:import', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1059, '预览代码', 116, 5, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:preview', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1060, '生成代码', 116, 6, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:code', '#', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2081, '备忘录', 2100, 4, 'memo', 'system/memo/index', NULL, 1, 0, 'C', '0', '0', 'system:memo:list', 'image-icon/file.png', 'admin', '2024-04-16 18:29:23', 'admin', '2024-05-07 10:04:02', '备忘录菜单');
INSERT INTO `sys_menu` VALUES (2082, '备忘录查询', 2081, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:query', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2083, '备忘录新增', 2081, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:add', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2084, '备忘录修改', 2081, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:edit', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2085, '备忘录删除', 2081, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:remove', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2086, '备忘录导出', 2081, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:export', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2087, '反馈管理', 1, 5, 'feedback-management', 'system/feedback/index', NULL, 1, 0, 'C', '0', '0', 'system:feedback:list', 'image-icon/mail.png', 'admin', '2024-04-22 10:22:50', 'admin', '2024-05-08 21:22:39', '系统反馈菜单');
INSERT INTO `sys_menu` VALUES (2088, '系统反馈查询', 2087, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:query', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2089, '系统反馈新增', 2087, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:add', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2090, '系统反馈修改', 2087, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:edit', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2091, '系统反馈删除', 2087, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:remove', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2092, '系统反馈导出', 2087, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:export', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2093, '反馈', 0, 5, 'feedback', 'service/feedback/index', NULL, 1, 1, 'C', '0', '0', '', 'image-icon/icons8-complaint-100.png', 'admin', '2024-04-22 16:56:15', 'admin', '2024-05-02 09:55:58', '');
INSERT INTO `sys_menu` VALUES (2094, '系统测试表', 2100, 7, 'test', 'system/test/index', NULL, 1, 0, 'C', '0', '0', 'system:test:list', 'image-icon/druid.png', 'admin', '2024-04-28 10:35:15', 'admin', '2024-05-07 10:03:53', '系统测试表菜单');
INSERT INTO `sys_menu` VALUES (2095, '系统测试表查询', 2094, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:query', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2096, '系统测试表新增', 2094, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:add', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2097, '系统测试表修改', 2094, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:edit', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2098, '系统测试表删除', 2094, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:remove', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2099, '系统测试表导出', 2094, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:export', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2100, '系统工具', 0, 3, 'tool', NULL, NULL, 1, 1, 'M', '0', '0', '', 'image-icon/pics.png', 'admin', '2024-05-07 10:00:24', 'admin', '2024-05-16 12:10:36', '');
INSERT INTO `sys_menu` VALUES (2101, '文件管理', 0, 0, 'service-folder', 'service/folder/index', NULL, 1, 1, 'C', '0', '0', '', 'image-icon/desk.png', 'admin', '2024-05-09 23:14:13', 'admin', '2024-05-12 20:22:41', '');
INSERT INTO `sys_menu` VALUES (2102, '新建', 2101, 0, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:add', '#', 'admin', '2024-05-09 23:15:14', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2103, '删除', 2101, 1, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:delete', '#', 'admin', '2024-05-09 23:15:39', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2104, '重命名', 2101, 0, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:rename', '#', 'admin', '2024-05-09 23:15:52', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2105, '查看', 2101, 0, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:view', '#', 'admin', '2024-05-09 23:16:08', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2106, '分享', 2101, 5, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:share', '#', 'admin', '2024-05-09 23:16:26', 'admin', '2024-05-11 17:27:26', '');
INSERT INTO `sys_menu` VALUES (2107, '复制', 2101, 7, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:clone', '#', 'admin', '2024-05-10 19:27:23', 'admin', '2024-05-11 17:27:15', '');
INSERT INTO `sys_menu` VALUES (2108, '上传', 2101, 6, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:upload', '#', 'admin', '2024-05-11 17:26:32', 'admin', '2024-05-11 17:27:21', '');
INSERT INTO `sys_menu` VALUES (2109, '属性', 2101, 8, '', NULL, NULL, 1, 1, 'F', '0', '0', 'tool:file:attr', '#', 'admin', '2024-05-11 17:26:48', 'admin', '2024-05-11 17:27:09', '');
INSERT INTO `sys_menu` VALUES (2110, 'TEST', 0, 0, '', NULL, NULL, 1, 1, 'M', '1', '0', NULL, 'image-icon/app-3.png', 'admin', '2024-05-17 13:44:28', '', NULL, '');

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `notice_id` int NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `notice_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `notice_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `notice_content` longblob NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '公告状态（0正常 1关闭）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`notice_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------
INSERT INTO `sys_notice` VALUES (10, '系统通知', '1', 0x3C703E3C7374726F6E673EE983A8E58886E9A1B5E99DA2E6ADA3E59CA8E5BC80E58F91E4B8ADEFBC8CE6849FE8B0A2E4BDBFE794A83131313C2F7374726F6E673E3C2F703E, '0', 'admin', '2024-04-11 13:49:11', 'admin', '2024-05-17 11:19:20', NULL);
INSERT INTO `sys_notice` VALUES (16, '图片加载失效处理', '1', 0x3C703E3C7374726F6E673EE7BD91E9A1B5E5A381E7BAB8E59BBEE78987E5A4B1E69588E997AEE9A2983C2F7374726F6E673E3C2F703E3C703E312EE7BD91E9A1B5E58685E68980E69C89E8B584E6BA90E983BDE68C82E8BDBDE588B06769746565E4B88AE79A84E4BB93E5BA93E4B8ADEFBC8CE4BD866769746565207061676573E7BB8FE5B8B8E587BAE997AEE9A298EFBC8CE5B7B2E7BB8FE8BF81E59B9EE887AAE5B7B1E69C8DE58AA1E599A8EFBC8CE99D99E68081E8B584E6BA90E68C87E59091E58FAFE4BBA5E887AAE5AE9AE4B9893C2F703E3C703E322EE5A682E69E9CE5A381E7BAB8E587BAE78EB0E58AA0E8BDBDE4B88DE587BAE69DA5E79A84E997AEE9A298EFBC8CE8AFB7E9878DE696B0E8AEBEE7BDAEE58DB3E58FAF3C2F703E, '0', 'admin', '2024-05-02 11:33:21', 'admin', '2024-05-15 23:24:12', NULL);

-- ----------------------------
-- Table structure for sys_oper_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_oper_log`;
CREATE TABLE `sys_oper_log`  (
  `oper_id` bigint NOT NULL AUTO_INCREMENT COMMENT '日志主键',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '模块标题',
  `business_type` int NULL DEFAULT 0 COMMENT '业务类型（0其它 1新增 2修改 3删除）',
  `method` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '方法名称',
  `request_method` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '请求方式',
  `operator_type` int NULL DEFAULT 0 COMMENT '操作类别（0其它 1后台用户 2手机端用户）',
  `oper_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '操作人员',
  `dept_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '部门名称',
  `oper_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '请求URL',
  `oper_ip` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '主机地址',
  `oper_location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '操作地点',
  `oper_param` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '请求参数',
  `json_result` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '返回参数',
  `status` int NULL DEFAULT 0 COMMENT '操作状态（0正常 1异常）',
  `error_msg` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '错误消息',
  `oper_time` datetime NULL DEFAULT NULL COMMENT '操作时间',
  `cost_time` bigint NULL DEFAULT 0 COMMENT '消耗时间',
  PRIMARY KEY (`oper_id`) USING BTREE,
  INDEX `idx_sys_oper_log_bt`(`business_type` ASC) USING BTREE,
  INDEX `idx_sys_oper_log_s`(`status` ASC) USING BTREE,
  INDEX `idx_sys_oper_log_ot`(`oper_time` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '操作日志记录' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_oper_log
-- ----------------------------

-- ----------------------------
-- Table structure for sys_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_post`;
CREATE TABLE `sys_post`  (
  `post_id` bigint NOT NULL AUTO_INCREMENT COMMENT '岗位ID',
  `post_code` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '岗位编码',
  `post_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '岗位名称',
  `post_sort` int NOT NULL COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`post_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '岗位信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_post
-- ----------------------------
INSERT INTO `sys_post` VALUES (1, 'ceo11111ss', '董事长', 1, '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-17 11:12:09', '');
INSERT INTO `sys_post` VALUES (2, 'se111', '项目经理', 2, '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-17 11:12:13', '');
INSERT INTO `sys_post` VALUES (3, 'hr', '人力资源', 3111, '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-17 11:12:17', '');
INSERT INTO `sys_post` VALUES (4, 'user', '普通员工', 4, '0', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_post` VALUES (5, 'sadsadsa', 'dsadasdsad', 0, '0', 'admin', '2024-05-17 11:12:24', '', NULL, NULL);
INSERT INTO `sys_post` VALUES (6, 'ddd', 'ddddddd', 0, '0', 'admin', '2024-05-17 11:13:22', '', NULL, NULL);
INSERT INTO `sys_post` VALUES (7, '111', '1', 0, '0', 'admin', '2024-05-17 11:13:27', '', NULL, '11');
INSERT INTO `sys_post` VALUES (8, '1111111111', '111111111', 0, '0', 'admin', '2024-05-17 11:13:33', '', NULL, '1111111111');
INSERT INTO `sys_post` VALUES (9, '111111111111', '11111111111', 0, '0', 'admin', '2024-05-17 11:13:38', '', NULL, '11');
INSERT INTO `sys_post` VALUES (10, 'dsadsad', 'sadsadasd', 0, '0', 'admin', '2024-05-17 11:13:43', '', NULL, 'asdas');
INSERT INTO `sys_post` VALUES (11, 'dsadasd', 'asdasdas', 0, '0', 'admin', '2024-05-17 11:13:47', '', NULL, 'dasdas');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` bigint NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `role_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色权限字符串',
  `role_sort` int NOT NULL COMMENT '显示顺序',
  `data_scope` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）',
  `menu_check_strictly` tinyint(1) NULL DEFAULT 1 COMMENT '菜单树选择项是否关联显示',
  `dept_check_strictly` tinyint(1) NULL DEFAULT 1 COMMENT '部门树选择项是否关联显示',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 102 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'admin', 1, '1', 1, 1, '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL, '超级管理员');
INSERT INTO `sys_role` VALUES (2, '观察员', 'observer', 2, '1', 1, 1, '0', '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-05-17 14:52:28', '能看到整个系统完整功能的身份');
INSERT INTO `sys_role` VALUES (100, '访客', 'visitor', 3, '5', 0, 0, '0', '0', 'admin', '2024-04-10 20:31:02', 'admin', '2024-05-17 14:52:38', '访客，只能访问公开的数据');
INSERT INTO `sys_role` VALUES (101, '测试', 'test', 0, '2', 1, 1, '0', '0', 'admin', '2024-04-28 16:18:20', 'admin', '2024-04-28 19:19:54', '测试信息');

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept`  (
  `role_id` bigint NOT NULL COMMENT '角色ID',
  `dept_id` bigint NOT NULL COMMENT '部门ID',
  PRIMARY KEY (`role_id`, `dept_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色和部门关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------
INSERT INTO `sys_role_dept` VALUES (2, 105);
INSERT INTO `sys_role_dept` VALUES (100, 200);
INSERT INTO `sys_role_dept` VALUES (101, 100);

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `role_id` bigint NOT NULL COMMENT '角色ID',
  `menu_id` bigint NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`role_id`, `menu_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色和菜单关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO `sys_role_menu` VALUES (2, 1);
INSERT INTO `sys_role_menu` VALUES (2, 2);
INSERT INTO `sys_role_menu` VALUES (2, 100);
INSERT INTO `sys_role_menu` VALUES (2, 101);
INSERT INTO `sys_role_menu` VALUES (2, 102);
INSERT INTO `sys_role_menu` VALUES (2, 103);
INSERT INTO `sys_role_menu` VALUES (2, 104);
INSERT INTO `sys_role_menu` VALUES (2, 105);
INSERT INTO `sys_role_menu` VALUES (2, 106);
INSERT INTO `sys_role_menu` VALUES (2, 107);
INSERT INTO `sys_role_menu` VALUES (2, 108);
INSERT INTO `sys_role_menu` VALUES (2, 109);
INSERT INTO `sys_role_menu` VALUES (2, 110);
INSERT INTO `sys_role_menu` VALUES (2, 111);
INSERT INTO `sys_role_menu` VALUES (2, 112);
INSERT INTO `sys_role_menu` VALUES (2, 114);
INSERT INTO `sys_role_menu` VALUES (2, 116);
INSERT INTO `sys_role_menu` VALUES (2, 500);
INSERT INTO `sys_role_menu` VALUES (2, 501);
INSERT INTO `sys_role_menu` VALUES (2, 1000);
INSERT INTO `sys_role_menu` VALUES (2, 1007);
INSERT INTO `sys_role_menu` VALUES (2, 1012);
INSERT INTO `sys_role_menu` VALUES (2, 1016);
INSERT INTO `sys_role_menu` VALUES (2, 1020);
INSERT INTO `sys_role_menu` VALUES (2, 1025);
INSERT INTO `sys_role_menu` VALUES (2, 1030);
INSERT INTO `sys_role_menu` VALUES (2, 1035);
INSERT INTO `sys_role_menu` VALUES (2, 1039);
INSERT INTO `sys_role_menu` VALUES (2, 1042);
INSERT INTO `sys_role_menu` VALUES (2, 1046);
INSERT INTO `sys_role_menu` VALUES (2, 1047);
INSERT INTO `sys_role_menu` VALUES (2, 1048);
INSERT INTO `sys_role_menu` VALUES (2, 1049);
INSERT INTO `sys_role_menu` VALUES (2, 1055);
INSERT INTO `sys_role_menu` VALUES (2, 1056);
INSERT INTO `sys_role_menu` VALUES (2, 1057);
INSERT INTO `sys_role_menu` VALUES (2, 1058);
INSERT INTO `sys_role_menu` VALUES (2, 1059);
INSERT INTO `sys_role_menu` VALUES (2, 1060);
INSERT INTO `sys_role_menu` VALUES (2, 2081);
INSERT INTO `sys_role_menu` VALUES (2, 2082);
INSERT INTO `sys_role_menu` VALUES (2, 2087);
INSERT INTO `sys_role_menu` VALUES (2, 2088);
INSERT INTO `sys_role_menu` VALUES (2, 2093);
INSERT INTO `sys_role_menu` VALUES (2, 2094);
INSERT INTO `sys_role_menu` VALUES (2, 2095);
INSERT INTO `sys_role_menu` VALUES (2, 2096);
INSERT INTO `sys_role_menu` VALUES (2, 2097);
INSERT INTO `sys_role_menu` VALUES (2, 2098);
INSERT INTO `sys_role_menu` VALUES (2, 2099);
INSERT INTO `sys_role_menu` VALUES (2, 2100);
INSERT INTO `sys_role_menu` VALUES (2, 2101);
INSERT INTO `sys_role_menu` VALUES (2, 2105);
INSERT INTO `sys_role_menu` VALUES (2, 2109);
INSERT INTO `sys_role_menu` VALUES (100, 1);
INSERT INTO `sys_role_menu` VALUES (100, 107);
INSERT INTO `sys_role_menu` VALUES (100, 1035);
INSERT INTO `sys_role_menu` VALUES (100, 2081);
INSERT INTO `sys_role_menu` VALUES (100, 2082);
INSERT INTO `sys_role_menu` VALUES (100, 2083);
INSERT INTO `sys_role_menu` VALUES (100, 2084);
INSERT INTO `sys_role_menu` VALUES (100, 2085);
INSERT INTO `sys_role_menu` VALUES (100, 2086);
INSERT INTO `sys_role_menu` VALUES (100, 2087);
INSERT INTO `sys_role_menu` VALUES (100, 2088);
INSERT INTO `sys_role_menu` VALUES (100, 2089);
INSERT INTO `sys_role_menu` VALUES (100, 2093);
INSERT INTO `sys_role_menu` VALUES (100, 2094);
INSERT INTO `sys_role_menu` VALUES (100, 2095);
INSERT INTO `sys_role_menu` VALUES (100, 2096);
INSERT INTO `sys_role_menu` VALUES (100, 2097);
INSERT INTO `sys_role_menu` VALUES (100, 2098);
INSERT INTO `sys_role_menu` VALUES (100, 2099);
INSERT INTO `sys_role_menu` VALUES (100, 2100);
INSERT INTO `sys_role_menu` VALUES (100, 2101);
INSERT INTO `sys_role_menu` VALUES (100, 2105);
INSERT INTO `sys_role_menu` VALUES (100, 2109);
INSERT INTO `sys_role_menu` VALUES (101, 1);
INSERT INTO `sys_role_menu` VALUES (101, 100);
INSERT INTO `sys_role_menu` VALUES (101, 101);
INSERT INTO `sys_role_menu` VALUES (101, 103);
INSERT INTO `sys_role_menu` VALUES (101, 1000);
INSERT INTO `sys_role_menu` VALUES (101, 1007);
INSERT INTO `sys_role_menu` VALUES (101, 1016);

-- ----------------------------
-- Table structure for sys_test
-- ----------------------------
DROP TABLE IF EXISTS `sys_test`;
CREATE TABLE `sys_test`  (
  `test_id` int NOT NULL AUTO_INCREMENT COMMENT '测试ID',
  `text_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文本字段',
  `number_field` int NULL DEFAULT NULL COMMENT '数字字段',
  `date_field` datetime NULL DEFAULT NULL COMMENT '日期字段',
  `rich_text_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '富文本字段',
  `select_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '下拉框字段',
  `boolean_field` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '布尔字段',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `textarea_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文本域',
  `tree_field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '树形选择器',
  `sort` smallint UNSIGNED NULL DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`test_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_test
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `dept_id` bigint NULL DEFAULT NULL COMMENT '部门ID',
  `user_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户昵称',
  `user_type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '00' COMMENT '用户类型（00系统用户）',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '用户邮箱',
  `phonenumber` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '手机号码',
  `sex` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '用户性别（0男 1女 2未知）',
  `avatar` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '头像地址',
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '密码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '帐号状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `login_ip` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '最后登录IP',
  `login_date` datetime NULL DEFAULT NULL COMMENT '最后登录时间',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 122 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 103, 'admin', 'AX超管', '00', 'ax@qq.com', '15888888888', '1', 'avatar/3DDD-1.png', '$2a$10$XABVK1mlV04Gxc6Dg/T7V.ic9O.vbBo06pWamUxexuNiK8Ua0C9We', '0', '0', '127.0.0.1', '2024-05-17 14:52:06', 'admin', '2024-04-10 15:08:49', '', '2024-05-17 14:52:05', '管理员');
INSERT INTO `sys_user` VALUES (2, 200, 'ax-test', 'AX-测试账号', '00', 'ax@qq.com', '15666666666', '1', '', '$2a$10$8xkL0c8Q2VJBnN.TZ.aXDu.L8a/dD.uXPUHiO94nLo0lZLsLzlyB.', '0', '0', '127.0.0.1', '2024-04-10 21:58:36', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-22 11:08:12', '访客角色');
INSERT INTO `sys_user` VALUES (100, 200, 'Annis', 'Annis', '00', '11111111111@123.com', '11111111111', '1', 'Delivery boy-4.png', '$2a$10$BnRVxbqfdoKJ.5eV9Vv7quABjjEEzYP8qoSxVjgPoH7JyZJEHcnJ6', '0', '0', '124.240.33.47', '2024-05-03 11:04:59', 'admin', '2024-04-10 19:03:08', 'admin', '2024-05-03 11:04:58', '小爱同学');
INSERT INTO `sys_user` VALUES (112, 100, 'observer', '观察员', '00', '', '17666666666', '0', 'avatar/3DDD-1.png', '$2a$10$UtS5NtjZkVKpc7M..VaDC.ZOzdCRDXj51HdtAIRPqvbZVnJZnX4bq', '0', '0', '127.0.0.1', '2024-05-17 14:23:55', 'admin', '2024-04-21 18:08:19', 'admin', '2024-05-17 14:23:54', '能看到完整的系统信息');
INSERT INTO `sys_user` VALUES (113, 200, 'test02', 'test02', '00', '', '', '0', '3DDD.png', '$2a$10$K2Gm1xsPdJ4qSOfH22PTDOm.wGgAgd0T4HTM5D9qflkDrEolo3Rga', '0', '0', '124.240.33.47', '2024-05-14 00:30:00', '', '2024-04-22 19:40:59', '', '2024-05-14 00:30:00', NULL);
INSERT INTO `sys_user` VALUES (115, 200, 'qweqwe', 'qweqwe', '00', '', '', '0', '', '$2a$10$seWJa6VRz4dUu.yjxkZlMeOwTa1zGZQ0.3uhhub6kbjz9bp9M.ugO', '0', '0', '183.4.21.128', '2024-04-23 14:11:53', '', '2024-04-23 14:11:44', '', '2024-04-23 14:11:52', NULL);
INSERT INTO `sys_user` VALUES (116, 103, 'qwe123', 'qwe123', '00', '', '', '0', '', '$2a$10$3WAe.SAjXPbhwvlYlTQd4uWev2rTN4LaKsdcJepqneCxv.oujDCTC', '0', '0', '183.4.21.128', '2024-04-23 14:32:34', '', '2024-04-23 14:32:30', 'admin', '2024-05-17 09:55:29', NULL);
INSERT INTO `sys_user` VALUES (117, 200, 'zkx123', 'zkx123', '00', '', '', '0', '', '$2a$10$4iYAP/A5m9/BaM2k4C1z7ufl4vodc2LBH9M4JTasxtMSjCeL0l1EG', '0', '2', '58.208.39.123', '2024-04-23 14:52:17', '', '2024-04-23 14:52:05', '', '2024-04-23 14:52:17', NULL);
INSERT INTO `sys_user` VALUES (121, 101, 'test003', 'test003', '00', '444891953@qq.com', '13467987878', '0', '', '$2a$10$a0ZEVT/SHo87ynmEdHhS9OkTiHAxkrLoXf9XPMhz7HRLfOge7z5pa', '0', '0', '', NULL, 'admin', '2024-05-17 10:02:56', 'admin', '2024-05-17 10:05:33', '这是一些备注信息');

-- ----------------------------
-- Table structure for sys_user_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_post`;
CREATE TABLE `sys_user_post`  (
  `user_id` bigint NOT NULL COMMENT '用户ID',
  `post_id` bigint NOT NULL COMMENT '岗位ID',
  PRIMARY KEY (`user_id`, `post_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户与岗位关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_post
-- ----------------------------
INSERT INTO `sys_user_post` VALUES (1, 1);
INSERT INTO `sys_user_post` VALUES (2, 2);
INSERT INTO `sys_user_post` VALUES (100, 1);
INSERT INTO `sys_user_post` VALUES (112, 4);
INSERT INTO `sys_user_post` VALUES (114, 2);
INSERT INTO `sys_user_post` VALUES (116, 1);
INSERT INTO `sys_user_post` VALUES (116, 2);
INSERT INTO `sys_user_post` VALUES (116, 3);
INSERT INTO `sys_user_post` VALUES (116, 4);

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `user_id` bigint NOT NULL COMMENT '用户ID',
  `role_id` bigint NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户和角色关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (1, 1);
INSERT INTO `sys_user_role` VALUES (2, 100);
INSERT INTO `sys_user_role` VALUES (100, 100);
INSERT INTO `sys_user_role` VALUES (101, 100);
INSERT INTO `sys_user_role` VALUES (102, 100);
INSERT INTO `sys_user_role` VALUES (104, 100);
INSERT INTO `sys_user_role` VALUES (105, 100);
INSERT INTO `sys_user_role` VALUES (106, 100);
INSERT INTO `sys_user_role` VALUES (107, 100);
INSERT INTO `sys_user_role` VALUES (108, 100);
INSERT INTO `sys_user_role` VALUES (109, 100);
INSERT INTO `sys_user_role` VALUES (110, 100);
INSERT INTO `sys_user_role` VALUES (111, 100);
INSERT INTO `sys_user_role` VALUES (112, 2);
INSERT INTO `sys_user_role` VALUES (113, 100);
INSERT INTO `sys_user_role` VALUES (114, 101);
INSERT INTO `sys_user_role` VALUES (115, 100);
INSERT INTO `sys_user_role` VALUES (116, 100);
INSERT INTO `sys_user_role` VALUES (118, 100);
INSERT INTO `sys_user_role` VALUES (119, 100);
INSERT INTO `sys_user_role` VALUES (120, 100);
INSERT INTO `sys_user_role` VALUES (121, 2);
INSERT INTO `sys_user_role` VALUES (121, 100);
INSERT INTO `sys_user_role` VALUES (121, 101);

SET FOREIGN_KEY_CHECKS = 1;
