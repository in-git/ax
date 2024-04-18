package com.ruoyi.system.service.impl;

import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.system.domain.SysGallery;
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

    @Value("${ruoyi.iconsPath}")
    private String iconsPath;
    /**
     * 查询系统图库
     * 
     * @param galleryId 系统图库主键
     * @return 系统图库
     */
    @Override
    public SysGallery selectSysGalleryByGalleryId(Long galleryId)
    {
        return sysGalleryMapper.selectSysGalleryByGalleryId(galleryId);
    }

    /**
     * 查询系统图库列表
     * 
     * @param sysGallery 系统图库
     * @return 系统图库
     */
    @Override
    public List<SysGallery> selectSysGalleryList(SysGallery sysGallery)
    {
        return sysGalleryMapper.selectSysGalleryList(sysGallery);
    }

    /**
     * 新增系统图库
     * 
     * @param sysGallery 系统图库
     * @return 结果
     */
    @Override
    public int insertSysGallery(SysGallery sysGallery)
    {
        sysGallery.setCreateTime(DateUtils.getNowDate());
        return sysGalleryMapper.insertSysGallery(sysGallery);
    }

    /**
     * 修改系统图库
     * 
     * @param sysGallery 系统图库
     * @return 结果
     */
    @Override
    public int updateSysGallery(SysGallery sysGallery)
    {
        sysGallery.setUpdateTime(DateUtils.getNowDate());
        return sysGalleryMapper.updateSysGallery(sysGallery);
    }

    /**
     * 批量删除系统图库
     * 
     * @param galleryIds 需要删除的系统图库主键
     * @return 结果
     */
    @Override
    public int deleteSysGalleryByGalleryIds(Long[] galleryIds)
    {
        return sysGalleryMapper.deleteSysGalleryByGalleryIds(galleryIds);
    }

    /**
     * 删除系统图库信息
     * 
     * @param galleryId 系统图库主键
     * @return 结果
     */
    @Override
    public int deleteSysGalleryByGalleryId(Long galleryId)
    {
        return sysGalleryMapper.deleteSysGalleryByGalleryId(galleryId);
    }

    @Override
    public List<String> getSystemIcons() {
        List<String> filePaths = new ArrayList<>();
        File directory = new File(iconsPath);
        if (directory.exists() && directory.isDirectory()) {
            File[] files = directory.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isFile()) {
                        filePaths.add(file.getAbsolutePath());
                    }
                }
            }
        }
        return filePaths;
    }
}
