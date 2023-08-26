package com.ocean.it.user;

import com.ocean.it.util.MailUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserApi {

    @GetMapping(value = "/findUserName", name = "查询用户名称")
    public String findUserName(@RequestParam("userId") String userId) {
        if (userId == null) {
            return "用户ID不能为空";
        }
        String userName = "";
        if (userId.equals("111")) {
            userName = "小明";
        } else if (userId.equals("222")) {
            userName = "小红";
        } else {
            return "未匹配到用户名称";
        }
        return userName;
    }

    @GetMapping(value = "/findA", name = "查询用户A")
    public String getA() {
        return "123";
    }

    @GetMapping(value = "/sendMail", name = "发送邮件")
    public String sendMail() {
        MailUtil.sendMail("测试标题", "测试内容啊2", "728730521@qq.com");
        return "success";
    }
}
