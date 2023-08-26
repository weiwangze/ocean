// 定义框架
var Ocean = {
    // 定义上下文
    contextPath: "/ocean"
};
// 引入jquery
document.write('<script src="' + Ocean.contextPath + '/ocean/jquery/jquery-3.5.1.min.js"></script>');
//定义Ocean前端框架主体
document.write('<script src="' + Ocean.contextPath + '/ocean/core/oceanRegister.js"></script>');
//引入工具类
document.write('<script src="' + Ocean.contextPath + '/ocean/util/valid.js"></script>');
// 引入用户配置
document.write('<script src="' + Ocean.contextPath + '/ocean/import/customConfig.js"></script>');
// 执行部件引入策略
document.write('<script src="' + Ocean.contextPath + '/ocean/import/baseImport.js"></script>');