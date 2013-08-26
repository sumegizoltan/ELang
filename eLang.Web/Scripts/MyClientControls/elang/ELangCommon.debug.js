/// <reference name="MicrosoftAjax.js"/>

(function () {
    Type.registerNamespace("Sys");
    Type.registerNamespace("Sys.Extended");
    Type.registerNamespace("Sys.Extended.UI");

    var scriptName = "ELangCommon";

    if (Type._registerScript) {
        Type._registerScript("ELangCommon.js");
    }

    function execute() {

        Sys.Extended.UI.ELangCommon = function (element) {
            Sys.Extended.UI.ELangCommon.initializeBase(this, [element]);

            this._ClassName = "ui-widget content";
            this._HeaderClass = "ui-widget-header ui-corner-all";
            this._Languages = "en,hu,de";
            this._LangMenuHeight = 20;
            this._LangMenuItemTemplate = '<img src="img/{0}.png" class="ui-menu-icon ui-button" alt="{0}" />';
            
            this._SelectedLang = "en";
            
            this._delegates = {};
        };
        Sys.Extended.UI.ELangCommon.prototype = {
            initialize: function () {
                Sys.Extended.UI.ELangCommon.callBaseMethod(this, 'initialize');
                
                this._delegates.langItemClick = Function.createDelegate(this, this._setLang);
                
                if (this._ClassName) {
                	Sys.UI.DomElement.addCssClass(this.get_element(), this._ClassName);
                }
                
                this._createHeader();
                this._createLangMenu();
                this._setLang(this._SelectedLang);
                this._createAccordion();
            },

            dispose: function () {
                Sys.Extended.UI.ELangCommon.callBaseMethod(this, "dispose");
            },

            get_ClassName: function () { return this._ClassName; },
            set_ClassName: function (value) { this._ClassName = value; },
            get_HeaderClass: function () { return this._HeaderClass; },
            set_HeaderClass: function (value) { this._HeaderClass = value; },
            get_Languages: function () { return this._Languages; },
            set_Languages: function (value) { this._Languages = value; },
            get_SelectedLang: function () { return this._SelectedLang; },
            set_SelectedLang: function (value) { this._SelectedLang = value; },
            get_LangMenuHeight: function () { return this._LangMenuHeight; },
            set_LangMenuHeight: function (value) { this._LangMenuHeight = value; },
            get_LangMenuItemTemplate: function () { return this._LangMenuItemTemplate; },
            set_LangMenuItemTemplate: function (value) { this._LangMenuItemTemplate = value; },
            
            _createAccordion: function(){
            	$create(Sys.Extended.UI.AccordionBehavior, {}, null, null, this.get_element());
            },
            
            _getAccordion: function () {
                var behavior = null;

                var behaviors = Sys.UI.Behavior.getBehaviorsByType(this.get_element(), Sys.Extended.UI.AccordionBehavior);
                if (0 in behaviors) {
                    behavior = behaviors[0];
                }

                return behavior;
            },
            
            _createHeader: function(){
            	var header = document.createElement("div");
            	var label = document.createElement("span");
            	
            	label.id = "lblPageHeader";
            	
            	if (this._HeaderClass) {
                	Sys.UI.DomElement.addCssClass(header, this._HeaderClass);
                }
            	
            	header.appendChild(label);
            	this.get_element().parentNode.insertBefore(header, this.get_element());
            },
            
            _createLangMenu: function(){
            	var menu = document.createElement("div");
            	var lang = this._Languages.split(',');
            	var handler = this._delegates.langItemClick;
            	
            	if (this._LangMenuHeight) {
            		menu.style.height = this._LangMenuHeight + "px";
            	}

            	document.insertBefore(menu, this.get_element());
            	menu = jQuery(menu);
            	
            	for (var i = 0; i < lang.length; i++) {
            		var item = jQuery(String.format(this._LangMenuItemTemplate, lang[i]));
            		
            		item.click(function(){ handler(lang[i]); });
            		
            		item.appendTo(menu);
            	}
            },
            
            _setLang: function(langid, node){
            	Sys.require([Sys.scripts["ELangResource." + langid]], function(){
            		
            		this._SelectedLang = langid;
            		
            		if(langid in Sys.Extended.UI.ELangResource) {
                        var elements;
                        
                        if(node) {
                            elements = node.find('*').filter('[id*="lbl"], [id*="btn"], [title-label]');
                        } else {
                            elements = jQuery('[id*="lbl"], [id*="btn"], [title-label]');
                        }
                        
                        elements.each(function () {
                            var el = this;
                            
                            if(el.hasAttribute("title-label")) {
                                var title = el.getAttribute("title-label");
                                var attribute = (el.hasAttribute("data-original-title")) ? "data-original-title" : "title";
                                if(title in Sys.Extended.UI.ELangResource[langid]) {
                                    el.setAttribute(attribute, Sys.Extended.UI.ELangResource[langid][title]);
                                } else {
                                    el.setAttribute(attribute, "");
                                }
                            }
                            
                            if(el.id in Sys.Extended.UI.ELangResource[langid]) {
                                if(/INPUT/.test(el.tagName)) {
                                    if((el.getAttribute("type") == "text") && el.hasAttribute("placeholder")) {
                                        el.setAttribute("placeholder", Sys.Extended.UI.ELangResource[langid][el.id]);
                                    } else {
                                        jQuery(el).text(Sys.Extended.UI.ELangResource[langid][el.id]);
                                    }
                                } else {
                                    jQuery(el).text(Sys.Extended.UI.ELangResource[langid][el.id]);
                                }
                            }
                        });
                    }
            	});
            }
        };

        if (Sys.Extended.UI.BehaviorBase) {
            Sys.Extended.UI.ELangCommon.registerClass('Sys.Extended.UI.ELangCommon', Sys.Extended.UI.BehaviorBase);
        }
        else {
            Sys.Extended.UI.ELangCommon.registerClass('Sys.Extended.UI.ELangCommon', Sys.UI.Behavior);
        }
        if (Sys.registerComponent) { Sys.registerComponent(Sys.Extended.UI.ELangCommon, { name: 'ELangCommon' }); }


    } // execute

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript(scriptName, ["ExtendedBase", "ExtendedCommon"], execute);
    }
    else {
        execute();
    }
})();