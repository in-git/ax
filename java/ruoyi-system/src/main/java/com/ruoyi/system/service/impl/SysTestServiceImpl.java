package com.ruoyi.system.service.impl;

import java.util.List;
import com.ruoyi.common.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.SysTestMapper;
import com.ruoyi.system.domain.SysTest;
import com.ruoyi.system.service.ISysTestService;

/**
 * 系统测试表Service业务层处理
 * 
 * @author AX
 * @date ${datetime}
 */
@Service
public class SysTestServiceImpl implements ISysTestService 
{
    @Autowired
    private SysTestMapper sysTestMapper;

    /**
     * 查询系统测试表
     * 
     * @param testId 系统测试表主键
     * @return 系统测试表
     */
    @Override
    public SysTest selectSysTestByTestId(Long testId)
    {
        return sysTestMapper.selectSysTestByTestId(testId);
    }

    /**
     * 查询系统测试表列表
     * 
     * @param sysTest 系统测试表
     * @return 系统测试表
     */
    @Override
    public List<SysTest> selectSysTestList(SysTest sysTest)
    {
        return sysTestMapper.selectSysTestList(sysTest);
    }

    /**
     * 新增系统测试表
     * 
     * @param sysTest 系统测试表
     * @return 结果
     */
    @Override
    public int insertSysTest(SysTest sysTest)
    {
        sysTest.setCreateTime(DateUtils.getNowDate());
        return sysTestMapper.insertSysTest(sysTest);
    }

    /**
     * 修改系统测试表
     * 
     * @param sysTest 系统测试表
     * @return 结果
     */
    @Override
    public int updateSysTest(SysTest sysTest)
    {
        sysTest.setUpdateTime(DateUtils.getNowDate());
        return sysTestMapper.updateSysTest(sysTest);
    }

    /**
     * 批量删除系统测试表
     * 
     * @param testIds 需要删除的系统测试表主键
     * @return 结果
     */
    @Override
    public int deleteSysTestByTestIds(Long[] testIds)
    {
        return sysTestMapper.deleteSysTestByTestIds(testIds);
    }

    /**
     * 删除系统测试表信息
     * 
     * @param testId 系统测试表主键
     * @return 结果
     */
    @Override
    public int deleteSysTestByTestId(Long testId)
    {
        return sysTestMapper.deleteSysTestByTestId(testId);
    }
}
