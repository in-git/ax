package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 系统反馈对象 sys_feedback
 * 
 * @author AX
 * @date ${datetime}
 */
public class SysFeedback extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 主键 */
    private Long feedbackId;

    /** 反馈内容 */
    @Excel(name = "反馈内容")
    private String feedbackContent;

    /** 类型 */
    @Excel(name = "类型")
    private String type;

    /** 用户昵称 */
    @Excel(name = "用户昵称")
    private String nickname;

    /** 部门名称 */
    @Excel(name = "部门名称")
    private Long deptId;

    public void setFeedbackId(Long feedbackId) 
    {
        this.feedbackId = feedbackId;
    }

    public Long getFeedbackId() 
    {
        return feedbackId;
    }
    public void setFeedbackContent(String feedbackContent) 
    {
        this.feedbackContent = feedbackContent;
    }

    public String getFeedbackContent() 
    {
        return feedbackContent;
    }
    public void setType(String type) 
    {
        this.type = type;
    }

    public String getType() 
    {
        return type;
    }
    public void setNickname(String nickname) 
    {
        this.nickname = nickname;
    }

    public String getNickname() 
    {
        return nickname;
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
            .append("feedbackId", getFeedbackId())
            .append("feedbackContent", getFeedbackContent())
            .append("type", getType())
            .append("nickname", getNickname())
            .append("createTime", getCreateTime())
            .append("updateTime", getUpdateTime())
            .append("deptId", getDeptId())
            .toString();
    }
}
