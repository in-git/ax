package com.ruoyi.system.service.impl;

import com.ruoyi.system.mapper.SysGalleryMapper;
import com.ruoyi.system.service.ISysGalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * 系统图库Service业务层处理
 * 
 * @author AX
 * @date ${datetime}
 */
@Service
public class SysGalleryServiceImpl implements ISysGalleryService 
{
    @Autowired
    private SysGalleryMapper sysGalleryMapper;

    @Value("${ruoyi.profile}")
    private String iconsPath;




    @Override
    public List<String> getSystemImages(String type) {
        try {
            List<String> filePaths = new ArrayList<>();
            File directory = new File(iconsPath + type);
            if (!directory.exists()) {
                directory.mkdirs();
            }
            if (directory.isDirectory()) {
                File[] files = directory.listFiles();
                if (files != null) {
                    for (File file : files) {
                        if (file.isFile()) {
                            filePaths.add(file.getName());
                        }
                    }
                }
            }
            return filePaths;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
