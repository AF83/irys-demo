describe "ajax test", ->

  form = """<form class="form-horizontal" id ="stop-discovery">
                  <fieldset>
                    <legend>Requête</legend>
                      <div class="form-group" id = "siriVersionAPI"">
                          <label for="siriVersionAPI" class="col-sm-2 control-label">Version Chouette
                          </label>
                          <div class = "col-sm-10">
                            <label class="radio-inline">
                              <input type="radio" name="siriVersionAPIOptions" id="siriVersionAPI1" value="1.3" checked = "checked"> 1.3
                            </label>
                            <label class="radio-inline">
                              <input type="radio" name="siriVersionAPIOptions" id="siriVersionAPI2" value="1.4"> 1.4
                            </label>
                            <label class="radio-inline">
                              <input type="radio" name="siriVersionAPIOptions" id="siriVersionAPI3" value="2.0"> 2.0
                            </label>
                        </div>
                      </div>
                      <div class="form-group">
                          <label for="stopId" class="col-lg-2 control-label">StopId</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="stopId" placeholder="Nom de l'arrêt ou id" value = "NINOXE:StopPoint:SP:15625830:LOC">
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="lineId" class="col-lg-2 control-label">LineId</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="lineId" placeholder="id de la ligne" value = "NINOXE:Line:15625451:LOC">
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="start" class="col-lg-2 control-label">Heure</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="start" placeholder="Heure de départ (HH:MM)" value= "18:30">
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="operatorName" class="col-lg-2 control-label">Opérateur</label>
                          <div class="col-lg-10">
                            <select class = "form-control" id = "operatorName">
                              <option>RATP</option>
                              <option>STIF</option>
                              <option>Batmobile</option>
                            </select>
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="typeVisit" class="col-lg-2 control-label">Type d'arrêt</label>
                          <div class="col-lg-10">
                            <select class = "form-control" id = "typeVisit" value = "meow">
                              <option>arrivals</option>
                              <option>departures</option>
                              <option>all</option>
                            </select>
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="preview" class="col-lg-2 control-label">Intervalle temporel (mn)</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="preview" list="time-span-list" placeholder="Intervalle temporel" value = "340">
                            <datalist id="time-span-list">
                              <option>0</option>
                              <option>5</option>
                              <option>10</option>
                              <option>15</option>
                              <option>20</option>
                              <option>25</option>
                              <option>30</option>
                            </datalist>
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="maxStop" class="col-lg-2 control-label">Limite de passages</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="maxStop" list="time-span-list" placeholder="Intervalle temporel" value = "5">
                            <datalist id="time-span-list">
                              <option>0</option>
                              <option>5</option>
                              <option>10</option>
                              <option>15</option>
                              <option>20</option>
                              <option>25</option>
                              <option>30</option>
                            </datalist>
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="minStLine" class="col-lg-2 control-label">MinStLine</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="minStLine" list="time-span-list" placeholder="Intervalle temporel" value="2">
                            <datalist id="time-span-list">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </datalist>
                          </div>
                        </div>
                       <div class="form-group">
                        <label for="onward" class="col-lg-3 control-label">Onward</label>
                          <div class="col-lg-2">
                            <input type="text" class="form-control" id="onward" list="time-span-list" placeholder="nbs" value="2">
                            <datalist id="time-span-list">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </datalist>
                          </div>
                          <p class="col-lg-7">passages suivants
                      </div>
                      <div class="form-group">
                        <div class="col-lg-8 col-lg-offset-4">
                            <button type="submit" class="btn btn-success">Submit</button>
                          </div>
                      </div>
                    </fieldset>
                  </form>"""

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

  SMRequest = new stopMonitoringRequest
  SMCard = new stopMonitoringCard

  siriResponseXML = ($.parseXML(siriResponse))
  siriResponseXML = $(siriResponseXML)


  beforeEach ->
    jasmine.Ajax.install()
    return

  afterEach ->
    jasmine.Ajax.uninstall()
    return



  it "checks stopMonitoredVisit is right", ->

    doneFn = jasmine.createSpy("success")

    jasmine.Ajax.stubRequest('http://appli.chouette.mobi/irys_server').andReturn({
          "responseText": siriResponse
        });
    xmlRequest = SMRequest.getStopMonitoring('form')
    SMRequest.sendRequest(xmlRequest, SMRequest.handleStopMonitoringResponse, SMCard)

    for prop, expected of SMCard.stopMonitoredVisit
          expect(siriResponseXML.find(prop)[0].innerHTML).toEqual expected

  it "checks monitoredCall is right", ->

    doneFn = jasmine.createSpy("success")

    jasmine.Ajax.stubRequest('http://appli.chouette.mobi/irys_server').andReturn({
          "responseText": siriResponse
        });
    xmlRequest = SMRequest.getStopMonitoring('form')
    SMRequest.sendRequest(xmlRequest, SMRequest.handleStopMonitoringResponse, SMCard)

    for prop, expected of SMCard.monitoredCall
          expect(siriResponseXML.find(prop)[0].innerHTML).toEqual expected

  it "checks onWards are right", ->

    doneFn = jasmine.createSpy("success")

    jasmine.Ajax.stubRequest('http://appli.chouette.mobi/irys_server').andReturn({
          "responseText": siriResponse
        });

    xmlRequest = SMRequest.getStopMonitoring('form')
    SMRequest.sendRequest(xmlRequest, SMRequest.handleStopMonitoringResponse, SMCard)

    xmlOnward = $(siriResponseXML.find('OnwardCall')[0])
    onWard = SMCard.onwardsCall[0]

    for prop, expected of onWard
      expect(xmlOnward.find(prop)[0].innerHTML).toEqual expected


