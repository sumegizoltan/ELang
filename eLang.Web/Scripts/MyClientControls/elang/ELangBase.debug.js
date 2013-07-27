/// <reference name="MicrosoftAjax.js"/>

(function () {
    Type.registerNamespace("Sys");
    Type.registerNamespace("Sys.Extended");
    Type.registerNamespace("Sys.Extended.UI");

    var scriptName = "ELangBase";

    if (Type._registerScript) {
        Type._registerScript("ELangBase.js");
    }

    function execute() {

        Sys.Extended.UI.ELangBase = function (element) {
            Sys.Extended.UI.ELangBase.initializeBase(this, [element]);

            this.ResultCSS = "result well well-small";
            this.ResultHeadCSS = "ui-widget-content ui-corner-all result-head";
            this.ContentInnerCSS = "content";
            this.ContentInnerHtml = '<div></div>';
            this.FluidRowHtml = '<div class="row-fluid"></div>';
            this.RadioGroupHtml = '<div class="btn-group" data-toggle="buttons-radio"></div>';
            this.RadioButtonHtml = '<button type="button" class="btn btn-primary"><span></span></button>';
            this.SubmitButtonHtml = '<button type="submit" class="btn btn-primary"><span></span></button>';
            this.HeadLabelHtml = '<span class="label"></span>';
            this.ResultHeadLabelHtml = '<span class="label label-info"></span>';
            this.ResultHtml = '<div><div></div></div>';
        };
        Sys.Extended.UI.ELangBase.prototype = {
            initialize: function () {
                Sys.Extended.UI.ELangBase.callBaseMethod(this, 'initialize');
                
                
            },

            dispose: function () {
                Sys.Extended.UI.ELangBase.callBaseMethod(this, "dispose");
            },

            get_ResultCSS: function () { return this._ResultCSS; },
            set_ResultCSS: function (value) { this._ResultCSS = value; },
            get_ResultHeadCSS: function () { return this._ResultHeadCSS; },
            set_ResultHeadCSS: function (value) { this._ResultHeadCSS = value; },
            get_ContentInnerCSS: function () { return this._ContentInnerCSS; },
            set_ContentInnerCSS: function (value) { this._ContentInnerCSS = value; },
            get_ContentInnerHtml: function () { return this._ContentInnerHtml; },
            set_ContentInnerHtml: function (value) { this._ContentInnerHtml = value; },
            get_FluidRowHtml: function () { return this._FluidRowHtml; },
            set_FluidRowHtml: function (value) { this._FluidRowHtml = value; },
            get_RadioGroupHtml: function () { return this._RadioGroupHtml; },
            set_RadioGroupHtml: function (value) { this._RadioGroupHtml = value; },
            get_RadioButtonHtml: function () { return this._RadioButtonHtml; },
            set_RadioButtonHtml: function (value) { this._RadioButtonHtml = value; },
            get_SubmitButtonHtml: function () { return this._SubmitButtonHtml; },
            set_SubmitButtonHtml: function (value) { this._SubmitButtonHtml = value; },
            get_HeadLabelHtml: function () { return this._HeadLabelHtml; },
            set_HeadLabelHtml: function (value) { this._HeadLabelHtml = value; },
            get_ResultHeadLabelHtml: function () { return this._ResultHeadLabelHtml; },
            set_ResultHeadLabelHtml: function (value) { this._ResultHeadLabelHtml = value; },
            get_ResultHtml: function () { return this._ResultHtml; },
            set_ResultHtml: function (value) { this._ResultHtml = value; },
            
            _getELangCommon: function () {
                var behavior = null;

                if (Type.isClass(Sys.Extended.UI.ELangCommon)) {
                    var behaviors = Sys.UI.Behavior.getBehaviorsByType(this.get_element(), Sys.Extended.UI.ELangCommon);
                    if (0 in behaviors) {
                        behavior = behaviors[0];
                    }
                }

                return behavior;
            },
            
            _appendAsLastChild: function (node, element) {
                var parent = this.getLastChild(node);
                parent.append(element);
                return element;
            },
            
            _getLastChild: function (node) {
                var parent = node;
                var child = parent.children(":first");
                while("0" in child) {
                    child = parent.children(":first");
                    if("0" in child) {
                        parent = child;
                    }
                }
                return parent;
            },
            
            _createRadioGroup: function (node, isMethodAppend, buttonNumber, defaultButton, btnLabels, clickHandler, btnTooltips) {
                var radio = jQuery(this._RadioGroupHtml);
                var radioIn = this._getLastChild(radio);
                var eLangCommon = this._getELangCommon();
                
                for(var i = 0; i < buttonNumber; i++) {
                    var btn = jQuery(this._RadioButtonHtml);
                    btn.add(btn.find("*")).filter("span").attr("id", btnLabels[i]);
                    btn.click(clickHandler);
                    if(btnTooltips) {
                        btn.attr("title", "").attr("title-label", btnTooltips[i]);
                    }
                    radioIn.append(btn);
                }
                
                if(isMethodAppend) {
                    node.append(radio);
                } else {
                    node.before(radio);
                }
                
                eLangCommon._setLang(eLangCommon.get_SelectedLang(), radio);
                
                radio.button();
                radioIn.children(':eq(' + defaultButton + ')').click();
                
                if(btnTooltips) {
                    radioIn.children('[title-label]').tooltip({
                        placement: 'bottom',
                        delay: {
                            show: 200,
                            hide: 100
                        }
                    });
                }
            }
        };

        if (Sys.Extended.UI.BehaviorBase) {
            Sys.Extended.UI.ELangBase.registerClass('Sys.Extended.UI.ELangBase', Sys.Extended.UI.BehaviorBase);
        }
        else {
            Sys.Extended.UI.ELangBase.registerClass('Sys.Extended.UI.ELangBase', Sys.UI.Behavior);
        }
        if (Sys.registerComponent) { Sys.registerComponent(Sys.Extended.UI.ELangBase, { name: 'ELangBase' }); }


    } // execute

    if (window.Sys && Sys.loader) {
        Sys.loader.registerScript(scriptName, ["ExtendedBase", "ExtendedCommon"], execute);
    }
    else {
        execute();
    }
})();