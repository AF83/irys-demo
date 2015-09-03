// Generated by CoffeeScript 1.4.0
var stopMonitoringCard;

stopMonitoringCard = (function() {

  function stopMonitoringCard() {}

  stopMonitoringCard.prototype.stopMonitoredVisit = {};

  stopMonitoringCard.prototype.onwardsCall = [];

  stopMonitoringCard.prototype.monitoredCall = {};

  stopMonitoringCard.prototype.generalMessage = {};

  stopMonitoringCard.prototype.stopDiscovery = {};

  stopMonitoringCard.prototype.lineDiscovery = {};

  stopMonitoringCard.prototype.monitoredVehicleJourney = {};

  stopMonitoringCard.prototype.stopDiscoveryLines = [];

  stopMonitoringCard.prototype.lineDirections = [];

  stopMonitoringCard.prototype.mustacheStopMonitoredVisit = [];

  stopMonitoringCard.prototype.mustacheOnwards = [];

  stopMonitoringCard.prototype.mustacheStopDiscoveries = [];

  stopMonitoringCard.prototype.mustacheMonitoredCall = [];

  stopMonitoringCard.prototype.mustacheGeneralMessage = [];

  stopMonitoringCard.prototype.mustacheStopLines = [];

  stopMonitoringCard.prototype.mustacheLineDiscovery = [];

  stopMonitoringCard.prototype.mustacheLineDirections = [];

  stopMonitoringCard.prototype.stopMonitoringTemplate = "<div class = \"panel panel-default stop-wrapper {{lineColor}}\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{monitoredCall.StopPointName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheStopMonitoredVisit}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheStopMonitoredVisit}}\n    {{#monitoredCall}}\n      <h4>Monitored Call</h4>\n      {{#mustacheMonitoredCall}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/mustacheMonitoredCall}}\n    {{/monitoredCall}}\n    {{#mustacheOnwards}}\n      <h4>OnWards</h4>\n      {{#onWard}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/onWard}}\n    {{/mustacheOnwards}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.stopMonitoringFancyTemplate = "<li class = \"fancy-stop-wrapper {{lineColor}}\">\n  <div class = \"line-header\">\n    <h4>{{monitoredCall.StopPointName}}</h4>\n  </div>\n  <div class=\"row\">\n    <div class = \"stop-info col-xs-4\">\n      <div class = \"stop-info-property\">\n        <p>\n          Ligne\n        </p>\n      </div>\n      <div class = \"stop-info-value\">\n        <p>{{stopMonitoredVisit.PublishedLineName}}</p>\n      </div>\n    </div>\n    <div class = \"stop-info col-xs-4\">\n      <div class = \"stop-info-property\">\n        <p>\n          Heure d'arrivée\n        </p>\n      </div>\n      <div class = \"stop-info-value {{monitoredCall.ArrivalStatus}}\">\n        <p>\n          {{monitoredCall.AimedArrivalTime}}\n        </p>\n      </div>\n    </div>\n    <div class = \"stop-info col-xs-4\">\n      <div class = \"stop-info-property\">\n        <p>\n          Status\n        </p>\n      </div>\n      <div class = \"stop-info-value {{monitoredCall.ArrivalStatus}}\">\n        <p>{{monitoredCall.ArrivalStatus}}</p>\n      </div>\n    </div>\n  </div>\n\n  <ul class=\"fancy-wrapper onwards\">\n  {{#onwardsCall}}\n    <li class=\"fancy-stop-wrapper\">\n      <div class=\"line-header\">\n        <h4>{{StopPointName}}</h4>\n      </div>\n      <div class=\"row\">\n        <div class=\"stop-info col-xs-6\">\n          <div class=\"stop-info-property\">\n            <p>Heure d'arrivée</p>\n          </div>\n          <div class=\"stop-info-value {{ArrivalStatus}}\">\n            <p>{{AimedArrivalTime}}</p>\n          </div>\n        </div>\n        <div class=\"stop-info col-xs-6\">\n          <div class=\"stop-info-property\">\n            <p>Status</p>\n          </div>\n          <div class=\"stop-info-value\">\n            <p>{{ArrivalStatus}}</p>\n          </div>\n        </div>\n      </div>\n    </li>\n  {{/onwardsCall}}\n  </ul>\n\n</li>";

  stopMonitoringCard.prototype.generalMessageTemplate = "<div class = \"panel panel-default stop-wrapper\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>General Message</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#generalMessage}}\n      <h4>General Message</h4>\n      {{#mustacheGeneralMessage}}\n        <div>{{key}} : {{value}}</div>\n      {{/mustacheGeneralMessage}}\n    {{/generalMessage}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.stopDiscoveryTemplate = "<div class = \"panel panel-default stop-wrapper {{lineColor}}\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{stopDiscovery.StopName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheStopDiscoveries}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheStopDiscoveries}}\n    <h4>Lines</h4>\n    {{#mustacheStopLines}}\n      {{#line}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/line}}\n    {{/mustacheStopLines}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.lineDiscoveryTemplate = "<div class = \"panel panel-default stop-wrapper {{lineColor}}\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{lineDiscovery.LineName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheLineDiscovery}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheLineDiscovery}}\n    <h4>Lines</h4>\n    {{#mustacheLineDirections}}\n      {{#line}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/line}}\n    {{/mustacheLineDirections}}\n  </div>\n</div>";

  stopMonitoringCard.prototype.lineColors = {
    "NINOXE:Line:15625451:LOC": "line-4",
    "NINOXE:Line:15624980:LOC": "line-6-yellow",
    "NINOXE:Line:15626053:LOC": "line-5-magenta",
    "NINOXE:Line:15577792:LOC": "line-3-metro",
    "NINOXE:Line:15574334:LOC": "line-1-blue",
    "NINOXE:Line:15568799:LOC": "line-2-green",
    "NINOXE:Line:15627090:LOC": "line-7-orange"
  };

  stopMonitoringCard.prototype.parseSiriResponse = function(node) {
    var child, _i, _len, _ref;
    this.stopMonitoredVisit = {};
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      this.buildResponseJSON(child);
    }
  };

  stopMonitoringCard.prototype.buildResponseJSON = function(node) {
    var child, _i, _len, _ref;
    if (node.nodeName === 'siri:FramedVehicleJourneyRef' || node.nodeName === 'siri:MonitoredVehicleJourney') {
      _ref = node.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        this.buildResponseJSON(child);
      }
    } else if (node.nodeName === 'siri:MonitoredCall') {
      this.addMonitoredCall(node);
    } else if (node.nodeName === 'siri:OnwardCalls') {
      this.addOnwards(node);
    } else {
      this.stopMonitoredVisit[this.unSiried(node.nodeName)] = node.innerHTML;
    }
  };

  stopMonitoringCard.prototype.buildGeneralMessageJSON = function(node) {
    var child, _i, _len, _ref;
    if (node.nodeName === 'siri:Content' || node.nodeName === 'siri:Message' || node.nodeName === 'siri:GeneralMessage') {
      _ref = node.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        this.buildGeneralMessageJSON(child);
      }
    } else {
      this.generalMessage[this.unSiried(node.nodeName)] = node.innerHTML;
    }
  };

  stopMonitoringCard.prototype.buildStopDiscoveryJSON = function(node) {
    var child, _i, _len, _ref;
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      if (child.nodeName === 'siri:Lines') {
        this.addStopLine(child);
      } else {
        this.stopDiscovery[this.unSiried(child.nodeName)] = child.innerHTML;
      }
    }
  };

  stopMonitoringCard.prototype.buildLineDiscoveryJSON = function(node) {
    var child, _i, _len, _ref;
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      if (child.nodeName === 'siri:Destinations') {
        this.addLineDirection(child);
      } else {
        this.lineDiscovery[this.unSiried(child.nodeName)] = child.innerHTML;
      }
    }
  };

  stopMonitoringCard.prototype.addLineDirection = function(node) {
    var child, grandChild, lineDirection, _i, _j, _len, _len1, _ref, _ref1;
    this.lineDirections = [];
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      lineDirection = {};
      _ref1 = child.children;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        grandChild = _ref1[_j];
        lineDirection[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML;
      }
      this.lineDirections.push(lineDirection);
    }
  };

  stopMonitoringCard.prototype.addOnwards = function(node) {
    var child, grandChild, onward, _i, _j, _len, _len1, _ref, _ref1;
    this.onwardsCall = [];
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      onward = {};
      _ref1 = child.children;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        grandChild = _ref1[_j];
        onward[this.unSiried(grandChild.nodeName)] = grandChild.innerHTML;
      }
      this.onwardsCall.push(onward);
    }
  };

  stopMonitoringCard.prototype.addStopLine = function(node) {
    var child, line, _i, _len, _ref;
    this.stopDiscoveryLines = [];
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      line = {};
      line[this.unSiried(child.nodeName)] = child.innerHTML;
      this.stopDiscoveryLines.push(line);
    }
  };

  stopMonitoringCard.prototype.addMonitoredCall = function(node) {
    var child, _i, _len, _ref;
    this.monitoredCall = {};
    _ref = node.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      this.monitoredCall[this.unSiried(child.nodeName)] = child.innerHTML;
    }
  };

  stopMonitoringCard.prototype.unSiried = function(node) {
    return node.replace('siri:', '');
  };

  stopMonitoringCard.prototype.checkSiriObject = function(object) {
    if (jQuery.isEmptyObject(object)) {
      object = null;
    } else {
      object;

    }
    return object;
  };

  stopMonitoringCard.prototype.lineColor = function() {
    var line;
    if (this.stopMonitoredVisit.LineRef) {
      line = this.stopMonitoredVisit.LineRef;
    } else if (this.stopDiscovery.LineRef) {
      line = this.stopDiscovery.LineRef;
    } else if (this.lineDiscovery.LineRef) {
      line = this.lineDiscovery.LineRef;
    }
    return this.lineColors[line];
  };

  stopMonitoringCard.prototype.buildMustacheStopCard = function() {
    var k, v, _ref;
    _ref = this.stopMonitoredVisit;
    for (k in _ref) {
      v = _ref[k];
      if (this.stopMonitoredVisit.hasOwnProperty(k)) {
        this.mustacheStopMonitoredVisit.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheMonitoredCall = function() {
    var k, v, _ref;
    this.monitoredCall = this.checkSiriObject(this.monitoredCall);
    _ref = this.monitoredCall;
    for (k in _ref) {
      v = _ref[k];
      if (this.monitoredCall.hasOwnProperty(k)) {
        this.mustacheMonitoredCall.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheOnwards = function() {
    var k, onward, tempOnward, v, _i, _len, _ref;
    _ref = this.onwardsCall;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      onward = _ref[_i];
      tempOnward = {
        'onWard': []
      };
      for (k in onward) {
        v = onward[k];
        if (onward.hasOwnProperty(k)) {
          tempOnward.onWard.push({
            'key': k,
            'value': v
          });
        }
      }
      this.mustacheOnwards.push(tempOnward);
    }
  };

  stopMonitoringCard.prototype.buildMustacheStopDiscovery = function() {
    var k, v, _ref;
    _ref = this.stopDiscovery;
    for (k in _ref) {
      v = _ref[k];
      if (this.stopDiscovery.hasOwnProperty(k)) {
        this.mustacheStopDiscoveries.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheStopLines = function() {
    var k, line, tempLine, v, _i, _len, _ref;
    _ref = this.stopDiscoveryLines;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      line = _ref[_i];
      tempLine = {
        'line': []
      };
      for (k in line) {
        v = line[k];
        if (line.hasOwnProperty(k)) {
          tempLine.line.push({
            'key': k,
            'value': v
          });
        }
      }
      this.mustacheStopLines.push(tempLine);
    }
  };

  stopMonitoringCard.prototype.buildMustacheLineDiscovery = function() {
    var k, v, _ref;
    _ref = this.lineDiscovery;
    for (k in _ref) {
      v = _ref[k];
      if (this.lineDiscovery.hasOwnProperty(k)) {
        this.mustacheLineDiscovery.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildMustacheLineDirections = function() {
    var k, line, tempLine, v, _i, _len, _ref;
    _ref = this.lineDirections;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      line = _ref[_i];
      tempLine = {
        'line': []
      };
      for (k in line) {
        v = line[k];
        if (line.hasOwnProperty(k)) {
          tempLine.line.push({
            'key': k,
            'value': v
          });
        }
      }
      this.mustacheLineDirections.push(tempLine);
    }
  };

  stopMonitoringCard.prototype.buildMustacheGeneralMessage = function() {
    var k, v, _ref;
    this.generalMessage = this.checkSiriObject(this.generalMessage);
    _ref = this.generalMessage;
    for (k in _ref) {
      v = _ref[k];
      if (this.generalMessage.hasOwnProperty(k)) {
        this.mustacheGeneralMessage.push({
          'key': k,
          'value': v
        });
      }
    }
  };

  stopMonitoringCard.prototype.buildStopMonitoring = function() {
    this.mustacheStopMonitoredVisit = [];
    this.mustacheOnwards = [];
    this.mustacheMonitoredCall = [];
    this.buildMustacheStopCard();
    this.buildMustacheOnwards();
    this.buildMustacheMonitoredCall();
    return this.renderCard(this.stopMonitoringTemplate);
  };

  stopMonitoringCard.prototype.buildFancyStopMonitoring = function() {
    return this.renderFancyCard(this.stopMonitoringFancyTemplate);
  };

  stopMonitoringCard.prototype.buildGeneralMessage = function() {
    this.mustacheGeneralMessage = [];
    this.buildMustacheGeneralMessage();
    return this.renderCard(this.generalMessageTemplate);
  };

  stopMonitoringCard.prototype.buildStopDiscovery = function() {
    this.mustacheStopDiscoveries = [];
    this.mustacheStopLines = [];
    this.buildMustacheStopDiscovery();
    this.buildMustacheStopLines();
    return this.renderCard(this.stopDiscoveryTemplate);
  };

  stopMonitoringCard.prototype.buildLineDiscovery = function() {
    this.mustacheLineDiscovery = [];
    this.mustacheLineDirections = [];
    this.buildMustacheLineDiscovery();
    this.buildMustacheLineDirections();
    return this.renderCard(this.lineDiscoveryTemplate);
  };

  stopMonitoringCard.prototype.renderCard = function(template) {
    var rendered;
    Mustache.parse(template);
    rendered = Mustache.render(template, this);
    return $("#response").append(rendered);
  };

  stopMonitoringCard.prototype.renderFancyCard = function(template) {
    var rendered;
    Mustache.parse(template);
    rendered = Mustache.render(template, this);
    $("#fancy-response").find('#fancy-wrapper').append(rendered);
  };

  return stopMonitoringCard;

})();
