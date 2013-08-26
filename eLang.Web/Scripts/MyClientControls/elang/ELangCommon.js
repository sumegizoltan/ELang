(function(){Type.registerNamespace("Sys");Type.registerNamespace("Sys.Extended");Type.registerNamespace("Sys.Extended.UI");var b="ELangCommon";if(Type._registerScript){Type._registerScript("ELangCommon.js")}function a(){Sys.Extended.UI.ELangCommon=function(c){Sys.Extended.UI.ELangCommon.initializeBase(this,[c]);this._ClassName="ui-widget content";this._HeaderClass="ui-widget-header ui-corner-all";this._Languages="en,hu,de";this._LangMenuHeight=20;this._LangMenuItemTemplate='<img src="img/{0}.png" class="ui-menu-icon ui-button" alt="{0}" />';this._SelectedLang="en";this._delegates={}};Sys.Extended.UI.ELangCommon.prototype={initialize:function(){Sys.Extended.UI.ELangCommon.callBaseMethod(this,"initialize");this._delegates.langItemClick=Function.createDelegate(this,this._setLang);if(this._ClassName){Sys.UI.DomElement.addCssClass(this.get_element(),this._ClassName)}this._createHeader();this._createLangMenu();this._setLang(this._SelectedLang);this._createAccordion()},dispose:function(){Sys.Extended.UI.ELangCommon.callBaseMethod(this,"dispose")},get_ClassName:function(){return this._ClassName},set_ClassName:function(c){this._ClassName=c},get_HeaderClass:function(){return this._HeaderClass},set_HeaderClass:function(c){this._HeaderClass=c},get_Languages:function(){return this._Languages},set_Languages:function(c){this._Languages=c},get_SelectedLang:function(){return this._SelectedLang},set_SelectedLang:function(c){this._SelectedLang=c},get_LangMenuHeight:function(){return this._LangMenuHeight},set_LangMenuHeight:function(c){this._LangMenuHeight=c},get_LangMenuItemTemplate:function(){return this._LangMenuItemTemplate},set_LangMenuItemTemplate:function(c){this._LangMenuItemTemplate=c},_createAccordion:function(){$create(Sys.Extended.UI.AccordionBehavior,{},null,null,this.get_element())},_getAccordion:function(){var d=null;var c=Sys.UI.Behavior.getBehaviorsByType(this.get_element(),Sys.Extended.UI.AccordionBehavior);if(0 in c){d=c[0]}return d},_createHeader:function(){var d=document.createElement("div");var c=document.createElement("span");c.id="lblPageHeader";if(this._HeaderClass){Sys.UI.DomElement.addCssClass(d,this._HeaderClass)}d.appendChild(c);this.get_element().parentNode.insertBefore(d,this.get_element())},_createLangMenu:function(){var g=document.createElement("div");var f=this._Languages.split(",");var d=this._delegates.langItemClick;if(this._LangMenuHeight){g.style.height=this._LangMenuHeight+"px"}document.insertBefore(g,this.get_element());g=jQuery(g);for(var c=0;c<f.length;c++){var e=jQuery(String.format(this._LangMenuItemTemplate,f[c]));e.click(function(){d(f[c])});e.appendTo(g)}},_setLang:function(d,c){Sys.require([Sys.scripts["ELangResource."+d]],function(){this._SelectedLang=d;if(d in Sys.Extended.UI.ELangResource){var e;if(c){e=c.find("*").filter('[id*="lbl"], [id*="btn"], [title-label]')}else{e=jQuery('[id*="lbl"], [id*="btn"], [title-label]')}e.each(function(){var f=this;if(f.hasAttribute("title-label")){var h=f.getAttribute("title-label");var g=(f.hasAttribute("data-original-title"))?"data-original-title":"title";if(h in Sys.Extended.UI.ELangResource[d]){f.setAttribute(g,Sys.Extended.UI.ELangResource[d][h])}else{f.setAttribute(g,"")}}if(f.id in Sys.Extended.UI.ELangResource[d]){if(/INPUT/.test(f.tagName)){if((f.getAttribute("type")=="text")&&f.hasAttribute("placeholder")){f.setAttribute("placeholder",Sys.Extended.UI.ELangResource[d][f.id])}else{jQuery(f).text(Sys.Extended.UI.ELangResource[d][f.id])}}else{jQuery(f).text(Sys.Extended.UI.ELangResource[d][f.id])}}})}})}};if(Sys.Extended.UI.BehaviorBase){Sys.Extended.UI.ELangCommon.registerClass("Sys.Extended.UI.ELangCommon",Sys.Extended.UI.BehaviorBase)}else{Sys.Extended.UI.ELangCommon.registerClass("Sys.Extended.UI.ELangCommon",Sys.UI.Behavior)}if(Sys.registerComponent){Sys.registerComponent(Sys.Extended.UI.ELangCommon,{name:"ELangCommon"})}}if(window.Sys&&Sys.loader){Sys.loader.registerScript(b,["ExtendedBase","ExtendedCommon"],a)}else{a()}})();