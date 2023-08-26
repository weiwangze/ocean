package com.ocean.it.animation.dao;

import com.ocean.it.animation.vo.SourceLibraryVO;

import java.util.List;

/**
 * 资源库接口类
 */
public interface ISourceLibraryDao {

    /**
     * 查询素材库
     *
     * @return
     */
    List<SourceLibraryVO> findSourceLibraryList();
}
