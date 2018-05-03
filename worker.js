var i = 0;

var timedCount = function () {
	i = i + 1;
	self.postMessage(i);
	setTimeout(timedCount, 500);
}

self.addEventListener('message', function (event) {
	console.log('Inside worker:', event);
	if (event.data.increment) i += event.data.increment;
}, false);

timedCount();