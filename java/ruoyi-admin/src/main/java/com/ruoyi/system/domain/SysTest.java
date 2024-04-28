package com.ruoyi.system.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 系统测试表对象 sys_test
 * 
 * @author AX
 * @date ${datetime}
 */
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

    public void setTestId(Long testId)
    {
        this.testId = testId;
    }

    public Long getTestId()
    {
        return testId;
    }
    public void setTextField(String textField)
    {
        this.textField = textField;
    }

    public String getTextField()
    {
        return textField;
    }
    public void setNumberField(Long numberField)
    {
        this.numberField = numberField;
    }

    public Long getNumberField()
    {
        return numberField;
    }
    public void setDateField(Date dateField)
    {
        this.dateField = dateField;
    }

    public Date getDateField()
    {
        return dateField;
    }
    public void setRichTextField(String richTextField)
    {
        this.richTextField = richTextField;
    }

    public String getRichTextField()
    {
        return richTextField;
    }
    public void setSelectField(String selectField)
    {
        this.selectField = selectField;
    }

    public String getSelectField()
    {
        return selectField;
    }
    public void setBooleanField(String booleanField)
    {
        this.booleanField = booleanField;
    }

    public String getBooleanField()
    {
        return booleanField;
    }
    public void setTextareaField(String textareaField)
    {
        this.textareaField = textareaField;
    }

    public String getTextareaField()
    {
        return textareaField;
    }
    public void setTreeField(String treeField)
    {
        this.treeField = treeField;
    }

    public String getTreeField()
    {
        return treeField;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("testId", getTestId())
            .append("textField", getTextField())
            .append("numberField", getNumberField())
            .append("dateField", getDateField())
            .append("richTextField", getRichTextField())
            .append("selectField", getSelectField())
            .append("booleanField", getBooleanField())
            .append("createTime", getCreateTime())
            .append("updateTime", getUpdateTime())
            .append("textareaField", getTextareaField())
            .append("treeField", getTreeField())
            .toString();
    }
}
