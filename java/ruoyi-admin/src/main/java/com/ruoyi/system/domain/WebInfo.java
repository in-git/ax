package com.ruoyi.system.domain;

import lombok.Data;

@Data
public class WebInfo {
    private String title;
    private String description;

    public WebInfo(String title, String description) {
        setTitle(title);
        setDescription(description);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
