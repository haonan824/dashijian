var article_list = {
    show: function(fanhui) {
        $.get(urlhou.article_search, function(res) {
            fanhui(res);
        });
    },
    delete: function(id, fanhui) {
        $.get(urlhou.article_delete, { 'id': id },
            function(res) {
                fanhui(res);
            });
    },

}