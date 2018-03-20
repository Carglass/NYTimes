$(document).ready(function() {
    
    function resetForm(){
        $("#name").val("");
        $("#records").val("");
        $("#start-year").val("");
        $("#end-year").val("");
        $(".js-top-articles").val("");
    };

    $("#reset-button").on('click', function(event){
        event.preventDefault();
        resetForm();
    });
});
