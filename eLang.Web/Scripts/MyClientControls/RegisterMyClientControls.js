Sys.loader.defineScripts({
},
    [
        { 	name: "ELangCommon",
        	releaseUrl: "%/../MyClientControls/elang/" + "{0}.js",
        	debugUrl: "%/../MyClientControls/elang/" + "{0}.debug.js",
	        behaviors: [{name: "ELangCommon", typeName: "Sys.Extended.UI.ELangCommon"}],
	        executionDependencies: ["ExtendedBase", "ExtendedCommon", "Bootstrap", "ELangResource.en", "ExtendedAccordion"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangCommon && Sys.Extended.UI.AccordionBehavior)
	    },
        { 	name: "ELangBase",
        	releaseUrl: "%/../MyClientControls/elang/" + "{0}.js",
        	debugUrl: "%/../MyClientControls/elang/" + "{0}.debug.js",
	        behaviors: [{name: "ELangBase", typeName: "Sys.Extended.UI.ELangBase"}],
	        executionDependencies: ["ExtendedBase", "ExtendedCommon", "Bootstrap"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangBase)
	    },
        { 	name: "ELangSearch",
        	releaseUrl: "%/../MyClientControls/elang/" + "{0}.js",
        	debugUrl: "%/../MyClientControls/elang/" + "{0}.debug.js",
	        behaviors: [{name: "ELangSearch", typeName: "Sys.Extended.UI.ELangSearch"}],
	        executionDependencies: ["ELangBase"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangSearch)
	    },
	    { 	name: "ELangResource.en",
        	releaseUrl: "%/../MyClientControls/elang/ELangResource.en.js",
        	debugUrl: "%/../MyClientControls/elang/ELangResource.en.js",
	        executionDependencies: ["ExtendedBase"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangResource && Sys.Extended.UI.ELangResource.en)
	    },
	    { 	name: "ELangResource.hu",
        	releaseUrl: "%/../MyClientControls/elang/ELangResource.hu.js",
        	debugUrl: "%/../MyClientControls/elang/ELangResource.hu.js",
	        executionDependencies: ["ExtendedBase"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangResource && Sys.Extended.UI.ELangResource.hu)
	    },
	    { 	name: "ELangResource.de",
        	releaseUrl: "%/../MyClientControls/elang/ELangResource.de.js",
        	debugUrl: "%/../MyClientControls/elang/ELangResource.de.js",
	        executionDependencies: ["ExtendedBase"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangResource && Sys.Extended.UI.ELangResource.de)
	    }
    ]
);

Sys.loader.defineScripts({
	
}, 
	[
	   { name: "jQuery",
	     releaseUrl: "%/../jQuery/jquery-1.10.0.min.js",
	     debugUrl: "%/../jQuery/jquery-1.10.0.min.js",
	     isLoaded: !!window.jQuery
	   },
	   { name: "jQueryUI",
	     releaseUrl: "%/../jQuery/jquery-ui-1.10.3.custom.min.js",
	     debugUrl: "%/../jQuery/jquery-ui-1.10.3.custom.js",
	     dependencies: ["jQuery"],
	     isLoaded: !!(window.jQuery && jQuery.ui)
	   },
	   { name: "Bootstrap",
	     releaseUrl: "%/../Bootstrap/bootstrap-2.3.2.min.js",
	     debugUrl: "%/../Bootstrap/bootstrap-2.3.2.js",
	     dependencies: ["jQuery", "jQueryUI"],
	     isLoaded: !!(window.jQuery && jQuery.ui && jQuery.fn.carousel)
	   },
	   { name: "Bootstrap3",
	     releaseUrl: "%/../Bootstrap/bootstrap-3rc1.min.js",
	     debugUrl: "%/../Bootstrap/bootstrap-3rc1.js",
	     dependencies: ["jQuery", "jQueryUI"],
	     isLoaded: !!(window.jQuery && jQuery.ui && jQuery.fn.carousel)
	   }
    ]
);

