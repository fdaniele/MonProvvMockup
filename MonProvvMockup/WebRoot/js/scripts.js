$(document).ready(function() {
    $('.multiselect').multiselect({
            nonSelectedText: 'Tutti',
            numberDisplayed: 20
	});
    
    
    $("#annulla").click(function() {
        location.reload();
    });
    
    
    var risultatiRicerca = $("#risultatiRicerca");
    risultatiRicerca.hide();
    
    $("#ricerca").click(function() {
         risultatiRicerca.show();
    });
});


