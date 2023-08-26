Ocean.Define("Ocean.Util.Sequence", function (page, $, $I) {

    this.names = {};

    this.ready = function () {

    };

    // 通过类型获取下一个序列
    this.next = function (name) {
        if ($I.isNull(name)) {
            $I.print("序列为空", "e");
            return;
        }
        if (names[name] && names[name] > -1) {
            names[name] = (names[name] + 1);
        } else {
            names.push(name, 0);
        }
        return name + (names[name]);
    };


}, ["Ocean.Util.Valid", "Ocean.Logs"]);