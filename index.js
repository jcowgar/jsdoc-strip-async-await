/**
    @overview Very generically remove async and await keywords.
    @module jsdoc-strip-async-await
    @author Jeremy Cowgar <jeremy@cowgar.com>
 */
'use strict';

/* eslint spaced-comment: 0 */

exports.handlers = {
    ///
    /// Remove async and await keywords
    ///
    /// @param e
    /// @param e.filename
    /// @param e.source
    ///
    beforeParse: function(e) {
        e.source = e.source.replace(/\basync\b/g, '');
        e.source = e.source.replace(/\bawait\b/g, '');
    }
};
