$(document).ready(function(){
    $(document).on('click','#submit',function(event){
        event.preventDefault();
        let searchObj = {
            searchTerm: $(''),
            startYear: '',
            endYear: '',
            numberOfArticles: '',
        };

        $.getJSON();
    });
});