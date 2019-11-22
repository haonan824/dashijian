var article_list = {
    show: function(odj, fanhui) {
        $.get(urlhou.article_search, {
            page: odj.page,
            type: odj.type,
            state: odj.status
        }, function(res) {
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