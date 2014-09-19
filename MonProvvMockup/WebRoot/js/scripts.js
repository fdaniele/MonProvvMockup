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
    
    $('#modal').on('show', function () {
        $(this).find('.modal-body').css({
               width:'auto', //probably not needed
               height:'auto', //probably not needed 
               'max-height':'100%'
        });
    });
    
    $("#popoverNotifiche").popover({
    	placement : 'bottom', // top, bottom, left or right
    	title : 'Notifiche&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**', 
    	html: 'true', 
    	content : '<div id="popOverBox"><span>L\'utente Filippo Neri ha richiesto l\'assegnazione del provvedimento LP 1 per l\'organo Ragioneria Generale dello Stato</span><br><a href="richiestaassegnazione.html">Clicca qui</a> per gestire la richiesta<hr/><span>L\'utente Carlo Bianchi ha rifiutato l\'assegnazione del provvedimento LP 1 per l\'organo Dip.to Tesoro</span><br><a href="motivazionerifiuto.html">Clicca qui</a> per vedere la motivazione</div>'
    });
});


