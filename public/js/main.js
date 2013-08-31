(function() {

	var EventMessages = (function() {

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

		return {
			subscribe : subscribe,
			publish : publish
		};
	}());


	/* ONLOAD */
	document.addEventListener("DOMContentLoaded", function(e) {

	});

})();