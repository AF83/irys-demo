// jshint devel:true
$(document).ready( function() {
	console.log('\'Allo \'Allo!');
	$(function() {
    var availableStations = [
      "Nation",
      "République",
      "Bastille",
      "Invalides",
      "la Muette",
      "Javel",
      "Pasteur",
      "Motte-Picquet Grenelle",
      "Duroc",
      "Ségur",
      "Cambronne",
      "Charonne",
      "Voltaire",
      "Ranelagh"
    ];
    $( "#inputStartingPoint" ).autocomplete({
      source: availableStations
    });
    $( "#inputEndintgPoint" ).autocomplete({
      source: availableStations
    });
    $( "#inputDayDate" ).datepicker();
    $( "#Start" ).timepicker({
    	controlType: 'select'
    });
  });
  
});
