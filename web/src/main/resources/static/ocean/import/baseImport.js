Ocean.Define("Ocean.Import", function (page, $, $I) {

    this.ready = function () {

        // 加载基础组件(必加载)
        this.loadBaseCom();

        // 加载可选组件
        this.loadSelectedCom();

    };

    // 加载基础组件
    this.loadBaseCom = function () {
        // 加载基础工具
        this.write("script", Ocean.contextPath + "/ocean/util/common.js");
        // 加载序列组件
        this.write("script", Ocean.contextPath + "/ocean/util/sequence.js");
        // 加载日志组件
        this.write("script", Ocean.contextPath + "/ocean/base/oceanLogs.js");

        // 加载标签管理器
        this.write("script", Ocean.contextPath + "/ocean/page/label/labelManage.js");

        // 加载H5基础组件
        this.write("script", Ocean.contextPath + "/ocean/h5/baseUtils.js");
        // 加载H5高级组件
        this.write("script", Ocean.contextPath + "/ocean/h5/superUtils.js");


    };

    // 加载可选组件
    this.loadSelectedCom = function () {
        if (this.List && this.List.length > 0) {
            // 引入自定义组件
            for (var i = 0; i < this.List.length; i++) {
                this.write("script", this.List[i]);
            }
        }
    };

    // 导入文件
    this.write = function (type, url) {
        baseWrite(type, url);
    };

    // 写入文件
    function baseWrite(type, url) {
        if ($I.isNull(url) || $I.isNull(type)) {
            return;
        }

        // 强制转换为小写
        type = type.toLowerCase();

        if (!$I.is(type, ["script"], true)) {
            return;
        }

        if (type == "script") {
            // 加载文件
            document.write('<script src="' + url + '"></script>');
        }

    }

}, ["Ocean.Util.Valid"]);