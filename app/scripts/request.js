(function() {
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

    stopDiscoveryRequest.prototype.requestTemplate = "<S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<SOAP-ENV:Header/>\n<S:Body>\n  <ns7:GetStopMonitoring xmlns:ns2=\"http://www.siri.org.uk/siri\" xmlns:ns3=\"http://www.ifopt.org.uk/acsb\" xmlns:ns4=\"http://www.ifopt.org.uk/ifopt\" xmlns:ns5=\"http://datex2.eu/schema/2_0RC1/2_0\" xmlns:ns6=\"http://scma/siri\" xmlns:ns7=\"http://wsdl.siri.org.uk\">\n    <ServiceRequestInfo>\n      <ns2:RequestTimestamp>{{this.startDate()}}</ns2:RequestTimestamp>\n      <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>\n      <ns2:MessageIdentifier>StopMonitoring:Test:1</ns2:MessageIdentifier>\n    </ServiceRequestInfo>\n    <Request version=\"1.3\">\n      <ns2:RequestTimestamp>{{this.startDate()}}</ns2:RequestTimestamp>\n      {{#preview}}\n      	<ns2:PreviewInterval>{{preview}}</ns2:PreviewInterval>\n      {{/preview}}\n      {{#lineId}}\n      	<ns2:LineRef>{{lineId}}</ns2:LineRef>\n      {{/lineId}}\n		{{#destId}}\n			<ns2:DestinationRef>{{destId}}</ns2:DestinationRef>\n		{{/destId}}\n		{{#typeVisit}}\n			<ns2:StopVisitTypes>{{typeVisit}}</ns2:StopVisitTypes>\n		{{/typeVisit}}\n		{{#maxStop}}\n			<ns2:MaximumStopVisits>{{maxStop}}</ns2:MaximumStopVisits>\n		{{/maxStop}}\n		{{#minStLine}}\n			<ns2:MaximumStopVisitsPerLine>{{minStLine}}</ns2:MaximumStopVisitsPerLine>\n      {{/minStLine}}\n      <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>\n      {{#stopId}}\n      	<ns2:MonitoringRef>{{stopId}}</ns2:MonitoringRef>\n      {{/stopId}}\n      {{#onward}}\n        <ns2:MaximumNumberOfCalls>\n      	 <ns2:Onwards>{{onward}}</ns2:Onwards>\n        </ns2:MaximumNumberOfCalls>\n    	{{/Onward}}\n    </Request>\n    <RequestExtension/>\n  </ns7:GetStopMonitoring>\n</S:Body>\n</S:Envelope>";

    stopDiscoveryRequest.prototype.startDate = function() {
      var hours, minutes, ref, requestDate;
      requestDate = new Date;
      if (this.start) {
        ref = this.start.split(':'), hours = ref[0], minutes = ref[1];
        requestDate.setHours(hours);
        requestDate.setMinutes(minutes);
      }
      requestDate = requestDate.toISOString();
      return requestDate;
    };

    stopDiscoveryRequest.prototype.parseForm = function(el) {
      var form, i, input, key, len;
      form = $(el);
      for (i = 0, len = this.length; i < len; i++) {
        key = this[i];
        input = form.find('#' + key);
        this.key = input.val();
      }
      return this;
    };

    stopDiscoveryRequest.prototype.stopDiscovery = function() {
      var template;
      template = this.requestTemplate;
      Mustache.parse(template);
      return Mustache.render(template, this);
    };

    stopDiscoveryRequest.prototype.sendRequest = function() {
      var xmlRequest;
      this.parseForm('form');
      xmlRequest = this.stopDiscovery();
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
        var xmlDoc;
        xmlDoc = parseXML(response);
        console.log(response);
        alert(xmlDoc);
      }).fail(function() {
        alert('epic fail');
      });
    };

    return stopDiscoveryRequest;

  })();

}).call(this);
