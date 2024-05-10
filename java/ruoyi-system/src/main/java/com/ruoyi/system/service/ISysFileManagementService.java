package com.ruoyi.system.service;

import com.ruoyi.system.domain.vo.FileInfoVo;

import java.util.List;

public interface ISysFileManagementService {
    /**
     * 根据路径查询所有文件
     *
     * @param path 路径
     * @return 树形目录
     */
    public List<FileInfoVo> listFiles (String path,Boolean onlyFolder);

    /**
     * 根据路径删除文件
     *
     * @param path 路径
     * @return 是否成功
     */
    public int deleteFile(String path);
}
