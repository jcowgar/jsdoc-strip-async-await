/**
    @overview Remove async and await keywords.
    @module jsdoc-strip-async-await
    @author Jeremy Cowgar <jeremy@cowgar.com>
 */
'use strict';

/* eslint spaced-comment: 0 */

// Regex that matches await and async, but ignoring matches in comments or strings.
var re = /\/\/[^\r\n]*[\r\n]+|\/\*[\s\S]*?\*\/|(["'`])(?:\\\1|(?!\1).)*\1|\b(await\b\s*|async\b\s*)/g;

exports.handlers = {
	///
	/// Remove async and await keywords
	///
	/// @param e
	/// @param e.filename
	/// @param e.source
	///
	beforeParse: function (e) {
		e.source = e.source.replace(re, function () {
			if (arguments[0] === arguments[2]) {
				return '';
			}

			return arguments[0];
		});
	}
};
