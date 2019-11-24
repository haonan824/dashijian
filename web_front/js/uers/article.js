var article_list = {
    show: function(fanhui) {
        $.get(urlhou.article_search, {
            state: '已发布',
            perpage: 5
        }, function(res) {
            fanhui(res);
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

}