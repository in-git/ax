package com.ruoyi.controller;


import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.service.ISysFileManagementService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static com.ruoyi.common.core.domain.AjaxResult.success;

@RestController
@RequestMapping("/afm/file")
public class SysFileManagementController {
    @Autowired
    private ISysFileManagementService fileManagementService;

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

    @PreAuthorize("@ss.hasPermi('tool:file:upload')")
    @PostMapping("/upload")
    public AjaxResult uploadFile(@RequestParam("files") MultipartFile[] files, @RequestParam("path") String path) {

        return success(fileManagementService.upload(files, path));
    }

    @PreAuthorize("@ss.hasPermi('tool:file:attr')")
    @GetMapping("/fileAttr")
    public AjaxResult fileAttr(@RequestParam String path) {
        return success(fileManagementService.fileInfo(path));
    }

}
