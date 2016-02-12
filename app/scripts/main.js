// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');
    $(".siri_24").css("display", "none");
    autocomplete();
    
 function autocomplete() {
    var request = new stopMonitoringRequest;
    request.siriVersionAPI = $("#siri-server-value").attr('data-version');
    request.requestorRef = $("#siri-server-value").attr('data-requestor');
    var response = new stopDiscoveryResponse;
    request.sendRequest(request.getStopDiscovery(), request.handleStopDiscoveryResponse, response);
    request.sendRequest(request.getLineDiscovery(), request.handleLineDiscoveryResponse, response);    
  }
  
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
      $('#xml-backlink-form-from-response').attr("href", "#stop-monitoring-form-wrapper");
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
      $('#xml-backlink-form-from-response').attr("href", "#get-general-message-form-wrapper");
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
      $('#xml-backlink-form-from-response').attr("href", "#service-discovery-form-wrapper");

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

  $('.reset-stop-id').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parentsUntil('form')
    parent.find('#stopId').val('');
    parent.find('#stopName').val('');

  })
  
  $('.reset-destination-id').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parentsUntil('form')
    parent.find('#destinationId').val('');
    parent.find('#destinationName').val('');

  })

  $('.reset-line-id').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parentsUntil('form')
    parent.find('#lineId').val('');
    parent.find('#lineName').val('');

  })
  
  $('#siri-server-choice').on('click','ul li a', function(e) {
	  var text = $(this).text();
	  var value = $(this).attr('data-value');
	  var version = $(this).attr('data-version');
	  var requestor = $(this).attr('data-requestor');
	  
	  var node = $("#siri-server-value");
	  node.text(text).append('<span class="caret"></span>');
	  node.attr('data-value', value);
	  node.attr('data-version', version);
	  node.attr('data-requestor', requestor);
	  	  
	  if(version == '1.3'){
		  $(".siri_24").css("display", "none");
	  }else{
		  $(".siri_24").css("display", "block");
	  }  
	  
	  autocomplete();
	  
	  $('.pannel-trigger').hide();
  });
});
