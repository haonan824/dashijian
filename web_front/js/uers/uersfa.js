var user = {
    denglu: function(userName, userPassword, fanhui) {
        $.post(urlhou.denglu, {
            user_name: userName,
            password: userPassword
        }, function(res) {
            fanhui(res);
        });
    },
    tuichu: function(fanhui) {
        $.post(urlhou.tuichu, function(res) {
            fanhui(res);
        });
    },
    yhxinxi: function(fanhui) {
        $.get(urlhou.yhxinxi, function(res) {
            fanhui(res)
        });
    }
}