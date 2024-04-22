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
import com.ruoyi.system.domain.SysFeedback;
import com.ruoyi.system.service.ISysFeedbackService;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 系统反馈Controller
 * 
 * @author AX
 * @date ${datetime}
 */
@RestController
@RequestMapping("/system/feedback")
public class SysFeedbackController extends BaseController
{
    @Autowired
    private ISysFeedbackService sysFeedbackService;

    /**
     * 查询系统反馈列表
     */
    @PreAuthorize("@ss.hasPermi('system:feedback:list')")
    @GetMapping("/list")
    public TableDataInfo list(SysFeedback sysFeedback)
    {
        startPage();
        List<SysFeedback> list = sysFeedbackService.selectSysFeedbackList(sysFeedback);
        return getDataTable(list);
    }

    /**
     * 导出系统反馈列表
     */
    @PreAuthorize("@ss.hasPermi('system:feedback:export')")
    @Log(title = "系统反馈", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    public void export(HttpServletResponse response, SysFeedback sysFeedback)
    {
        List<SysFeedback> list = sysFeedbackService.selectSysFeedbackList(sysFeedback);
        ExcelUtil<SysFeedback> util = new ExcelUtil<SysFeedback>(SysFeedback.class);
        util.exportExcel(response, list, "系统反馈数据");
    }

    /**
     * 获取系统反馈详细信息
     */
    @PreAuthorize("@ss.hasPermi('system:feedback:query')")
    @GetMapping(value = "/{feedbackId}")
    public AjaxResult getInfo(@PathVariable("feedbackId") Long feedbackId)
    {
        return success(sysFeedbackService.selectSysFeedbackByFeedbackId(feedbackId));
    }

    /**
     * 新增系统反馈
     */
    @PreAuthorize("@ss.hasPermi('system:feedback:add')")
    @Log(title = "系统反馈", businessType = BusinessType.INSERT)
    @PostMapping
    public AjaxResult add(@RequestBody SysFeedback sysFeedback)
    {
        return toAjax(sysFeedbackService.insertSysFeedback(sysFeedback));
    }

    /**
     * 修改系统反馈
     */
    @PreAuthorize("@ss.hasPermi('system:feedback:edit')")
    @Log(title = "系统反馈", businessType = BusinessType.UPDATE)
    @PutMapping
    public AjaxResult edit(@RequestBody SysFeedback sysFeedback)
    {
        return toAjax(sysFeedbackService.updateSysFeedback(sysFeedback));
    }

    /**
     * 删除系统反馈
     */
    @PreAuthorize("@ss.hasPermi('system:feedback:remove')")
    @Log(title = "系统反馈", businessType = BusinessType.DELETE)
	@DeleteMapping("/{feedbackIds}")
    public AjaxResult remove(@PathVariable Long[] feedbackIds)
    {
        return toAjax(sysFeedbackService.deleteSysFeedbackByFeedbackIds(feedbackIds));
    }
}
