var article = {
    show: function(fanhui) {
        $.get(urlhou.show, function(res) {
            fanhui(res)
        });
    },
};