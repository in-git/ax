package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.SysFeedback;

/**
 * 系统反馈Service接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface ISysFeedbackService 
{
    /**
     * 查询系统反馈
     * 
     * @param feedbackId 系统反馈主键
     * @return 系统反馈
     */
    public SysFeedback selectSysFeedbackByFeedbackId(Long feedbackId);

    /**
     * 查询系统反馈列表
     * 
     * @param sysFeedback 系统反馈
     * @return 系统反馈集合
     */
    public List<SysFeedback> selectSysFeedbackList(SysFeedback sysFeedback);

    /**
     * 新增系统反馈
     * 
     * @param sysFeedback 系统反馈
     * @return 结果
     */
    public int insertSysFeedback(SysFeedback sysFeedback);

    /**
     * 修改系统反馈
     * 
     * @param sysFeedback 系统反馈
     * @return 结果
     */
    public int updateSysFeedback(SysFeedback sysFeedback);

    /**
     * 批量删除系统反馈
     * 
     * @param feedbackIds 需要删除的系统反馈主键集合
     * @return 结果
     */
    public int deleteSysFeedbackByFeedbackIds(Long[] feedbackIds);

    /**
     * 删除系统反馈信息
     * 
     * @param feedbackId 系统反馈主键
     * @return 结果
     */
    public int deleteSysFeedbackByFeedbackId(Long feedbackId);
}
