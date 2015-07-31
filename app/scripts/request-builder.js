var REQUESTTEMPLATE = '<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">\
  <SOAP-ENV:Header/>\
  <S:Body>\
    <ns7:GetStopMonitoring xmlns:ns2="http://www.siri.org.uk/siri" xmlns:ns3="http://www.ifopt.org.uk/acsb" xmlns:ns4="http://www.ifopt.org.uk/ifopt" xmlns:ns5="http://datex2.eu/schema/2_0RC1/2_0" xmlns:ns6="http://scma/siri" xmlns:ns7="http://wsdl.siri.org.uk">\
      <ServiceRequestInfo>\
        <ns2:RequestTimestamp>{{Start}}</ns2:RequestTimestamp>\
        <ns2:RequestorRef>GVB:DRIS</ns2:RequestorRef>\
        <ns2:MessageIdentifier>StopMonitoring:Test:1</ns2:MessageIdentifier>\
      </ServiceRequestInfo>\
      <Request version="1.3">\
        <ns2:RequestTimestamp>{{Start}}</ns2:RequestTimestamp>\
        {{#Preview}}\
        	<ns2:PreviewInterval>{{Preview}}</ns2:PreviewInterval>\
        {{/Preview}}\
        {{#LineId}}\
        	<ns2:LineRef>{{LineId}}</ns2:LineRef>\
        {{/LineId}}\
		{{#DestId}}\
			<ns2:DestinationRef>{{DestId}}</ns2:DestinationRef>\
		{{/DestId}}\
		{{#TypeVisit}}\
			<ns2:StopVisitTypes>{{TypeVisit}}</ns2:StopVisitTypes>\
		{{/TypeVisit}}\
		{{#maxStop}}\
			<ns2:MaximumStopVisits>{{maxStop}}</ns2:MaximumStopVisits>\
		{{/maxStop}}\
		{{#MinStLine}}\
			<ns2:MaximumStopVisitsPerLine>{{MinStLine}}</ns2:MaximumStopVisitsPerLine>\
        {{/MinStLine}}\
        <ns2:MessageIdentifier>StopMonitoring:Test:0</ns2:MessageIdentifier>\
        {{#stopId}}\
        	<ns2:MonitoringRef>{{stopId}}</ns2:MonitoringRef>\
        {{/stopId}}\
        {{#onward}}\
        	<ns2:Onwards>{{onward}}</ns2:Onwards>\
      	{{/onward}}\
      </Request>\
      <RequestExtension/>\
    </ns7:GetStopMonitoring>\
  </S:Body>\
</S:Envelope>';

function stopDiscovery(opts) {
		var template = REQUESTTEMPLATE;
		Mustache.parse(template);
		var rendered = Mustache.render(template, opts);
		return rendered
}

(function () {
	var dataObject = {
		"StopId": "toto",
		"LineId": "tutu",
		"DestId": "tata",
		"OperatorId": "titi",
		"Start": "jean-claude",
		"Preview": "pingouin",
		"TypeVisit": "meow",
		"MaxStop": "graou",
		"MinStLine": "aloha",
		"OnWard": "bibibobo"
	};
	

	var result = stopDiscovery(dataObject);
	var parsedResult = jQuery.parseXML(result)
	console.log(parsedResult.getElementsByTagName('MonitoringRef'));
})()