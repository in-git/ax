package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.SysMemo;

/**
 * 备忘录Service接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface ISysMemoService 
{
    /**
     * 查询备忘录
     * 
     * @param memoId 备忘录主键
     * @return 备忘录
     */
    public SysMemo selectSysMemoByMemoId(Long memoId);

    /**
     * 查询备忘录列表
     * 
     * @param sysMemo 备忘录
     * @return 备忘录集合
     */
    public List<SysMemo> selectSysMemoList(SysMemo sysMemo);

    /**
     * 新增备忘录
     * 
     * @param sysMemo 备忘录
     * @return 结果
     */
    public int insertSysMemo(SysMemo sysMemo);

    /**
     * 修改备忘录
     * 
     * @param sysMemo 备忘录
     * @return 结果
     */
    public int updateSysMemo(SysMemo sysMemo);

    /**
     * 批量删除备忘录
     * 
     * @param memoIds 需要删除的备忘录主键集合
     * @return 结果
     */
    public int deleteSysMemoByMemoIds(Long[] memoIds);

    /**
     * 删除备忘录信息
     * 
     * @param memoId 备忘录主键
     * @return 结果
     */
    public int deleteSysMemoByMemoId(Long memoId);
}
