package com.ruoyi.web.controller.monitor;

import lombok.Data;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.framework.web.domain.Server;

/**
 * 服务器监控
 * 
 * @author ruoyi
 */
@RestController
@RequestMapping("/monitor/server")
public class ServerController
{
    @PreAuthorize("@ss.hasPermi('monitor:server:list')")
    @GetMapping()
    public AjaxResult getInfo() throws Exception
    {
        Server server = new Server();
        server.copyTo();
        return AjaxResult.success(server);
    }

    @Data

    private  class SysInfo {
        String osName;
        String fileSeparator;
    }

    @GetMapping("sys")
    public AjaxResult getSystemInfo() throws Exception
    {
        SysInfo sysInfo = new SysInfo();
        sysInfo.setOsName( System.getProperty("os.name"));
        sysInfo.setFileSeparator(  System.getProperty("file.separator"));
        return AjaxResult.success(sysInfo);
    }

}
