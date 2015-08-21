	$('#stop-monitoring').submit(function(e) {
		e.preventDefault();
    $("#response > .panel").remove()

    var regEx = /\d{8}/;

    if ( regEx.exec( $('#stopName').val() ) ) {
      $( "#stopId" ).val("NINOXE:StopPoint:SPOR:" + $(this).val() + ":LOC")
    }

    var request = new stopMonitoringRequest;
    var xmlRequest = request.getStopMonitoring('form');
    var responseCard = new stopMonitoringCard;
    console.log(xmlRequest)
    request.sendRequest(xmlRequest, request.handleStopMonitoringResponse, responseCard);
	});

  $('#get-general-message').on('click', function(e) {
    $("#response > .panel").remove()
    var request = new stopMonitoringRequest;
    var responseCard = new stopMonitoringCard;
    var generalMessageRequest = request.getGeneralMessage();
    request.sendRequest(generalMessageRequest, request.handleGeneralMessageResponse, responseCard);
  });

  $('#stop-discovery').on('click', function(e) {
    $("#response > .panel").remove()
    var request = new stopMonitoringRequest;
    var responseCard = new stopMonitoringCard;
    var stopDscRequest = request.getStopDiscovery();
    request.sendRequest(stopDscRequest, request.handleStopDiscoveryResponseDisplay, responseCard);
  });

  $('#line-discovery').on('click', function(e) {
    $("#response > .panel").remove()
    var request = new stopMonitoringRequest;
    var responseCard = new stopMonitoringCard;
    var lineDscRequest = request.getLineDiscovery();
    request.sendRequest(lineDscRequest, request.handleLineDiscoveryResponseDisplay, responseCard);
  });

  $('#smart-request-form').submit(function(e) {
    e.preventDefault();
    $("#response > .panel").remove();

    var dataForRequest = $("#xml-request-textarea").val();

    var request = new stopMonitoringRequest;

    var responseCard = new stopMonitoringCard;

    request.sendRequest(dataForRequest, request.handleStopMonitoringResponse, responseCard);
  });
