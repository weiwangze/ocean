package com.weiwangze.it.util.vo;

import lombok.Data;

import java.util.Date;

@Data
public class MailVO {

    /**
     * 邮件标题
     */
    private String title;

    /**
     * 邮件正文
     */
    private String context;

    /**
     * 邮件接收邮箱
     */
    private String to;

    /**
     * 抄送邮箱
     */
    private String cc;

    /**
     * 发送时间
     */
    private Date sendDate;

    public MailVO() {
    }

    public MailVO(String title, String context, String cc) {
        this.title = title;
        this.context = context;
        this.cc = cc;
    }
}
