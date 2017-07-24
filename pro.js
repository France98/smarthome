$(document).ready(function () {
    var link = "http://158.108.165.223/data/CEEDney/"
    $('#progress').hide();

    $('#def').mousedown(function () {
        $('#progress').show();
    });
    $('#def').mouseup(function () {
        $('#progress').hide();
    });


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
            console.log($('#moist').text(code[3]));
            var distance = code[2] / 29.1 / 2; //centimeter
            var volume = (Math.PI * Math.pow(3, 2)) * 22.5
            if (code[4] === 1) {
                console.log($('#servo').text("Open"));
            } else {
                console.log($('#servo').text("Close"));
            }
            if (code[3] >= 25 && code[3] <= 34) {
                console.log($('#talk').text("สบายจังเลย"));
            } else {
                console.log($('#talk').text("ไม่สบายแล้วนะ"));
            }
            if (distance === 0) {
                console.log($('#tank').text("Full"));
            } else if (distance >= 15) {
                console.log($('#talk').text("น้ำน้อยแล้วนะจ้ะ"));
                console.log($('#tank').text(volume));
            } else {
                console.log($('#talk').text("ยังมีน้ำในถังนะ"));
                console.log($('#tank').text(volume));
            }
        }).fail(function (data) {
            console.error("failed");
        });
    }, 1000 * 2);
});