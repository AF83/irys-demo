// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');
	$(function() {
    var stopDSC = new stopMonitoringRequest;
    var stopDscRequest = stopDSC.getStopDiscovery();
    var lineDscRequest = stopDSC.getLineDiscovery();
    var stopDSCResponse = new stopDiscoveryResponse;


    var availableStations;
    stopDSC.sendRequest(stopDscRequest, stopDSC.handleStopDiscoveryResponse, stopDSCResponse);

    stopDSC.sendRequest(lineDscRequest, stopDSC.handleLineDiscoveryResponse, stopDSCResponse);

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

  $('#siriVersionAPI3').on('click', function() {
    if ($('#requestorNameWrapper').hasClass('hidden')) {
      $('#requestorNameWrapper').removeClass('hidden');
    };

    if ($('#requestorVersionWrapper').hasClass('hidden')) {
      $('#requestorVersionWrapper').removeClass('hidden');
    };
  });

  $('#siriVersionAPI2, #siriVersionAPI1').on('click', function() {

    if ($('#requestorNameWrapper').hasClass('hidden') == false) {
      $('#requestorNameWrapper').addClass('hidden');
    };

    if ($('#requestorVersionWrapper').hasClass('hidden') == false) {
      $('#requestorVersionWrapper').addClass('hidden');
    };
  })
});
