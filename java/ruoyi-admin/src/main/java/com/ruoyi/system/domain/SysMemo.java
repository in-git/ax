package com.ruoyi.system.domain;

import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;
import lombok.Data;

/**
 * 备忘录对象 sys_memo
 * 
 * @author AX
 * @date ${datetime}
 */
@Data
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

  
}
