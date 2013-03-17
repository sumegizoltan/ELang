// Type definitions for eLang.lang.en 0.5.1
// Project: https://github.com/sumegizoltan/ELang/
// Definitions by: Zoltan Sumegi <https://github.com/sumegizoltan/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="./jquery.elang.d.ts" />
/// <reference path="./jquery.elang.common.ts"/>

module ELang {
    var resource = new PageLabels();
    resource.lblTitle= "eLang - Language Learning";
    resource.lblPageHeader= "eLang - Language Learning";
    resource.lblSearchField= "Findable expression";
    resource.lblEditKeyField= "Expression";
    resource.lblEditValueField= "Meaning";
    resource.lblFindedExpressionsHead= "Founds";
    resource.lblEditedExpressionsHead= "Expressions";
    resource.lblFindHead= "Find";
    resource.lblEditHead= "Edit";
    resource.lblFind= "Search";
    resource.lblAdd= "Add";
    resource.lblModify= "Modify";
    resource.lblRemove= "Remove";
    resource.lblSearchInExpressions= "Expression";
    resource.lblSearchInMeanings = "Meaning";
    resource.lblSearchInExpressionsHlp = "Search in expressions";
    resource.lblSearchInMeaningsHlp = "Search in meanings";
    resource.lblTestHead= "Test";
    resource.lblOrderedTest= "Ordered";
    resource.lblRandomlyTest= "Randomly";
    resource.lblTypedTest= "Typed";
    resource.lblSelectedTest = "Selected";
    resource.lblWrittedTest = "Writted";
    resource.lblVoicedTest = "Voiced";
    resource.lblStartTest = "Start";
    resource.lblStopTest = "Stop";
    resource.lblTypedTestHlp = "Typed answers";
    resource.lblSelectedTestHlp = "Answers from list";
    resource.lblOrderedTestHlp = "Ordered questions";
    resource.lblRandomlyTestHlp = "Randomly questions";
    resource.lblWrittedTestHlp = "Writted questions in screen";
    resource.lblVoicedTestHlp = "Voiced questions";
    
    jQuery.extend(true, ELangCommon.resource.lang, { en: resource });
}