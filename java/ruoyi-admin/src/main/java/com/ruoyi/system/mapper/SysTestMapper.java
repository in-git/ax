package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.SysTest;

/**
 * 系统测试表Mapper接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface SysTestMapper 
{
    /**
     * 查询系统测试表
     * 
     * @param testId 系统测试表主键
     * @return 系统测试表
     */
    public SysTest selectSysTestByTestId(Long testId);

    /**
     * 查询系统测试表列表
     * 
     * @param sysTest 系统测试表
     * @return 系统测试表集合
     */
    public List<SysTest> selectSysTestList(SysTest sysTest);

    /**
     * 新增系统测试表
     * 
     * @param sysTest 系统测试表
     * @return 结果
     */
    public int insertSysTest(SysTest sysTest);

    /**
     * 修改系统测试表
     * 
     * @param sysTest 系统测试表
     * @return 结果
     */
    public int updateSysTest(SysTest sysTest);

    /**
     * 删除系统测试表
     * 
     * @param testId 系统测试表主键
     * @return 结果
     */
    public int deleteSysTestByTestId(Long testId);

    /**
     * 批量删除系统测试表
     * 
     * @param testIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteSysTestByTestIds(Long[] testIds);
}
