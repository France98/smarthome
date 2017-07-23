$(document).ready(function () {
    var link = "http://158.108.165.223/data/CEEDney"

    $('#light').click(function () {
        var open = console.log("1");
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#air').click(function () {
        var open = console.log("1");
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#door').click(function () {
        var open = console.log("1");
        $.ajax({
            url: link + "set/" + open
        }).done(function () {
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    setInterval(function(){
        $.ajax({
            url: link
        }).done(function(data){
            var code = data.split("-")

            console.log($('#num').text(code[3]))
            console.log($('#temp').text(code[4]))
            $('#temp').val(data);
        }).fail(function(data){
            console.error("failed");
        });
    }, 1000*2);

});