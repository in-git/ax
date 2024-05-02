package com.ruoyi.system.service;

import com.ruoyi.system.domain.SysWebsite;
import com.ruoyi.system.domain.WebInfo;

import java.util.List;

/**
 * 网页收藏Service接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface ISysWebsiteService 
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
     * 批量删除网页收藏
     * 
     * @param websiteIds 需要删除的网页收藏主键集合
     * @return 结果
     */
    public int deleteSysWebsiteByWebsiteIds(Long[] websiteIds);

    /**
     * 删除网页收藏信息
     * 
     * @param websiteId 网页收藏主键
     * @return 结果
     */
    public int deleteSysWebsiteByWebsiteId(Long websiteId);

    /**
     * 根据URL获取网页的信息
     *
     * @param url 目标网址
     * @return 结果
     */
    public WebInfo getWebsiteInfoByUrl(String url);
}
