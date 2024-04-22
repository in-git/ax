package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.SysFeedbackMapper;
import com.ruoyi.system.domain.SysFeedback;
import com.ruoyi.system.service.ISysFeedbackService;

/**
 * 系统反馈Service业务层处理
 * 
 * @author AX
 * @date ${datetime}
 */
@Service
public class SysFeedbackServiceImpl implements ISysFeedbackService 
{
    @Autowired
    private SysFeedbackMapper sysFeedbackMapper;

    /**
     * 查询系统反馈
     * 
     * @param feedbackId 系统反馈主键
     * @return 系统反馈
     */
    @Override
    public SysFeedback selectSysFeedbackByFeedbackId(Long feedbackId)
    {
        return sysFeedbackMapper.selectSysFeedbackByFeedbackId(feedbackId);
    }

    /**
     * 查询系统反馈列表
     * 
     * @param sysFeedback 系统反馈
     * @return 系统反馈
     */
    @Override
    public List<SysFeedback> selectSysFeedbackList(SysFeedback sysFeedback)
    {
        return sysFeedbackMapper.selectSysFeedbackList(sysFeedback);
    }

    /**
     * 新增系统反馈
     * 
     * @param sysFeedback 系统反馈
     * @return 结果
     */
    @Override
    public int insertSysFeedback(SysFeedback sysFeedback)
    {
        sysFeedback.setCreateTime(DateUtils.getNowDate());
        return sysFeedbackMapper.insertSysFeedback(sysFeedback);
    }

    /**
     * 修改系统反馈
     * 
     * @param sysFeedback 系统反馈
     * @return 结果
     */
    @Override
    public int updateSysFeedback(SysFeedback sysFeedback)
    {
        sysFeedback.setUpdateTime(DateUtils.getNowDate());
        return sysFeedbackMapper.updateSysFeedback(sysFeedback);
    }

    /**
     * 批量删除系统反馈
     * 
     * @param feedbackIds 需要删除的系统反馈主键
     * @return 结果
     */
    @Override
    public int deleteSysFeedbackByFeedbackIds(Long[] feedbackIds)
    {
        return sysFeedbackMapper.deleteSysFeedbackByFeedbackIds(feedbackIds);
    }

    /**
     * 删除系统反馈信息
     * 
     * @param feedbackId 系统反馈主键
     * @return 结果
     */
    @Override
    public int deleteSysFeedbackByFeedbackId(Long feedbackId)
    {
        return sysFeedbackMapper.deleteSysFeedbackByFeedbackId(feedbackId);
    }
}
