class stopDiscoveryRequest

	stopId: null
	lineId: null
	destId: null
	operatorId: null
	start: null
	preview: null
	typeVisit: null
	maxStop: null
	minStLine: null
	onWard: null
	requestTemplate: """<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header/>
  <S:Body>
    <ns7:GetStopMonitoring xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk">
      <ServiceRequestInfo>
        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>
        <ns2:MessageIdentifier>StopMonitoring:Test:1</ns2:MessageIdentifier>
      </ServiceRequestInfo>
      <Request version="1.3">
        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
        <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>
		    {{#preview}}
        <ns2:PreviewInterval>{{preview}}</ns2:PreviewInterval>
        {{/preview}}
        <ns2:StartTime>{{startDate}}</ns2:StartTime>
		    {{#stopId}}
        <ns2:MonitoringRef>{{stopId}}</ns2:MonitoringRef>
        {{/stopId}}
        {{#lineId}}
        <ns2:LineRef>{{lineId}}</ns2:LineRef>
        {{/lineId}}
				{{#destId}}
				<ns2:DestinationRef>{{destId}}</ns2:DestinationRef>
				{{/destId}}
				{{#typeVisit}}
				<ns2:StopVisitTypes>{{typeVisit}}</ns2:StopVisitTypes>
				{{/typeVisit}}
				{{#maxStop}}
				<ns2:MaximumStopVisits>{{maxStop}}</ns2:MaximumStopVisits>
				{{/maxStop}}
				{{#minStLine}}
				<ns2:MaximumStopVisitsPerLine>{{minStLine}}</ns2:MaximumStopVisitsPerLine>
		    {{/minStLine}}
        {{#onward}}
          <ns2:MaximumNumberOfCalls>
        		<ns2:Onwards>{{onward}}</ns2:Onwards>
          </ns2:MaximumNumberOfCalls>
      	{{/onward}}
      </Request>
      <RequestExtension/>
    </ns7:GetStopMonitoring>
  </S:Body>
</S:Envelope>"""

	stopDiscoveryTemplate: """
	<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	  <SOAP-ENV:Header/>
	  <S:Body>
			<ns7:StopPointsDiscovery xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk"">
			  <ServiceRequestInfo>
	        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
	        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>
	        <ns2:MessageIdentifier>Discovery:Test:0/ns2:MessageIdentifier>
	      </ServiceRequestInfo>
			  <Request version="1.3" xmlns="">
			    <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
			    <ns2:RequestorRef>Siri-client</ns2:RequestorRef>
			    <ns2:MessageIdentifier>Discovery:Test:0</ns2:MessageIdentifier>
			  </Request>
			  <RequestExtension xmlns=""/>
			</ns7:StopPointsDiscovery>
	</S:Body>
	</S:Envelope>"""

	lineDiscoveryTemplate: """
	<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	  <SOAP-ENV:Header/>
	  <S:Body>
			<ns7:LinesDiscovery xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk"">
			  <ServiceRequestInfo>
	        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
	        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>
	        <ns2:MessageIdentifier>Discovery:Test:0/ns2:MessageIdentifier>
	      </ServiceRequestInfo>
			  <Request version="1.3" xmlns="">
			    <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
			    <ns2:RequestorRef>Siri-client</ns2:RequestorRef>
			    <ns2:MessageIdentifier>Discovery:Test:0</ns2:MessageIdentifier>
			  </Request>
			  <RequestExtension xmlns=""/>
			</ns7:LinesDiscovery>
	</S:Body>
	</S:Envelope>"""

	errorResponse: """<div class="alert alert-danger" role="alert">{{errorText}}</div>"""

	requestDate:() ->
		requestDate = new Date
		requestDate = requestDate.toISOString()
		requestDate

	startDate:() ->
		requestDate = new Date
		if @start
			[hours, minutes] = @start.split(':')
			offset = +hours - requestDate.getTimezoneOffset()/60
			requestDate.setHours(offset.toString())
			requestDate.setMinutes minutes
		requestDate = requestDate.toISOString()
		requestDate


	parseForm: (el) ->
		parseVariables = ["stopId",
    "lineId",
    "destId",
    "operatorId",
    "start",
    "preview",
    "typeVisit",
    "maxStop",
    "minStLine",
    "onward",
  ]
		form = $(el)

		for key in parseVariables
			input = form.find('#' + key)
			this[key] = input.val()



	setStart:() ->
		startHValue =	parseInt(+@preview/60)
		startMValue = parseInt(+@preview % 60)

		if startHValue > 0 && startMValue > 0
			@preview = "PT" + startHValue + "H" + startMValue + "M"
		else if startHValue > 0
			@preview = "PT" + startHValue + "H"
		else
			@preview = "PT" + startMValue + "M"

		return

	getStopMonitoring:(form) ->
		this.parseForm(form)
		if @preview
		 	this.setStart()
		this
		template = @requestTemplate
		Mustache.parse template
		Mustache.render(template, this)

	getStopDiscovery:() ->
		template = @stopDiscoveryTemplate
		Mustache.parse template
		Mustache.render(template, this)

	getLineDiscovery:() ->
		template = @lineDiscoveryTemplate
		Mustache.parse template
		Mustache.render(template, this)

	handleStopMonitoringResponse: (xmlResponse, handler) ->
    nodes = xmlResponse.find('MonitoredStopVisit')

    for node in nodes
      handler.parseSiriResponse(node)
      handler.buildStop()

	sendRequest:(xmlRequest, responseHandler, handler) ->
		$.ajax(
		  method: 'POST'
		  url: 'http://appli.chouette.mobi/irys_server'
		  context: document.body
		  crossDomain: true
		  contentType: 'text/xml'
		  dataType: 'xml'
		  headers:
		    'version': '1.0'
		    'encoding': 'UTF-8'
		    'standalone': 'no'
		  data: xmlRequest).done((response) ->
		  	xmlDoc = $(response)
		  	isError = xmlDoc.find('ErrorText')
		  	if isError.length > 0
		  		errorText = isError[0].innerHTML
		  		errorSpan = "<div class='alert alert-danger' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + errorText+ "</div>"
		  		$('.alert-wrapper').append errorSpan
		  	else
		  		responseHandler(xmlDoc, handler)
		  	return
		).fail ->
		  alert 'epic fail'
		  return
