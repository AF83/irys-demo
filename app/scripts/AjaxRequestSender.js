	$('#stop-discovery').submit(function(e) {
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
    var request = new stopMonitoringRequest;
    var responseCard = new stopMonitoringCard;
    var generalMessageRequest = request.getGeneralMessage();
    request.sendRequest(generalMessageRequest, request.handleGeneralMessageResponse, responseCard);
  });

  $('#smart-request-form').submit(function(e) {
    e.preventDefault();
    $("#response > .panel").remove();

    var dataForRequest = $("#xml-request-textarea").val();

    var request = new stopMonitoringRequest;

    var responseCard = new stopMonitoringCard;

    request.sendRequest(dataForRequest, request.handleStopMonitoringResponse, responseCard);
  });
