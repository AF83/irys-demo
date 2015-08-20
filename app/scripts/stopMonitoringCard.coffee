class stopMonitoringCard

  stopMonitoredVisit: {}
  onwardsCall: []
  monitoredCall: {}
  generalMessage: {}
  mustacheStopMonitoredVisit: []
  mustacheOnwards: []
  mustacheMonitoredCall: []
  mustacheGeneralMessage: []
  monitoredVehicleJourney: {}

  stopMonitoringTemplate: """
  <div class = "panel panel-default stop-wrapper">
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
          <div>{{key}} : {{value}}</div>
        {{/mustacheMonitoredCall}}
      {{/monitoredCall}}
      {{#mustacheOnwards}}
        <h4>OnWards</h4>
        {{#onWard}}
          <div>{{key}} : {{value}}</div>
        {{/onWard}}
      {{/mustacheOnwards}}
    </div>
  </div>"""

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


  parseSiriResponse: (node) ->
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

  addOnwards: (node) ->
    this.onwardsCall = []
    for child in node.children
      onward = {}
      for grandChild in child.children
        onward[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML
      @onwardsCall.push(onward)
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

  buildMustacheStopCard:() ->
    @stopMonitoredVisit = this.checkSiriObject @stopMonitoredVisit
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

  buildGeneralMessage:() ->
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

  buildGeneralMessage:() ->
    this.mustacheGeneralMessage = []
    this.buildGeneralMessage()
    this.renderCard @generalMessageTemplate


  renderCard:(template) ->

    Mustache.parse template
    rendered = Mustache.render(template, this)
    $("#response").append(rendered)


    return






