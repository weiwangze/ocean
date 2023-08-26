package com.ocean.it.animation.api;

import com.ocean.it.animation.service.ISourceLibraryService;
import com.ocean.it.animation.vo.SourceLibraryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sourceLibrary")
public class SourceLibraryApi {

    @Autowired
    private ISourceLibraryService sourceLibraryService;

    @GetMapping(value = "/findSourceLibraryList", name = "查询资源素材列表")
    @ResponseBody
    public List<SourceLibraryVO> findSourceLibraryList() {
        return sourceLibraryService.findSourceLibraryList();
    }
}
