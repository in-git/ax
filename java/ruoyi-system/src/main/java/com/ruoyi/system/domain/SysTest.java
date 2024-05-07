package com.ruoyi.system.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;
import lombok.Data;

import java.util.Date;

/**
 * 系统测试表对象 sys_test
 * 
 * @author AX
 * @date ${datetime}
 */
@Data
public class SysTest extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 测试ID */
    private Long testId;

    /** 文本字段 */
    @Excel(name = "文本字段")
    private String textField;

    /** 数字字段 */
    @Excel(name = "数字字段")
    private Long numberField;

    /** 日期字段 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "日期字段", width = 30, dateFormat = "yyyy-MM-dd")
    private Date dateField;

    /** 富文本字段 */
    @Excel(name = "富文本字段")
    private String richTextField;

    /** 下拉框字段 */
    @Excel(name = "下拉框字段")
    private String selectField;

    /** 布尔字段 */
    @Excel(name = "布尔字段")
    private String booleanField;

    /** 文本域 */
    @Excel(name = "文本域")
    private String textareaField;

    /** 树形选择器 */
    @Excel(name = "树形选择器")
    private String treeField;

    /** 树形选择器 */
    @Excel(name = "排序")
    private String sort;


}
