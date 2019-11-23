var article_list = {
    show: function(odj, fanhui) {
        $.get(urlhou.article_search, {
            page: odj.page,
            type: odj.type,
            state: odj.status,
            id: odj.id,
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
    add: function(fd, fanhui) {
        $.ajax({
            url: urlhou.article_publish,
            type: 'post',
            processData: false,
            contentType: false,
            data: fd,
            success: function(res) {
                fanhui(res)
            }
        });
    },
    edit: function(fd, fanhui) {
        $.ajax({
            url: urlhou.article_edit,
            type: 'post',
            processData: false,
            contentType: false,
            data: fd,
            success: function(res) {
                fanhui(res)
            }
        });
    }

}