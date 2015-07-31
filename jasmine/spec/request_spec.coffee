describe "request test", ->
  dateIso = new Date
  dateIso = dateIso.toISOString()

  dataObject = {
    "stopId": "toto"
    "lineId": "tutu"
    "start": "23:30"
    "preview": "PT5H40M"
    "typeVisit": "arrivals"
    "maxStop": "graou"
    "minStLine": "aloha"
    "onward": "bibibobo"
  }
  requestCheck = {
    "MonitoringRef": "toto"
    "LineRef": "tutu"
    "PreviewInterval": "PT5H40M"
    "StopVisitTypes": "arrivals"
    "MaximumStopVisits": "graou"
    "MaximumStopVisitsPerLine": "aloha"
    "Onwards": "bibibobo"
  }

  form = """<form class="form-horizontal" id ="stop-discovery">
                  <fieldset>
                    <legend>Requête</legend>
                      <div class="form-group">
                          <label for="stopId" class="col-lg-2 control-label">StopId</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="stopId" placeholder="Nom de l'arrêt ou id" value = "toto">
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="lineId" class="col-lg-2 control-label">LineId</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="lineId" placeholder="id de la ligne" value = "tutu">
                          </div>
                      </div>
                      <div class="form-group">
                        <label for="start" class="col-lg-2 control-label">Heure</label>
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="start" placeholder="Heure de départ (HH:MM)" value= "23:30">
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
                            <input type="text" class="form-control" id="maxStop" list="time-span-list" placeholder="Intervalle temporel" value = "graou">
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
                            <input type="text" class="form-control" id="minStLine" list="time-span-list" placeholder="Intervalle temporel" value="aloha">
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
                            <input type="text" class="form-control" id="onward" list="time-span-list" placeholder="nbs" value="bibibobo">
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


  request = new stopDiscoveryRequest
  xmlRequest = request.stopDiscovery(form)


  it "checks the form is parsed correctly", ->
    for prop, expected of dataObject
      expect(request[prop]).toEqual expected

  it "checks the request is right", ->
    for prop, expected of requestCheck
      console.log $.parseXML(xmlRequest).getElementsByTagName(prop)[0]
      expect($.parseXML(xmlRequest).getElementsByTagName(prop)[0].innerHTML).toEqual expected

