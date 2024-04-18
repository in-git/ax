package com.ruoyi.system.controller;

import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.domain.SysGallery;
import com.ruoyi.system.service.ISysGalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 系统图库Controller
 * 
 * @author AX
 * @date ${datetime}
 */
@RestController
@RequestMapping("/system/gallery")
public class SysGalleryController extends BaseController
{
    @Autowired
    private ISysGalleryService sysGalleryService;

    /**
     * 查询系统图库列表
     */
    @PreAuthorize("@ss.hasPermi('system:gallery:list')")
    @GetMapping("/list")
    public TableDataInfo list(SysGallery sysGallery)
    {
        startPage();
        List<SysGallery> list = sysGalleryService.selectSysGalleryList(sysGallery);
        return getDataTable(list);
    }
    /**
     * 获取所有ICON
     */
    @GetMapping("/getIcons")
    public AjaxResult getIcons()
    {
        return success(sysGalleryService.getSystemIcons());
    }
    /**
     * 导出系统图库列表
     */
    @PreAuthorize("@ss.hasPermi('system:gallery:export')")
    @Log(title = "系统图库", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, SysGallery sysGallery)
    {
        List<SysGallery> list = sysGalleryService.selectSysGalleryList(sysGallery);
        ExcelUtil<SysGallery> util = new ExcelUtil<SysGallery>(SysGallery.class);
        util.exportExcel(response, list, "系统图库数据");
    }

    /**
     * 获取系统图库详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:gallery:query')")
    @GetMapping(value = "/{galleryId}")
    public AjaxResult getInfo(@PathVariable("galleryId") Long galleryId)
    {
        return success(sysGalleryService.selectSysGalleryByGalleryId(galleryId));
    }

    /**
     * 新增系统图库
     */
    @PreAuthorize("@ss.hasPermi('system:gallery:add')")
    @Log(title = "系统图库", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody SysGallery sysGallery)
    {
        return toAjax(sysGalleryService.insertSysGallery(sysGallery));
    }

    /**
     * 修改系统图库
     */
    @PreAuthorize("@ss.hasPermi('system:gallery:edit')")
    @Log(title = "系统图库", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody SysGallery sysGallery)
    {
        return toAjax(sysGalleryService.updateSysGallery(sysGallery));
    }

    /**
     * 删除系统图库
     */
    @PreAuthorize("@ss.hasPermi('system:gallery:remove')")
    @Log(title = "系统图库", businessType = BusinessType.DELETE)
	@DeleteMapping("/{galleryIds}")
    public AjaxResult remove(@PathVariable Long[] galleryIds)
    {
        return toAjax(sysGalleryService.deleteSysGalleryByGalleryIds(galleryIds));
    }
    /**
     * 删除系统图库
     */


}
