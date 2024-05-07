package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.SysWebsite;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 网页收藏Mapper接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface SysWebsiteMapper 
{
    /**
     * 查询网页收藏
     * 
     * @param websiteId 网页收藏主键
     * @return 网页收藏
     */
    public SysWebsite selectSysWebsiteByWebsiteId(Long websiteId);

    /**
     * 查询网页收藏列表
     * 
     * @param sysWebsite 网页收藏
     * @return 网页收藏集合
     */
    public List<SysWebsite> selectSysWebsiteList(SysWebsite sysWebsite);

    /**
     * 新增网页收藏
     * 
     * @param sysWebsite 网页收藏
     * @return 结果
     */
    public int insertSysWebsite(SysWebsite sysWebsite);

    /**
     * 修改网页收藏
     * 
     * @param sysWebsite 网页收藏
     * @return 结果
     */
    public int updateSysWebsite(SysWebsite sysWebsite);

    /**
     * 删除网页收藏
     * 
     * @param websiteId 网页收藏主键
     * @return 结果
     */
    public int deleteSysWebsiteByWebsiteId(Long websiteId);

    /**
     * 批量删除网页收藏
     * 
     * @param websiteIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysWebsiteByWebsiteIds(@Param("websiteIds")Long[] websiteIds, @Param("userId") Long userId);
}
