var i = 0;

var updateTimer = function () {
	i = i + 1;
	self.postMessage(i);
	setTimeout(updateTimer, 500);
}

self.addEventListener('message', function (event) {
	console.log('Inside worker:', event.data);
	if (event.data.increment) i += event.data.increment;
}, false);

updateTimer();
