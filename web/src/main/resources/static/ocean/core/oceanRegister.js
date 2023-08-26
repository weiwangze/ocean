// 初始配置
Ocean.config = {
    // 框架模块引入配置
    Import: {},
    // 日志配置定义
    Log: {},
    // 定义模块默认引入组件
    defineDefaultImport: ["Ocean.Util.Valid"],
    // 定义不引入默认组件的名单
    defineNoImport: ["Ocean.Util.Valid"]
};

// 统计信息,执行情况
Ocean.Statistics = {
    //加载模块信息
    ModulList: []
};

// 模块定义
Ocean.Define = function (name, backroll, imports) {

    if (!name || name.trim().length == 0) {
        return;
    }

    // 命名空间分割
    var nameList = name.split(".");
    var stepWindow = window;

    for (var i = 0; i < nameList.length; i++) {
        // 如果对象已经存在,则继续往下
        if (stepWindow[nameList[i]]) {
            stepWindow = stepWindow[nameList[i]];
            continue;
        } else {
            // 初始化
            stepWindow[nameList[i]] = {};
            stepWindow = stepWindow[nameList[i]];
        }
    }

    var stepCom = {};

    // 如果有传入组件
    var defineDefaultImport = Ocean.config.defineDefaultImport;
    if (defineDefaultImport && defineDefaultImport.length > 0) {
        if (imports && imports.length > 0) {
            imports.push(defineDefaultImport);
        } else {
            imports = defineDefaultImport;
        }
    }
    // 如果有引入组件
    if (imports && imports.length > 0) {
        var defineNoImport = Ocean.config.defineNoImport;
        for (var j = 0; j < imports.length; j++) {
            // 如果在不导入名单,则不处理
            if (defineNoImport && defineNoImport.length > 0 && defineNoImport.join(",").indexOf(name) > -1) {
                continue;
            }
            try {
                // 获取当前组件命名控件
                var stepImport = eval(imports[j]);
                if (stepImport) {
                    $.each(stepImport, function (index, obj) {
                        // 如果是初始化方法,则直接跳过
                        if (index && index == "ready") {
                            return;
                        }
                        // 如果有相同方法,直接跳过
                        if (stepCom[index] && typeof stepCom[index] === "function") {
                            return;
                        }
                        // 只引入function
                        if (obj && typeof obj === "function") {
                            stepCom[index] = obj;
                        }
                    });
                }
            } catch (e) {
                console.error("模块" + name + "引入组件" + imports[j] + "失败");
            }
        }
    }

    // 回调
    stepWindow["_selfCall"] = backroll;
    // 定义Ocean通用方法
    defineMethod(stepWindow);
    stepWindow._selfCall(stepWindow, $, stepCom);

    // 如果有Ready方法则初始化
    stepWindow.ready && stepWindow.ready();

    // 追加到已经初始化模块
    Ocean.Statistics.ModulList.push(name);

    console.info("初始化模块" + name + "成功");
};

// 开辟Ocean专属HTML空间(隐藏)
$("body").append('<div id="ocean_main" style="display:none;"><div>');

// 注册自定义方法
function defineMethod(obj) {
    // 获取配置
    obj.getConfig = function (configName, defaultValue) {
        // 判断配置是否为空
        if (configName && configName.trim().length > 0) {
            configName = configName.trim();
            // 如果带有命名空间,则视为访问全局配置,否则取本页面配置
            if (configName.indexOf(".") > -1) {
                var globalParams = eval(configName);
                if (globalParams) {
                    return globalParams;
                }
            } else {
                if (obj[configName]) {
                    return obj[configName];
                }
            }
        }

        // 如果没有找到配置,则返回默认值
        if (defaultValue) {
            return defaultValue;
        } else {
            return null;
        }

    };
}