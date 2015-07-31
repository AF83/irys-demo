var STOPDISCOVERYDATA = {
	"stopId": null,
	"LineId": null,
	"DestId": null,
	"OperatorId": null,
	"Start": null,
	"Preview": null,
	"TypeVisit": null,
	"MaxStop": null,
	"MinStLine": null,
	"onward": null
}

function setProperStartDate(date) {
	var requestDate = new Date();
	if (date) {
		var dateValues = date.split(':');
		var minutes = dateValues[1];
		var hours = dateValues[0];
		requestDate.setHours(hours);
		requestDate.setMinutes(minutes);
	}
	console.log(requestDate.toISOString())
	return requestDate.toISOString();
}

function getStopDiscoveryData(el, dataObject) {
	var form = $(el);
	var input;
	
	for (var key in dataObject) {
		input = form.find('#' + key);
		dataObject[key] = input.val();
	}

	dataObject['Start'] = setProperStartDate(dataObject['Start']);
	return dataObject;
}

(function () {
	console.log(getStopDiscoveryData('.stop-discovery', STOPDISCOVERYDATA));
})()