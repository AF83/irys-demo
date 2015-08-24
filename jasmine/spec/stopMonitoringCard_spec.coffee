describe "response card test", ->
  siriResponse= """
  <SOAP-ENV:Envelope
    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header/>
    <SOAP-ENV:Body>
        <wsdl:GetStopMonitoringResponse
            xmlns:wsdl="http://wsdl.siri.org.uk">
            <ServiceDeliveryInfo>
                <siri:ResponseTimestamp
                    xmlns:siri="http://www.siri.org.uk/siri">2015-07-28T16:17:14.844+02:00
                </siri:ResponseTimestamp>
                <siri:ProducerRef
                    xmlns:siri="http://www.siri.org.uk/siri">DRYADE
                </siri:ProducerRef>
                <siri:Address
                    xmlns:siri="http://www.siri.org.uk/siri">http://chouette.cityway.fr/irys_server
                </siri:Address>
                <siri:ResponseMessageIdentifier
                    xmlns:siri="http://www.siri.org.uk/siri">DRYADE:StopMonitoring:48:LOC
                </siri:ResponseMessageIdentifier>
                <siri:RequestMessageRef
                    xmlns:siri="http://www.siri.org.uk/siri">StopMonitoring:Test:1
                </siri:RequestMessageRef>
            </ServiceDeliveryInfo>
            <Answer>
                <siri:StopMonitoringDelivery
                    xmlns:siri="http://www.siri.org.uk/siri" version="1.3">
                    <siri:ResponseTimestamp>2015-07-28T16:17:13.513+02:00</siri:ResponseTimestamp>
                    <siri:Status>true</siri:Status>
                    <siri:MonitoredStopVisit>
                        <siri:RecordedAtTime>2015-07-28T03:00:17.173+02:00</siri:RecordedAtTime>
                        <siri:ItemIdentifier>NINOXE:StopPoint:15574372-NINOXE:VehicleJourney:15574468</siri:ItemIdentifier>
                        <siri:MonitoringRef>NINOXE:StopPoint:SP:15575499:LOC</siri:MonitoringRef>
                        <siri:MonitoredVehicleJourney>
                            <siri:LineRef>NINOXE:Line:15574334:LOC</siri:LineRef>
                            <siri:FramedVehicleJourneyRef>
                                <siri:DataFrameRef>Tatrobus:2010-02-17</siri:DataFrameRef>
                                <siri:DatedVehicleJourneyRef>NINOXE:VehicleJourney:15574468:LOC</siri:DatedVehicleJourneyRef>
                            </siri:FramedVehicleJourneyRef>
                            <siri:JourneyPatternRef>NINOXE:JourneyPattern:15574388:LOC</siri:JourneyPatternRef>
                            <siri:VehicleMode>bus</siri:VehicleMode>
                            <siri:RouteRef>NINOXE:Route:15574337:LOC</siri:RouteRef>
                            <siri:PublishedLineName xml:lang="FR">Ligne 1 Bleue</siri:PublishedLineName>
                            <siri:DirectionName xml:lang="FR">Mairie-1 (R)</siri:DirectionName>
                            <siri:OperatorRef>NINOXE:Company:13689687:LOC</siri:OperatorRef>
                            <siri:OriginRef>NINOXE:StopPoint:BP:15574348:LOC</siri:OriginRef>
                            <siri:OriginName xml:lang="FR">Le Bucoliques (R)</siri:OriginName>
                            <siri:DestinationRef>NINOXE:StopPoint:BP:15574356:LOC</siri:DestinationRef>
                            <siri:DestinationName xml:lang="FR">Mairie-1 (R)</siri:DestinationName>
                            <siri:OriginAimedDepartureTime>2015-07-28T16:33:00.000+02:00</siri:OriginAimedDepartureTime>
                            <siri:DestinationAimedArrivalTime>2015-07-28T18:18:00.000+02:00</siri:DestinationAimedArrivalTime>
                            <siri:Monitored>false</siri:Monitored>
                            <siri:MonitoredCall>
                                <siri:StopPointRef>NINOXE:StopPoint:BP:15574348:LOC</siri:StopPointRef>
                                <siri:Order>1</siri:Order>
                                <siri:StopPointName xml:lang="FR">Le Bucoliques (R)</siri:StopPointName>
                                <siri:VehicleAtStop>false</siri:VehicleAtStop>
                                <siri:PlatformTraversal>false</siri:PlatformTraversal>
                                <siri:DestinationDisplay xml:lang="FR">Mairie-1 (R)</siri:DestinationDisplay>
                                <siri:AimedArrivalTime>2015-07-28T16:33:00.000+02:00</siri:AimedArrivalTime>
                                <siri:ExpectedArrivalTime>2015-07-28T16:32:45.000+02:00</siri:ExpectedArrivalTime>
                                <siri:ArrivalStatus>onTime</siri:ArrivalStatus>
                                <siri:AimedDepartureTime>2015-07-28T16:35:00.000+02:00</siri:AimedDepartureTime>
                                <siri:ExpectedDepartureTime>2015-07-28T16:34:45.000+02:00</siri:ExpectedDepartureTime>
                                <siri:DepartureStatus>onTime</siri:DepartureStatus>
                            </siri:MonitoredCall>
                            <siri:OnwardCalls>
                                <siri:OnwardCall>
                                    <siri:StopPointRef>NINOXE:StopPoint:BP:15574349:LOC</siri:StopPointRef>
                                    <siri:Order>2</siri:Order>
                                    <siri:StopPointName xml:lang="FR">Orques et Trolls (R)</siri:StopPointName>
                                    <siri:VehicleAtStop>false</siri:VehicleAtStop>
                                    <siri:AimedArrivalTime>2015-07-28T16:48:00.000+02:00</siri:AimedArrivalTime>
                                    <siri:ExpectedArrivalTime>2015-07-28T16:47:45.000+02:00</siri:ExpectedArrivalTime>
                                    <siri:ArrivalStatus>onTime</siri:ArrivalStatus>
                                    <siri:AimedDepartureTime>2015-07-28T16:50:00.000+02:00</siri:AimedDepartureTime>
                                    <siri:ExpectedDepartureTime>2015-07-28T16:49:45.000+02:00</siri:ExpectedDepartureTime>
                                    <siri:DepartureStatus>onTime</siri:DepartureStatus>
                                </siri:OnwardCall>
                                <siri:OnwardCall>
                                    <siri:StopPointRef>NINOXE:StopPoint:BP:15574350:LOC</siri:StopPointRef>
                                    <siri:Order>3</siri:Order>
                                    <siri:StopPointName xml:lang="FR">Bill Boquet (R)</siri:StopPointName>
                                    <siri:VehicleAtStop>false</siri:VehicleAtStop>
                                    <siri:AimedArrivalTime>2015-07-28T17:03:00.000+02:00</siri:AimedArrivalTime>
                                    <siri:ExpectedArrivalTime>2015-07-28T17:02:45.000+02:00</siri:ExpectedArrivalTime>
                                    <siri:ArrivalStatus>onTime</siri:ArrivalStatus>
                                    <siri:AimedDepartureTime>2015-07-28T17:05:00.000+02:00</siri:AimedDepartureTime>
                                    <siri:ExpectedDepartureTime>2015-07-28T17:04:45.000+02:00</siri:ExpectedDepartureTime>
                                    <siri:DepartureStatus>onTime</siri:DepartureStatus>
                                </siri:OnwardCall>
                            </siri:OnwardCalls>
                        </siri:MonitoredVehicleJourney>
                    </siri:MonitoredStopVisit>
                  </siri:StopMonitoringDelivery>
            </Answer>
            <AnswerExtension/>
        </wsdl:GetStopMonitoringResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>"""

  generalMessageResponse = """<?xml version="1.0" encoding="UTF-8"?>
<wsdl:GetGeneralMessageResponse xmlns:wsdl="http://wsdl.siri.org.uk">
  <ServiceDeliveryInfo>
    <siri:ResponseTimestamp xmlns:siri="http://www.siri.org.uk/siri">2015-08-18T15:57:51.896+02:00</siri:ResponseTimestamp>
    <siri:ProducerRef xmlns:siri="http://www.siri.org.uk/siri">DRYADE</siri:ProducerRef>
    <siri:Address xmlns:siri="http://www.siri.org.uk/siri">http://chouette.cityway.fr/irys_server</siri:Address>
    <siri:ResponseMessageIdentifier xmlns:siri="http://www.siri.org.uk/siri">DRYADE:GeneralMessage:505:LOC</siri:ResponseMessageIdentifier>
    <siri:RequestMessageRef xmlns:siri="http://www.siri.org.uk/siri">GeneralMessage:Test:0</siri:RequestMessageRef>
  </ServiceDeliveryInfo>
  <Answer>
    <siri:GeneralMessageDelivery version="1.3" xmlns:siri="http://www.siri.org.uk/siri">
      <siri:ResponseTimestamp>2015-08-18T15:57:51.896+02:00</siri:ResponseTimestamp>
      <siri:Status>true</siri:Status>
      <siri:GeneralMessage formatRef="STIF-IDF">
        <siri:RecordedAtTime>2015-08-18T03:00:29.862+02:00</siri:RecordedAtTime>
        <siri:ItemIdentifier>6824</siri:ItemIdentifier>
        <siri:InfoMessageIdentifier>NINOXE:GeneralMessage:20150818_6</siri:InfoMessageIdentifier>
        <siri:InfoMessageVersion>1</siri:InfoMessageVersion>
        <siri:InfoChannelRef>Perturbation</siri:InfoChannelRef>
        <siri:ValidUntilTime>2015-08-18T17:18:29.862+02:00</siri:ValidUntilTime>
        <siri:Content xsi:type="siri:IDFGeneralMessageStructure" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
          <siri:Message>
            <siri:MessageType>longMessage</siri:MessageType>
            <siri:MessageText xml:lang="FR">Manifestation au centre ville, prévoir des perturbations sur les lignes de bus</siri:MessageText>
          </siri:Message>
        </siri:Content>
      </siri:GeneralMessage>
    </siri:GeneralMessageDelivery>
  </Answer>
  <AnswerExtension/>
</wsdl:GetGeneralMessageResponse>"""

  siriGeneralMessageResponseForHTML = """<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Header/><SOAP-ENV:Body><wsdl:GetGeneralMessageResponse xmlns:wsdl="http://wsdl.siri.org.uk"><ServiceDeliveryInfo><siri:ResponseTimestamp xmlns:siri="http://www.siri.org.uk/siri">2015-08-24T14:38:10.661+02:00</siri:ResponseTimestamp><siri:ProducerRef xmlns:siri="http://www.siri.org.uk/siri">DRYADE</siri:ProducerRef><siri:Address xmlns:siri="http://www.siri.org.uk/siri">http://chouette.cityway.fr/irys_server</siri:Address><siri:ResponseMessageIdentifier xmlns:siri="http://www.siri.org.uk/siri">DRYADE:GeneralMessage:834:LOC</siri:ResponseMessageIdentifier><siri:RequestMessageRef xmlns:siri="http://www.siri.org.uk/siri">GeneralMessage:Test:0</siri:RequestMessageRef></ServiceDeliveryInfo><Answer><siri:GeneralMessageDelivery xmlns:siri="http://www.siri.org.uk/siri" version="1.3"><siri:ResponseTimestamp>2015-08-24T14:38:10.661+02:00</siri:ResponseTimestamp><siri:Status>true</siri:Status><siri:GeneralMessage formatRef="STIF-IDF"><siri:RecordedAtTime>2015-08-24T03:00:29.268+02:00</siri:RecordedAtTime><siri:ItemIdentifier>6893</siri:ItemIdentifier><siri:InfoMessageIdentifier>NINOXE:GeneralMessage:20150824_5</siri:InfoMessageIdentifier><siri:InfoMessageVersion>1</siri:InfoMessageVersion><siri:InfoChannelRef>Perturbation</siri:InfoChannelRef><siri:ValidUntilTime>2015-08-24T15:10:29.268+02:00</siri:ValidUntilTime><siri:Content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="siri:IDFGeneralMessageStructure"><siri:StopPointRef>NINOXE:StopPoint:BP:15568803:LOC</siri:StopPointRef><siri:Message><siri:MessageType>longMessage</siri:MessageType><siri:MessageText xml:lang="FR">L'arrêt Mairie (A) est déplacé Rue de Paris</siri:MessageText></siri:Message></siri:Content></siri:GeneralMessage><siri:GeneralMessage formatRef="STIF-IDF"><siri:RecordedAtTime>2015-08-24T03:00:29.272+02:00</siri:RecordedAtTime><siri:ItemIdentifier>6894</siri:ItemIdentifier><siri:InfoMessageIdentifier>NINOXE:GeneralMessage:20150824_6</siri:InfoMessageIdentifier><siri:InfoMessageVersion>1</siri:InfoMessageVersion><siri:InfoChannelRef>Perturbation</siri:InfoChannelRef><siri:ValidUntilTime>2015-08-24T17:13:29.272+02:00</siri:ValidUntilTime><siri:Content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="siri:IDFGeneralMessageStructure"><siri:StopPointRef>NINOXE:StopPoint:SP:15625831:LOC</siri:StopPointRef><siri:Message><siri:MessageType>longMessage</siri:MessageType><siri:MessageText xml:lang="FR">L'arrêt St Julien n'est pas desservi</siri:MessageText></siri:Message></siri:Content></siri:GeneralMessage><siri:GeneralMessage formatRef="STIF-IDF"><siri:RecordedAtTime>2015-08-24T03:00:29.276+02:00</siri:RecordedAtTime><siri:ItemIdentifier>6895</siri:ItemIdentifier><siri:InfoMessageIdentifier>NINOXE:GeneralMessage:20150824_7</siri:InfoMessageIdentifier><siri:InfoMessageVersion>1</siri:InfoMessageVersion><siri:InfoChannelRef>Perturbation</siri:InfoChannelRef><siri:ValidUntilTime>2015-08-24T15:17:29.276+02:00</siri:ValidUntilTime><siri:Content xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="siri:IDFGeneralMessageStructure"><siri:LineRef>NINOXE:Line:15627090:LOC</siri:LineRef><siri:Message><siri:MessageType>longMessage</siri:MessageType><siri:MessageText xml:lang="FR">La ligne 7 est fermée toute la journée</siri:MessageText></siri:Message></siri:Content></siri:GeneralMessage></siri:GeneralMessageDelivery></Answer><AnswerExtension/></wsdl:GetGeneralMessageResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>"""

  expectedGeneralMessageHTMLCard = """
  <div class="panel panel-default stop-wrapper">
  <div class="panel-heading">
    <div class="stop-name"></div>
      <h4>General Message</h4>
  </div>
  <div class="panel-body">
      <h4>General Message</h4>
        <div>RecordedAtTime : 2015-08-24T03:00:29.268+02:00</div>
        <div>ItemIdentifier : 6893</div>
        <div>InfoMessageIdentifier : NINOXE:GeneralMessage:20150824_5</div>
        <div>InfoMessageVersion : 1</div>
        <div>InfoChannelRef : Perturbation</div>
        <div>ValidUntilTime : 2015-08-24T15:10:29.268+02:00</div>
        <div>StopPointRef : NINOXE:StopPoint:BP:15568803:LOC</div>
        <div>MessageType : longMessage</div>
        <div>MessageText : L'arrêt Mairie (A) est déplacé Rue de Paris</div>
  </div>
</div>"""

  responseDOM = """<div id = "response"></div>"""

  siriResponseXML = ($.parseXML(siriResponse))
  siriResponseXML = $(siriResponseXML)

  generalMessageResponseXML = ($.parseXML(generalMessageResponse))
  generalMessageResponseXML = $(generalMessageResponseXML)

  cardProcessor = new stopMonitoringCard

  it "checks the Stop Monitoring card has the correct properties", ->
    node = siriResponseXML.find('MonitoredStopVisit')
    cardProcessor.parseSiriResponse(node[0])
    console.log cardProcessor
    for prop, expected of cardProcessor.stopMonitoredVisit
      expect(siriResponseXML.find(prop)[0].innerHTML).toEqual expected

  it "checks the onwards are taken care of", ->
    xmlOnwards = $(siriResponseXML.find('OnwardCall')[0])
    onWard = cardProcessor.onwardsCall[0]
    for prop, expected of onWard
      expect(xmlOnwards.find(prop)[0].innerHTML).toEqual expected

  it "checks the general message request works", ->
    nodeGeneralMessage = $(generalMessageResponseXML.find('GeneralMessage'))
    console.log nodeGeneralMessage
    generalMessage = cardProcessor.buildGeneralMessageJSON nodeGeneralMessage[0]
    for prop, expected of cardProcessor.generalMessage
      expect(generalMessageResponseXML.find(prop)[0].innerHTML).toEqual expected



