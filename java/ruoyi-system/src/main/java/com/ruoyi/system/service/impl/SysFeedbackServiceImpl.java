package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.SysFeedbackMapper;
import com.ruoyi.system.domain.SysFeedback;
import com.ruoyi.system.service.ISysFeedbackService;

/**
 * FeedbackService业务层处理
 * 
 * @author ruoyi
 * @date 2024-04-07
 */
@Service
public class SysFeedbackServiceImpl implements ISysFeedbackService 
{
    @Autowired
    private SysFeedbackMapper sysFeedbackMapper;

    /**
     * 查询Feedback
     * 
     * @param feedbackId Feedback主键
     * @return Feedback
     */
    @Override
    public SysFeedback selectSysFeedbackByFeedbackId(Long feedbackId)
    {
        return sysFeedbackMapper.selectSysFeedbackByFeedbackId(feedbackId);
    }

    /**
     * 查询Feedback列表
     * 
     * @param sysFeedback Feedback
     * @return Feedback
     */
    @Override
    public List<SysFeedback> selectSysFeedbackList(SysFeedback sysFeedback)
    {
        return sysFeedbackMapper.selectSysFeedbackList(sysFeedback);
    }

    /**
     * 新增Feedback
     * 
     * @param sysFeedback Feedback
     * @return 结果
     */
    @Override
    public int insertSysFeedback(SysFeedback sysFeedback)
    {
        sysFeedback.setCreateTime(DateUtils.getNowDate());
        return sysFeedbackMapper.insertSysFeedback(sysFeedback);
    }

    /**
     * 修改Feedback
     * 
     * @param sysFeedback Feedback
     * @return 结果
     */
    @Override
    public int updateSysFeedback(SysFeedback sysFeedback)
    {
        sysFeedback.setUpdateTime(DateUtils.getNowDate());
        return sysFeedbackMapper.updateSysFeedback(sysFeedback);
    }

    /**
     * 批量删除Feedback
     * 
     * @param feedbackIds 需要删除的Feedback主键
     * @return 结果
     */
    @Override
    public int deleteSysFeedbackByFeedbackIds(Long[] feedbackIds)
    {
        return sysFeedbackMapper.deleteSysFeedbackByFeedbackIds(feedbackIds);
    }

    /**
     * 删除Feedback信息
     * 
     * @param feedbackId Feedback主键
     * @return 结果
     */
    @Override
    public int deleteSysFeedbackByFeedbackId(Long feedbackId)
    {
        return sysFeedbackMapper.deleteSysFeedbackByFeedbackId(feedbackId);
    }
}
