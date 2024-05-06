/*
 Navicat Premium Data Transfer

 Source Server         : ax
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : 150.158.14.110:3306
 Source Schema         : ax

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 28/04/2024 13:44:25
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
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成业务表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gen_table
-- ----------------------------
INSERT INTO `gen_table` VALUES (2, 'sys_config', '参数配置表', NULL, NULL, 'SysConfig', 'crud', '', 'com.ruoyi.system', 'system', 'config', '参数配置', 'AX', '0', '/', '{}', 'admin', '2024-04-13 13:54:13', '', '2024-04-14 19:19:02', NULL);
INSERT INTO `gen_table` VALUES (3, 'sys_notice', '通知公告表', NULL, NULL, 'SysNotice', 'crud', '', 'com.ruoyi.system', 'system', 'notice', '通知公告', 'AX', '0', '/', '{}', 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51', '系统通知公告');
INSERT INTO `gen_table` VALUES (4, 'sys_dept', '部门表', NULL, NULL, 'SysDept', 'crud', '', 'com.ruoyi.system', 'system', 'dept', '部门', 'AX', '0', '/', '{}', 'admin', '2024-04-13 16:45:02', '', '2024-04-15 09:34:07', '部门管理');
INSERT INTO `gen_table` VALUES (12, 'sys_oper_log', '操作日志记录', NULL, NULL, 'SysOperLog', 'crud', '', 'com.ruoyi.system', 'system', 'log', '操作日志记录', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:11', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (13, 'sys_dict_data', '字典数据表', NULL, NULL, 'SysDictData', 'crud', '', 'com.ruoyi.system', 'system', 'data', '字典数据', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:12', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (14, 'sys_post', '岗位信息表', NULL, NULL, 'SysPost', 'crud', '', 'com.ruoyi.system', 'system', 'post', '岗位信息', 'Ax', '0', '/', '{}', 'admin', '2024-04-13 16:45:12', '', '2024-04-15 09:05:50', NULL);
INSERT INTO `gen_table` VALUES (15, 'sys_dict_type', '字典类型表', NULL, NULL, 'SysDictType', 'crud', '', 'com.ruoyi.system', 'system', 'type', '字典类型', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:13', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (17, 'sys_job', '定时任务调度表', NULL, NULL, 'SysJob', 'crud', '', 'com.ruoyi.system', 'system', 'job', '定时任务调度', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:14', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (18, 'sys_job_log', '定时任务调度日志表', NULL, NULL, 'SysJobLog', 'crud', '', 'com.ruoyi.system', 'system', 'log', '定时任务调度日志', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:15', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (19, 'sys_logininfor', '系统访问记录', NULL, NULL, 'SysLogininfor', 'crud', '', 'com.ruoyi.system', 'system', 'logininfor', '系统访问记录', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:16', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (20, 'sys_menu', '菜单权限表', NULL, NULL, 'SysMenu', 'crud', '', 'com.ruoyi.system', 'system', 'menu', '菜单权限', 'Win', '0', '/', NULL, 'admin', '2024-04-13 16:45:17', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (24, 'sys_role', '角色信息表', NULL, NULL, 'SysRole', 'crud', '', 'com.ruoyi.system', 'system', 'role', '角色信息', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:26', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (25, 'sys_role_dept', '角色和部门关联表', NULL, NULL, 'SysRoleDept', 'crud', '', 'com.ruoyi.system', 'system', 'dept', '角色和部门关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:27', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (26, 'sys_role_menu', '角色和菜单关联表', NULL, NULL, 'SysRoleMenu', 'crud', '', 'com.ruoyi.system', 'system', 'menu', '角色和菜单关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:28', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (27, 'sys_user', '用户信息表', NULL, NULL, 'SysUser', 'crud', '', 'com.ruoyi.system', 'system', 'user', '用户信息', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:28', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (28, 'sys_user_role', '用户和角色关联表', NULL, NULL, 'SysUserRole', 'crud', '', 'com.ruoyi.system', 'system', 'role', '用户和角色关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:24:30', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (29, 'sys_website', '网页收藏', NULL, NULL, 'SysWebsite', 'crud', '', 'com.ruoyi.system', 'system', 'website', '网页收藏', 'AX', '0', '/', '{}', 'admin', '2024-04-14 21:35:12', '', '2024-04-16 11:16:09', '网页收藏');
INSERT INTO `gen_table` VALUES (30, 'sys_user_post', '用户与岗位关联表', NULL, NULL, 'SysUserPost', 'crud', '', 'com.ruoyi.system', 'system', 'post', '用户与岗位关联', 'AX', '0', '/', NULL, 'admin', '2024-04-14 21:47:14', '', NULL, NULL);
INSERT INTO `gen_table` VALUES (32, 'sys_memo', '备忘录', NULL, NULL, 'SysMemo', 'crud', '', 'com.ruoyi.system', 'system', 'memo', '备忘录', 'AX', '0', '/', '{}', 'admin', '2024-04-16 18:25:42', '', '2024-04-16 19:33:44', '系统备忘录');
INSERT INTO `gen_table` VALUES (33, 'sys_feedback', '系统反馈', NULL, NULL, 'SysFeedback', 'crud', '', 'com.ruoyi.system', 'system', 'feedback', '系统反馈', 'AX', '0', '/', '{}', 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58', '系统反馈');
INSERT INTO `gen_table` VALUES (34, 'sys_test', '系统测试专用表', NULL, NULL, 'SysTest', 'crud', '', 'com.ruoyi.system', 'system', 'test', '系统测试表', 'AX', '0', '/', '{}', 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47', '系统测试专用表');

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
) ENGINE = InnoDB AUTO_INCREMENT = 344 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成业务表字段' ROW_FORMAT = DYNAMIC;

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
INSERT INTO `gen_table_column` VALUES (19, 3, 'notice_id', '公告ID', 'int', 'Long', 'noticeId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (20, 3, 'notice_title', '公告标题', 'varchar(50)', 'String', 'noticeTitle', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (21, 3, 'notice_type', '公告类型（1通知 2公告）', 'char(1)', 'String', 'noticeType', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', 'sys_notice_type', 3, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (22, 3, 'notice_content', '公告内容', 'longblob', 'String', 'noticeContent', '0', '0', '1', '1', '1', '1', '0', 'EQ', 'editor', '', 4, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (23, 3, 'status', '公告状态（0正常 1关闭）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', 'sys_notice_status', 5, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (24, 3, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (25, 3, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 7, 'admin', '2024-04-13 14:17:04', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (26, 3, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-04-13 14:17:05', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (27, 3, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 14:17:05', '', '2024-04-15 10:23:51');
INSERT INTO `gen_table_column` VALUES (28, 3, 'remark', '备注', 'varchar(255)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-13 14:17:05', '', '2024-04-15 10:23:51');
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
INSERT INTO `gen_table_column` VALUES (141, 13, 'dict_code', '字典编码', 'bigint', 'Long', 'dictCode', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (142, 12, 'json_result', '返回参数', 'varchar(2000)', 'String', 'jsonResult', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 13, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (143, 13, 'dict_sort', '字典排序', 'int', 'Long', 'dictSort', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (144, 12, 'status', '操作状态（0正常 1异常）', 'int', 'Long', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 14, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (145, 13, 'dict_label', '字典标签', 'varchar(100)', 'String', 'dictLabel', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (146, 12, 'error_msg', '错误消息', 'varchar(2000)', 'String', 'errorMsg', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 15, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (147, 13, 'dict_value', '字典键值', 'varchar(100)', 'String', 'dictValue', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (148, 12, 'oper_time', '操作时间', 'datetime', 'Date', 'operTime', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'datetime', '', 16, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (149, 13, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (150, 12, 'cost_time', '消耗时间', 'bigint', 'Long', 'costTime', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 17, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (151, 13, 'css_class', '样式属性（其他样式扩展）', 'varchar(100)', 'String', 'cssClass', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (152, 13, 'list_class', '表格回显样式', 'varchar(100)', 'String', 'listClass', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (153, 13, 'is_default', '是否默认（Y是 N否）', 'char(1)', 'String', 'isDefault', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (154, 14, 'post_id', '岗位ID', 'bigint', 'Long', 'postId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:12', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (155, 13, 'status', '状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 9, 'admin', '2024-04-13 16:45:12', '', NULL);
INSERT INTO `gen_table_column` VALUES (156, 14, 'post_code', '岗位编码', 'varchar(64)', 'String', 'postCode', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-13 16:45:12', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (157, 13, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (158, 14, 'post_name', '岗位名称', 'varchar(50)', 'String', 'postName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 3, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (159, 13, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 11, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (160, 14, 'post_sort', '显示顺序', 'int', 'Long', 'postSort', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (161, 13, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (162, 14, 'status', '状态', 'char(1)', 'String', 'status', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', 'sys_common_status', 5, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (163, 13, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 13, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (164, 14, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (165, 13, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 14, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (166, 14, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 7, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:50');
INSERT INTO `gen_table_column` VALUES (167, 14, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:51');
INSERT INTO `gen_table_column` VALUES (168, 14, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:51');
INSERT INTO `gen_table_column` VALUES (169, 15, 'dict_id', '字典主键', 'bigint', 'Long', 'dictId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (170, 14, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 10, 'admin', '2024-04-13 16:45:13', '', '2024-04-15 09:05:51');
INSERT INTO `gen_table_column` VALUES (171, 15, 'dict_name', '字典名称', 'varchar(100)', 'String', 'dictName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (172, 15, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (173, 15, 'status', '状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 4, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (175, 15, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (177, 15, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 6, 'admin', '2024-04-13 16:45:13', '', NULL);
INSERT INTO `gen_table_column` VALUES (178, 15, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (179, 15, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 8, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (180, 15, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 9, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (181, 17, 'job_id', '任务ID', 'bigint', 'Long', 'jobId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (182, 17, 'job_name', '任务名称', 'varchar(64)', 'String', 'jobName', '1', '0', '0', '1', NULL, NULL, NULL, 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (183, 17, 'job_group', '任务组名', 'varchar(64)', 'String', 'jobGroup', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (184, 17, 'invoke_target', '调用目标字符串', 'varchar(500)', 'String', 'invokeTarget', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'textarea', '', 4, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (185, 17, 'cron_expression', 'cron执行表达式', 'varchar(255)', 'String', 'cronExpression', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (186, 17, 'misfire_policy', '计划执行错误策略（1立即执行 2执行一次 3放弃执行）', 'varchar(20)', 'String', 'misfirePolicy', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (187, 17, 'concurrent', '是否并发执行（0允许 1禁止）', 'char(1)', 'String', 'concurrent', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (188, 17, 'status', '状态（0正常 1暂停）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 8, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (189, 17, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 9, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (190, 17, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 10, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (191, 17, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 11, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (192, 17, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 12, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (193, 17, 'remark', '备注信息', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 13, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (194, 18, 'job_log_id', '任务日志ID', 'bigint', 'Long', 'jobLogId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (195, 18, 'job_name', '任务名称', 'varchar(64)', 'String', 'jobName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (196, 18, 'job_group', '任务组名', 'varchar(64)', 'String', 'jobGroup', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (197, 18, 'invoke_target', '调用目标字符串', 'varchar(500)', 'String', 'invokeTarget', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'textarea', '', 4, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (198, 18, 'job_message', '日志信息', 'varchar(500)', 'String', 'jobMessage', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 5, 'admin', '2024-04-13 16:45:15', '', NULL);
INSERT INTO `gen_table_column` VALUES (199, 18, 'status', '执行状态（0正常 1失败）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 6, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (200, 18, 'exception_info', '异常信息', 'varchar(2000)', 'String', 'exceptionInfo', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 7, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (201, 18, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 8, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (202, 19, 'info_id', '访问ID', 'bigint', 'Long', 'infoId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (203, 19, 'user_name', '用户账号', 'varchar(50)', 'String', 'userName', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (204, 19, 'ipaddr', '登录IP地址', 'varchar(128)', 'String', 'ipaddr', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (205, 19, 'login_location', '登录地点', 'varchar(255)', 'String', 'loginLocation', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (206, 19, 'browser', '浏览器类型', 'varchar(50)', 'String', 'browser', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (207, 19, 'os', '操作系统', 'varchar(50)', 'String', 'os', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (208, 19, 'status', '登录状态（0成功 1失败）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 7, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (209, 19, 'msg', '提示消息', 'varchar(255)', 'String', 'msg', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:16', '', NULL);
INSERT INTO `gen_table_column` VALUES (210, 19, 'login_time', '访问时间', 'datetime', 'Date', 'loginTime', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'datetime', '', 9, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (211, 20, 'menu_id', '菜单ID', 'bigint', 'Long', 'menuId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (212, 20, 'menu_name', '菜单名称', 'varchar(50)', 'String', 'menuName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (213, 20, 'parent_id', '父菜单ID', 'bigint', 'Long', 'parentId', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (214, 20, 'order_num', '显示顺序', 'int', 'Long', 'orderNum', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (215, 20, 'path', '路由地址', 'varchar(200)', 'String', 'path', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (216, 20, 'component', '组件路径', 'varchar(255)', 'String', 'component', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (217, 20, 'query', '路由参数', 'varchar(255)', 'String', 'query', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (218, 20, 'is_frame', '是否为外链（0是 1否）', 'int', 'Long', 'isFrame', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (219, 20, 'is_cache', '是否缓存（0缓存 1不缓存）', 'int', 'Long', 'isCache', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 9, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (220, 20, 'menu_type', '菜单类型（M目录 C菜单 F按钮）', 'char(1)', 'String', 'menuType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 10, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (221, 20, 'visible', '菜单状态（0显示 1隐藏）', 'char(1)', 'String', 'visible', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 11, 'admin', '2024-04-13 16:45:17', '', NULL);
INSERT INTO `gen_table_column` VALUES (222, 20, 'status', '菜单状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 12, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (223, 20, 'perms', '权限标识', 'varchar(100)', 'String', 'perms', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 13, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (224, 20, 'icon', '菜单图标', 'varchar(100)', 'String', 'icon', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 14, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (225, 20, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 15, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (226, 20, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 16, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (227, 20, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 17, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (228, 20, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 18, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (229, 20, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 19, 'admin', '2024-04-13 16:45:18', '', NULL);
INSERT INTO `gen_table_column` VALUES (259, 24, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:26', '', NULL);
INSERT INTO `gen_table_column` VALUES (260, 24, 'role_name', '角色名称', 'varchar(30)', 'String', 'roleName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-14 21:24:26', '', NULL);
INSERT INTO `gen_table_column` VALUES (261, 24, 'role_key', '角色权限字符串', 'varchar(100)', 'String', 'roleKey', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-14 21:24:26', '', NULL);
INSERT INTO `gen_table_column` VALUES (262, 24, 'role_sort', '显示顺序', 'int', 'Long', 'roleSort', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (263, 24, 'data_scope', '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）', 'char(1)', 'String', 'dataScope', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (264, 24, 'menu_check_strictly', '菜单树选择项是否关联显示', 'tinyint(1)', 'Integer', 'menuCheckStrictly', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (265, 24, 'dept_check_strictly', '部门树选择项是否关联显示', 'tinyint(1)', 'Integer', 'deptCheckStrictly', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (266, 24, 'status', '角色状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'radio', '', 8, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (267, 24, 'del_flag', '删除标志（0代表存在 2代表删除）', 'char(1)', 'String', 'delFlag', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 9, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (268, 24, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (269, 24, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 11, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (270, 24, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (271, 24, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 13, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (272, 24, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 14, 'admin', '2024-04-14 21:24:27', '', NULL);
INSERT INTO `gen_table_column` VALUES (273, 25, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (274, 25, 'dept_id', '部门ID', 'bigint', 'Long', 'deptId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (275, 26, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (276, 26, 'menu_id', '菜单ID', 'bigint', 'Long', 'menuId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (277, 27, 'user_id', '用户ID', 'bigint', 'Long', 'userId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (278, 27, 'dept_id', '部门ID', 'bigint', 'Long', 'deptId', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (279, 27, 'user_name', '用户账号', 'varchar(30)', 'String', 'userName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 3, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (280, 27, 'nick_name', '用户昵称', 'varchar(30)', 'String', 'nickName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (281, 27, 'user_type', '用户类型（00系统用户）', 'varchar(2)', 'String', 'userType', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2024-04-14 21:24:28', '', NULL);
INSERT INTO `gen_table_column` VALUES (282, 27, 'email', '用户邮箱', 'varchar(50)', 'String', 'email', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (283, 27, 'phonenumber', '手机号码', 'varchar(11)', 'String', 'phonenumber', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (284, 27, 'sex', '用户性别（0男 1女 2未知）', 'char(1)', 'String', 'sex', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 8, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (285, 27, 'avatar', '头像地址', 'varchar(100)', 'String', 'avatar', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 9, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (286, 27, 'password', '密码', 'varchar(100)', 'String', 'password', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 10, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (287, 27, 'status', '帐号状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'radio', '', 11, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (288, 27, 'del_flag', '删除标志（0代表存在 2代表删除）', 'char(1)', 'String', 'delFlag', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (289, 27, 'login_ip', '最后登录IP', 'varchar(128)', 'String', 'loginIp', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 13, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (290, 27, 'login_date', '最后登录时间', 'datetime', 'Date', 'loginDate', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'datetime', '', 14, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (291, 27, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 15, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (292, 27, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 16, 'admin', '2024-04-14 21:24:29', '', NULL);
INSERT INTO `gen_table_column` VALUES (293, 27, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'input', '', 17, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (294, 27, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 18, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (295, 27, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', '0', '1', '1', '1', NULL, 'EQ', 'textarea', '', 19, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (296, 28, 'user_id', '用户ID', 'bigint', 'Long', 'userId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (297, 28, 'role_id', '角色ID', 'bigint', 'Long', 'roleId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:24:30', '', NULL);
INSERT INTO `gen_table_column` VALUES (298, 29, 'website_id', '网页ID', 'int', 'Long', 'websiteId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:35:12', '', '2024-04-16 11:16:09');
INSERT INTO `gen_table_column` VALUES (299, 29, 'name', '网页名称', 'varchar(255)', 'String', 'name', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-14 21:35:13', '', '2024-04-16 11:16:09');
INSERT INTO `gen_table_column` VALUES (300, 29, 'url', '网页URL', 'varchar(255)', 'String', 'url', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-14 21:35:13', '', '2024-04-16 11:16:09');
INSERT INTO `gen_table_column` VALUES (301, 29, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 4, 'admin', '2024-04-14 21:35:13', '', '2024-04-16 11:16:09');
INSERT INTO `gen_table_column` VALUES (302, 29, 'description', '网页描述', 'varchar(255)', 'String', 'description', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 5, 'admin', '2024-04-14 21:35:13', '', '2024-04-16 11:16:10');
INSERT INTO `gen_table_column` VALUES (303, 29, 'type', '网页类型', 'varchar(255)', 'String', 'type', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', 'website_type', 6, 'admin', '2024-04-14 21:35:13', '', '2024-04-16 11:16:10');
INSERT INTO `gen_table_column` VALUES (304, 29, 'update_time', '创建时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 7, 'admin', '2024-04-14 21:35:13', '', '2024-04-16 11:16:10');
INSERT INTO `gen_table_column` VALUES (305, 30, 'user_id', '用户ID', 'bigint', 'Long', 'userId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-14 21:47:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (306, 30, 'post_id', '岗位ID', 'bigint', 'Long', 'postId', '1', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 2, 'admin', '2024-04-14 21:47:14', '', NULL);
INSERT INTO `gen_table_column` VALUES (307, 31, 'gallery_id', '图库ID', 'int', 'Long', 'galleryId', '1', '1', '0', '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (308, 31, 'image_name', '图片名', 'varchar(255)', 'String', 'imageName', '0', '0', '1', '1', '1', '1', '1', 'LIKE', 'input', '', 2, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (309, 31, 'type', '图片类型', 'varchar(255)', 'String', 'type', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (310, 31, 'image_url', '图片URL', 'varchar(255)', 'String', 'imageUrl', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (311, 31, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 5, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (312, 31, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 6, 'admin', '2024-04-15 12:12:31', '', '2024-04-15 19:44:39');
INSERT INTO `gen_table_column` VALUES (313, 31, 'storage', '来源', 'varchar(255)', 'String', 'storage', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, '', '2024-04-15 19:44:39', '', NULL);
INSERT INTO `gen_table_column` VALUES (314, 29, 'user_id', '用户ID', 'int', 'Long', 'userId', '0', '0', '0', '0', '1', '1', '1', 'EQ', 'input', '', 8, '', '2024-04-16 11:15:05', '', '2024-04-16 11:16:10');
INSERT INTO `gen_table_column` VALUES (315, 29, 'dept_id', '部门ID', 'int', 'Long', 'deptId', '0', '0', '0', '0', '1', '1', '1', 'EQ', 'input', '', 9, '', '2024-04-16 11:15:05', '', '2024-04-16 11:16:10');
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
INSERT INTO `gen_table_column` VALUES (326, 33, 'feedback_id', '主键', 'int', 'Long', 'feedbackId', '1', '1', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (327, 33, 'feedback_content', '反馈内容', 'varchar(255)', 'String', 'feedbackContent', '0', '0', '1', '1', '1', '1', '1', 'EQ', 'editor', '', 2, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (328, 33, 'type', '类型', 'varchar(255)', 'String', 'type', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 3, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (329, 33, 'nickname', '用户昵称', 'varchar(255)', 'String', 'nickname', '0', '0', '0', '1', '1', '1', '1', 'LIKE', 'input', '', 4, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (330, 33, 'create_time', NULL, 'datetime', 'Date', 'createTime', '0', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'datetime', '', 5, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (331, 33, 'update_time', NULL, 'datetime', 'Date', 'updateTime', '0', '0', '0', '0', '1', NULL, NULL, 'EQ', 'datetime', '', 6, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (332, 33, 'dept_id', '部门名称', 'int', 'Long', 'deptId', '0', '0', '0', '0', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-22 10:15:05', '', '2024-04-22 10:15:58');
INSERT INTO `gen_table_column` VALUES (333, 34, 'test_id', '测试ID', 'int', 'Long', 'testId', '1', '0', '0', '0', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (334, 34, 'text_field', '文本字段', 'varchar(255)', 'String', 'textField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (335, 34, 'number_field', '数字字段', 'int', 'Long', 'numberField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (336, 34, 'date_field', '日期字段', 'datetime', 'Date', 'dateField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'datetime', '', 4, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (337, 34, 'rich_text_field', '富文本字段', 'varchar(255)', 'String', 'richTextField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'editor', '', 5, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (338, 34, 'select_field', '下拉框字段', 'varchar(255)', 'String', 'selectField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'select', '', 6, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (339, 34, 'boolean_field', '布尔字段', 'char(1)', 'String', 'booleanField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (340, 34, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', '0', '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 8, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (341, 34, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', '0', '1', '1', NULL, NULL, 'EQ', 'datetime', '', 9, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (342, 34, 'textarea_field', '文本域', 'varchar(255)', 'String', 'textareaField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'textarea', '', 10, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');
INSERT INTO `gen_table_column` VALUES (343, 34, 'tree_field', '树形选择器', 'varchar(255)', 'String', 'treeField', '0', '0', '0', '1', '1', '1', '1', 'EQ', 'input', '', 11, 'admin', '2024-04-28 10:29:55', '', '2024-04-28 10:32:47');

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
  `config_value` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'N' COMMENT '系统内置（Y是 N否）',
  `create_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 102 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '参数配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (3, '主框架页-侧边栏主题', 'sys.index.sideTheme', 'theme-dark', 'N', 'admin', '2024-04-10 15:08:50', 'admin', '2024-04-10 23:52:30', '深色主题theme-dark，浅色主题theme-light');
INSERT INTO `sys_config` VALUES (4, '账号自助-验证码开关', 'sys.account.captchaEnabled', 'true', 'Y', 'admin', '2024-04-10 15:08:50', '', NULL, '是否开启验证码功能（true开启，false关闭）');
INSERT INTO `sys_config` VALUES (5, '账号自助-是否开启用户注册功能', 'sys.account.registerUser', 'true', 'Y', 'admin', '2024-04-10 15:08:50', 'admin', '2024-04-13 00:19:45', '是否开启注册用户功能（true开启，false关闭）');
INSERT INTO `sys_config` VALUES (6, '用户登录-黑名单列表', 'sys.login.blackIPList', '', 'Y', 'admin', '2024-04-10 15:08:50', '', NULL, '设置登录IP黑名单限制，多个匹配项以;分隔，支持匹配（*通配、网段）');
INSERT INTO `sys_config` VALUES (101, '输入记录', 'sys.record', 'JSON', 'Y', 'admin', '2024-04-10 23:53:17', '', NULL, '记录所有用户的输入值');

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
) ENGINE = InnoDB AUTO_INCREMENT = 201 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '部门表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (100, 0, '0', 'AX', 0, 'ax', '176666666', 'ax@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-14 21:09:36');
INSERT INTO `sys_dept` VALUES (101, 100, '0,100', '深圳总公司', 1, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (102, 100, '0,100', '长沙分公司', 2, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (103, 101, '0,100,101', '研发部门', 1, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (104, 101, '0,100,101', '市场部门', 2, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (105, 101, '0,100,101', '测试部门', 3, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (106, 101, '0,100,101', '财务部门', 4, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (107, 101, '0,100,101', '运维部门', 5, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (108, 102, '0,100,102', '市场部门', 1, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (109, 102, '0,100,102', '财务部门', 2, '若依', '15888888888', 'ry@qq.com', '0', '2', 'admin', '2024-04-10 15:08:49', '', NULL);
INSERT INTO `sys_dept` VALUES (200, 100, '0,100', '访客', 0, 'Win', '1333333333', NULL, '0', '0', 'admin', '2024-04-10 20:32:22', '', NULL);

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
INSERT INTO `sys_dict_data` VALUES (100, 1, '图片资源', 'image', 'website_type', '', NULL, '0', '0', 'admin', '2024-04-10 23:19:19', 'admin', '2024-04-10 23:19:44', '图片分类');
INSERT INTO `sys_dict_data` VALUES (101, 0, '设计资源', 'design', 'website_type', NULL, NULL, '0', '0', 'admin', '2024-04-11 15:28:57', '', NULL, '设计');
INSERT INTO `sys_dict_data` VALUES (102, 0, '壁纸', 'wallpaper', 'sys_gallery', NULL, NULL, '0', '0', 'admin', '2024-04-15 12:30:50', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (103, 0, '头像', 'avatar', 'sys_gallery', NULL, NULL, '0', '0', 'admin', '2024-04-15 12:31:13', '', NULL, '公用头像');
INSERT INTO `sys_dict_data` VALUES (104, 0, '图标', 'sys-icon', 'sys_gallery', NULL, NULL, '0', '0', 'admin', '2024-04-15 12:32:06', '', NULL, '系统应用图标，在菜单栏配置');
INSERT INTO `sys_dict_data` VALUES (106, 3, '在线工具', 'tool', 'website_type', NULL, NULL, '0', '0', 'admin', '2024-04-17 18:37:29', '', NULL, '在线工具');
INSERT INTO `sys_dict_data` VALUES (108, 0, '管理系统', 'management', 'website_type', NULL, NULL, '0', '0', 'admin', '2024-04-18 13:38:15', '', NULL, '后台管理系统模板');
INSERT INTO `sys_dict_data` VALUES (109, 0, '有趣开源', 'github', 'website_type', NULL, NULL, '0', '0', 'admin', '2024-04-24 09:49:15', '', NULL, '有意思的开源项目');

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
INSERT INTO `sys_dict_type` VALUES (1, '用户性别', 'sys_user_sex', '0', 'admin', '2024-04-10 15:08:50', '', NULL, '用户性别列表');
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
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_feedback
-- ----------------------------
INSERT INTO `sys_feedback` VALUES (10, 'Hello', '', 'AX最终管理员', '2024-04-22 20:59:56', NULL, 103, '3DDD-4.png');
INSERT INTO `sys_feedback` VALUES (11, '功能和BUG都可以在这里反馈', '', 'AX最终管理员', '2024-04-22 21:24:03', NULL, 103, '3DDD-4.png');
INSERT INTO `sys_feedback` VALUES (12, 'test02发言', '', 'test02', '2024-04-22 21:59:42', NULL, NULL, '');
INSERT INTO `sys_feedback` VALUES (13, 'test02', '', 'test02', '2024-04-22 21:59:59', NULL, NULL, '3DDD.png');
INSERT INTO `sys_feedback` VALUES (14, 'yi', '', 'Annis', '2024-04-22 23:05:13', NULL, 200, 'Delivery boy-4.png');
INSERT INTO `sys_feedback` VALUES (15, '咦', '', 'Annis', '2024-04-22 23:05:26', NULL, 200, 'Delivery boy-4.png');
INSERT INTO `sys_feedback` VALUES (16, '111', '', 'AX最终管理员', '2024-04-23 16:41:54', NULL, 103, '3DDD-4.png');
INSERT INTO `sys_feedback` VALUES (17, 'test04测试', '', 'test04', '2024-04-23 16:48:00', NULL, 200, '');
INSERT INTO `sys_feedback` VALUES (18, '哎呀\n', '', 'Annis', '2024-04-23 18:26:44', NULL, 200, 'Delivery boy-4.png');
INSERT INTO `sys_feedback` VALUES (19, 'AI用不了吗？\n\n', '', 'Annis', '2024-04-23 18:33:12', NULL, 200, 'Delivery boy-4.png');
INSERT INTO `sys_feedback` VALUES (20, '回车键可以发送，就方便很多了\n', '', 'Annis', '2024-04-23 18:33:51', NULL, 200, 'Delivery boy-4.png');

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '定时任务调度日志表' ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 579 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统访问记录' ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_memo
-- ----------------------------
INSERT INTO `sys_memo` VALUES (21, '记事本', '测试记事本', '测试记事本', NULL, 115, '2', NULL, '2024-04-23 14:17:10', '2024-04-25 16:17:13');
INSERT INTO `sys_memo` VALUES (22, '测试备忘录', '测试备忘录3424', '测试备忘录', '测试备忘录213', 113, '1', NULL, '2024-04-23 14:20:59', '2024-04-25 16:17:31');
INSERT INTO `sys_memo` VALUES (23, '测试', '找到约 427,000 条结果 （用时 0.33 秒） \n您是不是要找： antd vue3 design\n\n\nAnt Design Vue — An enterprise-class UI components based ...\n\nAnt Design Vue\nhttps://antdv.com\n·\n翻译此页\nAn enterprise-class UI components based on Ant Design and Vue.\n', '这是超长文本内容', '', 1, '1', 103, '2024-04-23 16:39:09', NULL);
INSERT INTO `sys_memo` VALUES (24, '测试记事本1', '测试记事本2', '测试记事本3', NULL, 1, '2', 103, '2024-04-23 19:23:33', '2024-04-25 16:17:20');

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
) ENGINE = InnoDB AUTO_INCREMENT = 2100 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单权限表' ROW_FORMAT = DYNAMIC;

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
INSERT INTO `sys_menu` VALUES (116, '代码生成', 1, 2, 'gen', 'system/gen/index', '', 1, 0, 'C', '0', '0', 'tool:gen:list', 'code', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-18 16:45:49', '代码生成菜单');
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
INSERT INTO `sys_menu` VALUES (2069, '网页收藏', 0, 3, 'website', 'system/website/index', NULL, 1, 0, 'C', '0', '0', 'system:website:list', 'http://in-git.gitee.io/ax-resource/image-icon/net.png', 'admin', '2024-04-11 15:45:16', 'admin', '2024-04-25 17:02:17', '网页收藏菜单');
INSERT INTO `sys_menu` VALUES (2070, '网页收藏查询', 2069, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:website:query', '#', 'admin', '2024-04-11 15:45:16', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2071, '网页收藏新增', 2069, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:website:add', '#', 'admin', '2024-04-11 15:45:16', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2072, '网页收藏修改', 2069, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:website:edit', '#', 'admin', '2024-04-11 15:45:16', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2073, '网页收藏删除', 2069, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:website:remove', '#', 'admin', '2024-04-11 15:45:16', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2074, '网页收藏导出', 2069, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:website:export', '#', 'admin', '2024-04-11 15:45:16', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2081, '备忘录', 0, 4, 'memo', 'system/memo/index', NULL, 1, 0, 'C', '0', '0', 'system:memo:list', 'http://in-git.gitee.io/ax-resource/image-icon/notes.png', 'admin', '2024-04-16 18:29:23', 'admin', '2024-04-25 17:01:59', '备忘录菜单');
INSERT INTO `sys_menu` VALUES (2082, '备忘录查询', 2081, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:query', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2083, '备忘录新增', 2081, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:add', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2084, '备忘录修改', 2081, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:edit', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2085, '备忘录删除', 2081, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:remove', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2086, '备忘录导出', 2081, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:memo:export', '#', 'admin', '2024-04-16 18:29:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2087, '反馈管理', 1, 5, 'feedback', 'system/feedback/index', NULL, 1, 0, 'C', '0', '0', 'system:feedback:list', 'image-icon/mail.png', 'admin', '2024-04-22 10:22:50', 'admin', '2024-04-22 16:55:30', '系统反馈菜单');
INSERT INTO `sys_menu` VALUES (2088, '系统反馈查询', 2087, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:query', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2089, '系统反馈新增', 2087, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:add', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2090, '系统反馈修改', 2087, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:edit', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2091, '系统反馈删除', 2087, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:remove', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2092, '系统反馈导出', 2087, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:feedback:export', '#', 'admin', '2024-04-22 10:22:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2093, '反馈', 0, 5, 'feedback', 'service/feedback/index', NULL, 1, 1, 'C', '0', '0', '', 'http://in-git.gitee.io/ax-resource/image-icon/255.png', 'admin', '2024-04-22 16:56:15', 'admin', '2024-04-25 17:00:31', '');
INSERT INTO `sys_menu` VALUES (2094, '系统测试表', 0, 7, 'test', 'system/test/index', NULL, 1, 0, 'C', '0', '0', 'system:test:list', 'http://in-git.gitee.io/ax-resource/image-icon/swagger.png', 'admin', '2024-04-28 10:35:15', 'admin', '2024-04-28 12:21:19', '系统测试表菜单');
INSERT INTO `sys_menu` VALUES (2095, '系统测试表查询', 2094, 1, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:query', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2096, '系统测试表新增', 2094, 2, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:add', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2097, '系统测试表修改', 2094, 3, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:edit', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2098, '系统测试表删除', 2094, 4, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:remove', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2099, '系统测试表导出', 2094, 5, '#', '', NULL, 1, 0, 'F', '0', '0', 'system:test:export', '#', 'admin', '2024-04-28 10:35:15', '', NULL, '');

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
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------
INSERT INTO `sys_notice` VALUES (10, '系统通知', '1', 0x3C703E3C7374726F6E673EE983A8E58886E9A1B5E99DA2E6ADA3E59CA8E5BC80E58F91E4B8ADEFBC8CE6849FE8B0A2E4BDBFE794A83C2F7374726F6E673E3C2F703E, '0', 'admin', '2024-04-11 13:49:11', 'admin', '2024-04-24 13:50:54', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 962 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '操作日志记录' ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '岗位信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_post
-- ----------------------------
INSERT INTO `sys_post` VALUES (1, 'ceo', '董事长', 1, '0', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_post` VALUES (2, 'se', '项目经理', 2, '0', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_post` VALUES (3, 'hr', '人力资源', 3, '0', 'admin', '2024-04-10 15:08:49', '', NULL, '');
INSERT INTO `sys_post` VALUES (4, 'user', '普通员工', 4, '0', 'admin', '2024-04-10 15:08:49', '', NULL, '');

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
) ENGINE = InnoDB AUTO_INCREMENT = 101 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'admin', 1, '1', 1, 1, '0', '0', 'admin', '2024-04-10 15:08:49', '', NULL, '超级管理员');
INSERT INTO `sys_role` VALUES (2, '观察员', 'observer', 2, '1', 1, 1, '0', '0', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-28 13:40:30', '能看到整个系统完整功能的身份');
INSERT INTO `sys_role` VALUES (100, '访客', 'visitor', 3, '5', 0, 0, '0', '0', 'admin', '2024-04-10 20:31:02', 'admin', '2024-04-28 13:38:04', '访客，只能访问公开的数据');

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
INSERT INTO `sys_role_menu` VALUES (2, 1044);
INSERT INTO `sys_role_menu` VALUES (2, 1049);
INSERT INTO `sys_role_menu` VALUES (2, 1055);
INSERT INTO `sys_role_menu` VALUES (2, 1056);
INSERT INTO `sys_role_menu` VALUES (2, 1057);
INSERT INTO `sys_role_menu` VALUES (2, 1058);
INSERT INTO `sys_role_menu` VALUES (2, 1059);
INSERT INTO `sys_role_menu` VALUES (2, 1060);
INSERT INTO `sys_role_menu` VALUES (2, 2069);
INSERT INTO `sys_role_menu` VALUES (2, 2070);
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
INSERT INTO `sys_role_menu` VALUES (100, 107);
INSERT INTO `sys_role_menu` VALUES (100, 1035);
INSERT INTO `sys_role_menu` VALUES (100, 2069);
INSERT INTO `sys_role_menu` VALUES (100, 2070);
INSERT INTO `sys_role_menu` VALUES (100, 2071);
INSERT INTO `sys_role_menu` VALUES (100, 2072);
INSERT INTO `sys_role_menu` VALUES (100, 2073);
INSERT INTO `sys_role_menu` VALUES (100, 2074);
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

-- ----------------------------
-- Table structure for sys_test
-- ----------------------------
DROP TABLE IF EXISTS `sys_test`;
CREATE TABLE `sys_test`  (
  `test_id` int NOT NULL COMMENT '测试ID',
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
  PRIMARY KEY (`test_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_test
-- ----------------------------
INSERT INTO `sys_test` VALUES (0, '测试记事本', 0, NULL, '', '', '', '2024-04-28 12:22:21', NULL, '', '测试记事本2');

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
) ENGINE = InnoDB AUTO_INCREMENT = 121 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 103, 'admin', 'AX最终管理员', '00', 'ax@qq.com', '15888888888', '1', '3DDD-4.png', '$2a$10$XABVK1mlV04Gxc6Dg/T7V.ic9O.vbBo06pWamUxexuNiK8Ua0C9We', '0', '0', '127.0.0.1', '2024-04-28 13:37:11', 'admin', '2024-04-10 15:08:49', '', '2024-04-28 13:37:11', '管理员');
INSERT INTO `sys_user` VALUES (2, 200, 'ax-test', 'AX-测试账号', '00', 'ry@qq.com', '15666666666', '1', '', '$2a$10$8xkL0c8Q2VJBnN.TZ.aXDu.L8a/dD.uXPUHiO94nLo0lZLsLzlyB.', '0', '0', '127.0.0.1', '2024-04-10 21:58:36', 'admin', '2024-04-10 15:08:49', 'admin', '2024-04-22 11:08:12', '访客角色');
INSERT INTO `sys_user` VALUES (100, 200, 'Annis', 'Annis', '00', '11111111111@123.com', '11111111111', '1', 'Delivery boy-4.png', '$2a$10$BnRVxbqfdoKJ.5eV9Vv7quABjjEEzYP8qoSxVjgPoH7JyZJEHcnJ6', '0', '0', '124.240.33.47', '2024-04-27 21:11:17', 'admin', '2024-04-10 19:03:08', 'admin', '2024-04-27 21:11:16', '小爱同学');
INSERT INTO `sys_user` VALUES (112, 100, 'observer', '观察员', '00', '', '17666666666', '0', '', '$2a$10$UtS5NtjZkVKpc7M..VaDC.ZOzdCRDXj51HdtAIRPqvbZVnJZnX4bq', '0', '0', '124.240.33.47', '2024-04-27 23:39:45', 'admin', '2024-04-21 18:08:19', 'admin', '2024-04-27 23:39:45', '能看到完整的系统信息');
INSERT INTO `sys_user` VALUES (113, 200, 'test02', 'test02', '00', '', '', '0', '3DDD.png', '$2a$10$K2Gm1xsPdJ4qSOfH22PTDOm.wGgAgd0T4HTM5D9qflkDrEolo3Rga', '0', '0', '14.19.7.164', '2024-04-28 09:47:00', '', '2024-04-22 19:40:59', '', '2024-04-28 09:46:59', NULL);
INSERT INTO `sys_user` VALUES (114, 200, 'test03', 'test03', '00', '', '', '0', '', '$2a$10$fUAgSud/PzMLxrIHezWeBunM3dLmSKOz22zHUcdxC1t2zTSI8iFiW', '0', '0', '14.19.134.221', '2024-04-23 09:55:08', '', '2024-04-23 09:53:46', '', '2024-04-23 09:55:07', NULL);
INSERT INTO `sys_user` VALUES (115, 200, 'qweqwe', 'qweqwe', '00', '', '', '0', '', '$2a$10$seWJa6VRz4dUu.yjxkZlMeOwTa1zGZQ0.3uhhub6kbjz9bp9M.ugO', '0', '0', '183.4.21.128', '2024-04-23 14:11:53', '', '2024-04-23 14:11:44', '', '2024-04-23 14:11:52', NULL);
INSERT INTO `sys_user` VALUES (116, 200, 'qwe123', 'qwe123', '00', '', '', '0', '', '$2a$10$3WAe.SAjXPbhwvlYlTQd4uWev2rTN4LaKsdcJepqneCxv.oujDCTC', '0', '0', '183.4.21.128', '2024-04-23 14:32:34', '', '2024-04-23 14:32:30', '', '2024-04-23 14:32:34', NULL);
INSERT INTO `sys_user` VALUES (117, 200, 'zkx123', 'zkx123', '00', '', '', '0', '', '$2a$10$4iYAP/A5m9/BaM2k4C1z7ufl4vodc2LBH9M4JTasxtMSjCeL0l1EG', '0', '0', '58.208.39.123', '2024-04-23 14:52:17', '', '2024-04-23 14:52:05', '', '2024-04-23 14:52:17', NULL);
INSERT INTO `sys_user` VALUES (118, 200, 'test04', 'test04', '00', '', '', '0', '3DDD-1.png', '$2a$10$oL3d9Cm6NcYaDUnMyyUc3uyNrMd/rkc7WQBwUxH9onHsA9bAVc6jG', '0', '0', '127.0.0.1', '2024-04-23 16:57:48', '', '2024-04-23 16:10:42', '', '2024-04-23 16:57:48', NULL);
INSERT INTO `sys_user` VALUES (119, 200, 'test05', 'test05', '00', '', '', '0', '', '$2a$10$SqZSEc65yYM5OoeCkMipXeCcCdZuqDNPxaiVAb1H4A0GLca0LJFRy', '0', '0', '127.0.0.1', '2024-04-23 16:11:53', '', '2024-04-23 16:11:47', '', '2024-04-23 16:11:53', NULL);
INSERT INTO `sys_user` VALUES (120, 200, 'test06', 'test06', '00', '', '', '0', '', '$2a$10$MhvGWBbiD4lnzXLflQsA7.hWMiQPO1J8qUKrytqvnZN6K2RrnmUZe', '0', '0', '127.0.0.1', '2024-04-23 16:13:43', '', '2024-04-23 16:13:39', '', '2024-04-23 16:13:43', NULL);

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
INSERT INTO `sys_user_role` VALUES (114, 100);
INSERT INTO `sys_user_role` VALUES (115, 100);
INSERT INTO `sys_user_role` VALUES (116, 100);
INSERT INTO `sys_user_role` VALUES (117, 100);
INSERT INTO `sys_user_role` VALUES (118, 100);
INSERT INTO `sys_user_role` VALUES (119, 100);
INSERT INTO `sys_user_role` VALUES (120, 100);

-- ----------------------------
-- Table structure for sys_website
-- ----------------------------
DROP TABLE IF EXISTS `sys_website`;
CREATE TABLE `sys_website`  (
  `website_id` int NOT NULL AUTO_INCREMENT COMMENT '网页ID',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网页名称',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网页URL',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网页描述',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网页类型',
  `update_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `user_id` int NULL DEFAULT NULL COMMENT '用户ID',
  `dept_id` int NULL DEFAULT NULL COMMENT '部门ID',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图标',
  PRIMARY KEY (`website_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 173 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_website
-- ----------------------------
INSERT INTO `sys_website` VALUES (63, '4K壁纸', 'https://www.uhdpaper.com/', '2024-04-17 10:50:47', '4K, 3840x2160, 8K, 7680x4320, 1920x1080. UHD Ultra HD Wallpaper for Desktop, iPhone, PC, Laptop, Computer, Android Phone, Smartphone, iMac, MacBook, Tablet, Mobile Device.', 'image', '2024-04-17 18:52:25', 1, 103, NULL);
INSERT INTO `sys_website` VALUES (64, 'WallpaperAccess', 'http://wallpaperaccess.com', '2024-04-17 13:38:00', 'WallpaperAccess为您提供了数千张高质量图像,可用作您的计算机,平板电脑或手机的墙纸', 'image', '2024-04-26 18:23:28', 1, 103, NULL);
INSERT INTO `sys_website` VALUES (65, 'WallpaperHub | Free wallpapers for your PC, phone and tablet', 'https://www.wallpaperhub.app/', '2024-04-17 13:38:34', 'Download free wallpapers for your PC, phone and tablet. Get official Surface wallpapers and the Bing daily image for your device. 4K, 1080p & Surface Studio resolutions are all available to do1wnload.', 'image', '2024-04-17 15:41:28', 1, 103, NULL);
INSERT INTO `sys_website` VALUES (66, 'FREE for commercial use Images. Download Stock photos CC0', 'https://freeforcommercialuse.net/', '2024-04-17 13:39:16', 'FREE authentic lifestyle imagery for modern creatives. Creative Commons Zero – Public Domain FREE for commercial use. Curated ', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (67, 'Gratisography - Free High-Resolution Stock Photos', 'https://gratisography.com/', '2024-04-17 13:59:17', 'The world\'s quirkiest collection of free high-resolution pictures you can use on your personal and commercial projects. All completely free of copyright restrictions. New photos added every week!', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (68, 'Best Free High Resolution Stock Photos & Videos | ISO Republic', 'https://isorepublic.com/', '2024-04-17 13:59:39', 'ISO Republic offers over 7,000 of the best high-resolution stock images & videos, all free for personal and commercial use. Download your favorites today.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (69, 'MyLiveWallpapers.com - Best Live Wallpaper For Your Desktop PC and Mobile Phone', 'https://mylivewallpapers.com/', '2024-04-17 13:59:55', 'MyLiveWallpapers.com - Free live wallpapers for your PC and mobile phone. We have anime live wallpapers, cars live wallpapers, video game live wallpapers and more! Install our free MLWapp to play live wallpapers on your PC!', 'image', '2024-04-17 15:43:33', 1, 103, NULL);
INSERT INTO `sys_website` VALUES (70, 'freepik', 'https://www.freepik.com/', '2024-04-17 14:05:03', 'High-quality photos, videos, vectors, PSD, AI images, icons... to go from ideas to outstanding designs', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (71, 'unDraw - Open source illustrations for any idea', 'https://undraw.co/', '2024-04-17 14:05:19', 'The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (72, 'freevector', 'https://www.freevector.com/', '2024-04-17 14:05:51', '免费矢量图', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (73, 'stocksnap', 'https://stocksnap.io/', '2024-04-17 14:11:18', 'The best source for free, CC0, do-what-you-want-with stock photos. Browse and download thousands of copyright-free stock images. No attribution required.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (74, '免费图标', 'https://www.streamlinehq.com/', '2024-04-17 14:12:21', '177289 Streamline icons in line, regular, bold, colors, freehand, cyber, and more styles. Download the largest icons sets of the world in one place.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (75, 'vecteezy', 'https://www.vecteezy.com/', '2024-04-17 14:17:03', 'Professional quality creative resources to get your projects done faster.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (76, 'The world\'s biggest drone photo and video sharing platform | SkyPixel.com', 'https://www.skypixel.com/', '2024-04-17 14:17:38', 'Join the world\'s biggest drone and aerial photo and video sharing platform. Share your aerial photography and cinematography, find tips and connect with others', 'image', '2024-04-26 10:27:45', 1, 103, 'http://localhost:8080/profile/image-icon/google.png');
INSERT INTO `sys_website` VALUES (77, 'Beautiful Free Images & Pictures | Unsplash', 'https://unsplash.com/', '2024-04-17 14:18:07', 'Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (78, '闪萌 - 中文GIF搜索引擎 - gif搜索_动图搜索_gif_动图_表情_斗图', 'https://www.weshineapp.com/', '2024-04-17 14:19:33', '闪萌官网，GIF动图中文搜索引擎，发现好玩的gif动图,包括明星、美女、搞笑、微信QQ聊天表情包，可以一键分享到微信QQ新浪微博，支持gif动图下载，表情包下载到手机', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (79, 'ur1.fun', 'https://wallpaper.ur1.fun/', '2024-04-17 14:21:55', '电脑壁纸，中文', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (80, '彼岸壁纸', 'http://www.netbian.com/', '2024-04-17 14:25:11', '中文壁纸网页，可免费下载', 'image', '2024-04-25 15:15:51', 1, 103, 'http://localhost:8080/profile/image-icon/google.png');
INSERT INTO `sys_website` VALUES (81, 'zzzmh\'s_blog_上海藏原羚工作室', 'https://bz.zzzmh.cn/index', '2024-04-17 14:27:08', '上海藏原羚工作室程序员的技术主页，分享网站开发设计技术文章，极简系列网站开发日志等', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (82, 'pixabay', 'https://pixabay.com/', '2024-04-17 14:27:42', '超过40000 张关于“Wallpaper 4K”和“背景”的免费图片', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (83, 'Simple Desktops', 'https://simpledesktops.com/', '2024-04-17 14:28:28', 'A collection of wallpapers designed to make your computer beautiful without distraction.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (84, 'NET牛人', 'https://ss.netnr.com/wallpaper', '2024-04-17 14:30:17', 'NET牛人,Netnr,Gist,Run,Doc,Draw', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (85, 'Justin Maller – Portfolio', 'https://justinmaller.com/', '2024-04-17 14:30:54', '抽象壁纸', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (86, 'ZEDGE - Everything you', 'https://www.zedge.net/', '2024-04-17 14:43:46', 'Download free ringtones, HD wallpapers, backgrounds, icons and games to personalize your cell phone or mobile device using the Zedge app for Android and iPhone.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (87, 'goodfon', 'https://www.goodfon.com/', '2024-04-17 14:44:56', 'Free mobile and desktop, laptop, hdtv wallpapers\nFree wallpapers for mobile, a whole world of amazing images and photos on various subjects. Download wallpapers and screensavers for mobile.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (88, 'Desktopography - Beautiful creative nature themed desktop wallpaper by the worlds best artists and designers.', 'https://desktopography.net/', '2024-04-17 14:46:01', 'Desktopography offers free high resolution nature desktop wallpaper. Each one created by the worlds best creative talents, exhibitions are released yearly.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (89, 'Beauty Your Desktop - 4K,5K Best High Quality Wallpapers Album Free Download Site | 10wallpaper.com', 'https://www.10wallpaper.com/', '2024-04-17 14:46:23', '10wallpaper.com-4K,5K Best High Quality HD Wallpapers Album Free Download, Laptop, Apple, Android, Tablets HD Widescreen 5K Ultra HD, 1080p, 720p, Popular Resolutions Download', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (90, 'wallpaperim', 'https://wallpaperim.net/', '2024-04-17 14:48:39', '国外壁纸网页，可免费下载', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (91, 'wallpapercave', 'https://wallpapercave.com/', '2024-04-17 14:50:10', '国外网页，壁纸丰富可免费下载', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (92, 'Wallpapers and pictures for your desktop on the site www.GdeFon.com', 'http://cn.gde-fon.com/', '2024-04-17 15:05:10', 'Wallpapers and pictures on the desktop for all the free, good quality.E', 'image', '2024-04-17 16:00:42', 107, NULL, NULL);
INSERT INTO `sys_website` VALUES (93, 'wallpaperscraft', 'https://wallpaperscraft.com/', '2024-04-17 18:29:41', '海量高清图下载', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (94, '图片压缩', 'https://squoosh.app/', '2024-04-17 18:39:54', '谷歌出品的图片在线压缩软件，不经过服务器，高效且安全', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (95, 'excalidraw', 'https://excalidraw.com/', '2024-04-17 18:40:53', '免费开源超级强大的绘图工具', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (96, 'Pixso官网 - 新一代UI设计工具，替代Sketch，Figma，支持在线实时协作', 'https://pixso.cn/', '2024-04-17 18:41:15', 'pixso是一体化设计协作工具，助力产研设团队制作原型，ui/ux设计，视觉设计，低代码交付时获得更轻松流畅的工作体验，让团队协作更高效。支持sketch，figma格式。', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (97, 'Powerful, online SVG editor for teams', 'https://vecta.io/', '2024-04-17 18:43:13', 'Vecta is a real time, collaborative SVG editor with a powerful Javascript based plugin system, for teams. ', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (98, 'Framer — The internet is your canvas', 'https://www.framer.com/', '2024-04-17 18:43:39', 'Framer is where teams design and publish stunning sites.', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (99, 'Copixel', 'https://copixel.bytedance.com/', '2024-04-17 18:44:12', '字节跳动成立于2012年3月，目前公司的产品和服务已覆盖全球150个国家和地区、75个语种，曾在40多个国家和地区位居应用商店总榜前列。', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (100, 'tldraw', 'https://www.tldraw.com/', '2024-04-17 18:45:12', '在线绘图工具，简单易用', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (101, 'pixilart', 'https://www.pixilart.com/', '2024-04-17 18:46:17', '像素风绘制网页', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (102, '即时设计 - 可实时协作的专业 UI 设计工具', 'https://js.design/', '2024-04-17 18:46:30', '即时设计是一款支持在线协作的专业级 UI 设计工具，支持 Sketch、Figma、XD 格式导入，海量优质设计资源即拿即用。支持创建交互原型、获取设计标注，为产设研团队提供一站式协同办公体验。', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (103, 'SVGator: Free SVG Animation Creator Online - No Coding', 'https://www.svgator.com/', '2024-04-17 18:47:10', 'It\'s SVG animation made easy - Create impressive SVG animations online, without any coding skills. Add them easily to your website. Get started for free!', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (104, 'Figma: The Collaborative Interface Design Tool', 'https://www.figma.com/', '2024-04-17 18:47:32', 'Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (105, 'uxpin', 'https://www.uxpin.com/', '2024-04-17 18:48:27', 'Replace designers with a design-less tool.\nBuild functional UI in minutes with your sleek code-backed layouts.', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (106, '一键去除背景', 'https://www.remove.bg/zh', '2024-04-17 18:54:23', 'Remove image backgrounds automatically in 5 seconds with just one click. Don\'t spend hours manually picking pixels. Upload your photo now & see the magic.', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (107, '稿定设计-做图做视频必备_在线设计神器_海量版权素材模板', 'https://ps.gaoding.com/#/', '2024-04-17 18:54:45', '在线快速图片和视频编辑,不会PS也能搞定设计。海报、简历、PPT、公众号配图、电商等海量模板快速出图。三秒抠图实用便捷,抖音快手热门视频轻松搞定。海量正版授权资源,商用无忧。', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (108, '在线svg编辑', 'https://www.jyshare.com/more/svgeditor/', '2024-04-17 18:55:20', 'WebStack - 收集国内外优秀设计网站、UI设计资源网站、灵感创意网站、Resources网站，定时更新分享优质产品设计书签。www.webstack.cc', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (109, 'Overview - Get started - Atlassian Design System', 'https://atlassian.design/', '2024-04-17 18:56:25', 'Use Atlassian\'s end-to-end design language to create simple, intuitive and beautiful experiences.', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (110, '为政府服务的设计系统', 'https://designsystem.digital.gov/', '2024-04-17 18:57:05', 'A design system for the federal government.', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (111, 'Semi Design', 'https://semi.design/zh-CN/', '2024-04-17 18:57:23', 'An easy-to-customize modern design system that helps designers and developers create high-quality products. 由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。 ', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (112, 'Adobe', 'https://spectrum.adobe.com/', '2024-04-17 18:57:46', 'adobe 设计系统', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (113, '三星电子设计', 'https://developer.samsung.com/', '2024-04-17 18:58:07', '探索三星让您感受品位生活，在这里您可以找到Galaxy S24 Ultra , Galaxy S24 | S24+，Galaxy Z Fold5 | Z Flip5，Galaxy Tab S9系列，Galaxy Watch6 | Watch6 Classic，Galaxy A54 5G，三星 W23 | W23 Flip等新品，也可以浏览手机、电视、显示器、冰箱、洗衣机等三星官方产品内容，并获得相关产品服务与支持。', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (114, 'thumbprint', 'https://thumbprint.design/', '2024-04-17 18:58:35', 'thumbprint', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (115, 'Material', 'https://m3.material.io/', '2024-04-17 18:58:54', 'Google material', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (116, 'carbondesignsystem', 'https://carbondesignsystem.com/', '2024-04-17 18:59:32', 'carbon design system', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (117, 'Microsoft Design', 'https://fluent2.microsoft.design/', '2024-04-17 18:59:45', 'Journey through the design process for our new default font ', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (118, '京东设计系统', 'https://findesign.jd.com/', '2024-04-17 19:00:25', '京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (119, 'DevUI', 'https://devui.design/', '2024-04-17 19:00:44', 'DevUI是一款开源免费的企业中后台产品前端的通用解决方案，其设计价值观基于\'致简\',\'沉浸\',\'灵活\'三种自然与人文相结合的理念，旨在为设计师，前端开发者提供标准的设计体系，并满足各类落地场景，是一款企业级开箱即用的产品。全部代码开源并遵循 MIT 协议，任何企业、组织及个人均可免费使用。目前支持 Angular ^10.0.0 版本。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (120, 'PC 官网 - 首页', 'https://fusion.design/pc', '2024-04-17 19:01:07', 'Fusion Design is an enterprise-level solution for building web products by improving designer-developer collaboration, product experience consistency, and development efficiency.', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (121, '阿里云设计系统', 'https://design.aliyun.com/', '2024-04-17 19:01:36', '阿里云——阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司之一。提供免费试用、云服务器、云数据库、云安全、云企业应用等云计算服务，以及大数据、人工智能服务、精准定制基于场景的行业解决方案。免费备案，7x24小时售后支持，助企业无忧上云。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (122, '58同城设计系统', 'https://matrix.58.com/', '2024-04-17 19:02:11', '58同城东莞分类信息网，为你提供房产、招聘、黄页、团购、交友、二手、宠物、车辆、周边游等海量分类信息，充分满足您免费查看/发布信息的需求。东莞58同城，专业的分类信息网。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (123, '有赞设计系统', 'https://design.youzan.com/', '2024-04-17 19:02:41', '有赞提供电商、零售、美业、教育、酒店等全行业经营增长解决方案，帮助商家全渠道私域营销、直播带货、出海营销，数字化赋能导购管理、会员运营和私域社群运营，带动业务全面增长。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (124, '京东移动', 'https://nutui.jd.com/', '2024-04-17 19:03:09', '京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (125, '腾讯设计系统', 'https://tdesign.tencent.com/', '2024-04-17 19:03:56', '腾讯于1998年11月成立，是一家互联网公司，通过技术丰富互联网用户的生活，助力企业数字化升级。我们的使命是“用户为本 科技向善”', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (126, 'Arco Design', 'https://arco.design/', '2024-04-17 19:04:25', '开源开放，持续迭代\n采用 MIT 许可协议，始终保持开放的心态，期待各方一起共建开源生态。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (127, 'Shopify设计系统', 'https://polaris.shopify.com/', '2024-04-17 19:04:53', 'Try Shopify free and start a business or grow an existing one. Get more than ecommerce software with tools to manage every part of your business.', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (128, 'magicstudio', 'https://magicstudio.com/', '2024-04-17 19:15:16', '几秒钟内删除不需要的对象、人物和文本', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (129, '字体传奇网 ZITICQ 字体品牌设计师网', 'http://www.ziticq.com/shufa/', '2024-04-17 19:18:58', '字体传奇网ziticq.com 专注：字体笔画素材产品,商用字库产品,字体72变,字体设计教程学习,字体标志品牌定制为主,他们为了设计不抛弃,不放弃,旨在共同提高大家的设计水平,为设计而坚持！', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (130, 'Sony Corporation - Home', 'https://www.sony.net/united/clock/', '2024-04-17 19:19:25', 'Learn about Sony Corporation\'s information, businesses and products, recent press releases, sustainability and more.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (131, 'Adobe: Creative, marketing and document management solutions', 'https://color.adobe.com/', '2024-04-17 19:20:17', 'Adobe 调色工具', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (132, 'pattern ', 'https://cn.pattern.monster/', '2024-04-17 19:24:33', '随机背景图生成', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (133, 'pexels', 'https://www.pexels.com/zh-cn/', '2024-04-17 19:25:26', '才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (134, '即时工具', 'https://www.67tool.com/', '2024-04-17 19:26:09', '部分工具使用要登录', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (135, '帮小忙', 'https://tool.browser.qq.com/', '2024-04-17 19:26:47', '腾讯出品的工具箱', 'tool', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (136, '小诺开源技术', 'https://snowy.xiaonuo.vip/login', '2024-04-18 13:39:35', '集成国密加解密插件，在前后分离框架中，真正做到：前后分离“密”不可分；同时实现国产化机型、中间件、数据库适配，是您的不二之选！', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (137, 'erupt', 'https://www.erupt.xyz/', '2024-04-18 13:41:18', '开源低代码框架，零前端代码，纯注解开发管理后台！', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (138, 'BallCat', 'http://preview.ballcat.cn/', '2024-04-18 13:42:44', '一个简单的项目脚手架', 'management', '2024-04-25 14:02:41', 1, 103, NULL);
INSERT INTO `sys_website` VALUES (139, '项目主页 | mall学习教程', 'https://www.macrozheng.com/admin/', '2024-04-18 13:43:02', 'mall学习教程 友情提示 快速体验项目：在线访问地址 。 全套学习教程：《mall学习教程》。 视频教程（2023最新版）：《mall视频教程》 。 微服务版本：基于Spring Cloud Alibaba的项目：mall-swarm 。 项目交流：想要加群交流项目的朋友，可以加入mall项目交流群。', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (140, '人人开源', 'http://demo.open.renren.io/renren-security/#/login', '2024-04-18 13:43:20', 'renren-security、renren-fast是人人开源社区采用Spring、MyBatis、Shiro编写的后台脚手架框架，支持MySQL、Oracle、SQL Server、PostgreSQL数据库，支持分布式部署，能够有效降低企业开发成本，提升开发效率', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (141, 'JEECG官方网站 - 基于BPM的低代码开发平台(低代码平台_零代码平台_工作流平台优秀服务商)', 'https://www.jeecg.com/', '2024-04-18 13:43:51', 'JeecgBoot低代码平台，基于SpringBoot+Ant Design的前后端分离微服务架构,集成完善的工作流平台、强大的代码生成器、流程设计器、表单设计器、大屏设计器、报表门户设计，可以应用在任何J2EE项目开发中，尤其适合企业信息管理系统（MIS）、办公系统（OA）、企业资源计划系统（ERP）、客户关系管理系统（CRM）等，其半智能+手工Merge的低代码开发方式，可以显著提高开发效率70%以上，极大降低研发成本。', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (142, 'eladmin', 'https://eladmin.vip/demo/', '2024-04-18 13:47:02', '一个基于 Spring Boot 2.6.4 、 Spring Boot Jpa、 JWT、Spring Security、Redis、Vue的前后端分离的后台管理系统', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (143, 'likeadmin', 'https://www.likeadmin.cn/', '2024-04-18 13:47:38', 'likeadmin快速开发通用管理后台，基于Vue3、elementPlus，结合PHP、Java、Python、Go等主流后端语言搭建', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (144, '高品质开源商城系统-CRMEB官网', 'https://www.crmeb.com/', '2024-04-18 13:47:55', 'CRMEB开源商城系统，围绕新零售、品牌连锁、商家入驻等多种商业模式，自主研发B2C商城系统、B2B2C多商户商城系统、连锁多门店商城系统、跨境电商系统等；应用于直播电商、社交新零售、商家入驻等多种应用场景，系统支持多语言、多端登录，代码开源、独立部署、永久免费升级。咨询：400-8888-794', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (145, 'FastAdmin – 基于ThinkPHP和Bootstrap的极速后台开发框架', 'https://demo.fastadmin.net/', '2024-04-18 13:48:07', 'FastAdmin是一款基于ThinkPHP和Bootstrap的快速后台开发框架', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (146, 'PIGCLOUD', 'http://home.pig4cloud.com:38081/', '2024-04-18 13:49:35', '基于 Spring Cloud 、Spring Boot、 OAuth2 的 RBAC 企业快速开发平台， 同时支持微服务架构和单体架构', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (147, 'django', 'https://django-vue3-lyadmin.lybbn.cn/', '2024-04-18 13:52:47', 'django-vue3后台管理模板', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (148, 'django-vue3-admin', 'https://demo.dvadmin.com/', '2024-04-18 13:57:31', 'django-vue3-admin是一套全部开源的快速开发平台，毫无保留给个人免费使用、团体授权使用。 django-vue3-admin 基于RBAC模型的权限控制的一整套基础开发平台，权限粒度达到列级别，前后端分离', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (149, 'Vben Admin', 'https://vben.vvbin.cn/', '2024-04-18 13:58:25', 'Vben Admin ; 最新技术栈. 基于Vue3、Vite、TypeScript等最新技术栈开发 ; ⚡️ 轻量快速的热重载. 无论应用程序大小如何，都始终极快的模块热重', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (150, 'vue-element-admin', 'https://panjiachen.github.io/vue-element-admin', '2024-04-18 13:59:24', 'vue-element-admin 是一个后台前端解决方案，它基于 vue 和 element-ui实现。它使用了最新的前端技术栈', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (151, 'Free Bootstrap Admin Template - AdminLTE.IO', 'https://adminlte.io/', '2024-04-18 14:00:03', 'AdminLTE-是一个完全响应的管理模板。基于Bootstrap 3和4框架', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (152, 'iView / View Design 一套企业级 UI 组件库和前端解决方案', 'https://admin.iviewui.com/', '2024-04-18 14:00:48', '基于 Vue.js 的 UI 组件库，用于研发企业级中后台产品。iView 官网。', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (153, 'catchadmin', 'https://v3.catchadmin.com/', '2024-04-18 14:05:10', '是一个基于Vue3.0、Vite、 ElementPlus 、TypeScript 的后台解决方案，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (154, 'vadmire', 'https://vadmire.top/', '2024-04-18 14:06:24', 'VAdmire Admin 是一款基于 Vue3 + TypeScript + NaiveUI 等技术栈搭建的后台系统', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (155, 'gin-vue-admin', 'https://demo.gin-vue-admin.com/', '2024-04-18 14:07:49', 'Vite+Vue3+Gin的开发基础平台，支持TS和JS混用。它集成了JWT鉴权、权限管理、动态路由、显隐可控组件、分页封装、多点登录拦截、资源权限、上传下载、代码生成器、表单生成器和可配置的导入导出等开发必备功能。', 'management', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (156, 'Free Stock Photos and Images - StockSnap.io', 'https://stocksnap.io/', '2024-04-22 20:13:31', 'The best source for free, CC0, do-what-you-want-with stock photos. Browse and download thousands of copyright-free stock images. No attribution required.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (157, 'visualhunt', 'https://visualhunt.com/', '2024-04-22 20:14:06', 'Visual Hunt 号称是图片资源最多的网站，据说是超过三亿张！其中收录了海量的CC0授权图片整合后生成的站点，用户可以通过内置的搜索引擎来查询海量的免费图片它可以通过颜色来查找图片，而且无需注册和登录就可以在线下载图片。', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (158, 'photock', 'https://photock.jp/', '2024-04-22 20:14:47', '日本的无版权图片网站，免费图片资源达5000+，种类有很多，天空、水、河、海、草坪、火、山、动物、建筑、夜景、日本景点、日本历史文化图片等等', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (159, 'pngimg', 'https://pngimg.com/', '2024-04-22 20:15:21', '专业设计师的最爱，可以当作素材模板来使用，几万张不同种类的无背景素材图片，直接可以免费用。', 'image', '2024-04-25 14:31:56', 1, 103, 'http://localhost:8080/profile/image-icon/google.png');
INSERT INTO `sys_website` VALUES (160, 'Reshot | Free icons & illustrations', 'https://www.reshot.com/', '2024-04-22 20:18:26', 'Design freely with instant downloads of curated SVG icons and vector illustrations. All free with commercial licensing. No attribution required.', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (161, 'rawpixel', 'https://www.rawpixel.com/', '2024-04-22 20:19:06', '1、高品质的图库\n2、支持可商用免费下载\n3、致力改变人们看照片的习惯', 'image', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (162, '优设网官网 - UISDC - 国内专业设计师平台 - 看设计文章，学AIGC教程，找灵感素材，尽在优设网！', 'https://www.uisdc.com/', '2024-04-22 20:19:38', '优设网 (uisdc.com) 是国内设计师入门到进阶的专业设计网站。AIGC及设计内容全面及时，全网粉丝过千万。专注前沿设计趋势和设计方法论，拥有原创独家设计内容和设计师网站导航。提供AIGC教程、灵感素材、UI设计、平面设计、网页设计、电商设计、SDC网站推荐。', 'design', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (163, '高仿Win11', 'https://win11.blueedge.me/', '2024-04-24 09:51:28', 'Blue Edge - Create some chaos', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (164, '进化', 'https://yx.g8hh.com/evolve/', '2024-04-24 09:57:51', '一款非常有意思的游戏，从单细胞生物进化到超现代文明', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (165, '在线音乐', 'https://sioxas.github.io/', '2024-04-24 12:31:00', '用vue实现', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (166, 'Windows 96', 'https://windows96.net/', '2024-04-24 12:31:25', 'MIKESOFT presents you WINDOWS 96, the latest release of your favorite operating system!', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (167, 'OS.js Web Desktop', 'https://www.os-js.org/', '2024-04-24 12:31:46', 'JavaScript Cloud/Web Desktop Platform', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (168, 'daedalOS', 'https://dustinbrett.com/', '2024-04-24 12:32:10', 'Desktop environment in the browser', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (169, '新标签页', 'https://funtabs.cn/', '2024-04-24 12:33:33', 'funtabs新标签页（原：趣标签页、方格桌面），简约导航，予你分享！卡片收藏，个性自创！支持自定义您新标签页上的导航卡片、文章收藏、精美壁纸以及搜索引擎，创建、编辑及分享属于您自己的浏览器标签页,美化您的浏览器主页与newtab新标签页，清新、简约、高度的可自定义操作，让您设置属于您专属的小而美的独特导航页面！', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (170, 'MallChat', 'https://www.mallchat.cn/', '2024-04-24 12:34:03', '抹茶聊天', 'github', NULL, 1, 103, NULL);
INSERT INTO `sys_website` VALUES (171, '免费的图标、剪贴画插图、照片和音乐', 'https://igoutu.cn/', '2024-04-24 15:14:08', '免费下载设计素材：图标、照片、矢量插图和视频音乐。所有素材均由设计师制作 → 质量始终如一⚡️', 'image', '2024-04-25 14:27:08', 1, 103, 'http://localhost:8080/profile/image-icon/google.png');
INSERT INTO `sys_website` VALUES (172, '小象农庄', 'http://mall.weixinai.cn/', '2024-04-24 17:57:26', '小象农庄生态农业发展有限公司', 'management', NULL, 1, 103, NULL);

SET FOREIGN_KEY_CHECKS = 1;
