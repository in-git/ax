package com.ruoyi.system.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.system.domain.SysTest;
import com.ruoyi.system.service.ISysTestService;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 系统测试表Controller
 * 
 * @author AX
 * @date ${datetime}
 */
@RestController
@RequestMapping("/system/test")
public class SysTestController extends BaseController
{
    @Autowired
    private ISysTestService sysTestService;

    /**
     * 查询系统测试表列表
     */
    @PreAuthorize("@ss.hasPermi('system:test:list')")
    @GetMapping("/list")
    public TableDataInfo list(SysTest sysTest)
    {
        startPage();
        List<SysTest> list = sysTestService.selectSysTestList(sysTest);
        return getDataTable(list);
    }

    /**
     * 导出系统测试表列表
     */
    @PreAuthorize("@ss.hasPermi('system:test:export')")
    @Log(title = "系统测试表", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, SysTest sysTest)
    {
        List<SysTest> list = sysTestService.selectSysTestList(sysTest);
        ExcelUtil<SysTest> util = new ExcelUtil<SysTest>(SysTest.class);
        util.exportExcel(response, list, "系统测试表数据");
    }

    /**
     * 获取系统测试表详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:test:query')")
    @GetMapping(value = "/{testId}")
    public AjaxResult getInfo(@PathVariable("testId") Long testId)
    {
        return success(sysTestService.selectSysTestByTestId(testId));
    }

    /**
     * 新增系统测试表
     */
    @PreAuthorize("@ss.hasPermi('system:test:add')")
    @Log(title = "系统测试表", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody SysTest sysTest)
    {
        return toAjax(sysTestService.insertSysTest(sysTest));
    }

    /**
     * 修改系统测试表
     */
    @PreAuthorize("@ss.hasPermi('system:test:edit')")
    @Log(title = "系统测试表", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody SysTest sysTest)
    {
        return toAjax(sysTestService.updateSysTest(sysTest));
    }

    /**
     * 删除系统测试表
     */
    @PreAuthorize("@ss.hasPermi('system:test:remove')")
    @Log(title = "系统测试表", businessType = BusinessType.DELETE)
	@DeleteMapping("/{testIds}")
    public AjaxResult remove(@PathVariable Long[] testIds)
    {
        return toAjax(sysTestService.deleteSysTestByTestIds(testIds));
    }
}
