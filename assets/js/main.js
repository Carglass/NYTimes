$(document).ready(function() {
    function resetForm {
        $("#name").empty();
        $("#records").empty();
        $("#start-year").empty();
        $("#end-year").empty();
        $(".js-top-articles").empty();
    };

    $("#reset-button").on('click', function(){
        resetForm();
    });
});
