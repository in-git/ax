package com.ruoyi.system.domain.vo;

import lombok.Data;

@Data
public class FileAttr {
    private String name; // 文件名
    private String absolutePath; // 文件路径
    private long size; // 文件大小（以字节为单位）
    private boolean readable; // 是否可读
    private boolean writable; // 是否可写
    private boolean directory; // 是否是目录
    private boolean hidden; // 是否是隐藏文件
    private String lastModified; // 最后修改时间
    private String createTime; // 创建时间



    // 格式化文件大小，以MB或KB为单位
    public String formatFileSize(long size) {
        double fileSizeInKB = size / 1024.0;
        if (fileSizeInKB >= 1024) {
            double fileSizeInMB = fileSizeInKB / 1024.0;
            return String.format("%.2f MB", fileSizeInMB);
        } else {
            return String.format("%.2f KB", fileSizeInKB);
        }
    }

}
