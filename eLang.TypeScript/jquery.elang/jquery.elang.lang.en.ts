// Type definitions for eLang
// Project: https://bitbucket.org/zoli73/eLang/
// Definitions by: Zoltan Sumegi <https://bitbucket.org/zoli73/>
// Definitions: 

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="jquery.elang.d.ts" />

(function (jQuery) {
    var resource = {
        lblTitle: "eLang - Language Learning",
        lblPageHeader: "eLang - Language Learning",
        lblSearchField: "Findable expression",
        lblEditKeyField: "Expression",
        lblEditValueField: "Meaning",
        lblFindedExpressionsHead: "Finded Expressions",
        lblEditedExpressionsHead: "Expressions",
        lblFindHead: "Find",
        lblEditHead: "Edit",
        lblFind: "Find",
        lblAdd: "Add",
        lblModify: "Modify",
        lblRemove: "Remove",
        lblSearchInExpressions: "find in expressions",
        lblSearchInMeanings: "find in meanings",
        lblTesztHead: "Test",
        lblOrderedTest: "Ordered questions",
        lblRandomlyTest: "Randomly questions",
        lblTypedTest: "Typed answers",
        lblSelectedTest: "Selected answers"
    };

    jQuery.extend(true, jQuery, { elang: { resource: { lang: { en: resource } } } });
})(jQuery);