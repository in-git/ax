package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.SysWebsiteMapper;
import com.ruoyi.system.domain.SysWebsite;
import com.ruoyi.system.service.ISysWebsiteService;

/**
 * 网页收藏Service业务层处理
 * 
 * @author Win
 * @date ${datetime}
 */
@Service
public class SysWebsiteServiceImpl implements ISysWebsiteService 
{
    @Autowired
    private SysWebsiteMapper sysWebsiteMapper;

    /**
     * 查询网页收藏
     * 
     * @param websiteId 网页收藏主键
     * @return 网页收藏
     */
    @Override
    public SysWebsite selectSysWebsiteByWebsiteId(Long websiteId)
    {
        return sysWebsiteMapper.selectSysWebsiteByWebsiteId(websiteId);
    }

    /**
     * 查询网页收藏列表
     * 
     * @param sysWebsite 网页收藏
     * @return 网页收藏
     */
    @Override
    public List<SysWebsite> selectSysWebsiteList(SysWebsite sysWebsite)
    {
        return sysWebsiteMapper.selectSysWebsiteList(sysWebsite);
    }

    /**
     * 新增网页收藏
     * 
     * @param sysWebsite 网页收藏
     * @return 结果
     */
    @Override
    public int insertSysWebsite(SysWebsite sysWebsite)
    {
        sysWebsite.setCreateTime(DateUtils.getNowDate());
        return sysWebsiteMapper.insertSysWebsite(sysWebsite);
    }

    /**
     * 修改网页收藏
     * 
     * @param sysWebsite 网页收藏
     * @return 结果
     */
    @Override
    public int updateSysWebsite(SysWebsite sysWebsite)
    {
        sysWebsite.setUpdateTime(DateUtils.getNowDate());
        return sysWebsiteMapper.updateSysWebsite(sysWebsite);
    }

    /**
     * 批量删除网页收藏
     * 
     * @param websiteIds 需要删除的网页收藏主键
     * @return 结果
     */
    @Override
    public int deleteSysWebsiteByWebsiteIds(Long[] websiteIds)
    {
        return sysWebsiteMapper.deleteSysWebsiteByWebsiteIds(websiteIds);
    }

    /**
     * 删除网页收藏信息
     * 
     * @param websiteId 网页收藏主键
     * @return 结果
     */
    @Override
    public int deleteSysWebsiteByWebsiteId(Long websiteId)
    {
        return sysWebsiteMapper.deleteSysWebsiteByWebsiteId(websiteId);
    }
}
