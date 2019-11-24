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
    },
    month_article_count: function(fanhui) {
        $.get(urlhou.month_article_count, function(res) {
            fanhui(res);
        })
    },
    article_category_count: function(fanhui) {
        $.get(urlhou.article_category_count, function(res) {
            fanhui(res);
        })
    },
    article_category_visit: function(fanhui) {
        $.get(urlhou.article_category_visit, function(res) {
            fanhui(res);
        })
    },
    article_count: function(fanhui) {
        $.get(urlhou.article_count, function(res) {
            fanhui(res)
        })
    },
    comment_count: function(fanhui) {
        $.get(urlhou.comment_count, function(res) {
            fanhui(res)
        })
    }

}