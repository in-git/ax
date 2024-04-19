package com.ruoyi.system.mapper;

/**
 * 系统图库Mapper接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface SysGalleryMapper 
{

    /**
     * 批量删除系统图库
     * 
     * @param galleryIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysGalleryByGalleryIds(Long[] galleryIds);
}
