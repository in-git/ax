package com.ruoyi.system.domain.vo;

import lombok.Data;

import java.util.List;

@Data
public class FileInfoVo {
    List<FileInfoVo> children;
    String key;
    String title;
    String type;
    Boolean isLeaf;
}
