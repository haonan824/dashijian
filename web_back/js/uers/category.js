var article = {
    show: function(fanhui) {
        $.get(urlhou.show, function(res) {
            fanhui(res)
        });
    },
    add: function(name, slug, fanhui) {
        $.post(urlhou.add, { name: name, slug: slug }, function(res) {
            fanhui(res);
        })
    },
    delete: function(id, fanhui) {
        $.post(urlhou.delete, { id: id }, function(res) {
            fanhui(res)
        })
    }
};