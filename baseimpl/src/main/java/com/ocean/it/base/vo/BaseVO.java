package com.ocean.it.base.vo;

import lombok.Data;

import java.io.Serializable;

@Data
public class BaseVO implements Serializable {

    /**
     * 创建时间
     */
    private String createDate;

    /**
     * 创建人
     */
    private String create_by;

    /**
     * 最后修改时间
     */
    private String lastUpdateDate;

    /**
     * 最后修改人
     */
    private String lastUpdateBy;

    /**
     * 创建时间
     */
    private String status;
}
