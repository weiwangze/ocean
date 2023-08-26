Ocean.Define("Ocean.Util.Valid", function (page, $) {

    this.ready = function () {

    };

    /**
     * 判断是否为空
     */
    this.isNull = function (text) {
        return isNull(text);
    };

    /**
     * 判断字符是否在数组中
     */
    this.is = function (text, list, isCase) {
        return is(text, list, isCase);
    };

    /**
     * 判断当前字符是否在数组对象中存在
     */
    this.isExists = function (list, keyValues) {
        if (getListOne(list, keyValues) != null) {
            return true;
        }
        return false;
    };

    /**
     * 获取当前字符在数组对象中唯一的数据
     */
    this.getListOne = function (list, keyValues) {
        var result = getListMore(list, keyValues);
        if (result.length > 0) {
            return result[0];
        }
        return null;
    };

    /**
     * 获取当前字符在数组对象中唯一的数据
     */
    this.getListMore = function (list, keyValues) {
        return getListOne(list, keyValues);
    };

    function isNull(text) {
        if (text === undefined || text === null || text.trim().length == 0) {
            return true;
        }
        return false;
    }

    function is(text, list, isCase) {
        if (isNull(text)) {
            return false;
        }
        if (list && list.length == 0) {
            return false;
        }
        for (var i = 0; i < list.length; i++) {
            if (isCase) {
                if (text.toUpperCase() == list[i].toUpperCase()) {
                    return true;
                }
            } else {
                if (text == list[i]) {
                    return true;
                }
            }
        }
        return false;
    }

    function getListMore(list, keyValues) {
        var results = [];
        if (!list || list.length == 0 || !keyValues) {
            return results;
        }
        for (var i = 0; i < list.length; i++) {
            $.each(keyValues, function (key, value) {
                if (list[i][key] == value) {
                    results.push(list[i]);
                }
            });
        }
        return results;
    }

});