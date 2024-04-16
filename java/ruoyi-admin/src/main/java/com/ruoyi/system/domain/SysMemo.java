package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 备忘录对象 sys_memo
 * 
 * @author AX
 * @date ${datetime}
 */
public class SysMemo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 主键 */
    private Long memoId;

    /** 备忘录标题 */
    @Excel(name = "备忘录标题")
    private String title;

    /** 备忘录的值 */
    @Excel(name = "备忘录的值")
    private String value;

    /** 备忘录描述 */
    @Excel(name = "备忘录描述")
    private String description;

    /** 附加值 */
    @Excel(name = "附加值")
    private String extra;

    /** 用户ID */
    private Long userId;

    /** 1：备忘录，2：记事本 */
    private String type;

    /** 部门ID */
    private Long deptId;

    public void setMemoId(Long memoId) 
    {
        this.memoId = memoId;
    }

    public Long getMemoId() 
    {
        return memoId;
    }
    public void setTitle(String title) 
    {
        this.title = title;
    }

    public String getTitle() 
    {
        return title;
    }
    public void setValue(String value) 
    {
        this.value = value;
    }

    public String getValue() 
    {
        return value;
    }
    public void setDescription(String description) 
    {
        this.description = description;
    }

    public String getDescription() 
    {
        return description;
    }
    public void setExtra(String extra) 
    {
        this.extra = extra;
    }

    public String getExtra() 
    {
        return extra;
    }
    public void setUserId(Long userId) 
    {
        this.userId = userId;
    }

    public Long getUserId() 
    {
        return userId;
    }
    public void setType(String type) 
    {
        this.type = type;
    }

    public String getType() 
    {
        return type;
    }
    public void setDeptId(Long deptId) 
    {
        this.deptId = deptId;
    }

    public Long getDeptId() 
    {
        return deptId;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("memoId", getMemoId())
            .append("title", getTitle())
            .append("value", getValue())
            .append("description", getDescription())
            .append("extra", getExtra())
            .append("userId", getUserId())
            .append("type", getType())
            .append("deptId", getDeptId())
            .append("createTime", getCreateTime())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
