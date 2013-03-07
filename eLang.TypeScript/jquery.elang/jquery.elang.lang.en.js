var ELang;
(function (ELang) {
    var resource = new ELang.PageLabels();
    resource.lblTitle = "eLang - Language Learning";
    resource.lblPageHeader = "eLang - Language Learning";
    resource.lblSearchField = "Findable expression";
    resource.lblEditKeyField = "Expression";
    resource.lblEditValueField = "Meaning";
    resource.lblFindedExpressionsHead = "Finded Expressions";
    resource.lblEditedExpressionsHead = "Expressions";
    resource.lblFindHead = "Find";
    resource.lblEditHead = "Edit";
    resource.lblFind = "Find";
    resource.lblAdd = "Add";
    resource.lblModify = "Modify";
    resource.lblRemove = "Remove";
    resource.lblSearchInExpressions = "find in expressions";
    resource.lblSearchInMeanings = "find in meanings";
    resource.lblTestHead = "Test";
    resource.lblOrderedTest = "Ordered questions";
    resource.lblRandomlyTest = "Randomly questions";
    resource.lblTypedTest = "Typed answers";
    resource.lblSelectedTest = "Selected answers";
    jQuery.extend(true, ELang.ELangCommon.resource.lang, {
        en: resource
    });
})(ELang || (ELang = {}));
