describe("Conference.WidgetSandbox", function(){
    describe("Constructor function", function(){
    var widgetFcnSpy;
    beforeEach(function(){
        // Add test tools so the tests aren't dependent upon
        // the existence of actual tools
        Conference.WidgetTools.tool1 = function(sandbox){
            return {};
        };
        Conference.WidgetTools.tool2 = function(sandbox){
            return {};
        };
        // create a spy that may be used as the widget function
        widgetFcnSpy = jasmine.createSpy();
    });
    afterEach(function(){
        // remove the test tools
        delete Conference.WidgetTools.tool1;
        delete Conference.WidgetTools.tool2;
    });
    // *** Code omitted for brevity ***
    });
});