class stopMonitoringRequest

  siriVersionAPI: null
  stopId: null
  destId: null
  operatorId: null
  start: null
  preview: null
  typeVisit: null
  maxStop: null
  minStLine: null
  onWard: null
  lineId: null
  requestorVersion: null
  requestorName:null

  requestTemplate: """<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header/>
  <S:Body>
    <ns7:GetStopMonitoring xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk">
      <ServiceRequestInfo>
        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>
        <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>
      </ServiceRequestInfo>
      <Request version="{{siriVersion}}">
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
				<ns2:MinimumStopVisitsPerLine>{{minStLine}}</ns2:MinimumStopVisitsPerLine>
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
        <ns7:StopPointsDiscovery xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk">
          <Request version="1.3">
            <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
            <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>
            <ns2:MessageIdentifier>Discovery:Test:0</ns2:MessageIdentifier>
          </Request>
          <RequestExtension/>
        </ns7:StopPointsDiscovery>
    </S:Body>
    </S:Envelope>"""

  lineDiscoveryTemplate: """
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <S:Body>
      <ns7:LinesDiscovery xmlns:ns2="http://www.siri.org.uk/siri"  xmlns:ns7="http://wsdl.siri.org.uk">
        <Request version="1.3">
          <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
          <ns2:RequestorRef>Siri-client</ns2:RequestorRef>
          <ns2:MessageIdentifier>Discovery:Test:2</ns2:MessageIdentifier>
        </Request>
        <RequestExtension/>
      </ns7:LinesDiscovery>
    </S:Body>
  </S:Envelope>"""

  generalMessageTemplate: """
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <S:Body>
      <ns7:GetGeneralMessage xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk">
        <ServiceRequestInfo>
          <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
          <ns2:RequestorRef>Siri-client</ns2:RequestorRef>
          <ns2:MessageIdentifier>GeneralMessage:Test:0</ns2:MessageIdentifier>
        </ServiceRequestInfo>
        <Request version="1.3">
          <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>
          <ns2:MessageIdentifier>GeneralMessage:Test:0</ns2:MessageIdentifier>
        </Request>
        <RequestExtension xmlns=""/>
      </ns7:GetGeneralMessage>
    </S:Body>
  </S:Envelope>
"""

  errorResponse: """<div class="alert alert-danger" role="alert">{{errorText}}</div>"""

  requestDate:() ->
    requestDate = new Date
    offset =   requestDate.getHours() - requestDate.getTimezoneOffset()/60
    requestDate.setHours(offset.toString())
    requestDate = requestDate.toISOString()
    requestDate

  startDate:() ->
    if @start
      requestDate = new Date
      [hours, minutes] = @start.split(':')
      offset = +hours - requestDate.getTimezoneOffset()/60
      requestDate.setHours(offset.toString())
      requestDate.setMinutes minutes
      requestDate = requestDate.toISOString()
    else
      requestDate = this.requestDate()

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
    "requestorVersion",
    "requestorName"]

    form = $(el)
    this.siriVersionAPI = form.find('input[name="siriVersionAPIOptions"]:checked').val()
    console.log(this.siriVersionAPI)
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
  siriVersion:() ->
    if @requestorVersion and @requestorName and @siriVersionAPI == "2.0"
      siriVersion = @siriVersionAPI + ":" + @requestorName + "-" + @requestorVersion
    else
      siriVersion = @siriVersionAPI

    siriVersion

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

  getGeneralMessage:() ->
    template = @generalMessageTemplate
    Mustache.parse template
    Mustache.render(template, this)

  handleStopMonitoringResponse: (xmlResponse, handler) ->
    nodes = xmlResponse.find('MonitoredStopVisit')

    for node in nodes
      handler.parseSiriResponse(node)
      handler.buildStopMonitoring()

  handleStopDiscoveryResponse: (xmlResponse, handler) ->
    nodes = xmlResponse.find('AnnotatedStopPointRef')
    handler.buildAutocompleteArray(nodes, "Stop")

  handleStopDiscoveryResponseDisplay: (xmlResponse, handler) ->
    nodes = xmlResponse.find('AnnotatedStopPointRef')
    for node in nodes
      handler.buildStopDiscoveryJSON(node)
      handler.buildStopDiscovery()

  handleLineDiscoveryResponseDisplay: (xmlResponse, handler) ->
    nodes = xmlResponse.find('AnnotatedLineRef')
    for node in nodes
      handler.buildLineDiscoveryJSON(node)
      handler.buildLineDiscovery(nodes, "Line")

  handleGeneralMessageResponse: (xmlResponse, handler) ->
    nodes = xmlResponse.find('GeneralMessage')
    if nodes.length > 0
      for node in nodes
        handler.buildGeneralMessageJSON(node)
        handler.buildGeneralMessage()
    else
      errorSpan = "<div class='alert alert-success' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + "Tout va bien"+ "</div>"
      $('.alert-wrapper').append errorSpan

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
        xmlText = new XMLSerializer().serializeToString(response)
        isError = xmlDoc.find('ErrorText')
        if isError.length > 0
          errorText = isError[0].innerHTML
          errorSpan = "<div class='alert alert-danger' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + errorText+ "</div>"
          $('.alert-wrapper').append errorSpan
        else
          $('#xml-response-wrapper').val(xmlText)
          responseHandler(xmlDoc, handler)
        return
      ).fail ->
      alert 'epic fail'
    return
