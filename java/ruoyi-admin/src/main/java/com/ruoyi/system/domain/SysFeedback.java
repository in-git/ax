package com.ruoyi.system.domain;

import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;
import lombok.Data;

/**
 * 系统反馈对象 sys_feedback
 * 
 * @author AX
 * @date ${datetime}
 */
@Data
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

}
