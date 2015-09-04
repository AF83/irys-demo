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

  $('#siriVersionAPI3, #siriGeneralVersionAPI3').on('click', function() {
    var hiddenFields = []
    hiddenFields = $(this).parentsUntil('.form-horizontal').find('.hidden')
    hiddenFields.each(function(index, elt) {
      $(elt).removeClass('hidden');
    });
  });

  $('#siriVersionAPI2, #siriVersionAPI1, #siriGeneralVersionAPI2, #siriGeneralVersionAPI1').on('click', function() {

    var nodeName = $(this).parentsUntil('.form-horizontal').find('#requestorNameWrapper')
    var nodeVersion = $(this).parentsUntil('.form-horizontal').find('#requestorVersionWrapper')
    var hiddenArray = [nodeName, nodeVersion];

    if ($(this).prop('id') == "siriGeneralVersionAPI1" || $(this).prop('id') == "siriGeneralVersionAPI2") {
      var nodeDestinationRef =  $(this).parentsUntil('.form-horizontal').find('#destinationRefWrapper')
      var nodeGroupDestination = $(this).parentsUntil('.form-horizontal').find('#groupOfLinesRefWrapper')
      hiddenArray = hiddenArray.concat([nodeDestinationRef, nodeGroupDestination]);
    } else {
      var nodeMinimumStopVisitPerLine = $(this).parentsUntil('.form-horizontal').find('#minimumStopVisitPerLineViaWrapper')
      hiddenArray = hiddenArray.concat([nodeMinimumStopVisitPerLine]);
    };

    hiddenArray.forEach(function(elt) {
      if (elt.hasClass('hidden') == false) {
        elt.addClass('hidden');
      }
    });

  });
  function superToggle(el) {
    $(el).addClass('i-m-there');
    $(el).toggle();
  }

  $('.navbar-nav > li > ul > li > a').on('click', function() {
    var target = this.getAttribute('href');
    $('.i-m-there').each(function(index, el) {
      $(el).toggle();
      $(el).removeClass('i-m-there');
    });

    superToggle(target);

  });

  superToggle('#stop-monitoring');

});
