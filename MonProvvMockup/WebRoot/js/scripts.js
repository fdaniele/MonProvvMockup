$(document).ready(function() {
//    $('.multiselect').multiselect({
//            nonSelectedText: 'Tutti',
//            numberDisplayed: 20
//	});
    
    
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
    
    $("#indietro").click(function() {
    	window.history.back();
    });
    
    var risultatiRicerca = $("#risultatiRicerca");
    risultatiRicerca.hide();
    
    $("#ricerca").click(function() {
         risultatiRicerca.show();
    });
    
    $("#nuovo").click(function() {
    	window.location.href = "inserimento.html";
    });
    
    
//    $('.table > tbody > tr').click(function() {
//    	window.location.href = "dettaglio.html";
//    });
    
    //Inserimento Enti Assegnatari
    
    var assegnatarioDipTesoro = $("#assegnatarioDipTesoro");
    assegnatarioDipTesoro.hide();
    
    
    $("#insertEnte").click(function() {
    	//assegnatarioDipTesoro.show();
    	assegnatarioDipTesoro.fadeIn( 1000 );
    });
    
    $("#deleteEnte").click(function() {
    	//assegnatarioDipTesoro.show();
    	assegnatarioDipTesoro.fadeOut( 1000 );
    });    
});


