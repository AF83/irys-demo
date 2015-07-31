class stopMonitoringCard

  stopMonitoredVisit: {}
  mustacheStopMonitoredVisit: []
  mustacheOnwards: []
  monitoredVehicleJourney: {}
  onwardsCall: []
  stopDiscoveryTemplate: """
  <div class = "panel panel-default stop-wrapper">
    <div class = "panel-heading">
      <div class = "stop-name"></div>
        <h4>{{stopMonitoredVisit.StopPointName}}</h4>
    </div>
    <div class = "panel-body">
      {{#mustacheStopMonitoredVisit}}
        <div>{{key}} : {{value}}</div>
      {{/mustacheStopMonitoredVisit}}
      {{#mustacheOnwards}}
        <h4>OnWards</h4>
        {{#onWard}}
          <div>{{key}} : {{value}}</div>
        {{/onWard}}
      {{/mustacheOnwards}}

    </div>
  </div>"""


  parseSiriResponse: (node) ->
    for child in node.children
      this.buildResponseJSON child

    return

  buildResponseJSON: (node) ->

    if node.nodeName == 'siri:FramedVehicleJourneyRef' or node.nodeName == 'siri:MonitoredVehicleJourney' or node.nodeName == 'siri:MonitoredCall'

      for child in node.children
        this.buildResponseJSON  child

    else if node.nodeName == 'siri:OnwardCalls'
      this.addOnwards node

    else
      this.stopMonitoredVisit[this.unSiried(node.nodeName)] = node.innerHTML


    return

  addOnwards: (node) ->
    this.onwardsCall = []
    for child in node.children
      onward = {}
      for grandChild in child.children
        onward[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML
      @onwardsCall.push(onward)
    return

  unSiried: (node) ->
    return node.replace('siri:', '')

  buildMustacheStopCard:() ->
    for k,v of @stopMonitoredVisit
      if @stopMonitoredVisit.hasOwnProperty(k)
        @mustacheStopMonitoredVisit.push({
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

  buildStop: () ->
    this.mustacheStopMonitoredVisit = []
    this.mustacheOnwards = []

    this.buildMustacheStopCard()
    this.buildMustacheOnwards()

    template = @stopDiscoveryTemplate
    Mustache.parse template
    rendered = Mustache.render(template, this)
    $("#response").append(rendered)
    return






