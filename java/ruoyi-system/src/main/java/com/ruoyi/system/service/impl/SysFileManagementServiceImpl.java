package com.ruoyi.system.service.impl;

import com.ruoyi.system.domain.vo.FileInfoVo;
import com.ruoyi.system.service.ISysFileManagementService;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class SysFileManagementServiceImpl implements ISysFileManagementService {

    /**
     * 根据路径查询所有文件
     *
     * @param path 路径
     * @return 树形目录
     */
    public List<FileInfoVo> listFiles(String path, Boolean onlyFolder) {
        try {
            List<FileInfoVo> fileList = new ArrayList<>();
            if (path == null || path.isEmpty()) {
                // 如果路径为空，则根据不同操作系统获取根目录路径
                return getRootDirectoryPath();
            }
            File directory = new File(path);
            if (!directory.exists() || !directory.isDirectory()) {
                // 如果路径不存在或者不是文件夹，返回空列表
                return fileList;
            }
            // 获取目录下的所有文件和子文件夹
            File[] files = directory.listFiles();
            if (files != null) {
                for (File file : files) {
                    // 创建 FileInfoVo 对象
                    FileInfoVo fileInfo = new FileInfoVo();
                    fileInfo.setTitle(file.getName());
                    fileInfo.setKey(file.getPath());

                    if (file.isDirectory()) {
                        // 如果是文件夹，直接添加到列表中
                        fileInfo.setType("folder");
                        fileInfo.setIsLeaf(false);
                        fileList.add(fileInfo);
                    } else if (!onlyFolder) {
                        // 如果不仅获取文件夹，并且是文件，则添加到列表中
                        fileInfo.setType("file");
                        fileInfo.setIsLeaf(true);
                        fileList.add(fileInfo);
                    }
                }
            }
            return fileList;
        } catch (Error ignored) {

        }
        return null;
    }


    /**
     * 根据路径删除文件
     *
     * @param path 路径
     * @return 是否成功
     */
    @Override
    public int deleteFile(String path) {
        return 0;
    }

    public static List<FileInfoVo> getRootDirectoryPath() {
        List<FileInfoVo> rootPaths = new ArrayList<>();
        File[] roots = File.listRoots();
        for (File root : roots) {
            // 创建 FileInfoVo 对象
            FileInfoVo fileInfo = new FileInfoVo();
            fileInfo.setTitle(root.getPath());
            fileInfo.setType("folder");
            fileInfo.setKey(root.getPath());
            fileInfo.setIsLeaf(false);
            // 将 FileInfoVo 对象添加到列表中
            rootPaths.add(fileInfo);
        }
        // 其他操作系统暂不支持
        return rootPaths;
    }
}
