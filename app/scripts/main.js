// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');
	$(function() {
    var stopDSC = new stopDiscoveryRequest;
    var stopDscRequest = stopDSC.getStopDiscovery();
    var stopDSCResponse = new stopDiscoveryResponse;


    var availableStations = stopDSC.sendRequest(stopDscRequest, stopDSC.handleStopDiscoveryResponse, stopDSCResponse);
    var availableStations = stopDSCResponse.handleFallbackResponse();
    var stationsHash = stopDSCResponse.buildStopIdStopNameHash();

    $( "#stopName" ).autocomplete({
      minLength: 0,
      source: availableStations,
      focus: function( event, ui ) {
        $( "#stopName" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#stopName" ).val( ui.item.label );
        $( "#stopId" ).val( ui.item.id );

        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label + "</a>" )
        .appendTo( ul );
    };
    $( "#inputEndintgPoint" ).autocomplete({
      source: availableStations
    });
    $( "#inputDayDate" ).datepicker();
    $( "#Start" ).timepicker({
    	controlType: 'select'
    });
  });

});
