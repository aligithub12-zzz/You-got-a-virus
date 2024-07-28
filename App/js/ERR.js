// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.ERR', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label18")
                .setDock("fill")
                .setLeft("6.095238095238095em")
                .setTop("3.0476190476190474em")
                .setWidth("29.104761904761904em")
                .setHeight("27.123809523809523em")
                .setCaption("YOU DON'T CARE?!")
                .setHAlign("center")
                .setFontColor("#FF0000")
                .setFontSize("7EM")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("10.666666666666666em")
                .setTop("12.698412698412698em")
                .setWidth("21.942857142857143em")
                .setHeight("11.961904761904762em")
                .setCaption("I do care!!!")
                .setFontColor("#00FF00")
                .setFontSize("1.5em")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [ ],
                        "method" : "busy",
                        "event" : 1
                    },
                    {
                        "desc" : "Action 2",
                        "type" : "page",
                        "target" : "App.LOL",
                        "args" : [true],
                        "method" : "switch"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});