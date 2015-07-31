describe("The request builder, function() {

  var dataObject = {
    "stopId": "toto",
    "lineId": "tutu",
    "destId": "tata",
    "operatorId": "titi",
    "start": "jean-claude",
    "preview": "pingouin",
    "typeVisit": "meow",
    "maxStop": "graou",
    "minStLine": "aloha",
    "onward": "bibibobo"
  };

  var builtRequest = jQuery.parseXML(stopDiscovery(dataObject));

  it("should output the right MonitoringRef", function() {

    expect(builtRequest.getElementsByTagName('MonitoringRef')[0].innerHTML).toBe(dataObject.StopId);
  });

  it("should output the right LineRef", function() {

    expect(builtRequest.getElementsByTagName('LineRef')[0].innerHTML).toBe(dataObject.LineId);
  });

  it("should output the right DestinationRef", function() {

    expect(builtRequest.getElementsByTagName('DestinationRef')[0].innerHTML).toBe(dataObject.DestId);
  });

  it("should output the right StopVisiteTypes", function() {

    expect(builtRequest.getElementsByTagName('StopVisitTypes')[0].innerHTML).toBe(dataObject.TypeVisit);
  });

  it("should output the right MaximumStopVisits", function() {

    expect(builtRequest.getElementsByTagName('MaximumStopVisits')[0].innerHTML).toBe(dataObject.MaxStop);
  });

  it("should output the right Onwards", function() {

    expect(builtRequest.getElementsByTagName('Onwards')[0].innerHTML).toBe(dataObject.Onward);
  });

  it("should output the right PreviewInterval", function() {

    expect(builtRequest.getElementsByTagName('PreviewInterval')[0].innerHTML).toBe(dataObject.Preview);
  });

  it("should output the right MaximumStopVisitsPerLine", function() {

    expect(builtRequest.getElementsByTagName('MaximumStopVisitsPerLine')[0].innerHTML).toBe(dataObject.MinStLine);
  });

  it("should output the right RequestTimestamp in header", function() {

    expect(builtRequest.getElementsByTagName('RequestTimestamp')[0].innerHTML).toBe(dataObject.Start);
  });

  it("should output the right RequestTimestamp in body", function() {

    expect(builtRequest.getElementsByTagName('RequestTimestamp')[1].innerHTML).toBe(dataObject.Start);
  });

});
