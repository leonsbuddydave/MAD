(function() {

	/*
		Allows modules to subscribe to and publish various
		application-wide events
	*/
	var EventMessages = (function() {

		/* PRIVATE */

		var events = {};

		var subscribe = function(eventName, callback, scope) {

			if (typeof events[eventName] === 'undefined')
				events[eventName] = [];

			events[eventName].push({
				callback : callback,
				scope : scope
			});

		}

		var publish = function(eventName, ev) {

			var targets = events[eventName];

			for (var i = 0; i < targets.length; i++) {
				var e = targets[i];
				e.callback.call(scope, ev);
			}

		}

		/* PUBLIC */

		return {
			subscribe : subscribe,
			publish : publish
		};
	}());


	var InputBox = (function() {

		/* PRIVATE */

		var el = null;

		var bindEvents = function() {
			el.addEventListener("keyup", onKeyUp);
		}

		var onKeyUp = function(e) {
			console.log("Key up!");
		}

		/* PUBLIC */

		var setInput = function(e) {
			el = e;

			bindEvents();
		}



		return {
			setInput : setInput
		};
	}());

	/* ONLOAD */
	document.addEventListener("DOMContentLoaded", function(e) {

		InputBox.setInput( document.getElementById("command-input") );

	});

	window.EventMessages = EventMessages;
})();