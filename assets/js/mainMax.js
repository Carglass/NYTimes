$(document).ready(function(){
    $(document).on('click','#submit',function(event){
        event.preventDefault();
        let searchObj = {
            searchTerm: $('#name').val(),
            startYear: $('#records').val(),
            endYear: $('#start-year').val(),
            numberOfArticles: $('#end-year').val(),
        };

        
    });
});