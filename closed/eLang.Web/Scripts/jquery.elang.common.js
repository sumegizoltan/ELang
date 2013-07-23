/// <reference path="jquery.elang.lang.en.js" />
/// <reference path="jquery.elang.lang.hu.js" />
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

Function.createDelegate = function (instance, method) {
    return function () {
        return method.apply(instance, arguments);
    };
};

(function (jQuery) {
    jQuery.extend(true, jQuery, { elang: {} });
    
    var methods = {
    	resource: { 
    		lang: {}
    	},
        setLang: function (langid) {
            if (langid in jQuery.elang.resource.lang) {
            	if ("lblTitle" in jQuery.elang.resource.lang[langid]) {
            		document.head.title = jQuery.elang.resource.lang[langid].lblTitle;
            	}
            	
            	jQuery('[id*="lbl"], [id*="btn"]').each(function(){
            		if (this.id in jQuery.elang.resource.lang[langid]) {
            			jQuery(this).text(jQuery.elang.resource.lang[langid][this.id]);
            		}
            	});
            }
        }
    };

    jQuery.extend(true, jQuery.elang, methods);
})(jQuery);