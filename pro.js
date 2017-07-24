$(document).ready(function(){
    var link = "http://158.108.165.223/data/CEEDney/"

    $('#fan').click(function () {
        var open = "";
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log(open)
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#lang').click(function () {
        var open = "";
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log(open)
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#water').click(function () {
        var open = "1";
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log(open)
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    setInterval(function () {
        $.ajax({
            url: link
        }).done(function (data) {
            var code = data.split("-")
            console.log($('#tem').text(code[0]));
            console.log($('#light').text(code[1]));
            console.log($('#tank').text(code[2]));
            console.log($('#moist').text(code[3]));
            if(code[4] === 1){
                console.log($('#servo').text("Open"));
            }else{
                console.log($('#servo').text("Close"));
            }
        }).fail(function (data) {
            console.error("failed");
        });
    }, 1000 * 2);
});