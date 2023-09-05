({
    doInit: function(component, event, helper) {
        
        var myPageRef = component.get("v.pageReference.attributes.objectApiName");
              
        component.set("v.objectApiName", myPageRef);
    },
    
    handlePageReferenceChange : function(component, event, helper) {
        // Trigger a page refresh
        $A.get('e.force:refreshView').fire();
    }
})