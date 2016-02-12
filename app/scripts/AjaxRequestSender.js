$('#stop-monitoring-form')
		.submit(
				function(e) {
					e.preventDefault();
					$("#response > .panel, #fancy-response .fancy-stop-wrapper")
							.remove()

					var regEx = /^\d{8}/;

					if (regEx.exec($('#stopName').val())) {
						$("#stopId").val(
								"NINOXE:StopPoint:SPOR:" + $('#stopName').val()
										+ ":LOC");
					} else if ($('#stopName').val() == "") {
						$("#stopId").val("");
					}

					if ($('#lineName').val() == "") {
						$("#lineId").val("");
					}

					var request = new stopMonitoringRequest;
					request.siriVersionAPI = $("#siri-server-value").attr(
							'data-version');
					request.requestorRef = $("#siri-server-value").attr(
							'data-requestor');
					var xmlRequest = request
							.getStopMonitoring('#stop-monitoring-form');
					var responseCard = new stopMonitoringCard;
					console.log(xmlRequest)
					request.sendRequest(xmlRequest,
							request.handleStopMonitoringResponse, responseCard,
							$('#stop-monitoring-form-wrapper'));
				});

$('#canned-requests').submit(
		function(e) {
			e.preventDefault();

			var regEx = /^\d{8}/;

			if (regEx.exec($('#stopName').val())) {
				$("#stopId").val(
						"NINOXE:StopPoint:SPOR:" + $('#stopName').val()
								+ ":LOC");
			} else if ($('#stopName').val() == "") {
				$("#stopId").val("");
			}

			if ($('#lineName').val() == "") {
				$("#lineId").val("");
			}

			$("#response > .panel, #fancy-response .fancy-stop-wrapper")
					.remove()
			var request = new stopMonitoringRequest;
			var node = $("#siri-server-value");
			request.siriVersionAPI = node.attr('data-version');
			request.requestorRef = node.attr('data-requestor');
			var responseCard = new stopMonitoringCard;
			var generalMessageRequest = request
					.getGeneralMessage('#canned-requests');
			request.sendRequest(generalMessageRequest,
					request.handleGeneralMessageResponse, responseCard,
					$('#get-general-message-form-wrapper'));
		});

$('#stop-discovery-button').on(
		'click',
		function(e) {
			$("#response > .panel, #fancy-response .fancy-stop-wrapper")
					.remove()
			var request = new stopMonitoringRequest;
			request.siriVersionAPI = $("#siri-server-value").attr(
					'data-version');
			request.requestorRef = $("#siri-server-value").attr(
					'data-requestor');
			var responseCard = new stopMonitoringCard;
			var stopDscRequest = request.getStopDiscovery();
			request.sendRequest(stopDscRequest,
					request.handleStopDiscoveryResponseDisplay, responseCard,
					$('#service-discovery-form-wrapper'));
		});

$('#check-status-button').on(
		'click',
		function(e) {
			$("#response > .panel, #fancy-response .fancy-stop-wrapper")
					.remove()
			var request = new stopMonitoringRequest;
			request.siriVersionAPI = $("#siri-server-value").attr(
					'data-version');
			request.requestorRef = $("#siri-server-value").attr(
					'data-requestor');
			var responseCard = new stopMonitoringCard;
			var checkStatusRequest = request.getCheckStatus();
			request.sendRequest(checkStatusRequest,
					request.handleCheckStatusResponse, responseCard,
					$('#check-status-form-wrapper'));
		});

$('#line-discovery-button').on(
		'click',
		function(e) {
			$("#response > .panel, #fancy-response > fancy-stop-wrapper")
					.remove()
			var request = new stopMonitoringRequest;
			request.siriVersionAPI = $("#siri-server-value").attr(
					'data-version');
			request.requestorRef = $("#siri-server-value").attr(
					'data-requestor');
			var responseCard = new stopMonitoringCard;
			var lineDscRequest = request.getLineDiscovery();
			request.sendRequest(lineDscRequest,
					request.handleLineDiscoveryResponseDisplay, responseCard,
					$('#service-discovery-form-wrapper'));
		});

$('#smart-request-form').submit(
		function(e) {
			e.preventDefault();
			$("#response > .panel, #fancy-response > fancy-stop-wrapper")
					.remove();

			var dataForRequest = $("#xml-request-textarea").val();
			var request = new stopMonitoringRequest;
			var responseCard = new stopMonitoringCard;

			request.sendRequest(dataForRequest,
					request.handleStopMonitoringResponse, responseCard,
					$('#stop-monitoring-xml-form-wrapper'));
		});
