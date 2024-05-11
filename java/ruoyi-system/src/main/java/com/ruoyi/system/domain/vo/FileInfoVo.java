package com.ruoyi.system.domain.vo;

import lombok.Data;

import java.util.List;

@Data
public class FileInfoVo {
    List<FileInfoVo> children;
<<<<<<< HEAD
    //    文件路径作为唯一值
    String key;
    //    文件标题
    String title;
    //    文件类型
    String type;
    //    是否为目录，配合前端组件使用
    Boolean isLeaf;
    //    当文件类型不为视频时，读取内容
    String src;
=======
    String key;
    String title;
    String type;
    Boolean isLeaf;
>>>>>>> master
}
