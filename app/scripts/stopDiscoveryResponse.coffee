class window.stopDiscoveryResponse
  autocomplete: {}

  typeRef:(type) ->
    if type == 'Stop'
      type = type + 'Point'
    type + 'Ref'

  buildAutocompleteArray:(nodes, type) ->
    @autocomplete = []
    
    for node in nodes
    	ref = node.getElementsByTagNameNS('http://www.siri.org.uk/siri', this.typeRef(type))[0].innerHTML
    	name = node.getElementsByTagNameNS('http://www.siri.org.uk/siri', type + 'Name')[0].innerHTML
    
	    @autocomplete.push({
	    	id: ref,
	    	label: name + ' ' + ref
	    })
    
    if type == 'Stop'
        this.initiateAutocomplete('stop')
        this.initiateAutocomplete('destination')
    else if type == 'Line'
        this.initiateAutocomplete('line')
        
  initiateAutocomplete:(type) ->
    $('#stop-monitoring-form #' + type + 'Name, #canned-requests #' + type + 'Name').autocomplete(
      minLength: 0
      source: @autocomplete
      focus: (event, ui) ->
        $(this).parentsUntil('form').find('#' + type + 'Name').val ui.item.label
        false
      select: (event, ui) ->
        $(this).parentsUntil('.right-app-panel').find('#' + type + 'Name').val ui.item.label
        $(this).parentsUntil('.right-app-panel').find('#' + type + 'Id').val ui.item.id
        false
    ).autocomplete('instance')._renderItem = (ul, item) ->
      $('<li>').append('<a>' + item.label + '</a>').appendTo ul
