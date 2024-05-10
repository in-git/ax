package com.ruoyi.web.controller.system;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.service.impl.SysFileManagementServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import static com.ruoyi.common.core.domain.AjaxResult.success;

@RestController
@RequestMapping("/system/file")
public class SysFileManagementController {
    @Autowired
    private SysFileManagementServiceImpl fileManagementService;

    @GetMapping("/path")
    public AjaxResult getPath(String path, Boolean onlyFolder) {
        return success(fileManagementService.listFiles(path, onlyFolder));
    }
}
