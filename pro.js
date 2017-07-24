$(document).ready(function(){
    var link = "http://158.108.165.223/data/CEEDney/"

    setInterval(function () {
        $.ajax({
            url: link
        }).done(function (data) {
            var code = data.split("-")
            console.log($('#tem').text(code[0]));
        }).fail(function (data) {
            console.error("failed");
        });
    }, 1000 * 2);
});