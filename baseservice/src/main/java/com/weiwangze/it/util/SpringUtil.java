package com.weiwangze.it.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Controller;

/**
 * SpringBoot工具类
 */
@Controller
@Slf4j
public class SpringUtil implements ApplicationContextAware {

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
        if (this.applicationContext != null) {
            log.info("工具类SpringUtil上下文初始化成功!!!");
        }
    }

    public static ApplicationContext applicationContext;

    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    /**
     * 获取Bean
     *
     * @param name
     * @return
     * @throws BeansException
     */
    public static Object getBean(String name) throws BeansException {
        return applicationContext.getBean(name);
    }

    /**
     * 获取Bean
     *
     * @param name
     * @param requiredType
     * @param <T>
     * @return
     * @throws BeansException
     */
    public static <T> T getBean(String name, Class<T> requiredType) throws BeansException {
        return applicationContext.getBean(name, requiredType);
    }

    /**
     * 获取上下文配置
     *
     * @param key
     * @return
     */
    public static String getProperty(String key) {
        if (StringUtils.isEmpty(key)) {
            return null;
        }
        return applicationContext.getEnvironment().getProperty(key);
    }
}
