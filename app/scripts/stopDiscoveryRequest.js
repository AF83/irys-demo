// Generated by CoffeeScript 1.9.3
var stopDiscoveryRequest;

stopDiscoveryRequest = (function() {
  function stopDiscoveryRequest() {}

  stopDiscoveryRequest.prototype.stopId = null;

  stopDiscoveryRequest.prototype.lineId = null;

  stopDiscoveryRequest.prototype.destId = null;

  stopDiscoveryRequest.prototype.operatorId = null;

  stopDiscoveryRequest.prototype.start = null;

  stopDiscoveryRequest.prototype.preview = null;

  stopDiscoveryRequest.prototype.typeVisit = null;

  stopDiscoveryRequest.prototype.maxStop = null;

  stopDiscoveryRequest.prototype.minStLine = null;

  stopDiscoveryRequest.prototype.onWard = null;

  stopDiscoveryRequest.prototype.requestTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<SOAP-ENV:Header/>\n<S:Body>\n  <ns7:GetStopMonitoring xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n    <ServiceRequestInfo>\n      <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n      <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>\n      <ns2:MessageIdentifier>StopMonitoring:Test:1</ns2:MessageIdentifier>\n    </ServiceRequestInfo>\n    <Request version=\"1.3\">\n      <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n      <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>\n		    {{#preview}}\n      <ns2:PreviewInterval>{{preview}}</ns2:PreviewInterval>\n      {{/preview}}\n      <ns2:StartTime>{{startDate}}</ns2:StartTime>\n		    {{#stopId}}\n      <ns2:MonitoringRef>{{stopId}}</ns2:MonitoringRef>\n      {{/stopId}}\n      {{#lineId}}\n      <ns2:LineRef>{{lineId}}</ns2:LineRef>\n      {{/lineId}}\n				{{#destId}}\n				<ns2:DestinationRef>{{destId}}</ns2:DestinationRef>\n				{{/destId}}\n				{{#typeVisit}}\n				<ns2:StopVisitTypes>{{typeVisit}}</ns2:StopVisitTypes>\n				{{/typeVisit}}\n				{{#maxStop}}\n				<ns2:MaximumStopVisits>{{maxStop}}</ns2:MaximumStopVisits>\n				{{/maxStop}}\n				{{#minStLine}}\n				<ns2:MaximumStopVisitsPerLine>{{minStLine}}</ns2:MaximumStopVisitsPerLine>\n		    {{/minStLine}}\n      {{#onward}}\n        <ns2:MaximumNumberOfCalls>\n      		<ns2:Onwards>{{onward}}</ns2:Onwards>\n        </ns2:MaximumNumberOfCalls>\n    	{{/onward}}\n    </Request>\n    <RequestExtension/>\n  </ns7:GetStopMonitoring>\n</S:Body>\n</S:Envelope>";

  stopDiscoveryRequest.prototype.stopDiscoveryTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <S:Body>\n		<ns7:StopPointsDiscovery xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\"\">\n		  <ServiceRequestInfo>\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>\n        <ns2:MessageIdentifier>Discovery:Test:0/ns2:MessageIdentifier>\n      </ServiceRequestInfo>\n		  <Request version=\"1.3\" xmlns=\"\">\n		    <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n		    <ns2:RequestorRef>Siri-client</ns2:RequestorRef>\n		    <ns2:MessageIdentifier>Discovery:Test:0</ns2:MessageIdentifier>\n		  </Request>\n		  <RequestExtension xmlns=\"\"/>\n		</ns7:StopPointsDiscovery>\n</S:Body>\n</S:Envelope>";

  stopDiscoveryRequest.prototype.lineDiscoveryTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Header/>\n  <S:Body>\n		<ns7:LinesDiscovery xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\"\">\n		  <ServiceRequestInfo>\n        <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>\n        <ns2:MessageIdentifier>Discovery:Test:0/ns2:MessageIdentifier>\n      </ServiceRequestInfo>\n		  <Request version=\"1.3\" xmlns=\"\">\n		    <ns2:RequestTimestamp>{{requestDate}}</ns2:RequestTimestamp>\n		    <ns2:RequestorRef>Siri-client</ns2:RequestorRef>\n		    <ns2:MessageIdentifier>Discovery:Test:0</ns2:MessageIdentifier>\n		  </Request>\n		  <RequestExtension xmlns=\"\"/>\n		</ns7:LinesDiscovery>\n</S:Body>\n</S:Envelope>";

  stopDiscoveryRequest.prototype.errorResponse = "<div class=\"alert alert-danger\" role=\"alert\">{{errorText}}</div>";

  stopDiscoveryRequest.prototype.requestDate = function() {
    var requestDate;
    requestDate = new Date;
    requestDate = requestDate.toISOString();
    return requestDate;
  };

  stopDiscoveryRequest.prototype.startDate = function() {
    var hours, minutes, offset, ref, requestDate;
    requestDate = new Date;
    if (this.start) {
      ref = this.start.split(':'), hours = ref[0], minutes = ref[1];
      offset = +hours - requestDate.getTimezoneOffset() / 60;
      requestDate.setHours(offset.toString());
      requestDate.setMinutes(minutes);
    }
    requestDate = requestDate.toISOString();
    return requestDate;
  };

  stopDiscoveryRequest.prototype.parseForm = function(el) {
    var form, i, input, key, len, parseVariables, results;
    parseVariables = ["stopId", "lineId", "destId", "operatorId", "start", "preview", "typeVisit", "maxStop", "minStLine", "onward"];
    form = $(el);
    results = [];
    for (i = 0, len = parseVariables.length; i < len; i++) {
      key = parseVariables[i];
      input = form.find('#' + key);
      results.push(this[key] = input.val());
    }
    return results;
  };

  stopDiscoveryRequest.prototype.setStart = function() {
    var startHValue, startMValue;
    startHValue = parseInt(+this.preview / 60);
    startMValue = parseInt(+this.preview % 60);
    if (startHValue > 0 && startMValue > 0) {
      this.preview = "PT" + startHValue + "H" + startMValue + "M";
    } else if (startHValue > 0) {
      this.preview = "PT" + startHValue + "H";
    } else {
      this.preview = "PT" + startMValue + "M";
    }
  };

  stopDiscoveryRequest.prototype.getStopMonitoring = function(form) {
    var template;
    this.parseForm(form);
    if (this.preview) {
      this.setStart();
    }
    this;
    template = this.requestTemplate;
    Mustache.parse(template);
    return Mustache.render(template, this);
  };

  stopDiscoveryRequest.prototype.getStopDiscovery = function() {
    var template;
    template = this.stopDiscoveryTemplate;
    Mustache.parse(template);
    return Mustache.render(template, this);
  };

  stopDiscoveryRequest.prototype.getLineDiscovery = function() {
    var template;
    template = this.lineDiscoveryTemplate;
    Mustache.parse(template);
    return Mustache.render(template, this);
  };

  stopDiscoveryRequest.prototype.handleStopMonitoringResponse = function(xmlResponse, handler) {
    var i, len, node, nodes, results;
    nodes = xmlResponse.find('MonitoredStopVisit');
    results = [];
    for (i = 0, len = nodes.length; i < len; i++) {
      node = nodes[i];
      handler.parseSiriResponse(node);
      results.push(handler.buildStop());
    }
    return results;
  };

  stopDiscoveryRequest.prototype.sendRequest = function(xmlRequest, responseHandler, handler) {
    return $.ajax({
      method: 'POST',
      url: 'http://appli.chouette.mobi/irys_server',
      context: document.body,
      crossDomain: true,
      contentType: 'text/xml',
      dataType: 'xml',
      headers: {
        'version': '1.0',
        'encoding': 'UTF-8',
        'standalone': 'no'
      },
      data: xmlRequest
    }).done(function(response) {
      var errorSpan, errorText, isError, xmlDoc;
      xmlDoc = $(response);
      isError = xmlDoc.find('ErrorText');
      if (isError.length > 0) {
        errorText = isError[0].innerHTML;
        errorSpan = "<div class='alert alert-danger' role='alert'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + errorText + "</div>";
        $('.alert-wrapper').append(errorSpan);
      } else {
        responseHandler(xmlDoc, handler);
      }
    }).fail(function() {
      alert('epic fail');
    });
  };

  return stopDiscoveryRequest;

})();
