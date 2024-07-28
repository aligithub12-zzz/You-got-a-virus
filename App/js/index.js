// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
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
                .setHost(host,"xui_ui_label7")
                .setLeft("12.952380952380953em")
                .setTop("8.380952380952381em")
                .setWidth("39.00952380952381em")
                .setHeight("21.02857142857143em")
                .setCaption("YOU DOWNLOADED A VIRUS IDIOT")
                .setHAlign("center")
                .setFontColor("#FF0000")
                .setFontSize("5em")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("18.285714285714285em")
                .setTop("27.428571428571427em")
                .setWidth("23.466666666666665em")
                .setHeight("8.152380952380952em")
                .setCaption("???")
                .setFontSize("2.3em")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.ERR",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setLeft("24.38095238095238em")
                .setTop("35.04761904761905em")
                .setWidth("13.561904761904762em")
                .setHeight("5.866666666666666em")
                .setCaption("What?")
                .setFontSize("2.5em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});