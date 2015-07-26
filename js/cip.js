$(document).ready(function() {

    //input
    $('input').floatlabel({
        labelEndTop: "2px",
        paddingOffset: "0px"
    });

    //select
    $('#address-group').hide();
    $('select').floatlabel({
        labelEndTop: "1px",
        paddingOffset: "0px"
    });
    $('#pAddress').on('change', function() {
        if ($(this).val() != "-1") return;
        $('#address-group').show();
        $('#address').hide();
    });

});