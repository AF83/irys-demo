	$('#stop-discovery').submit(function(e) {
		e.preventDefault();
    $("#response > .panel").remove()
		var dataForRequest = getStopDiscoveryData('form', STOPDISCOVERYDATA);
		var xmlRequest = stopDiscovery(dataForRequest);

    var pingu = new stopDiscoveryRequest;
    var xmlRequest = pingu.getStopMonitoring('form');
    var chimp = new stopMonitoringCard;

    pingu.sendRequest(xmlRequest, pingu.handleStopMonitoringResponse, chimp);
	});

  $('#smart-request-form').submit(function(e) {
    e.preventDefault();
    $("#response > .panel").remove()
    var dataForRequest = $("#xml-request-textarea").val();

    var pingu = new stopDiscoveryRequest;

    var chimp = new stopMonitoringCard;

    pingu.sendRequest(dataForRequest, pingu.handleStopMonitoringResponse, chimp);
  });
