var article_list = {
    show: function(fanhui) {
        $.get(urlhou.article, function(res) {
            fanhui(res);
        });
    },

}