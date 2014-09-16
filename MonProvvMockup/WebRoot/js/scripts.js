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
    
    $("#nuovo").click(function() {
    	window.location.href = "nuovo.html";
    });
    
    
    $('.table > tbody > tr').click(function() {
    	window.location.href = "dettaglio.html";
    });
    
});


