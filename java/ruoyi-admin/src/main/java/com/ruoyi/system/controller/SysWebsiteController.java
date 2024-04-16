package com.ruoyi.system.controller;

import com.ruoyi.common.annotation.DataScope;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.SysWebsite;
import com.ruoyi.system.domain.WebInfo;
import com.ruoyi.system.service.ISysWebsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 网页收藏Controller
 * 
 * @author AX
 * @date ${datetime}
 */
@RestController
@RequestMapping("/system/website")
public class SysWebsiteController extends BaseController
{
    @Autowired
    private ISysWebsiteService sysWebsiteService;

    /**
     * 查询网页收藏列表
     */
    @PreAuthorize("@ss.hasPermi('system:website:list')")
    @GetMapping("/list")
    @DataScope(deptAlias = "sys_website",userAlias = "sys_website")
    public TableDataInfo list(SysWebsite sysWebsite)
    {
        startPage();
        List<SysWebsite> list = sysWebsiteService.selectSysWebsiteList(sysWebsite);
        return getDataTable(list);
    }

    /**
     * 导出网页收藏列表
     */
    @PreAuthorize("@ss.hasPermi('system:website:export')")
    @Log(title = "网页收藏", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, SysWebsite sysWebsite)
    {
        List<SysWebsite> list = sysWebsiteService.selectSysWebsiteList(sysWebsite);
        ExcelUtil<SysWebsite> util = new ExcelUtil<SysWebsite>(SysWebsite.class);
        util.exportExcel(response, list, "网页收藏数据");
    }

    /**
     * 获取网页收藏详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:website:query')")
    @GetMapping(value = "/{websiteId}")
    public AjaxResult getInfo(@PathVariable("websiteId") Long websiteId)
    {
        return success(sysWebsiteService.selectSysWebsiteByWebsiteId(websiteId));
    }

    /**
     * 新增网页收藏
     */
    @PreAuthorize("@ss.hasPermi('system:website:add')")
    @Log(title = "网页收藏", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody SysWebsite sysWebsite)
    {
        return toAjax(sysWebsiteService.insertSysWebsite(sysWebsite));
    }

    /**
     * 修改网页收藏
     */
    @PreAuthorize("@ss.hasPermi('system:website:edit')")
    @Log(title = "网页收藏", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody SysWebsite sysWebsite)
    {
        return toAjax(sysWebsiteService.updateSysWebsite(sysWebsite));
    }

    /**
     * 删除网页收藏
     */
    @PreAuthorize("@ss.hasPermi('system:website:remove')")
    @Log(title = "网页收藏", businessType = BusinessType.DELETE)
	@DeleteMapping("/{websiteIds}")
    public AjaxResult remove(@PathVariable Long[] websiteIds)
    {
        return toAjax(sysWebsiteService.deleteSysWebsiteByWebsiteIds(websiteIds));
    }

    @GetMapping("/siteInfo/{url}")
    @Log(title = "网页收藏", businessType = BusinessType.OTHER)
    public  AjaxResult getSiteInfo(@PathVariable String url){
        WebInfo info = sysWebsiteService.getWebsiteInfoByUrl("http://"+url);
        System.out.println(info.toString());
        return success(info);
    }
}
