package com.ocean.it.animation.service.impl;

import com.ocean.it.animation.dao.ISourceLibraryDao;
import com.ocean.it.animation.service.ISourceLibraryService;
import com.ocean.it.animation.vo.SourceLibraryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SourceLibraryService implements ISourceLibraryService {


    @Autowired
    private ISourceLibraryDao sourceLibraryDao;

    @Override
    public List<SourceLibraryVO> findSourceLibraryList() {
        return sourceLibraryDao.findSourceLibraryList();
    }
}
