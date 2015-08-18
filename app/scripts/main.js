// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');
	$(function() {
    var stopDSC = new stopMonitoringRequest;
    var stopDscRequest = stopDSC.getStopDiscovery();
    var stopDSCResponse = new stopDiscoveryResponse;


    var availableStations = stopDSC.sendRequest(stopDscRequest, stopDSC.handleStopDiscoveryResponse, stopDSCResponse);
    var availableStations = stopDSCResponse.handleFallbackResponse("Stop");
    var availableLines = stopDSCResponse.handleFallbackResponse("Line");

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

    $( "#lineName" ).autocomplete({
      minLength: 0,
      source: availableLines,
      focus: function( event, ui ) {
        $( "#lineName" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#lineName" ).val( ui.item.label );
        $( "#lineId" ).val( ui.item.id );

        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label + "</a>" )
        .appendTo( ul );
    };

    $( "#lineName" ).on('focusout', function() {
      var regEx = /\d{8}/;

      if ( regEx.exec( $(this).val() ) ) {
        $( "#lineId" ).val("NINOXE:Line:SPOR:" + $(this).val() + ":LOC")
      }
    });

    $( "#inputEndintgPoint" ).autocomplete({
      source: availableStations
    });
    $( "#inputDayDate" ).datepicker();
    $( "#Start" ).timepicker({
    	controlType: 'select'
    });
  });
});
