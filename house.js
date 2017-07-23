$(document).ready(function () {
    var link = "http://158.108.165.223/data/CEEDney"

    $('#light').click(function () {
        var message = console.log("1");
        $.ajax({
            url: link + "set/" + message
        }).done(function () {
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#air').click(function () {
        var message = console.log("2");
        $.ajax({
            url: link + "set/" + message
        }).done(function () {
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    $('#door').click(function () {
        var message = console.log("3");
        $.ajax({
            url: link + "set/" + message
        }).done(function () {
            console.log("Done");
        }).fail(function () {
            console.log("Failed");
        });
    });

    var num = "";
    setInterval(function(){
        $.ajax({
            url: link
        }).done(function(data){
            console.log($('#num').text(data))
            console.log($('#temp').text(data))
            $('#temp').val(data);
        }).fail(function(data){
            console.error("failed");
        });
    }, 1000*2);

});