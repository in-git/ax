package com.ruoyi.system.domain;

import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;
import lombok.Data;

/**
 * 网页收藏对象 sys_website
 * 
 * @author AX
 * @date ${datetime}
 */
@Data
public class SysWebsite extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 网页ID */
    private Long websiteId;

    /** 网页名称 */
    @Excel(name = "网页名称")
    private String name;

    /** 网页URL */
    @Excel(name = "网页URL")
    private String url;

    /** 网页描述 */
    @Excel(name = "网页描述")
    private String description;

    /** 网页类型 */
    @Excel(name = "网页类型")
    private String type;

    /** 用户ID */
    @Excel(name = "用户ID")
    private Long userId;

    /** 部门ID */
    @Excel(name = "部门ID")
    private Long deptId;


    /** 网页LOGO */
    @Excel(name = "网页LOGO")
    private String logo;

}
