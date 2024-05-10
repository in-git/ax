package com.ruoyi.web.controller.system;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.service.impl.SysFileManagementServiceImpl;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

import static com.ruoyi.common.core.domain.AjaxResult.success;

@RestController
@RequestMapping("/system/file")
public class SysFileManagementController {
    @Autowired
    private SysFileManagementServiceImpl fileManagementService;

    @PreAuthorize("@ss.hasPermi('tool:file:view')")
    @GetMapping("/path")
    public AjaxResult getPath(String path, Boolean onlyFolder) {
        return success(fileManagementService.listFiles(path, onlyFolder));
    }

    @GetMapping("/viewFile")
    public ResponseEntity<byte[]> viewFile(@RequestParam String path) throws IOException {
        return fileManagementService.viewFile(path);
    }

    @PreAuthorize("@ss.hasPermi('tool:file:add')")
    @GetMapping("/createFile")
    public AjaxResult createFile(@RequestParam String path, @RequestParam String type) {
        return success(fileManagementService.createFile(path, type));
    }

    @PreAuthorize("@ss.hasPermi('tool:file:delete')")
    @DeleteMapping("/deleteFile")
    public AjaxResult deleteFile(@RequestBody String path) {
        return success(fileManagementService.deleteFile(path));
    }

    @Data
    public static class FileRenameRequest {
        private String newFileName;
        private String oldFileName;
    }

    @PreAuthorize("@ss.hasPermi('tool:file:rename')")
    @PutMapping("/renameFile")
    public AjaxResult rename(@RequestBody FileRenameRequest renameRequest) {
        return success(fileManagementService.renameFile(renameRequest.getOldFileName(), renameRequest.getNewFileName()));
    }


    @Data
    public static class CloneFile {
        private String targetPath;
        private String files;
    }

    @PreAuthorize("@ss.hasPermi('tool:file:clone')")
    @PostMapping("/cloneFile")
    public AjaxResult cloneFile(@RequestBody CloneFile cloneFile) {
        return success(fileManagementService.cloneFiles(cloneFile.getTargetPath(), cloneFile.getFiles()));
    }
}
