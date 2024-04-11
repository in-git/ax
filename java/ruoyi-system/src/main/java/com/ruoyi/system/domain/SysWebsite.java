package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 网页收藏对象 sys_website
 * 
 * @author Win
 * @date ${datetime}
 */
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

    public void setWebsiteId(Long websiteId) 
    {
        this.websiteId = websiteId;
    }

    public Long getWebsiteId() 
    {
        return websiteId;
    }
    public void setName(String name) 
    {
        this.name = name;
    }

    public String getName() 
    {
        return name;
    }
    public void setUrl(String url) 
    {
        this.url = url;
    }

    public String getUrl() 
    {
        return url;
    }
    public void setDescription(String description) 
    {
        this.description = description;
    }

    public String getDescription() 
    {
        return description;
    }
    public void setType(String type) 
    {
        this.type = type;
    }

    public String getType() 
    {
        return type;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("websiteId", getWebsiteId())
            .append("name", getName())
            .append("url", getUrl())
            .append("createTime", getCreateTime())
            .append("description", getDescription())
            .append("type", getType())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
