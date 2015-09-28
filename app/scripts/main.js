// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');

	$(function() {
    var stopDSC = new stopMonitoringRequest;
    var stopDscRequest = stopDSC.getStopDiscovery();
    var lineDscRequest = stopDSC.getLineDiscovery();
    var stopDSCResponse = new stopDiscoveryResponse;


    var availableStations;
    stopDSC.sendRequest(stopDscRequest, stopDSC.handleStopDiscoveryResponse, stopDSCResponse);

    stopDSC.sendRequest(lineDscRequest, stopDSC.handleLineDiscoveryResponse, stopDSCResponse);

  });

  $('#siriVersionAPI3, #siriGeneralVersionAPI3').on('click', function() {
    var hiddenFields = []
    hiddenFields = $(this).parentsUntil('.form-horizontal').find('.hidden')
    hiddenFields.each(function(index, elt) {
      $(elt).removeClass('hidden');
    });
  });

  $('#siriVersionAPI2, #siriVersionAPI1, #siriGeneralVersionAPI2, #siriGeneralVersionAPI1').on('click', function() {

    var nodeName = $(this).parentsUntil('.form-horizontal').find('#requestorNameWrapper')
    var nodeVersion = $(this).parentsUntil('.form-horizontal').find('#requestorVersionWrapper')
    var hiddenArray = [nodeName, nodeVersion];

    if ($(this).prop('id') == "siriGeneralVersionAPI1" || $(this).prop('id') == "siriGeneralVersionAPI2") {
      var nodeDestinationRef =  $(this).parentsUntil('.form-horizontal').find('#destinationRefWrapper')
      var nodeGroupDestination = $(this).parentsUntil('.form-horizontal').find('#groupOfLinesRefWrapper')
      hiddenArray = hiddenArray.concat([nodeDestinationRef, nodeGroupDestination]);
    } else {
      var nodeMinimumStopVisitPerLine = $(this).parentsUntil('.form-horizontal').find('#minimumStopVisitPerLineViaWrapper')
      hiddenArray = hiddenArray.concat([nodeMinimumStopVisitPerLine]);
    };

    hiddenArray.forEach(function(elt) {
      if (elt.hasClass('hidden') == false) {
        elt.addClass('hidden');
      }
    });
  });

  function superToggle(el) {
    if ($(el).hasClass('i-m-there')) {
      $(el).removeClass('i-m-there');
    }
    else {
      $(el).addClass('i-m-there');
    }
  }

   $('.navbar-nav > li > ul > li > a, #first-SM-request, #first-GM-request, #first-SD-request').on('click', function(e){
    e.preventDefault();
    $('.pannel-trigger').show();
   })

  $('#home-button, #get-other-services').on('click', function(e) {
    e.preventDefault();
    $('.pannel-trigger').hide();
  })
  $('.navbar-nav > li > ul > li > a, #get-other-services, #first-SM-request, #first-GM-request, #first-SD-request, #home-button').on('click', function(e) {
    e.preventDefault();

    var target = this.getAttribute('href');
    $('.i-m-there').each(function(index, el) {
      $(el).removeClass('i-m-there');
    });

    superToggle(target);

    if ($('#response-panel-wrapper').hasClass('i-m-there')) {
      $('#response-panel-wrapper').removeClass('i-m-there');
    };
  });

  $('#stop-monitoring-trigger, #first-SM-request').on('click', function(e) {
    e.preventDefault();

    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there') != true) {
      $('#stop-monitoring-form-wrapper').addClass('i-m-there');
      $('#backlink-form-from-response').attr("href", "#stop-monitoring-form-wrapper");
      $('#fancy-backlink-form-from-response').attr("href", "#stop-monitoring-form-wrapper");
    }

    if ($('#service-discovery-form-wrapper').hasClass('i-m-there')) {
      $('#service-discovery-form-wrapper').removeClass('i-m-there');
    }

    if ($('#get-general-message-form-wrapper').hasClass('i-m-there')) {
      $('#get-general-message-form-wrapper').removeClass('i-m-there');
    }
    if ($('#check-status-form-wrapper').hasClass('i-m-there')) {
      $('#check-status-form-wrapper').removeClass('i-m-there');
    }
    $('.fancy-view').show();
  });

  $('#get-general-message-trigger, #first-GM-request').on('click', function(e) {
    e.preventDefault();

    if ($('#get-general-message-form-wrapper').hasClass('i-m-there') != true) {
      $('#get-general-message-form-wrapper').addClass('i-m-there');
      $('#backlink-form-from-response').attr("href", "#get-general-message-form-wrapper");
      $('#fancy-backlink-form-from-response').attr("href", "#get-general-message-form-wrapper");
    }

    if ($('#service-discovery-form-wrapper').hasClass('i-m-there')) {
      $('#service-discovery-form-wrapper').removeClass('i-m-there');
    }

    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there')) {
      $('#stop-monitoring-form-wrapper').removeClass('i-m-there');
    }
    if ($('#check-status-form-wrapper').hasClass('i-m-there')) {
      $('#check-status-form-wrapper').removeClass('i-m-there');
    }
    $('.fancy-view').show();
  });

  $('#service-discovery-trigger, #first-SD-request').on('click', function(e) {
    e.preventDefault();

    if ($('#service-discovery-form-wrapper').hasClass('i-m-there') != true) {
      $('#service-discovery-form-wrapper').addClass('i-m-there');
      $('#backlink-form-from-response').attr("href", "#service-discovery-form-wrapper");
      $('#fancy-backlink-form-from-response').attr("href", "#service-discovery-form-wrapper");
    }

    if ($('#get-general-message-form-wrapper').hasClass('i-m-there') == true) {
      $('#get-general-message-form-wrapper').removeClass('i-m-there');
    }

    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there') == true) {
      $('#stop-monitoring-form-wrapper').removeClass('i-m-there');
    }
    if ($('#check-status-form-wrapper').hasClass('i-m-there')) {
      $('#check-status-form-wrapper').removeClass('i-m-there');
    }
    $('.fancy-view').hide();
  });

  $('#check-status-trigger').on('click', function(e) {
    e.preventDefault();

    if ($('#check-status-form-wrapper').hasClass('i-m-there') != true) {
      $('#check-status-form-wrapper').addClass('i-m-there');
      $('#backlink-form-from-response').attr("href", "#check-status-form-wrapper");
    }

    if ($('#get-general-message-form-wrapper').hasClass('i-m-there') == true) {
      $('#get-general-message-form-wrapper').removeClass('i-m-there');
    }

    if ($('#stop-monitoring-form-wrapper').hasClass('i-m-there') == true) {
      $('#stop-monitoring-form-wrapper').removeClass('i-m-there');
    }

    if ($('#service-discovery-form-wrapper').hasClass('i-m-there')) {
      $('#service-discovery-form-wrapper').removeClass('i-m-there');
    }
    $('.fancy-view').hide();
  });

  $('.backlinking a').on('click', function(e) {
    e.preventDefault();
    var target = this.getAttribute('href');
    $('#right-panel-wrapper').find('.i-m-there').each(function(index, el) {
      $(el).removeClass('i-m-there');
    });

    superToggle(target);

  });
  $('.request-form-opener').on('click', function(e){
    e.preventDefault();
    $('.right-panel-wrapper').toggleClass('open');

  });
  $('.right-panel-wrapper').on('click', '.pannel-trigger', function(e) {
    e.preventDefault();
    $(this).closest('.right-panel-wrapper').toggleClass('open');
  });

});
