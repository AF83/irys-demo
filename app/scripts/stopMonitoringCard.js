(function() {
  window.stopMonitoringCard = (function() {
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

    stopMonitoringCard.prototype.stopMonitoringFancyTemplate = "<li class = \"fancy-stop-wrapper {{lineColor}}\">\n  <div class = \"line-header\">\n    <h4>{{monitoredCall.StopPointName}}</h4>\n  </div>\n  <div class=\"row\">\n    <div class = \"stop-info col-xs-4\">\n      <div class = \"stop-info-property\">\n        <p>\n          <span class=\"glyphicon glyphicon-road\"></span>\n          <span>Ligne</span>\n        </p>\n      </div>\n      <div class = \"stop-info-value\">\n        <p>{{stopMonitoredVisit.PublishedLineName}}</p>\n      </div>\n    </div>\n    <div class = \"stop-info col-xs-4\">\n      <div class = \"stop-info-property\">\n        <p>\n          <span class=\"glyphicon glyphicon-time\"></span>\n          <span>Heure d'arrivée</span>\n        </p>\n      </div>\n      <div class = \"stop-info-value {{monitoredCall.ArrivalStatus}}\">\n        <p>\n          {{setCleanDate}}\n        </p>\n      </div>\n    </div>\n    <div class = \"stop-info col-xs-4\">\n      <div class = \"stop-info-property\">\n        <p>\n          <span class=\"glyphicon glyphicon-signal\"></span>\n          <span>Status</span>\n        </p>\n      </div>\n      <div class = \"stop-info-value {{monitoredCall.ArrivalStatus}}\">\n        <p>{{monitoredCall.ArrivalStatus}}</p>\n      </div>\n    </div>\n  </div>\n\n  <ul class=\"fancy-wrapper onwards\">\n  {{#onwardsCall}}\n    <li class=\"fancy-stop-wrapper\">\n      <div class=\"line-header\">\n        <h4>{{StopPointName}}</h4>\n      </div>\n      <div class=\"row\">\n        <div class=\"stop-info col-xs-6\">\n          <div class=\"stop-info-property\">\n            <p>\n              <span class=\"glyphicon glyphicon-time\"></span>\n              <span>Heure d'arrivée</span>\n            </p>\n          </div>\n          <div class=\"stop-info-value {{ArrivalStatus}}\">\n            <p>{{setCleanDate}}</p>\n          </div>\n        </div>\n        <div class=\"stop-info col-xs-6\">\n          <div class=\"stop-info-property\">\n            <p>\n              <span class=\"glyphicon glyphicon-signal\"></span>\n              <span>Status</span>\n            </p>\n          </div>\n          <div class=\"stop-info-value {{ArrivalStatus}}\">\n            <p>{{ArrivalStatus}}</p>\n          </div>\n        </div>\n      </div>\n    </li>\n  {{/onwardsCall}}\n  </ul>\n\n</li>";

    stopMonitoringCard.prototype.generalMessageTemplate = "<div class = \"panel panel-default stop-wrapper\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>General Message</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#generalMessage}}\n      <h4>General Message</h4>\n      {{#mustacheGeneralMessage}}\n        <div>{{key}} : {{value}}</div>\n      {{/mustacheGeneralMessage}}\n    {{/generalMessage}}\n  </div>\n</div>";

    stopMonitoringCard.prototype.generalMessageFancyTemplate = "<li class = \"fancy-stop-wrapper line-1\">\n  <div class = \"line-header\">\n    <h4>{{generalMessage.InfoChannelRef}}</h4>\n  </div>\n  <div class=\"row\">\n    {{#generalMessage.StopPointRef}}\n      <div class = \"stop-info col-xs-3\">\n        <div class = \"stop-info-property\">\n          <p>\n            <span class=\"glyphicon glyphicon-road\"></span>\n            <span>Arrêt</span>\n          </p>\n        </div>\n        <div class = \"stop-info-value\">\n          <p>{{generalMessage.StopPointRef}}</p>\n        </div>\n      </div>\n    {{/generalMessage.StopPointRef}}\n    {{#generalMessage.LineRef}}\n      <div class = \"stop-info col-xs-3\">\n        <div class = \"stop-info-property\">\n          <p>\n            <span class=\"glyphicon glyphicon-road\"></span>\n            <span>Ligne</span>\n          </p>\n        </div>\n        <div class = \"stop-info-value\">\n          <p>{{generalMessage.LineRef}}</p>\n        </div>\n      </div>\n    {{/generalMessage.LineRef}}\n    <div class = \"stop-info col-xs-2\">\n      <div class = \"stop-info-property\">\n        <p>\n          <span class=\"glyphicon glyphicon-time\"></span>\n          <span>Validité</span>\n        </p>\n      </div>\n      <div class = \"stop-info-value\">\n        <p>\n          {{setCleanDate}}\n        </p>\n      </div>\n    </div>\n    <div class = \"stop-info {{properWidth}}\">\n      <div class = \"stop-info-property\">\n        <p>\n          <span class=\"glyphicon glyphicon-signal\"></span>\n          <span>Annonce</span>\n        </p>\n      </div>\n      <div class = \"stop-info-value\">\n        <p>{{generalMessage.MessageText}}</p>\n      </div>\n    </div>\n  </div>";

    stopMonitoringCard.prototype.stopDiscoveryTemplate = "<div class = \"panel panel-default stop-wrapper {{lineColor}}\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{stopDiscovery.StopName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheStopDiscoveries}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheStopDiscoveries}}\n    <h4>Lines</h4>\n    {{#mustacheStopLines}}\n      {{#line}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/line}}\n    {{/mustacheStopLines}}\n  </div>\n</div>";

    stopMonitoringCard.prototype.lineDiscoveryTemplate = "<div class = \"panel panel-default stop-wrapper {{lineColor}}\">\n  <div class = \"panel-heading\">\n    <div class = \"stop-name\"></div>\n      <h4>{{lineDiscovery.LineName}}</h4>\n  </div>\n  <div class = \"panel-body\">\n    {{#mustacheLineDiscovery}}\n      <div>{{key}} : {{value}}</div>\n    {{/mustacheLineDiscovery}}\n    <h4>Lines</h4>\n    {{#mustacheLineDirections}}\n      {{#line}}\n        <div class = \"indented-response\">{{key}} : {{value}}</div>\n      {{/line}}\n    {{/mustacheLineDirections}}\n  </div>\n</div>";

    stopMonitoringCard.prototype.lineColors = {};

    stopMonitoringCard.prototype.parseSiriResponse = function(node) {
      var child, i, len, ref;
      this.stopMonitoredVisit = {};
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        this.buildResponseJSON(child);
      }
    };

    stopMonitoringCard.prototype.buildResponseJSON = function(node) {
      var child, i, j, l, len, len1, len2, ref, ref1, ref2;
      if (node.localName === 'FramedVehicleJourneyRef' || node.localName === 'MonitoredVehicleJourney') {
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          this.buildResponseJSON(child);
        }
      } else if (node.localName === 'MonitoredCall') {
        this.monitoredCall = {};
        ref1 = node.children;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          child = ref1[j];
          this.addMonitoredCall(child);
        }
      } else if (node.localName === 'OnwardCalls') {
        this.onwardsCall = [];
        ref2 = node.children;
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          child = ref2[l];
          this.addOnwards(child);
        }
      } else {
        this.stopMonitoredVisit[node.localName] = node.innerHTML;
      }
    };

    stopMonitoringCard.prototype.buildGeneralMessageJSON = function(node) {
      var child, i, len, ref;
      if (node.localName === 'Content' || node.localName === 'Message' || node.localName === 'GeneralMessage') {
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          this.buildGeneralMessageJSON(child);
        }
      } else {
        this.generalMessage[node.localName] = node.innerHTML;
      }
    };

    stopMonitoringCard.prototype.buildStopDiscoveryJSON = function(node) {
      var child, i, len, ref;
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        if (child.localName === 'Lines') {
          this.addStopLine(child);
        } else if (child.localName === 'Location') {
          this.addLocation(child);
        } else {
          this.stopDiscovery[child.localName] = child.innerHTML;
        }
      }
    };

    stopMonitoringCard.prototype.buildLineDiscoveryJSON = function(node) {
      var child, i, len, ref;
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        if (child.localName === 'Destinations') {
          this.addLineDirection(child);
        } else {
          this.lineDiscovery[child.localName] = child.innerHTML;
        }
      }
    };

    stopMonitoringCard.prototype.addLocation = function(node) {
      var child, i, len, ref;
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        this.stopDiscovery[child.localName] = child.innerHTML;
      }
    };

    stopMonitoringCard.prototype.addLineDirection = function(node) {
      var child, grandChild, i, j, len, len1, lineDirection, ref, ref1;
      this.lineDirections = [];
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        lineDirection = {};
        ref1 = child.children;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          grandChild = ref1[j];
          lineDirection[grandChild.localName] = grandChild.innerHTML;
        }
        this.lineDirections.push(lineDirection);
      }
    };

    stopMonitoringCard.prototype.addOnwards = function(node) {
      var child, i, len, onward, ref;
      onward = {};
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        this.addOnward(child, onward);
      }
      this.onwardsCall.push(onward);
    };

    stopMonitoringCard.prototype.addOnward = function(node, onward) {
      var child, i, len, ref;
      if (node.localName === 'ArrivalStopAssignment' || node.localName === 'DepartureStopAssignment') {
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          this.addOnward(child, onward);
        }
      } else {
        onward[node.localName] = node.innerHTML;
      }
    };

    stopMonitoringCard.prototype.addStopLine = function(node) {
      var child, i, len, line, ref;
      this.stopDiscoveryLines = [];
      ref = node.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        line = {};
        line[child.localName] = child.innerHTML;
        this.stopDiscoveryLines.push(line);
      }
    };

    stopMonitoringCard.prototype.addMonitoredCall = function(node) {
      var child, i, len, ref;
      if (node.localName === 'ArrivalStopAssignment' || node.localName === 'DepartureStopAssignment') {
        ref = node.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          this.addMonitoredCall(child);
        }
      } else {
        this.monitoredCall[node.localName] = node.innerHTML;
      }
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
      var line, lineInventory;
      lineInventory = Object.keys(this.lineColors).length + 1;
      if (this.stopMonitoredVisit.LineRef) {
        line = this.stopMonitoredVisit.LineRef;
      } else if (this.stopDiscovery.LineRef) {
        line = this.stopDiscovery.LineRef;
      } else if (this.lineDiscovery.LineRef) {
        line = this.lineDiscovery.LineRef;
      }
      if (this.lineColors[line]) {
        this.lineColors[line];
      } else {
        this.lineColors[line] = "line-" + lineInventory;
      }
      return this.lineColors[line];
    };

    stopMonitoringCard.prototype.setCleanDate = function() {
      var date;
      if (this.AimedArrivalTime !== void 0) {
        date = new Date(this.AimedArrivalTime);
      } else if (this.monitoredCall.AimedArrivalTime !== void 0) {
        date = new Date(this.monitoredCall.AimedArrivalTime);
      } else {
        date = new Date(this.generalMessage.ValidUntilTime);
      }
      if (date.getMinutes() > 9) {
        return date.getHours() + ":" + date.getMinutes();
      } else {
        return date.getHours() + ":0" + date.getMinutes();
      }
    };

    stopMonitoringCard.prototype.properWidth = function() {
      if (this.generalMessage.StopPointRef || this.generalMessage.LineRef) {
        return "col-xs-7";
      } else {
        return "col-xs-10";
      }
    };

    stopMonitoringCard.prototype.toggleFancyThings = function(el) {
      $(el).removeClass('i-m-there');
      if ($('#fancy-response-panel-wrapper').hasClass('i-m-there') === false) {
        $('#fancy-response-panel-wrapper').addClass('i-m-there');
      }
    };

    stopMonitoringCard.prototype.toggleClassicThings = function(el) {
      $(el).removeClass('i-m-there');
      if ($('#response-panel-wrapper').hasClass('i-m-there') === false) {
        $('#response-panel-wrapper').addClass('i-m-there');
      }
    };

    stopMonitoringCard.prototype.buildMustacheStopCard = function() {
      var k, ref, v;
      ref = this.stopMonitoredVisit;
      for (k in ref) {
        v = ref[k];
        if (this.stopMonitoredVisit.hasOwnProperty(k)) {
          this.mustacheStopMonitoredVisit.push({
            'key': k,
            'value': v
          });
        }
      }
    };

    stopMonitoringCard.prototype.buildMustacheMonitoredCall = function() {
      var k, ref, v;
      this.monitoredCall = this.checkSiriObject(this.monitoredCall);
      ref = this.monitoredCall;
      for (k in ref) {
        v = ref[k];
        if (this.monitoredCall.hasOwnProperty(k)) {
          this.mustacheMonitoredCall.push({
            'key': k,
            'value': v
          });
        }
      }
    };

    stopMonitoringCard.prototype.buildMustacheOnwards = function() {
      var i, k, len, onward, ref, tempOnward, v;
      ref = this.onwardsCall;
      for (i = 0, len = ref.length; i < len; i++) {
        onward = ref[i];
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
      var k, ref, v;
      ref = this.stopDiscovery;
      for (k in ref) {
        v = ref[k];
        if (this.stopDiscovery.hasOwnProperty(k)) {
          this.mustacheStopDiscoveries.push({
            'key': k,
            'value': v
          });
        }
      }
    };

    stopMonitoringCard.prototype.buildMustacheStopLines = function() {
      var i, k, len, line, ref, tempLine, v;
      ref = this.stopDiscoveryLines;
      for (i = 0, len = ref.length; i < len; i++) {
        line = ref[i];
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
      var k, ref, v;
      ref = this.lineDiscovery;
      for (k in ref) {
        v = ref[k];
        if (this.lineDiscovery.hasOwnProperty(k)) {
          this.mustacheLineDiscovery.push({
            'key': k,
            'value': v
          });
        }
      }
    };

    stopMonitoringCard.prototype.buildMustacheLineDirections = function() {
      var i, k, len, line, ref, tempLine, v;
      ref = this.lineDirections;
      for (i = 0, len = ref.length; i < len; i++) {
        line = ref[i];
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
      var k, ref, v;
      this.generalMessage = this.checkSiriObject(this.generalMessage);
      ref = this.generalMessage;
      for (k in ref) {
        v = ref[k];
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

    stopMonitoringCard.prototype.buildFancyGeneralMessage = function() {
      return this.renderFancyCard(this.generalMessageFancyTemplate);
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
      $("#response").append(rendered);
    };

    stopMonitoringCard.prototype.renderFancyCard = function(template) {
      var rendered;
      Mustache.parse(template);
      rendered = Mustache.render(template, this);
      $("#fancy-response").find('#fancy-wrapper').append(rendered);
    };

    return stopMonitoringCard;

  })();

}).call(this);
