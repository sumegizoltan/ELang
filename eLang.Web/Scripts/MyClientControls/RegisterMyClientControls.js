Sys.loader.defineScripts({
},
    [
        { 	name: "ELangCommon",
        	releaseUrl: "%/../MyClientControls/elang/" + "{0}.js",
        	debugUrl: "%/../MyClientControls/elang/" + "{0}.debug.js",
	        behaviors: [{name: "ELangCommon", typeName: "Sys.Extended.UI.ELangCommon"}],
	        executionDependencies: ["ExtendedBase", "Bootstrap", "ELangResource.en"] ,
	        isLoaded: !!(Sys && Sys.Extended && Sys.Extended.UI && Sys.Extended.UI.ELangCommon)
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
	   }
    ]
);

