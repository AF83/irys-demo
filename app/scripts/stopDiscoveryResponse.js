(function() {
  window.stopDiscoveryResponse = (function() {
    function stopDiscoveryResponse() {}

    stopDiscoveryResponse.prototype.autocomplete = {};

    stopDiscoveryResponse.prototype.typeRef = function(type) {
      if (type === 'Stop') {
        type = type + 'Point';
      }
      return type + 'Ref';
    };

    stopDiscoveryResponse.prototype.buildAutocompleteArray = function(nodes, type) {
      var i, len, name, node, ref;
      this.autocomplete = [];
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        ref = node.getElementsByTagNameNS('http://www.siri.org.uk/siri', this.typeRef(type))[0].innerHTML;
        name = node.getElementsByTagNameNS('http://www.siri.org.uk/siri', type + 'Name')[0].innerHTML;
        this.autocomplete.push({
          id: ref,
          label: name + ' ' + ref
        });
      }
      if (type === 'Stop') {
        this.initiateAutocomplete('stop');
        return this.initiateAutocomplete('destination');
      } else if (type === 'Line') {
        return this.initiateAutocomplete('line');
      }
    };

    stopDiscoveryResponse.prototype.initiateAutocomplete = function(type) {
      return $('#stop-monitoring-form #' + type + 'Name, #canned-requests #' + type + 'Name').autocomplete({
        minLength: 0,
        source: this.autocomplete,
        focus: function(event, ui) {
          $(this).parentsUntil('form').find('#' + type + 'Name').val(ui.item.label);
          return false;
        },
        select: function(event, ui) {
          $(this).parentsUntil('.right-app-panel').find('#' + type + 'Name').val(ui.item.label);
          $(this).parentsUntil('.right-app-panel').find('#' + type + 'Id').val(ui.item.id);
          return false;
        }
      }).autocomplete('instance')._renderItem = function(ul, item) {
        return $('<li>').append('<a>' + item.label + '</a>').appendTo(ul);
      };
    };

    return stopDiscoveryResponse;

  })();

}).call(this);
