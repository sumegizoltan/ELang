// Type definitions for eLang.lang.en 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions:
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="./jquery.elang.d.ts" />
/// <reference path="./jquery.elang.common.ts"/>
var ELang;
(function (ELang) {
    var resource = new ELang.PageLabels();
    resource.lblTitle = "eLang - Language Learning";
    resource.lblPageHeader = "eLang - Language Learning";
    resource.lblSearchField = "Findable expression";
    resource.lblEditKeyField = "Expression";
    resource.lblEditValueField = "Meaning";
    resource.lblFindedExpressionsHead = "Founds";
    resource.lblEditedExpressionsHead = "Expressions";
    resource.lblFindHead = "Find";
    resource.lblEditHead = "Edit";
    resource.lblFind = "Search";
    resource.lblAdd = "Add";
    resource.lblModify = "Modify";
    resource.lblRemove = "Remove";
    resource.lblSearchInExpressions = "Expression";
    resource.lblSearchInMeanings = "Meaning";
    resource.lblTestHead = "Test";
    resource.lblOrderedTest = "Ordered";
    resource.lblRandomlyTest = "Randomly";
    resource.lblTypedTest = "Typed";
    resource.lblSelectedTest = "Selected";
    jQuery.extend(true, ELang.ELangCommon.resource.lang, {
        en: resource
    });
})(ELang || (ELang = {}));
//@ sourceMappingURL=jquery.elang.lang.en.js.map
