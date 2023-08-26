package com.ocean.it.animation.vo;

import com.ocean.it.base.vo.BaseVO;
import lombok.Data;

/**
 * 资源素材对象
 */
@Data
public class SourceLibraryVO extends BaseVO {

    /**
     * 资源ID
     */
    private Long id;

    /**
     * 资源类型
     */
    private String sourceType;

    /**
     * 资源标签
     */
    private Long sourceLabel;

    /**
     * 资源名称
     */
    private String sourceName;

    /**
     * 资源附件ID
     */
    private Long attachmentId;

    /**
     * 资源宽度
     */
    private String sourceWidth;

    /**
     * 资源高度
     */
    private String sourceHeight;

    /**
     * 资源文件格式
     */
    private String sourceFormat;

}
