// Adapted from https://www.w3schools.com/html/html5_webworkers.asp

var myWorker;

const toggleElementDisabled = function (elementId) {
	document.getElementById(elementId).getAttribute('disabled') !== null
		? document.getElementById(elementId).removeAttribute('disabled')
		: document.getElementById(elementId).setAttribute('disabled', true);
};

function startWorker() {
	if (typeof(Worker) !== 'undefined') {
		if (typeof(myWorker) == 'undefined') {
			myWorker = new Worker('worker.js');
		};

		myWorker.addEventListener('message', function (event) {
			console.log('Inside main app:', event.data);
			document.getElementById('result').innerHTML = event.data;
		}, false);

		toggleElementDisabled('startWorkerButton');
		toggleElementDisabled('stopWorkerButton');
		toggleElementDisabled('addTenButton');
	}
	else {
		document.getElementById('result').innerHTML = 'Sorry! No Web Worker support.';
	}
}

function stopWorker() { 
	myWorker.terminate();
	myWorker = undefined;

	toggleElementDisabled('startWorkerButton');
	toggleElementDisabled('stopWorkerButton');
	toggleElementDisabled('addTenButton');
}

function addTen() { 
	myWorker.postMessage({ increment: 10 });
}
