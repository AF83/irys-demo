class window.stopMonitoringCard

  stopMonitoredVisit: {}
  onwardsCall: []
  monitoredCall: {}
  generalMessage: {}
  stopDiscovery: {}
  lineDiscovery: {}
  monitoredVehicleJourney: {}

  stopDiscoveryLines: []
  lineDirections: []
  mustacheStopMonitoredVisit: []
  mustacheOnwards: []
  mustacheStopDiscoveries: []
  mustacheMonitoredCall: []
  mustacheGeneralMessage: []
  mustacheStopLines: []
  mustacheLineDiscovery: []
  mustacheLineDirections: []


  stopMonitoringTemplate: """
  <div class = "panel panel-default stop-wrapper {{lineColor}}">
    <div class = "panel-heading">
      <div class = "stop-name"></div>
        <h4>{{monitoredCall.StopPointName}}</h4>
    </div>
    <div class = "panel-body">
      {{#mustacheStopMonitoredVisit}}
        <div>{{key}} : {{value}}</div>
      {{/mustacheStopMonitoredVisit}}
      {{#monitoredCall}}
        <h4>Monitored Call</h4>
        {{#mustacheMonitoredCall}}
          <div class = "indented-response">{{key}} : {{value}}</div>
        {{/mustacheMonitoredCall}}
      {{/monitoredCall}}
      {{#mustacheOnwards}}
        <h4>OnWards</h4>
        {{#onWard}}
          <div class = "indented-response">{{key}} : {{value}}</div>
        {{/onWard}}
      {{/mustacheOnwards}}
    </div>
  </div>"""

  stopMonitoringFancyTemplate: """
  <li class = "fancy-stop-wrapper {{lineColor}}">
    <div class = "line-header">
      <h4>{{monitoredCall.StopPointName}}</h4>
    </div>
    <div class="row">
      <div class = "stop-info col-xs-4">
        <div class = "stop-info-property">
          <p>
            <span class="glyphicon glyphicon-road"></span>
            <span>Ligne</span>
          </p>
        </div>
        <div class = "stop-info-value">
          <p>{{stopMonitoredVisit.PublishedLineName}}</p>
        </div>
      </div>
      <div class = "stop-info col-xs-4">
        <div class = "stop-info-property">
          <p>
            <span class="glyphicon glyphicon-time"></span>
            <span>Heure d'arrivée</span>
          </p>
        </div>
        <div class = "stop-info-value {{monitoredCall.ArrivalStatus}}">
          <p>
            {{setCleanDate}}
          </p>
        </div>
      </div>
      <div class = "stop-info col-xs-4">
        <div class = "stop-info-property">
          <p>
            <span class="glyphicon glyphicon-signal"></span>
            <span>Status</span>
          </p>
        </div>
        <div class = "stop-info-value {{monitoredCall.ArrivalStatus}}">
          <p>{{monitoredCall.ArrivalStatus}}</p>
        </div>
      </div>
    </div>

    <ul class="fancy-wrapper onwards">
    {{#onwardsCall}}
      <li class="fancy-stop-wrapper">
        <div class="line-header">
          <h4>{{StopPointName}}</h4>
        </div>
        <div class="row">
          <div class="stop-info col-xs-6">
            <div class="stop-info-property">
              <p>
                <span class="glyphicon glyphicon-time"></span>
                <span>Heure d'arrivée</span>
              </p>
            </div>
            <div class="stop-info-value {{ArrivalStatus}}">
              <p>{{setCleanDate}}</p>
            </div>
          </div>
          <div class="stop-info col-xs-6">
            <div class="stop-info-property">
              <p>
                <span class="glyphicon glyphicon-signal"></span>
                <span>Status</span>
              </p>
            </div>
            <div class="stop-info-value {{ArrivalStatus}}">
              <p>{{ArrivalStatus}}</p>
            </div>
          </div>
        </div>
      </li>
    {{/onwardsCall}}
    </ul>

  </li>"""

  generalMessageTemplate: """
  <div class = "panel panel-default stop-wrapper">
    <div class = "panel-heading">
      <div class = "stop-name"></div>
        <h4>General Message</h4>
    </div>
    <div class = "panel-body">
      {{#generalMessage}}
        <h4>General Message</h4>
        {{#mustacheGeneralMessage}}
          <div>{{key}} : {{value}}</div>
        {{/mustacheGeneralMessage}}
      {{/generalMessage}}
    </div>
  </div>"""

  generalMessageFancyTemplate: """
  <li class = "fancy-stop-wrapper line-1">
    <div class = "line-header">
      <h4>{{generalMessage.InfoChannelRef}}</h4>
    </div>
    <div class="row">
      {{#generalMessage.StopPointRef}}
        <div class = "stop-info col-xs-3">
          <div class = "stop-info-property">
            <p>
              <span class="glyphicon glyphicon-road"></span>
              <span>Arrêt</span>
            </p>
          </div>
          <div class = "stop-info-value">
            <p>{{generalMessage.StopPointRef}}</p>
          </div>
        </div>
      {{/generalMessage.StopPointRef}}
      {{#generalMessage.LineRef}}
        <div class = "stop-info col-xs-3">
          <div class = "stop-info-property">
            <p>
              <span class="glyphicon glyphicon-road"></span>
              <span>Ligne</span>
            </p>
          </div>
          <div class = "stop-info-value">
            <p>{{generalMessage.LineRef}}</p>
          </div>
        </div>
      {{/generalMessage.LineRef}}
      <div class = "stop-info col-xs-2">
        <div class = "stop-info-property">
          <p>
            <span class="glyphicon glyphicon-time"></span>
            <span>Validité</span>
          </p>
        </div>
        <div class = "stop-info-value">
          <p>
            {{setCleanDate}}
          </p>
        </div>
      </div>
      <div class = "stop-info {{properWidth}}">
        <div class = "stop-info-property">
          <p>
            <span class="glyphicon glyphicon-signal"></span>
            <span>Annonce</span>
          </p>
        </div>
        <div class = "stop-info-value">
          <p>{{generalMessage.MessageText}}</p>
        </div>
      </div>
    </div>
    """

  stopDiscoveryTemplate: """
  <div class = "panel panel-default stop-wrapper {{lineColor}}">
    <div class = "panel-heading">
      <div class = "stop-name"></div>
        <h4>{{stopDiscovery.StopName}}</h4>
    </div>
    <div class = "panel-body">
      {{#mustacheStopDiscoveries}}
        <div>{{key}} : {{value}}</div>
      {{/mustacheStopDiscoveries}}
      <h4>Lines</h4>
      {{#mustacheStopLines}}
        {{#line}}
          <div class = "indented-response">{{key}} : {{value}}</div>
        {{/line}}
      {{/mustacheStopLines}}
    </div>
  </div>"""

  lineDiscoveryTemplate: """
  <div class = "panel panel-default stop-wrapper {{lineColor}}">
    <div class = "panel-heading">
      <div class = "stop-name"></div>
        <h4>{{lineDiscovery.LineName}}</h4>
    </div>
    <div class = "panel-body">
      {{#mustacheLineDiscovery}}
        <div>{{key}} : {{value}}</div>
      {{/mustacheLineDiscovery}}
      <h4>Lines</h4>
      {{#mustacheLineDirections}}
        {{#line}}
          <div class = "indented-response">{{key}} : {{value}}</div>
        {{/line}}
      {{/mustacheLineDirections}}
    </div>
  </div>"""

  lineColors: {}

  parseSiriResponse: (node) ->
    @stopMonitoredVisit = {}
    for child in node.children
      this.buildResponseJSON child

    return

  buildResponseJSON: (node) ->

    if node.localName == 'FramedVehicleJourneyRef' or node.localName == 'MonitoredVehicleJourney'
      for child in node.children      
        this.buildResponseJSON  child
    else if node.localName == 'MonitoredCall'
      this.monitoredCall = {}
      for child in node.children
        this.addMonitoredCall child
    else if node.localName == 'OnwardCalls'
      this.onwardsCall = []
      for child in node.children
        this.addOnwards child           
    else
      this.stopMonitoredVisit[node.localName] = node.innerHTML

    return

  buildGeneralMessageJSON: (node) ->
    if node.localName == 'Content' or node.localName == 'Message' or node.localName == 'GeneralMessage'
      for child in node.children
        this.buildGeneralMessageJSON  child
    else
      this.generalMessage[node.localName] = node.innerHTML
    return

  buildStopDiscoveryJSON: (node) ->
    for child in node.children
      if child.localName == 'Lines'
        this.addStopLine child
      else if child.localName == 'Location'
         this.addLocation child         
      else
        @stopDiscovery[child.localName] = child.innerHTML
    return

  buildLineDiscoveryJSON: (node) ->
    for child in node.children
      if child.localName == 'Destinations'
        this.addLineDirection child
      else
        @lineDiscovery[child.localName] = child.innerHTML
    return

  addLocation:(node) ->
    for child in node.children
    	@stopDiscovery[child.localName] = child.innerHTML      
    return
    
  addLineDirection:(node) ->
    @lineDirections = []
    for child in node.children
      lineDirection= {}
      for grandChild in child.children
        lineDirection[grandChild.localName] = grandChild.innerHTML
      @lineDirections.push(lineDirection)
    return
 
  addOnwards: (node) ->
    onward = {}
    for child in node.children
       this.addOnward(child, onward)
    @onwardsCall.push(onward)
    return
   
  addOnward: (node, onward) ->
    if node.localName == 'ArrivalStopAssignment' or node.localName == 'DepartureStopAssignment'
    	for child in node.children  
    	  this.addOnward(child, onward)
    else
      onward[node.localName] = node.innerHTML
    return
    
  addStopLine: (node) ->
    @stopDiscoveryLines = []
    for child in node.children
      line= {}
      line[child.localName] = child.innerHTML
      @stopDiscoveryLines.push(line)
    return

  addMonitoredCall: (node) ->
    if node.localName == 'ArrivalStopAssignment' or node.localName == 'DepartureStopAssignment'
    	for child in node.children  
          this.addMonitoredCall child
    else
      @monitoredCall[node.localName] = node.innerHTML
    return

  checkSiriObject:(object) ->
    if jQuery.isEmptyObject object
      object = null
    else
      object
    object

  lineColor:() ->
    lineInventory = Object.keys(@lineColors).length + 1
    if @stopMonitoredVisit.LineRef
      line = @stopMonitoredVisit.LineRef
    else if @stopDiscovery.LineRef
      line = @stopDiscovery.LineRef
    else if @lineDiscovery.LineRef
      line = @lineDiscovery.LineRef

    if  @lineColors[line]
      @lineColors[line]
    else
      @lineColors[line] = "line-" + lineInventory

    @lineColors[line]

  setCleanDate:() ->

    if this.AimedArrivalTime != undefined
      date = new Date(this.AimedArrivalTime)
    else if this.monitoredCall.AimedArrivalTime != undefined
      date = new Date(this.monitoredCall.AimedArrivalTime)
    else
      date = new Date(this.generalMessage.ValidUntilTime)

    if date.getMinutes() > 9
      date.getHours() + ":" + date.getMinutes()
    else
      date.getHours() + ":0" + date.getMinutes()

  properWidth:() ->
    if this.generalMessage.StopPointRef or this.generalMessage.LineRef
      "col-xs-7"
    else
      "col-xs-10"
  toggleFancyThings:(el) ->

    $(el).removeClass('i-m-there')

    if $('#fancy-response-panel-wrapper').hasClass('i-m-there') == false
      $('#fancy-response-panel-wrapper').addClass('i-m-there')

    return

  toggleClassicThings:(el) ->

    $(el).removeClass('i-m-there')

    if $('#response-panel-wrapper').hasClass('i-m-there') == false
      $('#response-panel-wrapper').addClass('i-m-there')

    return

  buildMustacheStopCard:() ->
    for k,v of @stopMonitoredVisit
      if @stopMonitoredVisit.hasOwnProperty(k)
        @mustacheStopMonitoredVisit.push({
          'key' : k,
          'value' : v
        })
    return

  buildMustacheMonitoredCall:() ->
    @monitoredCall = this.checkSiriObject @monitoredCall
    for k,v of @monitoredCall
      if @monitoredCall.hasOwnProperty(k)
        @mustacheMonitoredCall.push({
          'key' : k,
          'value' : v
        })
    return

  buildMustacheOnwards:() ->
    for onward in @onwardsCall
      tempOnward = {'onWard': []}
      for k,v of onward
        if onward.hasOwnProperty(k)
          tempOnward.onWard.push({
            'key' : k,
            'value' : v
          })
      @mustacheOnwards.push(tempOnward)
    return

  buildMustacheStopDiscovery:() ->
    for k,v of @stopDiscovery
      if @stopDiscovery.hasOwnProperty(k)
        @mustacheStopDiscoveries.push({
          'key' : k,
          'value' : v
        })
    return

  buildMustacheStopLines:() ->
    for line in @stopDiscoveryLines
      tempLine = {'line': []}
      for k,v of line
        if line.hasOwnProperty(k)
          tempLine.line.push({
            'key' : k,
            'value' : v
          })
      @mustacheStopLines.push(tempLine)
    return

  buildMustacheLineDiscovery:() ->
    for k,v of @lineDiscovery
      if @lineDiscovery.hasOwnProperty(k)
        @mustacheLineDiscovery.push({
          'key' : k,
          'value' : v
        })
    return

  buildMustacheLineDirections:() ->
    for line in @lineDirections
      tempLine = {'line': []}
      for k,v of line
        if line.hasOwnProperty(k)
          tempLine.line.push({
            'key' : k,
            'value' : v
          })
      @mustacheLineDirections.push(tempLine)
    return

  buildMustacheGeneralMessage:() ->
    @generalMessage = this.checkSiriObject @generalMessage
    for k,v of @generalMessage
      if @generalMessage.hasOwnProperty(k)
        @mustacheGeneralMessage.push({
          'key' : k,
          'value' : v
        })
    return




  buildStopMonitoring: () ->
    this.mustacheStopMonitoredVisit = []
    this.mustacheOnwards = []
    this.mustacheMonitoredCall = []

    this.buildMustacheStopCard()
    this.buildMustacheOnwards()
    this.buildMustacheMonitoredCall()

    this.renderCard @stopMonitoringTemplate

  buildFancyStopMonitoring: () ->

    this.renderFancyCard @stopMonitoringFancyTemplate

  buildGeneralMessage:() ->
    this.mustacheGeneralMessage = []
    this.buildMustacheGeneralMessage()
    this.renderCard @generalMessageTemplate

  buildFancyGeneralMessage:() ->
    this.renderFancyCard @generalMessageFancyTemplate

  buildStopDiscovery: () ->
    @mustacheStopDiscoveries = []
    @mustacheStopLines = []

    this.buildMustacheStopDiscovery()
    this.buildMustacheStopLines()

    this.renderCard @stopDiscoveryTemplate

  buildLineDiscovery: () ->
    @mustacheLineDiscovery = []
    @mustacheLineDirections = []

    this.buildMustacheLineDiscovery()
    this.buildMustacheLineDirections()

    this.renderCard @lineDiscoveryTemplate

  renderCard:(template) ->

    Mustache.parse template
    rendered = Mustache.render(template, this)

    $("#response").append(rendered)
    return

  renderFancyCard:(template) ->

    Mustache.parse template
    rendered = Mustache.render(template, this)
    $("#fancy-response").find('#fancy-wrapper').append(rendered)
    return






