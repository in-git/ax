package com.ruoyi.service;

import com.ruoyi.service.domain.FileAttr;
import com.ruoyi.service.domain.FileInfoVo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ISysFileManagementService {
    /**
     * 根据路径查询所有文件
     *
     * @param path 路径
     * @return 树形目录
     */
    public List<FileInfoVo> listFiles (String path, Boolean onlyFolder);

    /**
     * 根据路径删除文件
     *
     * @param paths 路径
     * @return 是否成功
     */
    public boolean deleteFile(String paths);
    public ResponseEntity<byte[]> viewFile(String path) throws IOException;

    /**
     * 根据路径创建文件
     *
     * @param path 路径
     * @return 是否成功
     */
    public boolean  createFile(String path,String type);
    /**
     * 根据路径创建文件
     *
     * @param oldPath 旧的路径
     * @param newPath 新的路径
     * @return 是否成功
     */
    public boolean  renameFile(String oldPath,String newPath);
    /**
     * 复制文件
     *
     * @param targetPath 目标路径
     * @param files 复制的文件列表
     * @return 是否成功
     */
    public boolean  cloneFiles(String targetPath,String files);

    /**
     * 上传文件的接口
     * @param files 上传的文件们
     * @param path 路径
     */
    public boolean  upload(MultipartFile[] files, String path);

    /**
     * 查询文件信息
     * @param path 文件的路径
     */
    public FileAttr fileInfo(String path);
}
