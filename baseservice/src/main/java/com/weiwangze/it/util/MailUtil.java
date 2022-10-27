package com.weiwangze.it.util;

import com.weiwangze.it.util.vo.MailVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;

import java.util.Date;

/**
 * 邮件工具类
 */
@Controller
@Slf4j
public class MailUtil {

    /**
     * 快捷发送邮件
     *
     * @param title   邮件标题
     * @param context 邮件内容
     * @param cc      接收人邮箱
     */
    public static void sendMail(String title, String context, String cc) {
        MailVO mailVO = new MailVO(title, context, cc);
        sendMail(mailVO);
    }

    /**
     * 发送邮件
     *
     * @param mailVO mailVO
     */
    public static void sendMail(MailVO mailVO) {
        // 邮箱VO为空,则不发送
        if (mailVO == null) {
            return;
        }

        // 没有设置邮箱接收者,则不处理
        if (StringUtils.isEmpty(mailVO.getCc())) {
            log.debug("发送邮件邮箱为空");
            return;
        }

        // 构建一个邮件对象
        SimpleMailMessage message = new SimpleMailMessage();

        // 设置邮件主题
        message.setSubject(mailVO.getTitle());

        // 设置邮件发送者，这个跟application.yml中设置的要一致
        String from = SpringUtil.getProperty("spring.mail.username");
        if (StringUtils.isEmpty(from)) {
            log.debug("发送邮箱为空,请检查上下文邮箱发送者的配置(spring.mail.username)");
            return;
        }
        message.setFrom(from);
        // 设置邮件接收人
        message.setCc(mailVO.getCc());
        if (StringUtils.isNotEmpty(mailVO.getTo())) {
            // 设置邮件抄送人
            message.setTo(mailVO.getTo());
        }

        // 设置邮件发送日期,未设置默认当前服务器时间
        if (mailVO.getSendDate() != null) {
            message.setSentDate(mailVO.getSendDate());
        } else {
            message.setSentDate(new Date());
        }

        // 设置邮件的正文
        message.setText(mailVO.getContext());

        // 发送邮件
        JavaMailSender javaMailSender = SpringUtil.getBean("mailSender", JavaMailSender.class);
        javaMailSender.send(message);

        log.debug("邮件发送给:" + mailVO.getCc() + "成功");
    }
    
}
