package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 系统图库对象 sys_gallery
 * 
 * @author AX
 * @date ${datetime}
 */
public class SysGallery extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 图库ID */
    private Long galleryId;

    /** 图片名 */
    @Excel(name = "图片名")
    private String imageName;

    /** 图片类型 */
    @Excel(name = "图片类型")
    private String type;

    /** 图片URL */
    @Excel(name = "图片URL")
    private String imageUrl;

    /** 来源 */
    @Excel(name = "来源")
    private String storage;

    public void setGalleryId(Long galleryId) 
    {
        this.galleryId = galleryId;
    }

    public Long getGalleryId() 
    {
        return galleryId;
    }
    public void setImageName(String imageName) 
    {
        this.imageName = imageName;
    }

    public String getImageName() 
    {
        return imageName;
    }
    public void setType(String type) 
    {
        this.type = type;
    }

    public String getType() 
    {
        return type;
    }
    public void setImageUrl(String imageUrl) 
    {
        this.imageUrl = imageUrl;
    }

    public String getImageUrl() 
    {
        return imageUrl;
    }
    public void setStorage(String storage) 
    {
        this.storage = storage;
    }

    public String getStorage() 
    {
        return storage;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("galleryId", getGalleryId())
            .append("imageName", getImageName())
            .append("type", getType())
            .append("imageUrl", getImageUrl())
            .append("createTime", getCreateTime())
            .append("updateTime", getUpdateTime())
            .append("storage", getStorage())
            .toString();
    }
}
