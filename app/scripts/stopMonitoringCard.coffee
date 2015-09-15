class stopMonitoringCard

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
            {{monitoredCall.AimedArrivalTime}}
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
              <p>{{AimedArrivalTime}}</p>
            </div>
          </div>
          <div class="stop-info col-xs-6">
            <div class="stop-info-property">
              <p>
                <span class="glyphicon glyphicon-signal"></span>
                <span>Status</span>
              </p>
            </div>
            <div class="stop-info-value">
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

    if node.nodeName == 'siri:FramedVehicleJourneyRef' or node.nodeName == 'siri:MonitoredVehicleJourney'

      for child in node.children
        this.buildResponseJSON  child

    else if node.nodeName == 'siri:MonitoredCall'
      this.addMonitoredCall node
    else if node.nodeName == 'siri:OnwardCalls'
      this.addOnwards node
    else
      this.stopMonitoredVisit[this.unSiried(node.nodeName)] = node.innerHTML


    return

  buildGeneralMessageJSON: (node) ->
    if node.nodeName == 'siri:Content' or node.nodeName == 'siri:Message' or node.nodeName == 'siri:GeneralMessage'
      for child in node.children
        this.buildGeneralMessageJSON  child
    else
      this.generalMessage[this.unSiried(node.nodeName)] = node.innerHTML
    return

  buildStopDiscoveryJSON: (node) ->
    for child in node.children
      if child.nodeName == 'siri:Lines'
        this.addStopLine child
      else
        @stopDiscovery[this.unSiried(child.nodeName)] = child.innerHTML
    return

  buildLineDiscoveryJSON: (node) ->
    for child in node.children
      if child.nodeName == 'siri:Destinations'
        this.addLineDirection child
      else
        @lineDiscovery[this.unSiried(child.nodeName)] = child.innerHTML
    return

  addLineDirection:(node) ->
    @lineDirections = []
    for child in node.children
      lineDirection= {}
      for grandChild in child.children
        lineDirection[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML
      @lineDirections.push(lineDirection)
    return

  addOnwards: (node) ->
    this.onwardsCall = []
    for child in node.children
      onward = {}
      for grandChild in child.children
        onward[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML
      @onwardsCall.push(onward)
    return

  addStopLine: (node) ->
    @stopDiscoveryLines = []
    for child in node.children
      line= {}
      line[this.unSiried(child.nodeName)] = child.innerHTML
      @stopDiscoveryLines.push(line)
    return

  addMonitoredCall: (node) ->
    this.monitoredCall = {}
    for child in node.children
      @monitoredCall[this.unSiried(child.nodeName)] = child.innerHTML
    return

  unSiried: (node) ->
    return node.replace('siri:', '')

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






