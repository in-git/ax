package com.ruoyi.web.controller.system;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.service.ISysGalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 系统图库Controller
 * 
 * @author AX
 * @date ${datetime}
 */
@RestController
@RequestMapping("/system/gallery")
public class SysGalleryController extends BaseController
{
    @Autowired
    private ISysGalleryService sysGalleryService;
    /**
     * 获取所有ICON
     */
    @GetMapping("/getImages")
    public AjaxResult getImages( @RequestParam String type)
    {
        return success(sysGalleryService.getSystemImages(type));
    }

}
