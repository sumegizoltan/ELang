/// <reference path="jquery-1.9.1.js" />
/// <reference path="jquery-ui-1.10.0.js" />
/// <reference path="jquery.elang.common.js" />
/// <reference path="jquery.elang.db.js" />
/*!
 * eLang - Language Learning
 * http://www.sumegi.net
 * https://bitbucket.org/zoli73/elang
 *
 *
 * Copyright 2013 Zoltan Sumegi
 * Released under the MPL license
 * http://www.mozilla.org/MPL/2.0/index.txt
 * 
 * Date: 2013-2-14
 */

(function (jQuery) {
    jQuery.extend(true, jQuery, { elang: {} });

    var methods = {
        name: "elang-Edit",
        description: "eLang - Language Learning search functionality.",
        delegates: {
            selectHandler: null,
            selectCallback: null
        },
        options: {
        },
        initialize: function (target, options) {
            this.options = jQuery.extend(true, this.options, options);

            this.delegates.selectHandler = Function.createDelegate(this, this._onSelect);
            this.delegates.selectCallback = Function.createDelegate(this, this._onSelectCallback);

            var delegates = this.delegates;

            $(target).keyup(function () { delegates.selectHandler(this); });
        },
        _onSelectCallback: function () {

        },
        _onSelect: function (eSrc) {
            //TODO - show selected element
            var db, id = "";

            id = eSrc.value;

            db = jQuery.elang.DB.getInstance();
            db.select(id, this.delegates.selectCallback);
        }
    };

    jQuery.fn.elangSearch = function (options) {
        var _elangSearch = jQuery.extend(true, {}, methods);
        _elangSearch.initialize(this, options);
    };
})(jQuery);