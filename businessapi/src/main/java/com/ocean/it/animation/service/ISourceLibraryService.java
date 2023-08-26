package com.ocean.it.animation.service;

import com.ocean.it.animation.vo.SourceLibraryVO;

import java.util.List;

/**
 * 资源库接口类
 */
public interface ISourceLibraryService {

    List<SourceLibraryVO> findSourceLibraryList();
}
