'use strict';

exports.__generic = function (t, a) {
	var count = 0;
	a.equal(t.call(this, function (a) {
		return a + '|' + (++count);
	}, '0'), '0|1|2|3');
};
