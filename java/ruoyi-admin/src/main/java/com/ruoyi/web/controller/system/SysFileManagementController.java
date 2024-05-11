package com.ruoyi.web.controller.system;

import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.system.service.impl.SysFileManagementServiceImpl;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

import static com.ruoyi.common.core.domain.AjaxResult.error;
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


    @PostMapping("/upload")
    public AjaxResult uploadFile(@RequestParam("files") MultipartFile[] files, @RequestParam("path") String path) {

        if (files == null || files.length == 0) {
            return error("请选择要上传的文件");
        }
        try {
            Path destFolderPath = Paths.get(path);
            if (!Files.exists(destFolderPath)) {
                Files.createDirectories(destFolderPath);
            }
            for (MultipartFile file : files) {
                String originalFilename = file.getOriginalFilename();
                if (originalFilename != null && originalFilename.contains("/")) {
                    // 如果文件名包含路径，则需要创建相应的文件夹
                    String[] folders = originalFilename.split("/");
                    Path folderPath = destFolderPath;
                    for (int i = 0; i < folders.length - 1; i++) {
                        folderPath = folderPath.resolve(folders[i]);
                        if (!Files.exists(folderPath)) {
                            Files.createDirectories(folderPath);
                        }
                    }
                }
                Path destFilePath = destFolderPath.resolve(originalFilename);
                try (OutputStream outputStream = Files.newOutputStream(destFilePath)) {
                    outputStream.write(file.getBytes());
                }
            }
            return success("文件上传成功");
        } catch (IOException e) {

            return error("文件上传失败: " + e.getMessage());
        }
    }
}
