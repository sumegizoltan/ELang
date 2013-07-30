/// <reference name="MicrosoftAjax.js"/>

(function () {
    Type.registerNamespace("Sys");
    Type.registerNamespace("Sys.Extended");
    Type.registerNamespace("Sys.Extended.UI");

    var scriptName = "ELangSearch";

    if (Type._registerScript) {
        Type._registerScript("ELangSearch.js");
    }

    function execute() {

        Sys.Extended.UI.ELangSearch = function (element) {
            Sys.Extended.UI.ELangSearch.initializeBase(this, [element]);

            this._HeadLabel = "lblFindHead";
            this._ResultHeadLabel = "lblFindedExpressionsHead";
            this._ExpressionsLabel = "lblSearchInExpressions";
            this._MeaningsLabel = "lblSearchInMeanings";
            this._ExpressionsTooltip = "lblSearchInExpressionsHlp";
            this._MeaningsTooltip = "lblSearchInMeaningsHlp";
            this._SearchFormHtml = '<form class="form-search"><div class="input-append"></div></form>';
            this._SearchFieldHtml = '<input type="text" class="search-query" />';
            this._SearchButtonLabel = "lblFind";
            
            this._isSearchInExp = false;
            
            this._delegates = {};
        };
        Sys.Extended.UI.ELangSearch.prototype = {
            initialize: function () {
                Sys.Extended.UI.ELangSearch.callBaseMethod(this, 'initialize');
                
                this._delegates.directionClickHandler = Function.createDelegate(this, this._onDirectionClick);
                this._delegates.searchClickHandler = Function.createDelegate(this, this._onSearchClick);
                
                this._createContent();
            },

            dispose: function () {
                Sys.Extended.UI.ELangSearch.callBaseMethod(this, "dispose");
            },

            get_HeadLabel: function () { return this._HeadLabel; },
            set_HeadLabel: function (value) { this._HeadLabel = value; },
            get_ResultHeadLabel: function () { return this._ResultHeadLabel; },
            set_ResultHeadLabel: function (value) { this._ResultHeadLabel = value; },
            get_ExpressionsLabel: function () { return this._ExpressionsLabel; },
            set_ExpressionsLabel: function (value) { this._ExpressionsLabel = value; },
            get_MeaningsLabel: function () { return this._MeaningsLabel; },
            set_MeaningsLabel: function (value) { this._MeaningsLabel = value; },
            get_ExpressionsTooltip: function () { return this._ExpressionsTooltip; },
            set_ExpressionsTooltip: function (value) { this._ExpressionsTooltip = value; },
            get_MeaningsTooltip: function () { return this._MeaningsTooltip; },
            set_MeaningsTooltip: function (value) { this._MeaningsTooltip = value; },
            get_SearchFormHtml: function () { return this._SearchFormHtml; },
            set_SearchFormHtml: function (value) { this._SearchFormHtml = value; },
            get_SearchFieldHtml: function () { return this._SearchFieldHtml; },
            set_SearchFieldHtml: function (value) { this._SearchFieldHtml = value; },
            get_SearchButtonLabel: function () { return this._SearchButtonLabel; },
            set_SearchButtonLabel: function (value) { this._SearchButtonLabel = value; },
            
            _createContent: function (){
            	var el = this.get_element();
            	var header = document.createElement("div"); 
            	var content = document.createElement("div");
            	var innerContent = document.createElement("div");
            	var contentCSS = this.get_ContentCSS();
            	
            	el.appendChild(header);
            	el.appendChild(content);
            	
            	header = jQuery(header);
            	
            	// header
            	jQuery(String.format(this.get_LabelHtml(), this._HeadLabel)).appendTo(header);
            	
            	// content
            	content.appendChild(innerContent);
            	if (contentCSS) {
            		Sys.UI.DomElement.addCssClass(innerContent, contentCSS);
            	}
            	innerContent = jQuery(innerContent);
            	
            	var directionHandler = this._delegates.directionClickHandler;
            	this.createRadioGroup(innerContent, false, 2, 0, 
            			[this._ExpressionsLabel, this._MeaningsLabel], 
            			function(){ directionHandler(this); }, 
            			[this._ExpressionsTooltip, this._MeaningsTooltip]);
            	
            	var form = jQuery(this._SearchFormHtml);
                var input = jQuery(this._SearchFieldHtml);
                var search = jQuery(this.get_SubmitButtonHtml());
                var formIn = this.getLastChild(form);
                search.add(search.find("*")).filter("span").attr("id", this._SearchButtonLabel);
                search.click(this._delegates.searchClickHandler);
                formIn.append(input);
                formIn.append(search);
                innerContent.append(form);
            	
            	header = header[0];
            	
            	// set labels
            	this._setLang(header);
            	this._setLang(content);
            	
            	// add panel as accordion pane
            	this._setAccordion(header, content);
            },
            
            _onDirectionClick: function(eSrc){
            	this._isSearchInExp = this._isRdoChecked(eSrc, this._ExpressionsLabel);
            },
            
            _onSearchClick: function(){
            	
            }
        };

        Sys.Extended.UI.ELangSearch.registerClass('Sys.Extended.UI.ELangSearch', Sys.Extended.UI.ELangBase);
        if (Sys.registerComponent) { Sys.registerComponent(Sys.Extended.UI.ELangSearch, { name: 'ELangSearch' }); }


    } // execute

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript(scriptName, ["ELangBase"], execute);
    }
    else {
        execute();
    }
})();