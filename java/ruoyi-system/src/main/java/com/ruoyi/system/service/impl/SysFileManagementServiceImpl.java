package com.ruoyi.system.service.impl;

import cn.hutool.core.io.FileUtil;
import com.ruoyi.common.utils.file.FileUtils;
import com.ruoyi.common.utils.file.ImageUtils;
import com.ruoyi.system.domain.vo.FileAttr;
import com.ruoyi.system.domain.vo.FileInfoVo;
import com.ruoyi.system.service.ISysFileManagementService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class SysFileManagementServiceImpl implements ISysFileManagementService {

    public static void sortFileInfoList(List<FileInfoVo> fileInfoList) {
        Collections.sort(fileInfoList, new Comparator<FileInfoVo>() {
            @Override
            public int compare(FileInfoVo fileInfo1, FileInfoVo fileInfo2) {
                // 首先比较isLeaf属性，isLeaf为false的排在前面
                if (!fileInfo1.getIsLeaf() && fileInfo2.getIsLeaf()) {
                    return -1;
                } else if (fileInfo1.getIsLeaf() && !fileInfo2.getIsLeaf()) {
                    return 1;
                } else {
                    // 如果isLeaf属性相同，则按照其他属性排序，这里可以根据具体情况进行修改
                    // 例如，按照文件标题排序
                    return fileInfo1.getTitle().compareTo(fileInfo2.getTitle());
                }
            }
        });
    }

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
                    boolean isImage = ImageUtils.isImage(file);

                    // 创建 FileInfoVo 对象
                    FileInfoVo fileInfo = new FileInfoVo();
                    fileInfo.setTitle(file.getName());
                    fileInfo.setKey(file.getPath());
                    // 判断是否为文件夹
                    if (file.isDirectory()) {
                        // 如果是文件夹，直接添加到列表中
                        fileInfo.setType("folder");
                        fileInfo.setIsLeaf(false);
                        fileList.add(fileInfo);
                    } else if (!onlyFolder) {
                        // 如果不仅获取文件夹，并且是文件，则添加到列表中
                        fileInfo.setIsLeaf(true);

                        if (isImage) {
                            fileInfo.setSrc(ImageUtils.convertImageToBase64(file.getPath()));
                            fileInfo.setType("image");
                        } else if (file.getName().endsWith(".txt") || FileUtils.isCodeFile(file)) {
                            String strings = FileUtils.readFileAsString(file.getPath());
                            // 当为文本类型的时候，读取内容
                            if (file.getName().endsWith(".txt")) {
                                fileInfo.setType("text");
                            } else if (FileUtils.isCodeFile(file)) {
                                String type = FileUtils.getFileExtension(file.getName());
                                fileInfo.setType(type);
                            }
                            fileInfo.setSrc(strings);
                        } else {
                            fileInfo.setType("file");
                        }
                        fileList.add(fileInfo);
                    }
                }
            }
            sortFileInfoList(fileList);
            return fileList;
        } catch (Error | IOException ignored) {

        }
        return null;
    }


    /**
     * 根据路径删除文件
     *
     * @param paths 路径
     * @return 是否成功
     */
    @Override
    public boolean deleteFile(String paths) {
        if (StringUtils.isEmpty(paths)) {
            return false;
        }

        // 按逗号分隔路径
        String[] pathArray = paths.split(",");
        boolean allDeleted = true;

        for (String path : pathArray) {
            try {
                boolean isDelete = FileUtil.del(new File(path));
                if (isDelete) {
                    allDeleted = true;
                }

            } catch (Exception e) {
                allDeleted = false;
            }
        }
        return allDeleted;
    }


    /**
     * 浏览文件，暂时未调用，用于浏览媒体专用
     *
     * @param path 路径
     * @return 是否成功
     */
    public ResponseEntity<byte[]> viewFile(String path) throws IOException {
        // 根据文件路径创建文件对象
        File file = new File(path);

        // 检查文件是否存在
        if (!file.exists() || !file.isFile()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        // 设置响应头，告诉客户端文件类型
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", file.getName());

        // 获取文件输入流
        InputStream inputStream = Files.newInputStream(file.toPath());

        // 返回文件流作为响应体
        return new ResponseEntity<>(FileCopyUtils.copyToByteArray(inputStream), headers, HttpStatus.OK);

    }

    /**
     * 根据路径创建文件
     *
     * @param path 路径
     * @param type file:文件，folder：文件夹
     * @return 是否成功
     */
    @Override
    public boolean createFile(String path, String type) {
        File file = new File(path);

        if ("file".equalsIgnoreCase(type)) {
            try {
                // 尝试创建文件
                return file.createNewFile();
            } catch (Exception e) {
                return false;
            }
        } else if ("folder".equalsIgnoreCase(type)) {
            // 尝试创建文件夹
            return file.mkdirs();
        } else {
            return false;
        }
    }

    /**
     * 根据路径创建文件
     *
     * @param oldPath 旧的路径
     * @param newPath 新的路径
     * @return 是否成功
     */
    @Override
    public boolean renameFile(String oldPath, String newPath) {
        File oldFile = new File(oldPath);
        File newFile = new File(newPath);
        // 检查旧文件是否存在
        if (!oldFile.exists() || !oldFile.isFile()) {
            return false;
        }
        if (newFile.exists()) {
            return false;
        }
        return oldFile.renameTo(newFile);
    }

    /**
     * 复制文件
     *
     * @param targetPath 目标路径
     * @param files      复制的文件列表
     * @return 是否成功
     */
    @Override
    public boolean cloneFiles(String targetPath, String files) {

        if (!FileUtil.isDirectory(targetPath)) {
            return false;
        }

        String[] fileArray = files.split(",");
        for (String filePath : fileArray) {
            File sourceFile = new File(filePath.trim());
            if (!sourceFile.isFile() || !sourceFile.exists()) {
                return false;
            }

            File targetFile = new File(targetPath, sourceFile.getName());

            try {
                System.out.println(targetFile.getName() + sourceFile.getName());
                FileUtil.copy(sourceFile, targetFile, true);
            } catch (Exception e) {
                return false;
            }
        }

        return true;
    }

    @Override
    public boolean upload(MultipartFile[] files, String rootPath) {
        for (MultipartFile file : files) {
            String originalFilename = file.getOriginalFilename();
            if (originalFilename != null && !originalFilename.isEmpty()) {
                try {
                    // 根据操作系统类型获取文件分隔符
                    String fileSeparator = File.separator;

                    // 构建文件保存的绝对路径
                    String relativePath = originalFilename;
                    String absolutePath = rootPath + fileSeparator + relativePath;

                    // 创建文件的父目录
                    File parentDirectory = new File(absolutePath).getParentFile();
                    if (!parentDirectory.exists()) {
                        parentDirectory.mkdirs();
                    }

                    // 保存文件
                    File destFile = new File(absolutePath);
                    file.transferTo(destFile);

                    System.out.println("文件上传成功：" + destFile.getAbsolutePath());
                } catch (IOException e) {
                    System.out.println("文件上传失败：" + e.getMessage());
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * 查询文件信息
     *
     * @param path 文件的路径
     */
    @Override
    public FileAttr fileInfo(String path) {
        File file = new File(path);

        // 检查文件是否存在
        if (!file.exists()) {
            System.out.println("文件不存在");
            return null;
        }

        // 创建一个FileInfo对象，用于存储文件信息
        FileAttr fileInfo = new FileAttr();

        // 设置文件名
        fileInfo.setName(file.getName());

        // 设置文件路径
        fileInfo.setAbsolutePath(file.getAbsolutePath());

        // 设置文件大小（以字节为单位）
        fileInfo.setSize(file.length());

        // 设置文件是否可读
        fileInfo.setReadable(file.canRead());

        // 设置文件是否可写
        fileInfo.setWritable(file.canWrite());

        // 设置文件是否是目录
        fileInfo.setDirectory(file.isDirectory());

        // 设置文件是否是隐藏文件
        fileInfo.setHidden(file.isHidden());

        // 设置文件最后修改时间
        fileInfo.setLastModified(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(file.lastModified()));

        // 设置文件创建时间
        fileInfo.setCreateTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(file.lastModified()));

        return fileInfo;
    }


    /**
     * 获取系统根目录，根据不同操作系统
     */
    public static List<FileInfoVo> getRootDirectoryPath() {
        List<FileInfoVo> rootPaths = new ArrayList<>();
        String osName = System.getProperty("os.name");
        if (osName.startsWith("Windows")) {
            File[] roots = File.listRoots();
            for (File root : roots) {
                rootPaths.add(createFileInfo(root.getPath()));
            }
        } else {
            File rootDirectory = new File("/");
            if (rootDirectory.exists() && rootDirectory.isDirectory()) {
                File[] directories = rootDirectory.listFiles(File::isDirectory);
                if (directories != null) {
                    for (File directory : directories) {
                        rootPaths.add(createFileInfo(directory.getAbsolutePath()));
                    }
                }
            }
        }
        return rootPaths;
    }

    /**
     * @param path 路径
     * @return fileInfo 文件相关信息
     */
    private static FileInfoVo createFileInfo(String path) {
        FileInfoVo fileInfo = new FileInfoVo();
        fileInfo.setTitle(path);
        fileInfo.setType("folder");
        fileInfo.setKey(path);
        fileInfo.setIsLeaf(false);
        return fileInfo;
    }

}
