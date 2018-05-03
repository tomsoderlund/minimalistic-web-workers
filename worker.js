var i = 0;

var timedCount = function () {
	i = i + 1;
	postMessage(i);
	setTimeout(timedCount, 500);
}

self.addEventListener('message', function (event) {
	console.log('Inside worker:', event);
	//self.postMessage(event.data);
	if (event.data.increment) i += event.data.increment;
}, false);

timedCount();