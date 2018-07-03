(function(){
    var ALERT_MSG   = {
        "generate_pw": "パスワードを初期化しました。\n新パスワードは AbcDef12$ です。",
        "change_pw": "パスワードを変更しました。"
    };
    var alert_list     = document.getElementsByClassName("js_alert")
        alert_list_len = alert_list.length,
        i              = 0
    ;

    for(i = 0; i < alert_list_len; i++){
        alert_list[i].addEventListener("click", function(){
            alert(ALERT_MSG[alert_list[i].getAttribute("data-alert")])
        });
    }
})();