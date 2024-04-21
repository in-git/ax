package com.ruoyi.system.service.impl;

import com.ruoyi.common.core.domain.entity.SysUser;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.common.utils.SecurityUtils;
import com.ruoyi.system.domain.SysWebsite;
import com.ruoyi.system.domain.WebInfo;
import com.ruoyi.system.mapper.SysWebsiteMapper;
import com.ruoyi.system.service.ISysWebsiteService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * 网页收藏Service业务层处理
 * 
 * @author AX
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
        SysUser user = SecurityUtils.getLoginUser().getUser();
        if (user.isAdmin()){
            return  sysWebsiteMapper.selectSysWebsiteList(sysWebsite);
        }else{
            /*把超级管理员的数据查询出来，共享给别人用户*/
            SysWebsite admin= new SysWebsite();
            admin.setUserId(1L);
            admin.setType(sysWebsite.getType());
            List<SysWebsite> adminWebsites = sysWebsiteMapper.selectSysWebsiteList(admin);
            List<SysWebsite> userWebsites = sysWebsiteMapper.selectSysWebsiteList(sysWebsite);
            List<SysWebsite> mergedList = new ArrayList<>( userWebsites);
            mergedList.addAll(adminWebsites);
            return mergedList;
        }
    }

    /**
     * 新增网页收藏
     * 不同用户之间数据不共享
     * @param sysWebsite 网页收藏
     * @return 结果
     */
    @Override
    public int insertSysWebsite(SysWebsite sysWebsite)
    {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        sysWebsite.setDeptId(user.getDeptId());
        sysWebsite.setUserId(user.getUserId());
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
        SysUser user = SecurityUtils.getLoginUser().getUser();
        if(!(Objects.equals(user.getUserId(), sysWebsite.getUserId()))){
            return  -1;
        }
        else{
            sysWebsite.setUpdateTime(DateUtils.getNowDate());
            return sysWebsiteMapper.updateSysWebsite(sysWebsite);
        }
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

        SysUser user = SecurityUtils.getLoginUser().getUser();
        return sysWebsiteMapper.deleteSysWebsiteByWebsiteIds(websiteIds,user.getUserId());
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

    /**
     * 根据URL获取网页的信息
     *
     * @param url 目标网址
     * @return 结果
     */
    @Override
    public WebInfo getWebsiteInfoByUrl(String url) {
        try {
            // 从URL加载网页
            Document doc = Jsoup.connect(url).get();

            // 获取网页标题
            String title = doc.title();

            // 获取网页描述
            String description = doc.select("meta[name=description]").attr("content");

            // 获取网页 logo
            String logoUrl = null;
            Elements links = doc.select("link[rel~=(?i)^(shortcut )?icon$]");
            if (!links.isEmpty()) {
                // 获取第一个匹配的 link 标签中的 href 属性值作为 logoUrl
                logoUrl = links.get(0).attr("href");
            }

            // 返回标题、描述信息和 logoUrl
            return new WebInfo(title, description, logoUrl);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

}
