$(document).ready(function() {
    $('.multiselect').multiselect({
            nonSelectedText: 'Tutti',
            numberDisplayed: 20
	});
    
    
    var btnRicAvDown = $("#btnRicAvDown");
    var btnRicAvUp = $("#btnRicAvUp");
    btnRicAvUp.hide();
    $('#ricercaAvanzata').on('hide', function () {
    	  btnRicAvDown.show();
    	  btnRicAvUp.hide();
    });
    
    $('#ricercaAvanzata').on('show', function () {
  	  btnRicAvDown.hide();
  	  btnRicAvUp.show();
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


