package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.SysFeedback;

/**
 * FeedbackMapper接口
 * 
 * @author ruoyi
 * @date 2024-04-07
 */
public interface SysFeedbackMapper 
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
     * 删除Feedback
     * 
     * @param feedbackId Feedback主键
     * @return 结果
     */
    public int deleteSysFeedbackByFeedbackId(Long feedbackId);

    /**
     * 批量删除Feedback
     * 
     * @param feedbackIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysFeedbackByFeedbackIds(Long[] feedbackIds);
}
