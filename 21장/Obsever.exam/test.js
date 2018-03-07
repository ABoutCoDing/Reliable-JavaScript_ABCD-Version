    // https://addyosmani.com/resources/essentialjsdesignpatterns/book/
    
    function ObserverList(){
        this.observerList = [];
    }
   
    ObserverList.prototype.add = function( obj ){
        return this.observerList.push( obj );
    };

    ObserverList.prototype.count = function(){
        return this.observerList.length;
    };

    ObserverList.prototype.get = function( index ){
        if( index > -1 && index < this.observerList.length ){
            return this.observerList[ index ];
        }
    };
   
    ObserverList.prototype.indexOf = function( obj, startIndex ){
        var i = startIndex;

        while( i < this.observerList.length ){
            if( this.observerList[i] === obj ){
                return i;
            }
            i++;
        }

        return -1;
    };
   
    ObserverList.prototype.removeAt = function(index){
        this.observerList.splice(index, 1);
    };


    function Subject(){
        this.observers = new ObserverList();
    }
   
    Subject.prototype.addObserver = function(observer){
        this.observers.add(observer);
    };
   
    Subject.prototype.removeObserver = function(observer){
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    };
   
    Subject.prototype.notify = function(context){
        var observerCount = this.observers.count();
        for(var i=0; i < observerCount; i++){
            this.observers.get(i).update(context);
        }
    };


    // The Observer
    function Observer(){
        this.update = function(){
            // ...
        };
    }


    // Extend an object with an extension
    function extend(obj, extension){
        for (var key in extension){
            obj[key] = extension[key];
        }
    }
   
    // References to our DOM elements
    var controlCheckbox = document.getElementById("mainCheckbox"),
        addBtn = document.getElementById("addNewObserver"),
        container = document.getElementById("observersContainer");

   
    // Concrete Subject

    // Extend the controlling checkbox with the Subject class
    extend(controlCheckbox, new Subject());
   
    // Clicking the checkbox will trigger notifications to its observers
    controlCheckbox.onclick = function(){
        controlCheckbox.notify(controlCheckbox.checked);
    };
   
    addBtn.onclick = addNewObserver;
   
    // Concrete Observer
   
    function addNewObserver(){

        // Create a new checkbox to be added
        var check = document.createElement("input");
        check.type = "checkbox";

        // Extend the checkbox with the Observer class
        extend(check, new Observer());

        // Override with custom update behaviour
        check.update = function(value){
            this.checked = value;
        };

        // Add the new observer to our list of observers
        // for our main subject
        controlCheckbox.addObserver(check);

        // Append the item to the container
        container.appendChild(check);
    }