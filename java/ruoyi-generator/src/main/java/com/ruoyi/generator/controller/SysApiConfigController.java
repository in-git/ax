package com.ruoyi.generator.controller;

import com.ruoyi.common.core.domain.AjaxResult;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

import static com.ruoyi.common.core.domain.AjaxResult.success;


@RestController
@RequestMapping("/tool/api")
public class SysApiConfigController {
    
    /*
    * 获取千帆模型的token
    * */
    @GetMapping("/qf-token")
    public AjaxResult getQianFanToken(String ak,String sk) {

        String url = "https://aip.baidubce.com/oauth/2.0/token?client_id="+ak+"&client_secret="+sk+"&grant_type=client_credentials";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        HttpEntity<String> requestEntity = new HttpEntity<>("", headers);

        RestTemplate restTemplate = new RestTemplate();
        System.out.println(url);
        Object response = restTemplate.postForObject(url, requestEntity, Object.class);
        return success(response) ;
    }
}
