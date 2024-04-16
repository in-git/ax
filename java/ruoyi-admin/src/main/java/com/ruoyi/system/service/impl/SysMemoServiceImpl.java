package com.ruoyi.system.service.impl;

import com.ruoyi.common.core.domain.entity.SysUser;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.common.utils.SecurityUtils;
import com.ruoyi.system.domain.SysMemo;
import com.ruoyi.system.mapper.SysMemoMapper;
import com.ruoyi.system.service.ISysMemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 备忘录Service业务层处理
 * 
 * @author AX
 * @date ${datetime}
 */
@Service
public class SysMemoServiceImpl implements ISysMemoService 
{
    @Autowired
    private SysMemoMapper sysMemoMapper;

    /**
     * 查询备忘录
     * 
     * @param memoId 备忘录主键
     * @return 备忘录
     */
    @Override
    public SysMemo selectSysMemoByMemoId(Long memoId)
    {
        return sysMemoMapper.selectSysMemoByMemoId(memoId);
    }

    /**
     * 查询备忘录列表
     * 
     * @param sysMemo 备忘录
     * @return 备忘录
     */
    @Override
    public List<SysMemo> selectSysMemoList(SysMemo sysMemo)
    {
        return sysMemoMapper.selectSysMemoList(sysMemo);
    }

    /**
     * 新增备忘录
     * 
     * @param sysMemo 备忘录
     * @return 结果
     */
    @Override
    public int insertSysMemo(SysMemo sysMemo)
    {
        SysUser user = SecurityUtils.getLoginUser().getUser();
        sysMemo.setDeptId(user.getDeptId());
        sysMemo.setUserId(user.getUserId());
        sysMemo.setCreateTime(DateUtils.getNowDate());
        return sysMemoMapper.insertSysMemo(sysMemo);
    }

    /**
     * 修改备忘录
     * 
     * @param sysMemo 备忘录
     * @return 结果
     */
    @Override
    public int updateSysMemo(SysMemo sysMemo)
    {
        sysMemo.setUpdateTime(DateUtils.getNowDate());
        return sysMemoMapper.updateSysMemo(sysMemo);
    }

    /**
     * 批量删除备忘录
     * 
     * @param memoIds 需要删除的备忘录主键
     * @return 结果
     */
    @Override
    public int deleteSysMemoByMemoIds(Long[] memoIds)
    {
        return sysMemoMapper.deleteSysMemoByMemoIds(memoIds);
    }

    /**
     * 删除备忘录信息
     * 
     * @param memoId 备忘录主键
     * @return 结果
     */
    @Override
    public int deleteSysMemoByMemoId(Long memoId)
    {
        return sysMemoMapper.deleteSysMemoByMemoId(memoId);
    }
}
