package com.ruoyi.system.service;

import java.util.List;

/**
 * 系统图库Service接口
 * 
 * @author AX
 * @date ${datetime}
 */
public interface ISysGalleryService 
{

    public List<String> getSystemImages(String type);
}
