package com.ruoyi.system.mapper;

import java.util.List;

/**
 * 系统图库Mapper接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface SysGalleryMapper 
{
    /**
     * 查询系统图库
     * 
     * @param galleryId 系统图库主键
     * @return 系统图库
     */
    public SysGallery selectSysGalleryByGalleryId(Long galleryId);

    /**
     * 查询系统图库列表
     * 
     * @param sysGallery 系统图库
     * @return 系统图库集合
     */
    public List<SysGallery> selectSysGalleryList(SysGallery sysGallery);

    /**
     * 新增系统图库
     * 
     * @param sysGallery 系统图库
     * @return 结果
     */
    public int insertSysGallery(SysGallery sysGallery);

    /**
     * 修改系统图库
     * 
     * @param sysGallery 系统图库
     * @return 结果
     */
    public int updateSysGallery(SysGallery sysGallery);

    /**
     * 删除系统图库
     * 
     * @param galleryId 系统图库主键
     * @return 结果
     */
    public int deleteSysGalleryByGalleryId(Long galleryId);

    /**
     * 批量删除系统图库
     * 
     * @param galleryIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysGalleryByGalleryIds(Long[] galleryIds);
}
