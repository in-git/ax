package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.SysFeedback;

/**
 * FeedbackService接口
 * 
 * @author ruoyi
 * @date 2024-04-07
 */
public interface ISysFeedbackService 
{
    /**
     * 查询Feedback
     * 
     * @param feedbackId Feedback主键
     * @return Feedback
     */
    public SysFeedback selectSysFeedbackByFeedbackId(Long feedbackId);

    /**
     * 查询Feedback列表
     * 
     * @param sysFeedback Feedback
     * @return Feedback集合
     */
    public List<SysFeedback> selectSysFeedbackList(SysFeedback sysFeedback);

    /**
     * 新增Feedback
     * 
     * @param sysFeedback Feedback
     * @return 结果
     */
    public int insertSysFeedback(SysFeedback sysFeedback);

    /**
     * 修改Feedback
     * 
     * @param sysFeedback Feedback
     * @return 结果
     */
    public int updateSysFeedback(SysFeedback sysFeedback);

    /**
     * 批量删除Feedback
     * 
     * @param feedbackIds 需要删除的Feedback主键集合
     * @return 结果
     */
    public int deleteSysFeedbackByFeedbackIds(Long[] feedbackIds);

    /**
     * 删除Feedback信息
     * 
     * @param feedbackId Feedback主键
     * @return 结果
     */
    public int deleteSysFeedbackByFeedbackId(Long feedbackId);
}
