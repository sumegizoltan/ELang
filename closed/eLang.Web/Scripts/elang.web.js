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

jQuery(document).ready(function() {
	jQuery.elang.setLang("hu");
	
	jQuery("img.lang-hu").click(function(){
		jQuery.elang.setLang("hu");
	});
	jQuery("img.lang-en").click(function(){
		jQuery.elang.setLang("en");
	});
	
	$("input.searchfield").elangEdit();
	
	$("#accordion").accordion({ header: "h3", active: 0 });
});